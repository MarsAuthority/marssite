export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://mars.nu'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
