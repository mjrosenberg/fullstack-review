import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }
  componentDidMount(){
    //i think its adding a new undefined repo each time because the initial state is empty and doesn't change until we get but idk
    const url = 'http://localhost:1128/repos';
    const data = {username: 'mjrosenberg'};
    const success = (data) => {
      console.log('successful get');
      this.setState({
        repos: data
      });
    }
    $.get(url, data, success);
  }
  search (term) {
    console.log(`${term} was searched`);
    const url = 'http://localhost:1128/repos'
    // implement a post request and update this.state.repos upon response
    //post takes in url, data, and success
    // var dataSent = JSON.stringify({username: term});
    var dataSent = {'username': term};
    console.log(dataSent)
    var postSuccess = (data) =>{
      console.log('making post and getting back data');
    }
    var getSuccess = (data) => {
      console.log('successful get', term, data);
      this.setState({
        repos: data
      });
    }
    var contentType = 'application/json';
    //defining the success callback outside the post request
    // $.post(url, dataSent, postSuccess);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataSent),
      // contentType: contentType,
      // success: postSuccess
    }, postSuccess);
    //need to pull back the data to update the state with a get request
    // $.get(url, dataSent, contentType, getSuccess);
    $.ajax({
      method: 'GET',
      url: url,
      data: dataSent,
      // contentType: contentType,
      success: getSuccess

    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));