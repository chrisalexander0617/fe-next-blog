import Head from 'next/head';
import BlogPageContainer from '../../src/components/organisms/BlogPageContainer';
import SmallSpaceSection from  '../../src/components/molecules/sections/SmallSpaceSection';

export default function Blog({posts}) {
    return ( 
      <>
        <Head>
          <title>Blog</title>
        </Head>
        <SmallSpaceSection bg="bg-gray-900">
           <BlogPageContainer blog_posts={posts} />
        </SmallSpaceSection>
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
 