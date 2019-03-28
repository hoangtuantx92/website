import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div style={{ paddingTop: "6em" }} />
            <img
              src="http://i.picasion.com/resize89/5c62d151dd8fd43d9e275942ec4bf8ba.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div style={{ position: "relative" }} className="banner-text">
              <h1 style={{ fontFamily: "Lucida Console" }}>
                Hi, I am Kevin Do
              </h1>

              <hr />
              <p style={{ fontFamily: "Times New Roman" }}>
                I am a web and mobile developer in Houston
              </p>

              <div className="social-links">
                {/* LinkedIn*/}
                <a
                  href="https://www.linkedin.com/in/kevin-do-41802a171/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>

                {/* Github*/}
                <a
                  href="https://github.com/hoangtuantx92"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>

                {/* Email*/}
                <a
                  href="mailto:hoangtuantx92@yahoo.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <p
          style={{
            position: "absolute",
            bottom: "0",
            textAlign: "center",
            height: "50px",
            width: "100%",
            color: "black"
          }}
        >
          Copyright © 2019 Kevin Do
        </p>
      </div>
    );
  }
}

export default Landing;
