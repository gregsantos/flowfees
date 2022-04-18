import "@picocss/pico"
import Layout from "../components/Layout"
import "../styles/globals.css"
import "../flow/config"

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
