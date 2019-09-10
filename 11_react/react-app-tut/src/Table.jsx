import React, {Component} from "react";

const TabelHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.charsData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeChar(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const {charsData, removeChar} = this.props;
    return (
      <table>
        <TabelHeader />
        <TableBody charsData={charsData} removeChar={removeChar} />
      </table>
    );
  }
}

export default Table;
