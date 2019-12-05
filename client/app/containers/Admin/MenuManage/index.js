/**
 *
 * MenuManage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import Close from '@material-ui/icons/Close';

// core components
import Table from 'components/Table';
import * as mapDispatchToProps from './actions';

import { DATE_FORMAT } from '../../App/constants';
import PageHeader from '../../../components/PageHeader/PageHeader';
import PageContent from '../../../components/PageContent/PageContent';
import DeleteDialog from '../../../components/DeleteDialog';
import Loading from '../../../components/Loading';
import { makeSelectAll, makeSelectLoading, makeSelectQuery } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'menuManage';

export const MenuManage = props => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const {
    all: { data, page, size, totaldata },
    query,
    loading,
    classes,
  } = props;
  const tablePagination = { page, size, totaldata };
  const tableData = data.map(
    ({ name, key, is_active, published_from, published_to, _id }) => [
      name,
      key,
      moment(published_from).format(DATE_FORMAT),
      moment(published_to).format(DATE_FORMAT),
      `${is_active}`,
      <>
        <Tooltip
          id="tooltip-top"
          title="Edit Task"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            aria-label="Edit"
            className={classes.tableActionButton}
            onClick={() => handleEdit(_id)}
          >
            <Edit
              className={`${classes.tableActionButtonIcon} ${classes.edit}`}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="tooltip-top-start"
          title="Remove"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            aria-label="Close"
            className={classes.tableActionButton}
            onClick={() => handleOpen(_id)}
          >
            <Close
              className={`${classes.tableActionButtonIcon} ${classes.close}`}
            />
          </IconButton>
        </Tooltip>
      </>,
    ],
  );
  return (
    <>
      <div>
        <Helmet>
          <title>MenuManage</title>
          <meta name="description" content="Description of MenuManage" />
        </Helmet>
      </div>
      <DeleteDialog
        open={state.open}
        doClose={handleClose}
        doDelete={() => handleDelete(state.deleteId)}
      />
      <div className="flex justify-between mt-3 mb-3">
        {loading && loading === true ? <Loading /> : <></>}
        <PageHeader>Static Content</PageHeader>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          round="true"
          onClick={handleAdd}
          elevation={0}
        >
          <AddIcon />
        </Fab>
      </div>
      <PageContent loading={loading}>
        <div className="flex">
          <div className="flex relative mr-2">
            <input
              type="text"
              name="find_name"
              id="contents-name"
              placeholder="Search Contents by name"
              className="m-auto inputbox"
              value={query.find_name}
              onChange={handleQueryChange}
              style={{ paddingRight: '50px' }}
            />
            <IconButton
              aria-label="Search"
              className={`${classes.waftsrch} waftsrchstyle`}
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </div>

          <div className="waftformgroup relative flex">
            <input
              type="text"
              name="find_key"
              id="contents-key"
              placeholder="Search Contents  by key"
              className="m-auto inputbox pr-6"
              value={query.find_key}
              onChange={handleQueryChange}
              style={{ paddingRight: '50px' }}
            />
            <IconButton
              aria-label="Search"
              className={`${classes.waftsrch} waftsrchstyle`}
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>

        <Table
          tableHead={[
            'Name',
            'Key',
            'Pub From',
            'Pub To',
            'Is Active',
            'Action',
          ]}
          tableData={tableData}
          pagination={tablePagination}
          handlePagination={this.handlePagination}
        />
      </PageContent>
    </>
  );
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  fab: {
    width: '40px',
    height: '40px',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  tableActionButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
      color: '#404040',
    },
  },

  waftsrch: {
    padding: 0,
    position: 'absolute',
    borderLeft: '1px solid #d9e3e9',
    borderRadius: 0,
    '&:hover': {
      background: 'transparent',
      color: '#404040',
    },
  },
});

MenuManage.propTypes = {
  // defaultActionRequest: PropTypes.func.isRequired,
  // defaultData: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  defaultData: makeSelectDefaultData(),
});

const withStyle = withStyles(styles);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
  withStyle,
)(MenuManage);