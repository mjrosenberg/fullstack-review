import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map((repo)=>{
      return <Repo key={repo._id} repo={repo}/>
    })}
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;