<<<<<<< HEAD
import MainNav from '../src/components/organisms/MainNav';
import GeneralHeader from '../src/components/organisms/headers/GeneralHeader';
import ServiceCardsGrid from '../src/components/organisms/ServiceCardGrid';
import Head from 'next/head';

export default function Home() {
=======
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
>>>>>>> b9be6970e8757da9f843e3cf9a45d2db9d656113
  return ( 
    <>
      <Head>
        <title>Digyt | Detroit Software Company</title>
        <meta name="description" content="Digyt is changing the world with AI!" />
      </Head>
<<<<<<< HEAD
      <MainNav 
        bg="bg-gray-900" 
        textColor="text-white"
      /> 
=======

>>>>>>> b9be6970e8757da9f843e3cf9a45d2db9d656113
      <GeneralHeader 
        title="We engineer desirable digital products that connect brands with the people they serve."
      />
<<<<<<< HEAD
      <ServiceCardsGrid />
    </>
  )
}
=======

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
>>>>>>> b9be6970e8757da9f843e3cf9a45d2db9d656113
