import React from 'react'
import Head from 'next/head';

export const HTMLHead = props => {
    return (
        <>
        <Head>
            <title>{props.pageTitle}</title>
            <meta 
            name={props.metaName} 
            content={props.metaContent}
            />
         </Head>
        </>
    )
}