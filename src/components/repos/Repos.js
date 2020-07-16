import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map((repo, index) => {
    return <RepoItem repo={repo} key={index} />;
  });
};

Repos.propTypes = {
  repos: PropTypes.object.isRequired,
};

export default Repos;
