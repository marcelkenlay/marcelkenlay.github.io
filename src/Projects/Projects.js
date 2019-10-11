import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Paper from '@material-ui/core/Paper/index';
import ProjectCard from './ProjectCard'
import ProjectCardWithoutImage from './ProjectCardWithoutImage'
import ProjectsFile from './Resources/Projects.json';
import Grid from '@material-ui/core/Grid/index';
import Fade from '@material-ui/core/Fade/index';
import './Projects.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div id="projects-container" className={classes.root}>
    <Fade in={true}
      {...{timeout: 1000 }}>
      <Paper elevation={8}>
      <Grid justify="center" alignItems="center" container spacing={24}>
        {ProjectsFile.projects.map(
          projectInfo =>
            <Grid elevation={11} item>
              {projectInfo.image ? <ProjectCard projectInfo={projectInfo}/>
                                 : <ProjectCardWithoutImage projectInfo={projectInfo}/>}
            </Grid>
        )}
      </Grid>
      </Paper>
    </Fade>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
