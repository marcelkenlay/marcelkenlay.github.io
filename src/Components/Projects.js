import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProjectCard from './ProjectCard'
import Grid from '@material-ui/core/Grid';

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
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item>
          <ProjectCard/>
        </Grid>
        <Grid item>
          <ProjectCard/>
        </Grid>
        <Grid item>
          <ProjectCard/>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item>
          <ProjectCard/>
        </Grid>
        <Grid item>
          <ProjectCard/>
        </Grid>
        <Grid item>
          <ProjectCard/>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
