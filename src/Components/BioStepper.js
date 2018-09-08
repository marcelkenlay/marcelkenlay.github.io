import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
              my second year my total grade for the first two years was 69.9%`;
    case 3:
      return `In the summer of 2018 after my second year of university I began working as a software developer for the first time.
              I began an internship at The Hut Group working within a team at their warehouse in Warrington which focused on ensuring
              orders were picked on time, selecting the routes pickers would take and developing a workflow application which guided
              workers through work`;
    case 4:
      return `In October 2018 I made the mistake of returning`
    default:
      return 'Unknown step';
  }
}

class BioStepper extends React.Component {
  state = {
    activeStep: 0,
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
      <div className={classes.root}>
        <h2> Step through the stages of my education and employment below.</h2>
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
                  <Typography>{getStepContent(index)}</Typography>
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
      </div>
    );
  }
}

BioStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(BioStepper);
