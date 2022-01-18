import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Grid } from '../../src/components/molecules/Grid';

export default function Post({post}){
    return (
        <>
            <Head>
                <title>{post.Title}</title>
            </Head>
                <div className="content">
                    <Grid grid_options="grid-cols-1 mx-auto">
                        <div>
                            <h1 className="text-4xl text-blue-100 text-center mb-10">{post.Title}</h1>
                            <img className="blog-post-image" src={`http://localhost:1337${post.Img.url}`} />
                        </div>
                    </Grid>
                    <div className="markdown-content">
                        <ReactMarkdown  children={post.Content} />
                    </div>
                </div>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/posts')
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: {slug: post.Slug}
    }));

    return {
       paths, 
       fallback: false
    };
}

export async function getStaticProps({ params }) {
    const {slug} = params;
    const URL = `http://localhost:1337/posts?Slug=${slug}`;
    const res = await fetch(URL);
    const data= await res.json();

    const post = data[0];

    return {
        props:{
            post
        }
    }
}