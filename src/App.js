import React from 'react';

import './App.css';
import FavLipsyncContainer from './containers/FavLipsyncContainer';
import LipsyncContainer from './containers/LipsyncContainer'

class App extends React.Component {

  state = {
    query: "",
    favLipsyncs: []
  }

  getLipsyncs() {
    fetch('http://www.nokeynoshade.party/api/lipsyncs')
    .then(resp => resp.json())
    .then(lipsyncs => this.setState({
      lipsyncs
    }))
  }

  favLipsync = (lipsync) => {
    this.setState({
      favLipsyncs: this.state.favLipsyncs.concat(lipsync)
    })
    console.log(lipsync)
  }

  componentDidMount() {
    this.getLipsyncs()
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  filterByQuery = () => {
    let lipsyncs = [...this.state.lipsyncs]
    let filteredLipsyncs = lipsyncs.filter(lipsync => lipsync.name.includes(this.state.query) || lipsync.artist.includes(this.state.query.toLowerCase()) )
    return filteredLipsyncs
  }

  render() {
    const { lipsyncs, favLipsyncs } = this.state
    return (
      <div className="App">
      <form>
       <input
         placeholder="Search for lipsync by artist or title"
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       </form>
       { lipsyncs && <LipsyncContainer lipsyncs={this.filterByQuery()} favLipsync={this.favLipsync}/> }
       { !favLipsyncs ? <h2>You don't have any fav lipsyncs!</h2> : <FavLipsyncContainer favLipsyncs={this.state.favLipsyncs}/>}
      </div>
    );
  }
}

export default App;
