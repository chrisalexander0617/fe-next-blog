import MainNav from './templates/MainNav'
import Footer from './templates/Footer'

export default function Layout({ children }) {
  return (
    <>
      <MainNav bg="bg-gray-900"  textColor="text-white" />
      <main>{children}</main>
      <Footer bg="bg-gray-800" />
    </>
  )
}