import MainNav from '../src/components/organisms/MainNav';
import GeneralHeader from '../src/components/organisms/headers/GeneralHeader'
import Head from 'next/head';
import { Section } from '../src/components/molecules/sections/Section'
import { Services } from '../src/components/organisms/Services'
import { HTMLHead } from '../src/components/dom-fragments/HTMLHead'
import { Projects } from '../src/components/organisms/Projects'

export default function Home({posts}) {
  return ( 
    <>
      <HTMLHead 
        pageTitle="Digyt | Detroit Software Company"
        metaName="description"
        metaContent="Digyt is changing the world with AI!" 
      />
      <GeneralHeader 
        title="Digyt is a Botique 
        Software Development Firm 
        Located in the Motor City"
      />
      <Section bg="bg-gray-900">
        <Services />
      </Section>
        <Projects bg="bg-yellow-300"  />
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
