FROM denoland/deno:latest as base

ENV ENVIRONMENT "production"

WORKDIR /app

COPY . ./

RUN deno cache main.ts

CMD ["run", "--allow-net", "--allow-env", "main.ts"]
