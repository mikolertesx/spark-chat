/** @type {import('next').NextConfig} */

// Allows us to use sockets
const nextConfig = {
  transpilePackages: ["bufferutil", "utf-8-validate"],
};

module.exports = nextConfig;
