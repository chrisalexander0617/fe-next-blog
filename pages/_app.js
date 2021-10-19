
import Layout from '../src/components/layout';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}