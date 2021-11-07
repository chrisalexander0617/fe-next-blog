import Head from 'next/head';
import BlogPageContainer from '../../src/components/templates/BlogPageContainer';
import SmallSpaceSection from  '../../src/components/molecules/sections/SmallSpaceSection';

export default function Home({posts}) {
    return ( 
      <>
        <Head>
          <title>Blog PAge</title>
        </Head>
        <SmallSpaceSection bg="bg-gray-900">
           <BlogPageContainer />
        </SmallSpaceSection>
        {posts && posts.map((post, i) => (
            /* Replace localhost with environemtal variables or domain */
            <a href={`http://localhost:3000/blog/${post.Slug}`} >
              <div key={post.i}>
                  <h1>{post.Title}</h1>
                  <p>{post.Content} </p>
              </div>
            </a>
            )
          )}
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
 