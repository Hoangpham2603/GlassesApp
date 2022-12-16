import React, { Component } from "react";
import dataGlasses from "../data/dataGlasses.json";
import '../GlassesApps/GlassesApp.css'

export default class GlassesApp extends Component {


  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };    

  renderGlassesList = () => {
    return dataGlasses.map((item, index) => {
      return (
        <img
          className="ml-2 p-2 border border-width-1"
          style={{ width: "100px", cursor: "pointer" }}
          key={index}
          src={item.url}
          onClick={() => {
            {this.handleClick(item)}
          }}
        />
      );
    });
  };

  handleClick = (newGlasses) => { 
    this.setState  ({
        glassesCurrent: newGlasses,
    })
  }

  render() {

    const keyFrame = `@keyframes animationGlass${Date.now()} { 
    from{ 
        width: 0 ;
    }
    to{
        width: 150px;
    }
}`;

    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "75px",
      opacity: ".8",
      animation: `animationGlass${Date.now()} 1s`
    };
    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "273px",
      paddingLeft: "15px",
      backgroundColor: "rgba(0,0,0,.5",
      textAlign: "left",
      height: "105px",
    };

    return (
      <div
        style={{
          backgroundImage: `url(./img/background.jpg)`,
          minHeight: "2000px",
          backgroundRepeat: "none",
          objectFit: "fit",
        }}
      >
        <style>
            {keyFrame}
        </style>

        <div style={{ backgroundColor: "rgba(0,0,0,.8", minHeight: "2000px" }}>
          <h3
            style={{ backgroundColor: "rgba(0,0,0,.4)" }}
            className="text-light text-center p-5"
          >
            Try Glasses App
          </h3>

          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    src="./img/model.jpg"
                    alt="model"
                    style={{ width: "250px" }}
                    className="position-absolute glassStyle"
                  />
                  <img
                    className="position-absolute"
                    src={this.state.glassesCurrent.url}
                    style={styleGlasses}
                    alt=""
                  />
                </div>
                <div style={infoGlasses} className="text-center position-relative">
                  <p className="font-weight-bold" style={{ fontSize: "17px", color: "Salmon" }}>
                    {this.state.glassesCurrent.name}
                  </p>
                  <p className="text-center" style={{fontSize: '13px'}}>{this.state.glassesCurrent.desc}</p>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./img/model.jpg"
                  alt="model"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
          </div>
          <div className="bg-light container text-center mt-5 d-flex justify-content-center">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
