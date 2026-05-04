import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: [
      'https://saqibjaved.dev/sitemap.xml',
      'https://saqibjaved.dev/sitemap-index.xml',
    ],
    host: 'https://saqibjaved.dev',
  }
}
