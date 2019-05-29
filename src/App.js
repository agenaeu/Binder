import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";
//import Scryfall from './api/Scryfall_api';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ImageList from "./components/imageList/ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  
  
  onButtonClick() {
    axios
      .get("https://api.scryfall.com/cards/search?order=set&q=e%3Akld")
      .then(function(response) {
        const setArray = response.data.data;

        for (let i = 0; i < setArray.length; i++) {
          console.log(
            response.data.data[i].collector_number,
            response.data.data[i].name, 
            response.data.data[i].image_uris.border_crop
          );
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    setTimeout(() => page2(), 1000);

    const page2 = () => {
      axios
        .get("https://api.scryfall.com/cards/search?page=2&order=set&q=e%3Akld")
        .then(function(response) {
          const setArray = response.data.data;

          for (let i = 0; i < setArray.length; i++) {
            console.log(
              response.data.data[i].collector_number,
              response.data.data[i].name, 
              response.data.data[i].image_uris.border_crop
            );
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    /* this.setState({
      images: response.data.data[i].image_uris.normal
    }) */
  }

  render() {
    return (
      <div className="App_container">
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact />
            <header className="App_header">
              <h2> My Personal Binder </h2>
            </header>
            <Navbar onClick={this.onButtonClick}/>
            <main className="App_card">
              <ImageList images={this.state.images} />
              {/* <Card
                image={
                  "https://img.scryfall.com/cards/normal/front/2/d/2dea2466-5c7f-40ce-b749-100ae89d2c90.jpg?1557576604"
                }
              />
              <Card
                image={
                  "https://img.scryfall.com/cards/normal/front/5/f/5f8bc010-f1af-42a2-9009-2039cf3d8f0a.jpg?1557576370"
                }
              />
              <Card
                image={
                  "https://img.scryfall.com/cards/normal/front/b/3/b3656310-093d-4724-a399-7f7010843b1f.jpg?1557575878"
                }
              />
              <Card
                image={
                  "https://img.scryfall.com/cards/normal/front/6/c/6cc78151-8cb0-4521-9674-fb0c67e24a17.jpg?1557577057"
                }
              />
              <Card
                image={
                  "https://img.scryfall.com/cards/normal/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.jpg?1557577337"
                }
              />
              <Card
                image={
                  "https://img.scryfall.com/cards/normal/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.jpg?1557577337"
                }
              /> */}
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
