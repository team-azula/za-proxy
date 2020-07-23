import React from "react";
import AppCard from "./AppCard.jsx";
const $ = require("jquery");

class AppCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [
        {
          appId: 1,
          name: "App",
          logo: "",
          company: "Company",
          rating: (Math.random() * (5 - 1) + 1).toFixed(2),
          description: "Description",
        },
      ],
      id: props.id,
    };
    console.log(props);
    this.getApps = serverCommunicator.getApps.bind(this);
  }

  componentDidMount() {
    let url = "/api/apps/";

    if (this.props.id === null || this.props.id === undefined) {
      const newId = window.location.pathname.substr(1);
      if (newId) {
        url += window.location.pathname.substr(1);
      } else {
        url += "0";
      }
    } else {
      url += this.state.id;
    }

    $.get(url, (data) => {
      this.setState({ apps: data });
    });
  }

  render() {
    const apps = this.state.apps.map((app) => {
      return <AppCard app={app} key={app._id} />;
    });

    return (
      <div className="appCards row no-gutters">
        <div className="col">{apps}</div>
      </div>
    );
  }
}

var serverCommunicator = {
  getApps: () => {
    let url = "/api/apps/";

    if (this.props.id === null || this.props.id === undefined) {
      const newId = window.location.pathname.substr(1);
      if (newId) {
        url += window.location.pathname.substr(1);
      } else {
        url += "0";
      }
    } else {
      url += this.state.id;
    }

    return $.ajax({
      url: url,
      method: "GET",
      success: (data) => {
        return data;
      },
      error: (err) => {
        console.log("Failed to GET from server", err);
      },
    });
  },
};

export default AppCards;
