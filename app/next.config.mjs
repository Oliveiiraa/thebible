import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "softnation-i7",
  project: "the-bible",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  ignore: ["node_modules", "webpack.config.js"],
}, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});