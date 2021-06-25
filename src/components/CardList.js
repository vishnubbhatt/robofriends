import React from 'react'
import Card from './Card'

export default function CardList({robots}) {
    const cardsArray = robots.map((user, key) =>{
        return (<Card 
                    key={robots[key].id} 
                    id={robots[key].id} 
                    name={robots[key].name} 
                    email={robots[key].email}
                />
        )
    })
    return (
        <div>
            {cardsArray}
        </div>
    )
}
