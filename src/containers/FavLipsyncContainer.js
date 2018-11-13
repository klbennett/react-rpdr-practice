import React from 'react'

import Lipsync from '../components/Lipsync'

export default class FavLipsyncContainer extends React.Component {

render() {
    const { favLipsyncs } = this.props
    return(
        <div className="lipsync-fav">
        <h1>Fav Lipsyncs</h1>
           { favLipsyncs && favLipsyncs.map(lipsync => <p>{ lipsync.name }</p>) }
        </div>
        )
    }
   
}
