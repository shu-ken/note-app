import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  onAndNote,
  notes,
  onDeleteNote,
  setActiveNote,
  activeNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modData - a.modData);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAndNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => {
          return (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              onClick={() => setActiveNote(note.id)}
              key={note.id}
            >
              <div className="app-sidebar-title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>削除</button>
              </div>
              <p>{note.content}</p>
              <small>
                {new Date(note.modData).toLocaleDateString("ja-JP", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
