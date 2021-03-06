import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div id='search'>
      <h4>Add more repos to the database!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange} />
      <button onClick={this.search}> Add Repos</button>
      {/* right now this just displays the term from the state aka the repo we just typed */}
    </div>)
  }
}

export default Search;