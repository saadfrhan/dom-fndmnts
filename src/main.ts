import { loadFromStorage, saveToStorage } from "./storage";
import type { Contact } from "./types";

const addInput = document.getElementById("add") as HTMLInputElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const searchButton = document.getElementById("search-button") as HTMLButtonElement;


let contacts: Contact[] = loadFromStorage<Contact[]>("contacts", []);



function render(filterText: string = "") {
  const list = document.getElementById("contact-list")!;
  list.innerHTML = "";
  contacts
    .filter(c => c.name.toLowerCase().includes(filterText.toLowerCase()))
    .forEach(c => {
      const li = document.createElement("li");
      li.textContent = c.name;
      const del = document.createElement("button");
      del.textContent = "x";
      del.addEventListener("click", () => {
        contacts = contacts.filter(x => x.id !== c.id);
        saveToStorage("contacts", contacts);
        render(filterText);
      });
      li.appendChild(del);
      list.appendChild(li);
    });
}

let currentFilter = "";

addButton.addEventListener("click", () => {
  const name = addInput.value.trim();
  if (name) {
    const newContact: Contact = { id: Date.now(), name };
    contacts.push(newContact);
    saveToStorage("contacts", contacts);
    render(currentFilter);
  }
  addInput.value = "";
});

searchButton.addEventListener("click", () => {
  currentFilter = searchInput.value.trim();
  render(currentFilter);
});

render();
