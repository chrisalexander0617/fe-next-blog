import GeneralHeader from '../src/components/elements/headers/GeneralHeader'
import MainNav from '../src/components/MainNav';
import Work from '../src/components/elements/Work';

import CardsGrid from '../src/components/elements/CardsGrid';
import ServiceCard from '../src/components/elements/cards/ServiceCard';

import Head from 'next/head';

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Home</title>
      </Head>

      <MainNav 
        bg="bg-gray-900" 
        textColor="text-white"
      />

      <GeneralHeader 
        title="We engineer desirable digital 
        products that connect brands with the people they serve." 
      />

      <CardsGrid gridSizes="sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
        <ServiceCard 
          cardTitleColor="text-gray-900" 
          cardTitle="API Design" 
          cardText="Build a scalable BaaS that will allow customized endpoints that corresponds to your products and services" 
        />
         <ServiceCard 
          cardTitleColor="text-gray-900" 
          cardTitle="Full Stack Development" 
          cardText="MVP with complete front and backend technologies that will allow low cost and predictable scaling" 
        />
         <ServiceCard 
          cardTitleColor="text-gray-900" 
          cardTitle="Authentication" 
          cardText="Secure web applications with the lastest security standards to allow piece of mind while conducting online business" 
        />
         <ServiceCard 
          cardTitleColor="text-gray-900" 
          cardTitle="Integration" 
          cardText="We integrate popular business tools for unique digital infrastructures" 
        />
      </CardsGrid>
      
      <Work />
    </>
  )
}

export async function getStaticProps(){

  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
    props:{
      posts
    }
  }

}