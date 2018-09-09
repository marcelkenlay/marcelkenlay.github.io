import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Stylesheets/LinkedInLink.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

function LinkedInLink(props) {
    const { classes } = props;
    return (
      <div id="lil-wrapper">
        <Button href="https://www.linkedin.com/in/marcel-kenlay" className={classes.button}>
          View my LinkedIn page
        </Button>
      </div>
      );
}

LinkedInLink.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinkedInLink);
