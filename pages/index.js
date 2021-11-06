import MainNav from '../src/components/organisms/MainNav';
import GeneralHeader from '../src/components/organisms/headers/GeneralHeader'
import Head from 'next/head';
import CardsGrid from '../src/components/organisms/CardsGrid';
import ServiceCard from '../src/components/molecules/cards/ServiceCard';

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

      <CardsGrid bg="bg-gray-900" gridSizes="grid-cols-1 gap-10 md:grid-cols-3">
        <ServiceCard 
          bg_color="bg-gray-800"
          card_title_text_color="text-green-400"
          card_title="AI"
          card_text_color="text-gray-200"
          card_text="We build smart software that solves problems in multiple sectors" 
        />
        <ServiceCard 
          bg_color="bg-gray-800"
          card_title_text_color="text-blue-400"
          card_title="Headless Technology"
          card_text_color="text-gray-200"
          card_text="We build scalable software infrastructures that allows growth and flexibility at a low cost" 
        />
        <ServiceCard 
          bg_color="bg-gray-800"
          card_title_text_color="text-white"
          card_title="Consulting"
          card_text_color="text-gray-200"
          card_text="We build scalable software infrastructures that allows growth and flexibility at a low cost" 
        />
      </CardsGrid>
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