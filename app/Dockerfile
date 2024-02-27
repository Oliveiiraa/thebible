FROM node:iron-alpine as builder

WORKDIR /app

ARG SENTRY_DSN=${SENTRY_DSN}
ENV SENTRY_DSN=${SENTRY_DSN}
ARG SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}
ENV SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}

COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN SENTRY_DSN=${SENTRY_DSN} SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN} yarn build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]