/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const webpack = require("webpack");

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  images: {
    domains: [
      "openweathermap.org",
      "images.unsplash.com",
      "raw.githubusercontent.com",
    ],
  },
};
