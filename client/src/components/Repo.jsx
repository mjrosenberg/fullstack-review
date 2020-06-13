import React from 'react'

const Repo = (props) => (
  <div id='repo'>
    <a id='name' href={props.repo.link}>{props.repo.name}</a>
    <div id='username'>Author: {props.repo.username}</div>
    <div id='stars'>{props.repo.stars} Stars</div>
  </div>
)

export default Repo