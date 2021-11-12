import React, { useEffect, useState } from 'react';
import Grid from '../molecules/Grid';
import TextInput from '../atoms/inputs/TextInput';
import BlogPostCard from '../molecules/cards/BlogPostCard';
import SmallButton from '../atoms/buttons/SmallButton'

export default function BlogPageContainer(props){
    const [query, updateQuery] = useState("")

    useEffect(() =>{ 
        console.log(query)
    },[query]);

    return (
        <>
            <div className="content-panel mb-10">
                <Grid grid_options="grid-cols-1 gap-10 px-0">
                    <div>
                        <h1 className="font-bold text-4xl text-blue-100 mb-5">Blog</h1>
                        {/*
                        <TextInput handleChange={ (e) => updateQuery(e.target.value) } label_title="Search" placeholder="AI for ecommer..." />
                        <Grid grid_options="grid-cols-4 gap-10 px-0 my-5">
                            <SmallButton button_text="Javascript" bg_color="bg-red-400" text_color="text-white" />
                            <SmallButton button_text="Javascript" bg_color="bg-blue-400" text_color="text-white" />
                            <SmallButton button_text="Javascript" bg_color="bg-yellow-400" text_color="text-white" />
                            <SmallButton button_text="Javascript" bg_color="bg-green-400" text_color="text-white" />
                        </Grid>
                        */}
                    </div>
                </Grid>
            </div>
            <Grid grid_options="grid-cols-2 gap-10 px-0">
                {props.blog_posts && props.blog_posts.map((post, index) => (
                        <a href={`/blog/${post.Slug}`} >
                            <BlogPostCard 
                                img={post.Img.name}
                                key={index} 
                                title_text_color="text-blue-100"
                                title={post.Title}  
                            /> 
                        </a>
                    ))
                }
            </Grid>
        </>
    )
};

