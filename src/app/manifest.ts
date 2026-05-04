import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammad Saqib Javed — Laravel Developer',
    short_name: 'Saqib Javed',
    description: 'Portfolio of Muhammad Saqib Javed, Expert Laravel Developer & Full-Stack Engineer based in Lahore, Pakistan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/Gemini_Generated_Image_oq7blxoq7blxoq7b.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}