import React from "react";

const NoteAppList = ({
  notes,
  formatDate,
  handleDeleteNote,
  handleArchiveNote,
}) => {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  return (
    <div>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item__content note-item">
            <h3 className="note-item__title">{note.title}</h3>
            <div className="note-item__body">
              <p className="note-item__date">{formatDate(note.createdAt)}</p>
              <p className="note-item__paragraf">{note.body}</p>
              <div className="note-item__action">
                <button
                  className="note-item__archive-button"
                  onClick={() => handleArchiveNote(note.id)}
                >
                  {note.archived ? "Pindahkan" : "Arsipkan"}
                </button>
                <button
                  className="note-item__delete-button"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteAppList;
