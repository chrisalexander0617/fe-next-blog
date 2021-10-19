import Head from 'next/head';

export default function Home({posts}) {
    return ( 
      <>
      <Head>
        <title>Blog PAge</title>
      </Head>
        {
          posts && posts.map((post) => (
            /* Replace localhost with environemtal variables or domain */
            <a href={`http://localhost:3000/blog/${post.Slug}`} >
              <div key={post.id}>
                  <h1>{post.Title}</h1>
                  <p>{post.Content} </p>
              </div>
            </a>
            )
          )
        }
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