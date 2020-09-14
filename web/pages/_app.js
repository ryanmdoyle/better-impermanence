import '../styles/globals.css'
import client from '../lib/sanity';

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout categories={pageProps.categories}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp