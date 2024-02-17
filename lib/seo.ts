export const seo = {
  title: 'Mars| 开发者、学习者',
  description:
    '我是 Mars，目前在探索程序员副业之路。热爱开发，科技，享受生活。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://mars.nu'
      : 'http://localhost:3000'
  ),
} as const
