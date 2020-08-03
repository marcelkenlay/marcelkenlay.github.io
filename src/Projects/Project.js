import React from 'react';
import { DetailedProjectCard } from './DetailedProjectCard';
import ProjectsFile from './Resources/Projects.json';
import Fade from '@material-ui/core/Fade/index';
import {Typography} from "antd/lib/index";
import {NavLink} from "react-router-dom";

export class Project extends React.Component {
    render() {
        const { projectId } = this.props.match.params;
        const matchingProjects = ProjectsFile.projects.filter(
            projectInfo => projectInfo.id === projectId
        );
        return (
            <Fade in={true}
                  {...{timeout: 1000 }}>
                <div style={{
                    padding: '2vh 3vw',
                    width: '1200px',
                    maxWidth: '100%',
                    margin: 'auto',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.8)'}}>
                    {matchingProjects.length === 1 ?
                        <DetailedProjectCard projectInfo={matchingProjects[0]}/> :
                        <Typography>
                            Project with ID "{projectId}" could not be found.
                        </Typography>
                    }
                    <NavLink to="/projects" className='projectLink'>
                        Return to all Projects
                    </NavLink>
                </div>
            </Fade>
        );
    }
}
