import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            style={{
              fontFamily: "Anton",
              fontWeight: "bold"
            }}
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: " white",
                  fontFamily: "Times New Roman"
                }}
                to="/website"
              >
                MY PORTFOLIO
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link style={{ fontSize: "25px" }} to="/website">
                HOME
              </Link>
              <Link style={{ fontSize: "25px" }} to="/aboutme">
                ABOUT ME
              </Link>
              <Link style={{ fontSize: "25px" }} to="/projects">
                PROJECTS
              </Link>
              <Link style={{ fontSize: "25px" }} to="/contact">
                CONTACT
              </Link>
            </Navigation>
          </Header>
          <Drawer
            style={{
              fontFamily: "Anton",
              fontWeight: "bold"
            }}
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Times New Roman"
                }}
                to="/website"
              >
                MY PORTFOLIO
              </Link>
            }
          >
            <Navigation>
              <Link style={{ fontSize: "25px" }} to="/website">
                HOME
              </Link>
              <Link style={{ fontSize: "25px" }} to="/aboutme">
                ABOUT ME
              </Link>
              <Link style={{ fontSize: "25px" }} to="/projects">
                PROJECTS
              </Link>
              <Link style={{ fontSize: "25px" }} to="/contact">
                CONTACT
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
