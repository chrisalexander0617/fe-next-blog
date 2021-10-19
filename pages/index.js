import styles from '../styles/Global.module.css';
import GeneralHeader from '../src/components/elements/headers/GeneralHeader'
import MainNav from '../src/components/MainNav';
import CardsGrid from '../src/components/elements/CardsGrid';
import Work from '../src/components/elements/Work';

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
        title="We engineer desirable digital products that connect brands with the people they serve." 
      />
      <CardsGrid 
        sectionTitle="Services" 
      />
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