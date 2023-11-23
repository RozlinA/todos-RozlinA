import "./../scss/style.scss";

const formContainer = document.getElementById("form-box");
const formTag = document.createElement("form");
const inputTag = document.createElement("input");
const submitButton = document.createElement("button");

inputTag.id = "input-id";
inputTag.type = "text";
inputTag.value = "";
inputTag.placeholder = "Write your task here...";
submitButton.innerHTML = "Add";
submitButton.id = "add-btn";

formContainer.appendChild(formTag);
formTag.appendChild(inputTag);
formTag.appendChild(submitButton);

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  if (inputTag.value === ""){
    alert ("You must write something!");
  }
  else {document.getElementById("input-id").value;
  myList.push (new List(inputTag.value, false));
  createHtmlForList();
  }
  inputTag.value = "";
});

class List {
  task;
  taskDone;

  constructor (task, taskDone){
    this.task = task;
    this.taskDone = taskDone;
  }
}

const list = new List ("Fixa julspellista", false);
const list2 = new List ("Julpynta", false);
const list3 = new List ("Julbaka", false);
const list4 = new List ("Inhämta önskelistor", false);
const list5 = new List ("Köp julklappar", false);
const list6 = new List ("Klä granen", false);

const myList = [list, list2, list3, list4, list5, list6];

const createHtmlForList = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const ulTag = document.createElement("ul");

  myList.forEach((list, i) => {
    const listContainer = document.createElement("div");
    const liTag = document.createElement("li");
    const spanTag = document.createElement("span");
    const removeButton = document.createElement ("button");
    const doneButton = document.createElement("button");
    
    listContainer.className = "list-box";
    liTag.innerHTML = myList[i].task;

    removeButton.innerHTML = "<i class='bi bi-x'></i>";
    removeButton.className = "remove-btn";
    doneButton.innerHTML = "Undo";
    doneButton.className = "done-btn";

    container.appendChild(formContainer);
    container.appendChild(ulTag);
    ulTag.appendChild(listContainer);
    listContainer.appendChild(liTag);
    listContainer.appendChild(spanTag);
    spanTag.appendChild(removeButton);
    spanTag.appendChild(doneButton);

    doneButton.addEventListener("click", (e) => {
      myList[i].taskDone = !myList[i].taskDone;
      createHtmlForList();
    });

    removeButton.addEventListener("click", (e) => {
      myList.splice(i, 1);
      createHtmlForList();
    });
    if (myList[i].taskDone === true) {
      liTag.className="task" 
    }
    else {
      doneButton.innerHTML = "Done";
    }
  });
};

createHtmlForList();

console.log(myList);

