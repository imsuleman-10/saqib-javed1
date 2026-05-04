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
      'https://saqib-javed.vercel.app/sitemap.xml',
      'https://saqib-javed.vercel.app/sitemap-index.xml',
    ],
    host: 'https://saqib-javed.vercel.app',
  }
}
