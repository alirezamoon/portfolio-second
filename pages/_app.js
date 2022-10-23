import BlankLayout from "components/hoc/layout/blankLayout"
import MainLayout from "components/hoc/layout/mainLayout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const layouts = {
    main: MainLayout,
  }
  const Layout = Component?.layout ? layouts[Component.layout] : BlankLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
