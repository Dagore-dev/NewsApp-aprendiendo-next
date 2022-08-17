/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // En este array debería registrar todos los dominios de los que pueden venir de forma segura imágenes a cargar con el componente Image
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig
