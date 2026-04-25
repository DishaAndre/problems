let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${note}
      <button class="delete" onclick="deleteNote(${index})">X</button>
    `;

    list.appendChild(li);
  });
}

function addNote() {
  const input = document.getElementById("noteInput");
  const value = input.value.trim();

  if (value === "") return;

  notes.push(value);
  input.value = "";

  saveNotes();
  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  displayNotes();
}

// Initial load
displayNotes();
