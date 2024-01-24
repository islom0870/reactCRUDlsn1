import React, { Component } from "react";
import { data } from "./card";
import bath from "../../assets/images/bath.png";
import bed from "../../assets/images/bed.png";
import car from "../../assets/images/car.png";
import ruler from "../../assets/images/ruler.png";
import houseIcon from "../../assets/images/houseIcon.png";
import lupa from "../../assets/images/001-loupe.png";
import "./body.css";

export default class Body extends Component {
  constructor(params) {
    super(params);
    this.state = {
      Data: data,
    };
  }

  remove = (index) => {
    var newData = this.state.Data.filter((element, indx) => index !== indx);

    this.setState({ Data: newData });
    console.log(this.state.Data);
  };
  render() {
    var array;
    console.log(array);
    return (
      <div className="container">
        <div className="search_feature">
          <div className="input_search">
            <img src={houseIcon} alt="houseIcon" />
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
          </div>

          <button className="button_search">
            <img src={lupa} alt="lupa" />
            <span>Search</span>
          </button>
        </div>
        <div className="Text">
          <h2>Properties</h2>
          <p>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>

        <div className="card_container">
          {
            (array = this.state.Data.map((element, index) => {
              return (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={element.img} alt="house" />
                  </div>
                  <div className="mini">
                    <div className="adress">New Apartment Nice Wiew</div>
                    <p className="text">Quincy St, Brooklyn, NY, USA</p>
                    <div className="icons">
                      <div className="icon">
                        <div>
                          <img src={bed} alt="bed" />
                        </div>
                        <small>8 Beds</small>
                      </div>
                      <div className="icon">
                        <div>
                          <img src={bath} alt="bath" />
                        </div>
                        <small>5 bath</small>
                      </div>
                      <div className="icon">
                        <div>
                          <div>
                            <img src={car} alt="car" />
                          </div>
                        </div>

                        <small>1 Garage</small>
                      </div>
                      <div className="icon">
                        <div>
                          <img src={ruler} alt="ruler" />
                        </div>
                        <small>8 Beds</small>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <div className="cena">
                      <small>
                        <s>$2,800/mo</s>
                      </small>
                      <b>$7,500/mo</b>
                    </div>
                    <button onClick={() => this.remove(index)}>Delete</button>
                  </div>
                </div>
              );
            }))
          }
        </div>
      </div>
    );
    console.log(array);
  }
}
