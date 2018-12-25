export default async function (options = {}) {
  const {
    path, method, headers, payload,
  } = options
  try {
    const response = await fetch(
      path,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(payload),
      },
    )
    return { status: response.status, payload: await response.json() }
  } catch (e) {
    return { error: e }
  }
}
