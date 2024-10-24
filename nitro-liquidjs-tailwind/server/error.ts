export default defineNitroErrorHandler((error, event) => {
  const appConfig = useAppConfig(event) as { baseURL: string; title: string }

  const htmlBody = /* html */ `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${error.statusCode} - ${appConfig.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gradient-to-br from-white to-gray-100 min-h-screen flex items-center justify-center p-4">
    <main class="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <div class="space-y-6">
        <div class="text-center space-y-4">
          <h1 class="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700">
            ${error.statusCode}
          </h1>
          <h2 class="text-3xl font-bold text-gray-900">Something went wrong!</h2>
          <p class="text-gray-600 text-lg max-w-xl mx-auto">
            ${error.message || 'The page you are looking for might have been removed or is temporarily unavailable.'}
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-red-100 rounded-lg p-4 overflow-auto max-h-[320px] text-left border border-red-200">
            <pre class="text-sm text-red-700"><code class="whitespace-pre-wrap break-words">${error.stack}${error.stack}</code></pre>
          </div>

          <div class="text-center">
            <a href="${appConfig.baseURL}" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200 shadow hover:shadow-md">
              Return Home
            </a>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>`

  setResponseHeader(event, 'Content-Type', 'text/html')

  return send(event, htmlBody)
})
