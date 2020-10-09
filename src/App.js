import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/serachbox/searchbox.component";
import { Footer } from "./components/footer/footer.component";
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
    const url = "https://reqres.in/api/users?page=1";
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
        <div className="page-container">
          <h1 className="page__title">React Flakes</h1>
          <SearchBox
            placeholder="Serach "
            handleChange={(e) => this.setState({ searchKey: e.target.value })}
          ></SearchBox>
          <CardList monsters={filterMonsters}></CardList>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
