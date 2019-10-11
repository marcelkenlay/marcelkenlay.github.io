import React from 'react';
import ProjectCard from './ProjectCard'
import ProjectCardWithoutImage from './ProjectCardWithoutImage'
import ProjectsFile from './Resources/Projects.json';
import Grid from '@material-ui/core/Grid/index';
import Fade from '@material-ui/core/Fade/index';
import './Projects.css';


export function Projects() {
  return (
    <Fade in={true}
      {...{timeout: 1000 }}>
      <Grid justify="center" alignItems="center" container spacing={24}>
        {ProjectsFile.projects.map(
          projectInfo =>
            <Grid elevation={8} item>
              {projectInfo.image ? <ProjectCard projectInfo={projectInfo}/>
                                 : <ProjectCardWithoutImage projectInfo={projectInfo}/>}
            </Grid>
        )}
      </Grid>
    </Fade>
  );
};
