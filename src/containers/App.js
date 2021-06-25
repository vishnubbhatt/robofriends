import React from 'react'
import {robots} from '../robots'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField : ''
        }
    }
    onSearchChange = (event) => { 
        this.setState({ searchField: event.target.value })
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json() 
        })
        .then(users => {
            this.setState({robots: users})
        })
        
    }

    render(){
        const {robots, searchField } = this.state; // Destructuring....

        const filteredRobot = robots.filter( robots =>{
            return (robots.name.toLowerCase().includes(searchField.toLowerCase()));
        })
        
        if(!robots.length){
            return <h1>Loading...</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange= {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobot}/>
                    </Scroll>
                </div>
            )
        }
        
    }
}
