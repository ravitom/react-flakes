import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/serachbox/searchbox.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchKey: "",
    };
  }
  componentDidMount() {
    const url = "https://reqres.in/api/users?page=2";
    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users.data }));
  }
  render() {
    const { monsters, searchKey } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.first_name.toLowerCase().includes(searchKey.toLowerCase())
    );

    return (
      <div className="container">
        <SearchBox
          placeholder="serach Monster"
          handleChange={(e) => this.setState({ searchKey: e.target.value })}
        ></SearchBox>
        <CardList monsters={filterMonsters}></CardList>
      </div>
    );
  }
}
export default App;
