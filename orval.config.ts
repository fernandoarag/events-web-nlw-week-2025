import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:8080/api/v1/v3/api-docs',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'http://localhost:8080/api/v1/',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
