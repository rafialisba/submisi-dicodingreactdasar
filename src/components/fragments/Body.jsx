import React from "react";
import FormInput from "../elements/FormInput";
import NoteAppList from "../elements/NoteAppList";
import { getInitialData } from "../../utils/index";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: JSON.parse(sessionStorage.getItem("notes")) || getInitialData(),
      titleInput: "",
      bodyInput: "",
    };

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
  }

  handleAddNote(event) {
    event.preventDefault();

    const { titleInput, bodyInput } = this.state;

    if (!titleInput.trim() || !bodyInput.trim()) {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: titleInput,
      body: bodyInput,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    const updatedNotes = [...this.state.notes, newNote];
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));

    this.setState({
      notes: updatedNotes,
      titleInput: "",
      bodyInput: "",
    });
  }

  handleDeleteNote(noteId) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
    this.setState({ notes: updatedNotes });
  }

  handleArchiveNote(noteId) {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === noteId ? { ...note, archived: !note.archived } : note
    );
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
    this.setState({ notes: updatedNotes });
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    if (name === "titleInput" && value.length > 50) return;

    this.setState({ [name]: value });
  }

  render() {
    const { notes } = this.state;
    const { searchQuery } = this.props;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const unarchivedNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <div className="note-app">
        <div className="note-app__body">
          <FormInput
            maxTitleCharacters={50}
            handleAddNote={this.handleAddNote}
            handleTitleChange={(event) => this.handleInputChange(event)}
            titleValue={this.state.titleInput}
            bodyValue={this.state.bodyInput}
          />

          <h2>Catatan</h2>
          <NoteAppList
            notes={unarchivedNotes}
            formatDate={(dateString) =>
              new Date(dateString).toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }
            handleDeleteNote={(noteId) => this.handleDeleteNote(noteId)}
            handleArchiveNote={(noteId) => this.handleArchiveNote(noteId)}
          />

          <h2>Arsip</h2>
          <NoteAppList
            notes={archivedNotes}
            formatDate={(dateString) =>
              new Date(dateString).toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }
            handleDeleteNote={(noteId) => this.handleDeleteNote(noteId)}
            handleArchiveNote={(noteId) => this.handleArchiveNote(noteId)}
          />
        </div>
      </div>
    );
  }
}

export default Body;
