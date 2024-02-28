import * as Sentry from "@sentry/nextjs"

const SENTRY_DSN = process.env.SENTRY_DSN
const IS_PRODUCTION = process.env.NODE_ENV === "production"

if (IS_PRODUCTION) {
  Sentry.init({
    dsn: SENTRY_DSN || "https://8454a6f540dc16660b90a74e4a3adc68@us.sentry.io/4506814822547456",
    tracesSampleRate: 1,
    debug: false,
  })
}
