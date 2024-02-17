export const emailConfig = {
  from: 'm@mars.nu',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://mars.nu`
      : 'http://localhost:3000',
}
