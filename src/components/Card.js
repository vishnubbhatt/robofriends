import React from 'react'

const Card = ({id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?500x500`}></img>
            <div>
                <h2>Robot Jane</h2>
                <p>rrrrrrrr</p>
            </div>
        </div>
    )
}

export default Card;