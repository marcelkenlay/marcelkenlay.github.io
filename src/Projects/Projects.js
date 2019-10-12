import React from 'react';
import { ProjectCard } from './ProjectCard'
import ProjectsFile from './Resources/Projects.json';
import Fade from '@material-ui/core/Fade/index';
import './Projects.css';
import {Typography} from "antd";


export function Projects() {
  return (
    <Fade in={true}
      {...{timeout: 1000 }}>
        <div style={{
            padding: '2vh 3vw',
            width: '800px',
            maxWidth: '100%',
            margin: 'auto',
            alignItems: 'center',
            background: 'rgba(220, 220, 220, 0.7)'}}>
              <Typography.Title level={2} underline={true}>
                  University & Individual Projects
              </Typography.Title>
            {ProjectsFile.projects.map(
                projectInfo => <ProjectCard projectInfo={projectInfo}/>
            )}
        </div>
    </Fade>
  );
};
