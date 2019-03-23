import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Skills from "./skills";

class About extends Component {
  render() {
    return (
      <div classname="aboume">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="http://i.picasion.com/resize89/801496fce238dc8fd4dc8246c5b0dd43.jpg"
                alt="avatar"
                style={{ height: "300px", borderRadius: "8px" }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Kevin Do</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I have experienced making simple website to complex website that
              requires both fontend(Angular 5, or ReactJS) and backend(ASP.net
              core, or NodeJS). I also have some experience in mobile app
              development with Xamarin.form
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Currently in Houston Texas</p>
            <h5>Phone</h5>
            <p>(713) 456-0152</p>
            <h5>Email</h5>
            <p>hoangtuantx92@yahoo.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="about-right-col" col={8}>
            <h2>Education:</h2>

            <Education
              startYear={2014}
              endYear={2016}
              schoolName="LoneStar College"
              schoolDescription="GPA: 3.4- For basic to transfer credit."
            />
            <Education
              startYear={2017}
              endYear={2019}
              schoolName="University of Houston"
              schoolDescription="GPA in major: 3.2- Major in Computer Science at University of Houston. I will graduate in May 2019."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills:</h2>
            <Skills skill="JavaScript" progress={40} percent="40%" />
            <Skills skill="C++" progress={50} percent="50%" />
            <Skills skill="C#" progress={75} percent="75%" />
            <Skills skill="SQL" progress={45} percent="45%" />
            <Skills skill="Java" progress={70} percent="70%" />
            <Skills skill="CSS" progress={35} percent="35%" />
            <Skills skill="HTML" progress={65} percent="65%" />
            <Skills skill="ReactJS" progress={40} percent="40%" />
            <Skills skill="NodeJS" progress={60} percent="60%" />
            <Skills skill="XAML" progress={45} percent="45%" />
            <Skills skill="Bootstrap" progress={55} percent="55%" />
            <Skills skill="Angular 5" progress={35} percent="35%" />
            <Skills skill="ASP.Net" progress={60} percent="60%" />
            <Skills skill="ASP.Net Core" progress={55} percent="55%" />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Software:</h2>
            <p>
              Visual Studio, Unity, GitHub, Git, Visual Studio Code, IntelliJ
            </p>

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Software development:</h2>
            <p>Agile Development Practice, TDD.</p>

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Professional: </h2>
            <p>
              Team player, Self-motivated, detail-oriented, time management,
              resilience, and critical thinking.
            </p>
          </Cell>
        </Grid>
        <p
          style={{
            textAlign: "center"
            //marginLeft: "800px"
          }}
        >
          Copyright © 2019 Kevin Do
        </p>
      </div>
    );
  }
}

export default About;
