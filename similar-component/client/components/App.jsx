import React from "react";
import AppCards from "./AppCards.jsx";
import Header from "./Header.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className=" similar-apps container-fluid">
        <Header />
        <AppCards id={this.props.id} />
      </div>
    );
  }
}

export default App;
