import React, { 
    useEffect, 
    useState
} from 'react';
import Grid from '../molecules/Grid';
import BlogPostCard from '../molecules/cards/BlogPostCard';

export default function BlogPageContainer(props){
    return (
        <>
            <div className="content-panel mb-10">
                <Grid grid_options="grid-cols-1 gap-10 px-0">
                    <div>
                        <h1 className="font-bold text-4xl text-blue-100 mb-5">Blog</h1>
              
                    </div>
                </Grid>
            </div>
            <Grid grid_options="grid-cols-2 gap-10 px-0">
                {props.blog_posts && props.blog_posts.map((post, index) => (
                        <a href={`/blog/${post.Slug}`} >
                            <BlogPostCard 
                                img={post.Img.url}
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

