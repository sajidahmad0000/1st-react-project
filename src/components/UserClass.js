import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log("Child COnstructor");

    this.state = {
      userInfo: {
        // name: "Dummy",
        // location: "dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log("Child Render");

    return (
      <div className="userCard">
        <img src={this.state.userInfo.avatar_url} />
        <h2>NAME:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>

        {/* <h2>Name: {this.props.name}</h2>
        <h2>Profession: {this.props.profession}</h2>
        <h2>Location: {this.props.location}</h2> */}
      </div>
    );
  }
}

export default UserClass;
