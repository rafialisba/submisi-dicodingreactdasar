import React from "react";

class FormInput extends React.Component {
  render() {
    const {
      maxTitleCharacters,
      handleAddNote,
      handleTitleChange,
      titleValue,
      bodyValue,
    } = this.props;

    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat catatan</h2>
        <p id="characterCounter" className="note-input__title__char-limit">
          Sisa karakter: {maxTitleCharacters - titleValue.length}
        </p>
        <form onSubmit={handleAddNote}>
          <input
            type="text"
            onChange={handleTitleChange}
            maxLength={maxTitleCharacters}
            placeholder="Ini adalah judul ..."
            name="titleInput"
            value={titleValue}
          />
          <textarea
            placeholder="Tuliskan catatanmu di sini ..."
            name="bodyInput"
            value={bodyValue}
            onChange={handleTitleChange}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default FormInput;
