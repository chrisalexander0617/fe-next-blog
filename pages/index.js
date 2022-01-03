import MainNav from '../src/components/templates/MainNav';
import GeneralHeader from '../src/components/templates/headers/GeneralHeader'
import Head from 'next/head';
import ServiceCardsGrid from '../src/components/templates/ServiceCardGrid';
import SmallSpaceSection from '../src/components/molecules/sections/SmallSpaceSection';
import Logos from '../src/components/templates/Logos';
import Projects from '../src/components/templates/Projects';
import FAQ from '../src/components/templates/FAQ';
import BlogPageContainer from '../src/components/templates/BlogPageContainer';

export default function Home({posts}) {
  return ( 
    <>
      <Head>
        <title>Digyt | Detroit Software Company</title>
        <meta name="description" content="Digyt is changing the world with AI!" />
      </Head>

      <GeneralHeader 
        title="Future-Proofing Businesses with AI and Headless Technologies " 
      />

      <SmallSpaceSection bg="bg-gray-900">
        <ServiceCardsGrid  bg="bg-gray-900"  />
      </SmallSpaceSection>

      <SmallSpaceSection bg="bg-gray-900">
        <Logos />
      </SmallSpaceSection>
    
      <SmallSpaceSection bg="bg-gray-900">
        <FAQ />
     </SmallSpaceSection>
    </>
  )
};

export async function getStaticProps(){
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
    props:{
      posts
    }
  }
}
