import MainNav from '../src/components/templates/MainNav';
import GeneralHeader from '../src/components/templates/headers/GeneralHeader'
import Head from 'next/head';
import ServiceCardsGrid from '../src/components/templates/ServiceCardGrid';
import SmallSpaceSection from '../src/components/molecules/sections/SmallSpaceSection';
import Logos from '../src/components/templates/Logos';
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
        title="Future-Proofing Businesses with AI and Headless Technologies " 
      />
      <SmallSpaceSection bg="bg-gray-900">
        <ServiceCardsGrid  bg="bg-gray-900"  />
      </SmallSpaceSection>
      <SmallSpaceSection bg="bg-gray-900">
        <Logos />
      </SmallSpaceSection>
    </>
  )
};