import MainNav from './organisms/MainNav'
import Footer from './organisms/Footer'

export default function Layout({ children }) {
  return (
    <>
      <MainNav 
        bg="bg-gray-900"  
        textColor="text-white" 
      />
      <main>
        {children}
      </main>
      <Footer 
        bg="bg-gray-800" 
      />
    </>
  )
}