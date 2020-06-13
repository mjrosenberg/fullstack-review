import React from 'react'

const Repo = (props) => (
  <div id='repo'>
    <div id='name'>Name: {props.repo.name}</div>
    <div id='username'>Username: {props.repo.username}</div>
    <div id='link'>Link: {props.repo.link}</div>
    <div id='stars'>Star Rating: {props.repo.stars}</div>
  </div>
)

export default Repo