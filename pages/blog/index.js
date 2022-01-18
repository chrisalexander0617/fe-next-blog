import Head from 'next/head';
import BlogPageContainer from '../../src/components/organisms/BlogPageContainer';

export default function Blog({posts}) {
    return ( 
      <>
        <Head>
          <title>Blog</title>
        </Head>
        <BlogPageContainer blog_posts={posts} />
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
 