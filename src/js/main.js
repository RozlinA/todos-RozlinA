import "./../scss/style.scss";

const myList = ["Fixa julspellista", "Julpynta", "Julbaka", "Inhämta önskelistor", "Köp julklappar", "Klä granen"];

const createHtmlForList = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const ulTag = document.createElement("ul");

  myList.forEach((list, i) => {
    const listContainer = document.createElement("div");
    const liTag = document.createElement("li");
    const doneButton = document.createElement("button");
    
    listContainer.className = "list-box";
    liTag.innerHTML = list;

    doneButton.innerHTML = "Klar";
    doneButton.addEventListener("click", (e) => {
      myList.splice(i, 1);
      createHtmlForList();
    });

    container.appendChild(ulTag);
    ulTag.appendChild(listContainer);
    listContainer.appendChild(liTag);
    listContainer.appendChild(doneButton);
  });
};

createHtmlForList();
