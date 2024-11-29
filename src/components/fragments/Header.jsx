import React from "react";
import SearchBar from "../elements/SearchBar";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    if (!event || !event.target) {
      console.error("Event atau event.target tidak valid:", event);
      return;
    }

    const { value } = event.target;
    this.setState({ searchQuery: value });

    this.props.onSearchChange(value);
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="note-app__header">
        <h1>SolNotes</h1>
        <SearchBar
          searchValue={searchQuery}
          onSearchChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default Header;
