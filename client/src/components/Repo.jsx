import React from 'react'

const Repo = (props) => (
  <div>
    <div>Name: {props.repo.name}</div>
    <div>Username: {props.repo.username}</div>
    <div>Link: {props.repo.link}</div>
  </div>
)

export default Repo