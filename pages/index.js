import GeneralHeader from '../src/components/organisms/headers/GeneralHeader'
import MainNav from '../src/components/organisms/MainNav';

import Head from 'next/head';

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Digyt | Detroit Software Company</title>
      </Head>

      <MainNav 
        bg="bg-gray-900" 
        textColor="text-white"
      />

      <GeneralHeader 
        title="Future-Proofing Businesses with AI and Headless Technologies " 
      />

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