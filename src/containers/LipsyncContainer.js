import React from 'react'

import Lipsync from '../components/Lipsync'

export default class LipsyncContainer extends React.Component {

render() {
    const { lipsyncs } = this.props
    return(
        <div className="lipsync-page">
        <h1>Lipsyncs</h1>
            { lipsyncs && lipsyncs.map(lipsync => <Lipsync lipsync={lipsync}  favLipsync={this.props.favLipsync}/> ) }
        </div>
        )
    }
   
}