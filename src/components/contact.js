import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
//import emailjs from "emailjs";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    //eslint-disable-next-line
    const form = await axios
      .post("/api/form", {
        name,
        email,
        message
      })
      .then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent Successful! We'll Be In Touch Soon...");
        } else if (response.data.msg === "fail") {
          alert("Message Failed To Sent!");
        }
      });
  }

  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kevin Do</h2>
            <img
              src="http://i.picasion.com/resize89/6683981a5a1da35cc434e3bb857f3dad.jpg"
              alt="avatar"
              style={{
                objectFit: "cover",
                height: "250px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "5px",
                width: "250px"
              }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am a coder, a reader, a photographer, a passionate traveler. I'm
              coding not because money but to build a better world tomorrow.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div style={{ textAlign: "center" }} className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" arin-hidden="true" />
                    (713) 456-0152
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "28px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" arin-hidden="true" />
                    hoangtuantx92@yahoo.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton"
                    }}
                  >
                    <a
                      style={{ color: "black" }}
                      href="https://www.linkedin.com/in/kevin-do-41802a171/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" arin-hidden="true" />
                      My LinkedIn
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
              <hr />
              <div className="contact-form">
                <h2>Get In Touch</h2>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "20px"
                      }}
                      for="name"
                    >
                      Name:
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      placeholder="Your Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "20px"
                      }}
                      for="name"
                    >
                      Email:
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      placeholder="youremail@example.com"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "20px"
                      }}
                      for="Message"
                    >
                      Message:
                    </Label>
                    <Input
                      style={{ height: "150px" }}
                      type="textarea"
                      name="message"
                      onChange={this.handleChange}
                      placeholder="Message..."
                    />
                  </FormGroup>
                  <Button color="primary" size="lg">
                    Submit
                  </Button>{" "}
                </Form>
              </div>
            </div>
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

export default Contact;
