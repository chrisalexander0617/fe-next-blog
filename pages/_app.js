
import Layout from '../src/components/layout';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/molecules/header.css';
import '../styles/organisms/service-card-grid.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}