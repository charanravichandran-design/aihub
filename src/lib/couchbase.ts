import type { Agent } from '@/data/agents'

// Skip TLS cert verification for Capella dev clusters
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

function buildQueryUrl(connectionString: string): string {
  // couchbases://host → https://host:18093  (Capella / TLS)
  // couchbase://host  → http://host:8093    (on-prem / no TLS)
  const isTls = connectionString.startsWith('couchbases://')
  const host = connectionString.replace(/^couchbases?:\/\//, '')
  const scheme = isTls ? 'https' : 'http'
  const port = isTls ? 18093 : 8093
  return `${scheme}://${host}:${port}/query/service`
}

export async function fetchAgents(): Promise<Agent[]> {
  const connString = process.env.COUCHBASE_CONNECTION_STRING
  const bucket = process.env.COUCHBASE_BUCKET
  const scope = process.env.COUCHBASE_SCOPE
  const collection = process.env.COUCHBASE_COLLECTION
  const username = process.env.COUCHBASE_USERNAME
  const password = process.env.COUCHBASE_PASSWORD

  if (!connString || !bucket || !scope || !collection || !username || !password) {
    console.error('[Couchbase] Missing environment variables')
    return []
  }

  const queryUrl = buildQueryUrl(connString)
  const statement = `SELECT META().id AS id, a.* FROM \`${bucket}\`.\`${scope}\`.\`${collection}\` a`

  try {
    const res = await fetch(queryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
      body: JSON.stringify({ statement }),
      cache: 'no-store',
    })

    if (!res.ok) {
      const text = await res.text()
      console.error(`[Couchbase] Query failed (${res.status}):`, text)
      return []
    }

    const data = await res.json()
    return (data.results ?? []) as Agent[]
  } catch (err) {
    console.error('[Couchbase] Connection error:', err)
    return []
  }
}
