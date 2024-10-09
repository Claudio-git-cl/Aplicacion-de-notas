document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNote();
    });

    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText === '') return;

        const li = document.createElement('li');
        li.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            notesList.removeChild(li);
        });

        li.appendChild(deleteButton);
        notesList.appendChild(li);

        noteInput.value = '';
    }
});
