import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (

  <div id='repolist'>
    <h4> Top 25 Repo's Based on Star Rating</h4>
    {props.repos.map((repo)=>{
      return <Repo key={repo._id} repo={repo}/>
    })}
  </div>
)

export default RepoList;