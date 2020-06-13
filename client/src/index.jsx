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
    const success = (data) => {
      console.log('successful get');
      this.setState({
        repos: data
      });
    }
    $.get(url, success);
  }
  search (term) {
    console.log(`${term} was searched`);
    const url = 'http://localhost:1128/repos'
    // implement a post request and update this.state.repos upon response
    //post takes in url, data, and success
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
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataSent),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(postSuccess);

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(getSuccess);
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

//need to figure out: weird untitled repo adding, how to reset database to avoid duplicates, how to sort and limit items within the query