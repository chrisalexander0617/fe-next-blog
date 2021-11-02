import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Post({post}){
    return (
        <>
            <Head>
                <title>{post.Title}</title>
            </Head>
            <h1>{post.Title}</h1>
            <ReactMarkdown children={post.Content} />
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/posts')
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: {slug: post.Slug}
    }))

    return {
       paths, 
       fallback: false
    }
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