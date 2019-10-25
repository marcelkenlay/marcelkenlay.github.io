import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import './Stylesheets/BioStepper.css';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Stretford Grammar School', 'Loreto Sixth Form College', 'MEng Joint Maths & Computing - Imperial College London' , 'Intern Software Developer - The Hut Group',
  'MEng Joint Maths & Computing - Imperial College London'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `I studied at Stetford Grammar between 2009 and 2014. Achieving 5 A*s, 3 As and 2 Bs at GCSEs`;
    case 1:
      return 'I studied at Loreto between 2014 and 2016. Achieving 4 A*s at A Level in Maths, Further Maths, Physics and Computing.';
    case 2:
      return `In October 2016 I began my MEng Joint Maths and Computing degree at Imperial College London. At the end of
              my second year studying my total grade for the first two years was 69.9%`;
    case 3:
      return `In the summer of 2018 after my second year of university I began an internship at The Hut Group. I was working within a team at their warehouse in Warrington,
              the focus of the team was ensuring order fulfilment, this was done by selecting the routes pickers would take and developing an application which allows details of a
              warehouse layout to be given as well as an app to guide workers within the warehouse through work. This internship gave me a good introduction to practices taken
              within workplaces with the team using scrum to manage work giving me a good insight into agile development.`;
    case 4:
      return `In October 2018 I returned to Imperial College London to begin the third year of my course. I have two years of my course remaining,
              expecting to graduate in 2020. I have now chosen my options for the third year with my maths options being methods for data science and statistics courses,
              while the modules I've chosen from the department of Computing mostly being related to machine learning and AI. In my first term I will also be working
              on my group project which is in collaboration with Goldman Sachs, the task for the project is to develop software which can perform sentiment analysis on data sources.`
    default:
      return 'Unknown step';
  }
}

class BioStepper extends React.Component {
  state = {
    activeStep: 3,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };


  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Fade in={true}
      {...{timeout: 1000 }}>
      <div id="stepper-container" className={classes.root}>
        <Typography gutterBottom align="center">
          (Click step to expand)
        </Typography>
        <Paper elevation={5}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepButton
                    onClick={this.handleStep(index)}
                    completed={false}>
                      {label}
                  </StepButton>
                  <StepContent>
                    <Typography align="left">{getStepContent(index)}</Typography>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>That&quot;s all so far, I&quot;m now beginning my 3rd year at Imperial College London, my penultimate year before my masters year.</Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Go Back to the top.
              </Button>
            </Paper>
          )}
        </Paper>
      </div>
      </Fade>
    );
  }
}

BioStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(BioStepper);
