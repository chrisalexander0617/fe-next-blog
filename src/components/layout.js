import Footer from './templates/Footer';

export default function Layout({ children }) {
  return (
    <>
        <main>{children}</main>
        <Footer bg="bg-gray-800" />
    </>
  )
}