import React, { Component } from "react";
import Footer from "./footer";

class Body extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0 m-0">
            <img
              className="img-bod img-fluid w-100"
              src="images/IMG_2725.jpg"
              alt="food-img"
            />
            <button className="btn btn-primary">shop now</button>
            <p className="para">
              <h3>Lorem Ipsum</h3> is simply dummy te took a galley of type
              andjfhrj vkjfdvbfdj vjfvbkjb fvjkfvbjkb fvjfvnjfb vigri rsions
            </p>
          </div>
          <div className="col-md-6 col-sm-12 p-0 m-0">
            <img
              className="img-bod img-fluid w-100"
              src="images/IMG_2725.jpg"
              alt="food-img"
            />
            <button className="btn btn-primary">Veiw more</button>
            <p className="para">
              is simply dummy text of the printing and typesetting industry.
              <br />
              dummy text ever since the 1500s five centuries, but also the leap
              into electronic typesetting,
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0 m-0">
            <img
              className="img-bod img-fluid p-0 m-0 w-100"
              src="images/bake.jpg"
              alt="food-img"
            />
            <p className="right-para float-right">
              is ext ever since the 1500s, when an unknown printer tbut also the
              leap into electronic typesetting, remaining essentially
              <br />
              <br />
              <h3>Smoor delight</h3>
            </p>
            <button className="btn btn-secondary right-shop float-right">
              Deals
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0 m-0">
            <img
              className="img-bod img-fluid p-0 m-0 w-100"
              src="images/IMG_2725.jpg"
              alt="food-img"
            />
            <button className="btn btn-primary">shop now</button>
            <p className="para">
              <h3>Lorem Ipsum</h3>to make a type specimen book. It has survived
              not only five centuriesssentially unchanged.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 p-0 m-0">
            <img
              className="img-bod img-fluid p-0 m-0 w-100"
              src="images/IMG_2725.jpg"
              alt="food-img"
            />
            <button className="btn btn-primary">Veiw more</button>
            <p className="para">
              is simply dummy text of the printing and typesetting industry.
              <br />
              dummy tex. It has survived the 1960s with the release
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Body;
