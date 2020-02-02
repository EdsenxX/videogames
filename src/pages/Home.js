import React, { Component, Fragment } from "react";
import axios from "axios";

import "./styles/Home.scss";

import Menu from "../components/Global/Menu";
import Loader from "../components/Loader";
import Error from "../components/Error";
import VideoGames from "../components/VideoGames";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      videoGamesList: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("https://api.rawg.io/api/games")
      .then(response => {
        this.setState({
          loading: false,
          videoGamesList: response.data.results
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: error.message });
      });
  }

  mostrarContenido = () => {
    if (this.state.loading) {
      return <Loader />;
    } else if (this.state.error) {
      return <Error message={this.state.error} />;
    } else {
      return (
        <Fragment>
          <div className="home__content">
            <div className="sidebar"></div>
            <main>
              <VideoGames videoGamesList={this.state.videoGamesList} />
            </main>
          </div>
        </Fragment>
      );
    }
  };

  render() {
    return (
      <div className="Home">
        <Menu />
        {this.mostrarContenido()}
      </div>
    );
  }
}

export default Home;
