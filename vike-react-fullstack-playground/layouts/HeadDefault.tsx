import logoUrl from '../assets/images/logo.svg'

// Default <head> (can be overridden by pages)

export default function HeadDefault() {
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Demo showcasing Vike with React' />
      <link rel='icon' href={logoUrl} />
      {/* <script defer src='https://stats.web.id/script.js' /> */}
    </>
  )
}
