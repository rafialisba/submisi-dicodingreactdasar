import React from "react";
import Header from "../components/fragments/Header";
import Body from "../components/fragments/Body";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(query) {
    this.setState({ searchQuery: query });
  }

  render() {
    return (
      <div>
        <Header onSearchChange={this.handleSearchChange} />
        <Body searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}

export default NotesApp;
