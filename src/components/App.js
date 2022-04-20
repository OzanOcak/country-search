import React from "react";
//import axios from "axios";

import Search from "./Search";
import CardList from "./CardList";
import github from "../api/github";

class App extends React.Component {
  state = {
    users: [],
  };

  onSearch = async (term) => {
    const response = await github.get(`/users/${term}`);

    this.setState({
      users: [...this.state.users, response.data],
    });
  };

  render() {
    return (
      <div className="justify-content-center">
        <div className="container col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mt-3 ">
          <Search onSearch={this.onSearch} />
          <CardList users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
