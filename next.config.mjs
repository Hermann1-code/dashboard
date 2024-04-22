// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
    loader: "default",
    path: "http://localhost:3001", // Définir l'URL de base pour les images
  },
};

export default nextConfig;
