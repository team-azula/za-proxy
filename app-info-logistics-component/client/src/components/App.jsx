import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Info from './Info.jsx';
import Rating from './Rating.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {
      id : 1,
      name : "Concrete Shoes",
      author : "Joseph Brooks",
      imageUrl : 'https://picsum.photos/200',
      category : 'Social',
      updatedAt : '',
      size : '25 MB',
      editorChoice : true,
      rating: 3,
      ratings: 35,
      currentVersion: 1.5,
      installs : 400
  },
      id: this.props.id || 1
    }
  }

  componentDidMount() {

    let url = "/apps/";

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

    axios.get(url)
      .then(res => {
        this.setState({
          app: res.data
        });
      })
      .catch(err => {
        if(err) {
          console.log('Error getting data', err);
        }
      })
  }

  render() {
    return (
      <div>
        <Info app={this.state.app} />
      </div>
    )
  }
}

export default App1;
