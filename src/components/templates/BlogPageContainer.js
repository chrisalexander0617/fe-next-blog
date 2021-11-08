import React, { useEffect, useState } from 'react';
import Grid from '../molecules/Grid';
import TextInput from '../atoms/inputs/TextInput';
import BlogPostCard from '../molecules/cards/BlogPostCard';

export default function BlogPageContainer(){
    const [query, updateQuery] = useState()

    useEffect(() =>{ 
        console.log(query)
    },[query]);

    return (
        <>
            <Grid grid_options="grid-cols-1">
                <div className="content-pane">
                    <div>
                        <h1 className="font-bold text-4xl text-white mb-5">BLog</h1>
                         <TextInput handleChange={ (e) => updateQuery(e.target.value) } label_title="Search" placeholder="AI for ecommer..." />
                    </div>
                </div>
                <Grid grid_options="grid-cols-1 px-10">
                    <BlogPostCard />
                    <BlogPostCard />
                </Grid>
            </Grid>
        </>
    )
};