import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-component';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import moment from 'moment';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// core components
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from '../reducer';
import saga from '../saga';
import { makeSelectOne } from '../selectors';
import { loadOneRequest, addEditRequest } from '../actions';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
};

class AddEdit extends Component {
  state = {
    ContentName: '',
    Key: '',
    Description: '',
    PublishFrom: '',
    IsActive: false,
    IsFeature: false,
    PublishTo: '',
  };
  handleEditorChange = (e, name) => {
    const newContent = e.editor.getData();
    this.setState({ [name]: newContent });
  };

  // handleCheckedChange = name => event => {
  //   event.persist();
  //   this.setState(state => ({
  //     data: { ...state.data, [name]: event.target.checked },
  //   }));
  // };
  handleCheckedChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  // handleChange = name => event => {
  //   event.persist();
  //   this.setState(state => ({
  //     data: { ...state.data, [name]: event.target.value },
  //   }));
  // };
  handleGoBack = () => {
    this.props.history.push('/wt/content-manage');
  };
  handleSave = () => {
    this.props.addEdit(this.state);
    this.props.history.push('/wt/content-manage');
  };
  componentDidMount() {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.loadOne(this.props.match.params.id);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.one !== nextProps.one) {
      const oneObj = nextProps.one.toJS();
      this.setState(state => ({
        ...oneObj,
      }));
    }
  }
  render() {
    const { classes } = this.props;
    // const { data } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Content </h4>
                <p className={classes.cardCategoryWhite}>Content info</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Content Name"
                      id="contents-name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.ContentName,
                        onChange: this.handleChange('ContentName'),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Key"
                      id="contents-key"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{ value: this.state.Key, onChange: this.handleChange('Key') }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: '#AAAAAA' }}>Content Description</InputLabel>
                    <CKEditor
                      name="Description"
                      content={this.state.Description}
                      events={{
                        change: e => this.handleEditorChange(e, 'Description'),
                        value: this.state.Description,
                        // onChange: this.handleChange('Description'),
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Published From"
                      id="contents-from-date"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.PublishFrom,
                        onChange: this.handleChange('PublishFrom'),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Published To"
                      id="contents-to-date"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.PublishTo,
                        onChange: this.handleChange('PublishTo'),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: '#AAAAAA' }}>Activity Type</InputLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.IsActive || false}
                          tabIndex={-1}
                          onClick={this.handleCheckedChange('IsActive')}
                          value="IsActive"
                          color="primary"
                        />
                      }
                      label="Is Active"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.IsFeature || false}
                          onClick={this.handleCheckedChange('IsFeature')}
                          value="IsFeatured"
                          color="primary"
                        />
                      }
                      label="Is Featured"
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.handleSave}>
                  Save
                </Button>
                <Button color="primary" onClick={this.handleGoBack}>
                  Back
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const withStyle = withStyles(styles);
const withReducer = injectReducer({ key: 'contentManagePage', reducer });
const withSaga = injectSaga({ key: 'contentManagePageAddEdit', saga });

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
});

const mapDispatchToProps = dispatch => ({
  loadOne: payload => dispatch(loadOneRequest(payload)),
  addEdit: payload => dispatch(addEditRequest(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withStyle,
  withReducer,
  withSaga,
  withConnect,
)(AddEdit);
