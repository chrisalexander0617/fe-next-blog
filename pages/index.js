import MainNav from '../src/components/organisms/MainNav';
import GeneralHeader from '../src/components/organisms/headers/GeneralHeader';
import ServiceCardsGrid from '../src/components/organisms/ServiceCardGrid';
import Head from 'next/head';

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Digyt | Detroit Software Company</title>
        <meta name="description" content="Digyt is changing the world with AI!" />
      </Head>

      <MainNav 
        bg="bg-gray-900" 
        textColor="text-white"
      /> 

      <GeneralHeader 
        title="Future-Proofing Businesses with AI and Headless Technologies" 
      />

      <ServiceCardsGrid />

    </>
  )
}