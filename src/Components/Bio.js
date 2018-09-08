import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
  root: {
    height: 180,
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class Bio extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Fade in={true}>
          <Paper elevation={4} className={classes.paper}>
              <p>
                3rd Year MEng Joint Maths and Computing student at Imperial College London
              </p>
          </Paper>
        </Fade>
      </div>
    );
  }
}

Bio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bio);
