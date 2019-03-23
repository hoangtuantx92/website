import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "red",
                height: "176px",
                background:
                  "url(https://static.makeuseof.com/wp-content/uploads/2018/04/windows-minesweeper-670x335.jpg)center/cover"
              }}
            >
              MineSweeper Game
            </CardTitle>
            <CardText style={{ fontFamily: "Abel" }}>
              Minesweeper is a single-player puzzle video game. The objective of
              the game is to clear a rectangular board containing hidden "mines"
              or bombs without detonating any of them, with help from clues
              about the number of neighboring mines in each field.
              <p style={{ fontWeight: "bold" }}>Programing language: Java</p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/hoangtuantx92/MineSweeper-Game"
                rel="noopener noreferrer"
                target="_blank"
                raised
                accent
                ripple
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#005eff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "red",
                height: "176px",
                background:
                  "url(https://cdn.wallstreetmojo.com/wp-content/uploads/2018/11/Asset-Purchase-vs-Stock-Purchase-2.jpg)center/cover"
              }}
            >
              Caclulate Stock Asset
            </CardTitle>
            <CardText style={{ fontFamily: "Abel" }}>
              The program will read a file which has details of stock symbols
              and the number of shares of each stock the user owns. Then it will
              obtain stock price from yahoo service. It will ouput the total
              asset value of the list Edit
              <p style={{ fontWeight: "bold" }}>Programing language: Java</p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/hoangtuantx92/CalculatedAsset"
                rel="noopener noreferrer"
                target="_blank"
                raised
                accent
                ripple
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#005eff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "red",
                height: "190px",
                background:
                  "url(https://www.completecsharptutorial.com/wp-content/uploads/2016/08/StringWriter.jpg)center/cover"
              }}
            >
              StringWriter
            </CardTitle>
            <CardText style={{ fontFamily: "Abel" }}>
              The user of your design will pick and choose what kinds of
              operations they want to use or combine to use. For example, I may
              be interested in combining the stupid remover and the lower case
              operation when writing to a String. I may also be interested in
              combining the duplicate remover and the upper case operation when
              writing to a file.
              <p style={{ fontWeight: "bold" }}>Programing language: Java</p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/hoangtuantx92/StringWriter"
                rel="noopener noreferrer"
                target="_blank"
                raised
                accent
                ripple
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#005eff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else
      return (
        <div className="projects-grid">
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(data:image/png;base64,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)center/cover"
              }}
            >
              Validated Address App
            </CardTitle>
            <CardText style={{ fontFamily: "Abel" }}>
              This is mobile app that is developed by using Xamrin.Form. User
              will input an address to the field. The app will use USPS API to
              validate user's input address.
              <p style={{ fontWeight: "bold" }}>Programing language: C# </p>
              <p style={{ fontWeight: "bold" }}>Framework: Xamarin.Form</p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/hoangtuantx92/ValidatedAddress"
                rel="noopener noreferrer"
                target="_blank"
                raised
                accent
                ripple
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#005eff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>School Project</Tab>
          <Tab>Self Project</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        <p
          style={{
            position: "absolute",
            bottom: "0",
            textAlign: "center",
            height: "50px",
            width: "100%"
          }}
        >
          Copyright © 2019 Kevin Do
        </p>
      </div>
    );
  }
}

export default Project;
