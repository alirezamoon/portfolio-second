import BlankLayout from "components/hoc/layout/blankLayout"
import MainLayout from "components/hoc/layout/mainLayout"
import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const layouts = {
    main: MainLayout,
  }
  const Layout = Component?.layout ? layouts[Component.layout] : BlankLayout
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" type="image/png" href="./a.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Alireza Khanamani</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
