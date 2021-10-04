import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchItem } from './components/search-item/SearchItem';
import './app.style.css';

//comment
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchItem : ""
    }
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json().then(mon => this.setState({monsters : mon})))
  }

  monsterFinder(e){
    this.setState({searchItem : e.target.value})
  }


  render() {

    const {monsters, searchItem} = this.state;
    const filteredMonsters = monsters.filter(mon => 
      mon.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
    <>
    <h1>Monster Finder</h1>
    <SearchItem placeholder="Search Monsters" ChangeHandler={e => this.monsterFinder(e)}  />
    <CardList mons={filteredMonsters}/>
    </>
      )
  }
}



