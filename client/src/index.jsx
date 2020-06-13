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
    var dataSent = {'username': term};

    var postSuccess = (data) =>{
      $.get(url, getSuccess);
    }
    var getSuccess = (data) => {
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
  }

  render () {
    return (<div id='react'>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
