import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: {},
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rahul0714");
    const json = await data.json();
    console.log(json);
    this.setState({ profileInfo: json }); //two render because setstate nantar render
    console.log("componentDidMount");
  }

  render() {
    console.log("Render");
    return (
      <div className="flex flex-col justify-center items-center">
        <img
          className="shadow-md"
          src={this?.state?.profileInfo?.avatar_url}
          alt="Avatar"
        />
        {console.log(this?.state?.profileInfo?.avatar_url)}
        <h1 className="text-4xl">{this?.state?.profileInfo?.name}</h1>
        <h1 className="text-xl">{this?.state?.profileInfo?.bio}</h1>
      </div>
    );
  }
}

export default Profile;
