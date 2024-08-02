// import UserClass from "./userClass";
import User from "./User";
import React, { Component } from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("PARENT COnstructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("PARENT REnder");

    return (
      <div>
        <h1 className="p-4 m-2 font-bold">ABOUT US PAGE</h1>
        <h2 className="p-4 m-2 font-bold">MY Mentor For This Project</h2>

        {/* <UserClass
          name={"SAJID AHMAD"}
          location={"SAHIBABAd"}
          profession={"Student"}
        /> */}
        <User
          name={"AKSHAY SAINI"}
          location={"DEHRADUN"}
          profession={"SWE AND INSTRUCTOR"}
        />
      </div>
    );
  }
}

export default About;
