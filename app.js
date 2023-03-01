"use strict";

const notes = ["do", "re", "mi", "fa", "sol", "la", "si"];

const stopNotes = () => {
  notes.forEach((note) => {
    const sound = document.getElementById(note);

    sound.pause();
    sound.currentTime = 0;
  });
};

notes.forEach((note) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = note;

  btn.addEventListener("click", () => {
    stopNotes();

    document.getElementById(note).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
