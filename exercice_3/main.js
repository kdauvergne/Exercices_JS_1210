const submit = document.querySelector("button");
const input = document.querySelector("input");
const error = document.querySelector("#error");
const tagList = document.querySelector("#tag-list");
const tagsText = document.querySelector("#tags-text");

const tabTags = [];

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (value === "") return;

  if (tabTags.includes(value)) {
    error.textContent = `${value} existe déjà !`;
    return;
  }

  error.textContent = "";
  tabTags.push(value);

  const tag = document.createElement("li");
  tag.classList.add("tag");
  tag.textContent = value;
  tagList.appendChild(tag);

  tagsText.textContent = `Tags : ${tabTags.join(", ")}`;

  input.value = "";
});
x;
