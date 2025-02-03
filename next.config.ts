// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig