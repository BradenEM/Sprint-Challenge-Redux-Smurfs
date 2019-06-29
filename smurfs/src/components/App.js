import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      smurf: { ...this.state.smurf, [e.target.name]: e.target.value }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => (
          <div key={smurf.name}>
            <h1>{smurf.name}</h1>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height} </h3>
          </div>
        ))}
        <form onSubmit={this.addSmurf}>
          <input
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.smurf.name}
          />
          <input
            placeholder="Age"
            name="age"
            onChange={this.handleChange}
            value={this.state.smurf.age}
          />
          <input
            placeholder="Height"
            name="height"
            onChange={this.handleChange}
            value={this.state.smurf.height}
          />
          <button onClick={this.addSmurf}>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
