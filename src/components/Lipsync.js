import React from 'react'

const Lipsync = props  => (

    <div className="lipsync-card" key={ props.lipsync.name }>
    <h1>{ props.lipsync.name } by { props.lipsync.artist }</h1>
     { props.lipsync.queens.map(queen => queen.won ? <h2>Winner: {queen.name}</h2> : <h2>{queen.name}</h2> )} 
     <button onClick={() => props.favLipsync(props.lipsync)}>Add to Favourites</button>
    </div>
)

export default Lipsync