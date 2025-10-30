import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Diagnóstico gratuito de IA para empresas - BIMachine" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}