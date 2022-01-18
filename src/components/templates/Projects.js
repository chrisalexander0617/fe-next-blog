import React from 'react';
import Grid from '../molecules/Grid';
import WorkCard from '../molecules/cards/WorkCard';
import { agencyProjects } from '../../../pages/api/data/projects';
const projects = agencyProjects;

export default function Projects(){
    return (
        <>
            <div className="text-center">
                <h2 className="text-gray-300  text-2xl mb-10">Projects</h2>
            </div>
            <Grid grid_options="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {projects.map((project, i) => (
                        <WorkCard 
                            key={i} 
                            src={project.img} 
                            title_text_color="text-gray-200"
                            title={project.title}
                        />
                    ) 
                )}
            </Grid>
        </>
    )
};