import { type FontFaceData, type RemoteFontSource, createUnifont, providers } from 'unifont'
import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs-lite'

/**
 * Formats font weight value for CSS
 * @param weight number | number[] - Can be single weight (400) or weight range [100, 900]
 */
const formatFontWeight = (weight: any): string => {
  return Array.isArray(weight) ? weight.join(' ') : weight.toString()
}

/**
 * Generates CSS @font-face string from font family data
 * @param fontData Font family data object
 * @returns Formatted CSS @font-face string
 */
const generateFontFaceCSS = (fontFamily: string, fontData: FontFaceData) => {
  // console.debug('DEBUG:fontData', fontData)
  const fontStyle = fontData.style || 'normal'
  const fontDisplay = fontData.display || 'swap'
  const fontWeight = formatFontWeight(fontData.weight)
  const unicodeRange = fontData.unicodeRange.join(',')

  const fontSrc = fontData.src.map((src: RemoteFontSource) => {
    return `url(${src.url}) format('${src.format}')`
  })

  return `@font-face {
    font-family: '${fontFamily}';
    font-style: ${fontStyle};
    font-display: ${fontDisplay};
    font-weight: ${fontWeight};
    src: ${fontSrc};
    unicode-range: ${unicodeRange};
  }`
}

// export default defineCachedEventHandler(
//   async (event) => {
//     return generateFontCSS()
//   },
//   {
//     shouldBypassCache: (e) => handleBypassCache(e),
//     maxAge: 60 * 60 * 12 * 30 /* 1 month */,
//   }
// )

// TODO: add cache and filter the fonts
export default eventHandler(async (event) => {
  setResponseHeader(event, 'Content-Type', 'text/css')

  const storage = createStorage({
    driver: fsDriver({ base: 'node_modules/.cache/unifont' }),
  })

  const cachedUnifont = await createUnifont([providers.fontsource()], { storage })
  const { fonts } = await cachedUnifont.resolveFont('Inter')
  // const cssStr = fonts.map((font) => generateFontFaceCSS('Inter', font))
  const cssStr = generateFontFaceCSS('Inter', fonts[0])

  return send(event, cssStr)
})
