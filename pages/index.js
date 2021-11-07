import MainNav from '../src/components/organisms/MainNav';
import GeneralHeader from '../src/components/organisms/headers/GeneralHeader'
import Head from 'next/head';
import ServiceCardsGrid from '../src/components/organisms/ServiceCardGrid';

import SmallSpaceSection from '../src/components/molecules/sections/SmallSpaceSection';

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
    </>
  )
}

/*
export async function getStaticProps(){

  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
    props:{
      posts
    }
  }

}
*/