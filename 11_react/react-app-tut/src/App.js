import React, {Component} from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    chars: []
  };

  removeChar = index => {
    const {chars} = this.state;

    this.setState({
      chars: chars.filter((char, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = char => {
    this.setState({
      chars: [...this.state.chars, char]
    });
    // console.log(this.state.chars);
  };

  render() {
    const {chars} = this.state;
    console.log(chars);

    return (
      <div className="container">
        <Table charsData={chars} removeChar={this.removeChar} />
        <hr />
        <h3>Add a new character</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
