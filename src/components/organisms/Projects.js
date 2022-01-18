import React from 'react';
import { Grid } from '../molecules/Grid';
import { WorkCard } from '../molecules/cards/WorkCard';
import { agencyProjects } from '../../../pages/api/data/projects';

const projects = agencyProjects;

export const Projects = props => {
    return (
        <>
            <div className={props.bg}>
                <div className="text-center pt-12">
                    <h2 className="
                        text-gray-800  
                        text-3xl 
                        font-bold 
                        mb-10"
                    >
                    Projects
                    </h2>
                </div>
                <Grid grid_options="
                    grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    gap-10 
                    text-center"
                >
                {projects.map((project, i) => (
                        <WorkCard 
                            key={i} 
                            src={project.img} 
                            title_text_color="text-gray-900"
                            title={project.title}
                        />
                    ) 
                )}
                </Grid>
            </div>
        </>
    )
};