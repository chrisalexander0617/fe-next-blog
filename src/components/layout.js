import { MainNav } from './organisms/MainNav'
import { Footer } from './organisms/Footer'

export default function Layout({ children }) {
  return (
    <>
      <MainNav 
        bg="bg-gray-900"  
        textColor="text-white" 
      />
      <main className="bg-gray-900">
        {children}
      </main>
      <Footer 
        bg="bg-gray-900" 
      />
    </>
  )
}