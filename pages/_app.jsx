import BlankLayout from "components/hoc/layout/blankLayout"
import MainLayout from "components/hoc/layout/mainLayout"
import Head from "next/head"
import { Toaster } from "react-hot-toast"
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
          <link rel="icon" type="image/png" href="/assets/images/a.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Alireza Khanamani</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
      <Toaster
        toastOptions={{
          style: { background: "#2b2b2b" },
          success: {
            iconTheme: { primary: "#08fdd8", secondary: "#2b2b2b" },
            style: { color: "#08fdd8" },
          },
          error: {
            iconTheme: { primary: "#fc0853", secondary: "#2b2b2b" },
            style: { color: "#fc0853" },
          },
          position: "bottom-right",
          duration: 4000,
        }}
      />
    </>
  )
}

export default MyApp
