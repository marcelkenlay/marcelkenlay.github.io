import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ProjectCard extends React.Component {
  state = { expanded: false };


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const assets = require('./Files/assets.js')

    const { classes } = this.props;

    const noBottomPadding = {
      paddingBottom: 0,
      display:"inline"
    }

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.projectInfo.title}
          subheader={this.props.projectInfo.date}
        /><CardMedia
          className={classes.media}
          image={assets[this.props.projectInfo.image]}
          title={this.props.imageDesc}/>
        <Grid container alignItems="flex-end">
        <Grid item xs={10}>
        <CardContent style={noBottomPadding}>
          <Typography component="p">
            {this.props.projectInfo.caption}
          </Typography>
        </CardContent>
        </Grid>
        <Grid item>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        </Grid>
        </Grid>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {this.props.projectInfo.paragraphs.map(
              paragraph => <Typography paragraph> {paragraph} </Typography>
            )}
          </CardContent>
         </Collapse>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);

  // <Button className={classes.expand} onClick={this.handleExpandClick} variant="outlined" color="primary" className={classes.button}>
  //    {this.state.expanded ? "Less Info" : "More Info"}
  //   <ExpandMoreIcon
  //       className={classnames(classes.expand, {
  //             [classes.expandOpen]: this.state.expanded,
  //           })} />
  // </Button>
