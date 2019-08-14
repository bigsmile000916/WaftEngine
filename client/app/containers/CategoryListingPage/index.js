import React from 'react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectCategory } from './selectors';
import saga from './saga';
import * as mapDispatchToProps from './actions';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
class CategoryListingPage extends React.Component {
  componentDidMount() {
    this.props.loadCategoryRequest();
  }

  render() {
    const { category, blogs } = this.props;
    return (
      <React.Fragment>
        {category.map(each => {
          const { title } = each;
          let show = false;
          blogs.length > 0 &&
            blogs.map(blog => {
              blog.category.map(el => {
                if (el._id === each._id) show = true;
              });
            });
          return show ? (
            <li key={each._id} className="info ">
              <Link to={`/blog-category/${each._id}`}>
                <h3> {`${title}`}</h3>
              </Link>
            </li>
          ) : null;
        })}
      </React.Fragment>
    );
  }
}

const withReducer = injectReducer({ key: 'categoryListingPage', reducer });
const withSaga = injectSaga({ key: 'categoryListingPage', saga });

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CategoryListingPage);
