"use strict";
// console.log = function () {};

// GLOBAL VARIABLES

// selcting the completed-main-content by the class and assigning it a variable completedMainContentElement
const completedMainContentElement = document.querySelector(
  ".completed-main-content"
);

//selecting the incomplete-main-content by the class and assigning it a variable incompleteMainContentElement
const incompleteMainContentElement = document.querySelector(
  ".incomplete-main-content"
);

// selcting the new-task-button by the class and assigning it a variable createButtonElement
const createButtonElement = document.querySelector(".new-task-btn");

// selecting the no-todo-icon by the class and assigning it a variable noTodoIconElement
const noTodoIconElement = document.querySelector(".no-todo-icon");

//selecting incomplete-todo-list by the class and assigning it a variable incompleteTodoListElement
const incompleteTodoListElement = document.querySelector(
  ".incomplete-todo-list"
);

const completedTodoListElement = document.querySelector(".completed-todo-list");

const checkbox = document.querySelector(".checkbox");

//selecting categories-icons by the class and assigning it a variable categoriesIconsDivElement
const categoriesIconsDivElement = document.querySelector(".categories-icons");

// console.log(categoriesIconsDivElement);

// getting the input text element by its class
const textFieldElement = document.querySelector(".new-text");

// getting the input date element by its class
const dateFieldElement = document.querySelector(".date");

//getting the input text element by its class
const timeFieldElement = document.querySelector(".time");

// getting the text area element by its class
const textAreaElement = document.querySelector(".note");

// get the button element by class
const saveButton = document.querySelector(".save-task-btn");

// selcting the home-page by the class and assigning it avaliable HomePage
const homePage = document.querySelector(".home-page");

// selecting the create-page by the class and assigning it avaliable createPage
const createPage = document.querySelector(".create-page");

// selecting the backbtncontainer  and assigning it a variable backbutton
const backButton = document.querySelector(".back-btn-container");

// create constructor function for the category item. it creates the category objects with properties id, name and icon
function CategoryItem(id, name, icon, color) {
  this.id = id;
  this.name = name;
  this.icon = icon;
  this.color = color;
}

//create the 3 new categoryitem instance
const task = new CategoryItem(
  1,
  "Task",
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#194A66"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>',
  "#DBECF6"
);

const goal = new CategoryItem(
  2,
  "Goal",
  '<svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#194A66"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>',
  "#E7E2F3"
);

const appointment = new CategoryItem(
  3,
  "Appointment",
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#194A66"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>',
  "#FEF5D3"
);

// i put my category objects in an array called categories
const categories = [task, goal, appointment];

// create a list for status
const states = [1, 2, 3]; // 1 for incomplete, 2 for completed, 3 for deleted.

// create constructor function for todos. This defines a Todo object with properties like id, title, category, date,time,note and state.
function Todo(_id, title, category, date, time, notes, state) {
  this._id = _id;
  this.title = title;
  this.category = category;
  this.date = date;
  this.time = time;
  this.notes = notes;
  this.state = state;
}
// todo items are stored in this array
let appTodos = [];

// filtering  the todos list to reveal item with a state of 1 (incomplete state.)   .... using function expression
const incompleteTodos = appTodos.filter(function (item) {
  // this explicitly annotates that the item is an object with a state property of type number
  return item.state === 1;
});

// filtering the todos list to reveal item with a state of 2 (completed state.)
const completedTodos = appTodos.filter(function (item) {
  return item.state === 2;
});

// populating the categories div element

// the code in the block only runs if the categoriesIconDivElement is not null
if (categoriesIconsDivElement !== null) {
  // the variable iconsHTML is initilaized as an empty string "" to store the HTML strings for the icons.
  let iconsHTML = ""; // Store the HTML here to avoid multiple DOM updates.

  for (let x = 0; x < categories.length; x++) {
    const category = categories[x]; // Get the current category

    iconsHTML += `
      <div data-id="${category.id}" style="background-color:${category.color}" class="category-icon-container">
        ${category.icon}
      </div>`;
  }

  // Update innerHTML once
  categoriesIconsDivElement.innerHTML += iconsHTML;
}

// categoryIconElementList (NodeList) of all the elements in the DOM that have the class category-icon-container.
const categoryIconElementList = document.querySelectorAll(
  ".category-icon-container"
);

// CREATE TODO FLOW

// if the completedTodos array is not empty, i.e it has a todo item or more.
if (completedTodos.length > 0) {
  // add a class to display the completed todos section
  completedMainContentElement.classList.add("completed-todos-section");
}

function removeNoTodoContentElement() {
  if (createButtonElement !== null) {
    // move the button to the bottom of the page
    createButtonElement.classList.add("bottom-btn");
  }
  // hide the noTodo icon
  if (noTodoIconElement !== null) {
    //remove the notodo icon
    noTodoIconElement.classList.add("hidden");
  }
  // if there is an incomplete todo item, let the content start from the top and not in the middle(without the flex-start)
  if (incompleteMainContentElement !== null) {
    // aligns the incomplete todo items to start from the top and not the middle (like with the nodo icon)
    incompleteMainContentElement.classList.add("flex-start");
  }
}

/// To be described
function attachIconEvent() {
  // console.log("fired");
  // console.log(this.attributes);
  // retrive categoryId using the attribute.index.value
  const retrievedCategoryId = this.attributes[0].value;
  // console.log(retrievedCategoryId);
  const retrievedCategoryItem = getCategoryById(retrievedCategoryId);
  selectedCategoryItem = retrievedCategoryItem;
  // console.log(retrievedCategoryItem);

  // console.log("clicked icon");
  // toggling the active state
  if (selectedCategoryItem !== null) {
    categoryIconElementList.forEach((categoryIconElement) => {
      categoryIconElement.classList.remove("active");
    });

    const categoryIconElementArray = Array.from(categoryIconElementList);
    // console.log(categoryIconElementArray);
    const selectedCategoryElement = categoryIconElementArray.find(
      (iconElement) => {
        return iconElement.dataset.id == retrievedCategoryId;
      }
    );
    // console.log(selectedCategoryElement);
    selectedCategoryElement.classList.add("active");
  }
}

// SWITCHING PAGE

// We switch page after clicking create todo button to display the create page by hiding the home page

// this function switches from homepage to create page.
// isHomePage parameter indicates if i am swtching from home page to create page is true
function switchPage(isHomePage) {
  if (isHomePage) {
    // loop through the category icons. using forEach(array method) to loop over all items in the icon containers (nodelist)
    categoryIconElementList.forEach((icon) => {
      // console.log("enter");
      // adding an event listener to each icon
      icon.addEventListener("click", attachIconEvent);
    });

    homePage.classList.add("hidden");
    createPage.classList.remove("hidden");
  } else {
    resetInputFields();
    // categoryIconElementList.forEach((icon) => {
    //   console.log("enter out");
    //   // adding an event listener to each icon
    //   icon.removeEventListener("click", attachIconEvent);
    // });
    console.log("enter out");
    // reset category icons to NOT ACTIVE
    resetCategoryIcon();

    homePage.classList.remove("hidden");
    createPage.classList.add("hidden");
  }
}

// this function hides the homepage and removes the hidden property and reveals the create page
function openCreatePage() {
  if (createButtonElement !== null) {
    switchPage(true); // this means that i'm switching from homePage to Createpage
  }
}

// add eventlistener to listen the opencreate function so the create page is opened after the click.
createButtonElement.addEventListener("click", openCreatePage);

// adding a goBack function to the event-listener
backButton.addEventListener("click", goBack);

// Function to show the empty page which is just the notodo icon and create button
function noTodoPage() {
  // move the add button to the be under the no todo icon
  createButtonElement.classList.remove("bottom-btn");
  // add the notodo icon
  noTodoIconElement.classList.remove("hidden");
  // move the items to the top of the page
  incompleteMainContentElement.classList.remove("flex-start");
}

// UTILTY FUNCTIONS

// this functions returns empty values for the textfield,date,time and textarea.
function resetInputFields() {
  textFieldElement.value = "";
  dateFieldElement.value = "";
  timeFieldElement.value = "";
  textAreaElement.value = "";
}

function resetCategoryIcon() {
  // constructing an array from the nodelist(categoryIconElementList) and assigning it a variable categoryElementArray
  const categoryElementArray = Array.from(categoryIconElementList);
  if (selectedCategoryItem) {
    // looping through each iconElement
    const selectedCategoryElement = categoryElementArray.find((iconElement) => {
      // console.log(selectedCategoryItem);
      // this returns if the iconElement.id matches the selectedcategoryitem id
      return iconElement.dataset.id == selectedCategoryItem.id;
    });

    // if both id matches remove the border from the selectedCategoryElement
    selectedCategoryElement.classList.remove("active");
  }
}

function goBack() {
  if (backButton !== null) {
    switchPage(false);
  }
}

// the if condition checks if the checkbox variable actually exists in the DOM.
// if (checkbox !== null) {
//   checkbox.addEventListener("change", (event) => {
//     console.log(event);
//     console.log("Hello");

//     const isChecked = event.target.checked;
//   });
// }

// initially no category is selected, so its null
let selectedCategory = null;

let selectedCategoryItem = null;

// Update the content of the <h1> with the new date
const dateElement = document.getElementById("date-display");
document.addEventListener("DOMContentLoaded", () => {
  // Select the <h1> element
  const dateElement = document.getElementById("dateDisplay");

  const currentDate = new Date();

  // Get the full month name (e.g., "October")
  const month = currentDate.toLocaleString("default", { month: "long" });

  // Get the day of the month (e.g., "20")
  const day = currentDate.getDate();

  // Get the full year (e.g., "2024")
  const year = currentDate.getFullYear();

  // Format the date as "Month Day, Year"
  const formattedDate = `${month} ${day}, ${year}`;

  if (dateElement !== null) {
    // Update the content of the <h1> element
    dateElement.textContent = formattedDate;
  }
});

// Moving to completed list after clicking on checkbox
incompleteTodoListElement.addEventListener("change", async function (event) {
  console.log("ceeeeeeee");
  // check if the event is triggered by a checkbox inside a todo item
  if (event.target.classList.contains("checkbox")) {
    const checkbox = event.target;
    const todoElement = checkbox.closest(".todo");

    const todoItemId = todoElement.dataset.id;
    console.log(todoItemId);

    // check if the checkbox is checked
    if (checkbox.checked) {
      const todo = await updateTodoState(todoItemId, 2);

      // move the todo item to the completed list and insert it at the top
      completedTodoListElement.insertAdjacentElement("afterbegin", todoElement);

      //apply the strikethrough effect
      todoItem.classList.add("strike-through");

      // show the  completed list if it has items
      if (completedTodoListElement.children.length > 0) {
        completedMainContentElement.style.display = "block";
        incompleteMainContentElement.classList.remove(
          "incomplete-empty-display"
        );

        //adding class with view port height to the incompletemaincontent
        incompleteMainContentElement.classList.add("incomplete-max-height");
      }
      if (incompleteTodoListElement.children.length === 0) {
        incompleteMainContentElement.classList.add("incomplete-empty-display");
      }
    }
  }
});

// moving tasks back to incomplete after unchecking the checkbox
completedTodoListElement.addEventListener("change", function (event) {
  if (event.target.classList.contains("checkbox")) {
    const checkbox = event.target;
    const todoItem = checkbox.closest(".todo");

    if (!checkbox.checked) {
      //Move the todo item back to the incomplete list
      incompleteTodoListElement.prepend(todoItem);

      //remove the strikethrough effect
      todoItem.classList.remove("strike-through");

      // hide completed list if it's empty
      if (completedTodoListElement.children.length === 0) {
        completedMainContentElement.style.display = "none";
        completedMainContentElement.classList.add("completed-main-content");
        incompleteMainContentElement.classList.remove("incomplete-max-height");
      }
    }
  }
});

function getCategoryById(id) {
  const strId = id;
  const numId = Number(strId);

  // console.log(typeof id);
  const foundCategory = categories.find(function (category) {
    // console.log(typeof category.id);
    return category.id === numId;
  });
  return foundCategory;
}

function renderTodos(todos) {
  const incompleteTodoListElement = document.getElementById(
    "incomplete-todo-list"
  ); // Ensure this exists in your HTML
  incompleteTodoListElement.innerHTML = ""; // Clear existing content

  const completedTodoListElement = document.getElementById(
    "completed-todo-list"
  ); // Ensure this exists in your HTML
  completedTodoListElement.innerHTML = ""; // Clear existing content

  todos.forEach((todo) => {
    // loop through the reversed list
    const li = document.createElement("li");
    li.classList.add("todo");
    li.dataset.id = todo._id;

    li.addEventListener("click", populateUpdateFields);

    li.innerHTML = `<div  class="icon-text-container">
      <div data-id="${todo.category.id}" style="background-color:${todo.category.color}" class="category-icon-container">

        ${todo.category.icon}
      </div>

      <p class="todo-text">${todo.title}</p>
    </div>
    <div class="checkbox-delete-container">
      <div class="checkbox-container">
        <input type="checkbox" class="checkbox" />
      </div>
      <div class="delete-icon">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_83_362)">
            <path
              d="M20.25 5.25H3.75"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.75 9.75V15.75"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.25 9.75V15.75"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_362">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>`;

    // Add event listener to the delete icon
    const deleteIcon = li.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", deleteTodo);

    if (todo.state == 1) {
      incompleteTodoListElement.appendChild(li);
    } else if (todo.state == 2) {
      //apply the strikethrough effect
      li.classList.add("strike-through");

      completedTodoListElement.appendChild(li);
    }
  });

  // show the  completed list if it has items
  if (completedTodoListElement.children.length > 0) {
    completedMainContentElement.style.display = "block";
    incompleteMainContentElement.classList.remove("incomplete-empty-display");

    //adding class with view port height to the incompletemaincontent
    incompleteMainContentElement.classList.add("incomplete-max-height");
  }

  if (incompleteTodoListElement.children.length === 0) {
    incompleteMainContentElement.classList.add("incomplete-empty-display");
  }
}

//FETCH API. CONNECTION BETWEEN F.E AND B.E

//  API CALLS

const API_URL = "http://localhost:3000/api/todos"; // my backend URL.. where my data is fetched from

// FETCH ALL TODOS FROM B.E
async function fetchTodos() {
  try {
    const response = await fetch(API_URL); // a GET request to the B.E API to retrieve the list.
    const todos = await response.json(); // json converts the response into an object
    // console.log("todos:", todos);
    return todos; // the fetched data should return from the function
  } catch (error) {
    console.log("Error fetching todos:", error);
  }
}

// AFTER FETCHING TODOS FROM B.E, DISPLAY THEM ON F.E(UPDATE THE UI)
async function loadFromDataBase() {
  try {
    const storedTodos = await fetchTodos(); // fecth todos from the B.E and store in StoredTOdos
    console.log(storedTodos);
    if (storedTodos && storedTodos.length > 0) {
      // move the add button to the end of the page
      createButtonElement.classList.add("bottom-btn");
      // remove the notodo icon
      noTodoIconElement.classList.add("hidden");
      // move the items to the top of the page
      incompleteMainContentElement.classList.add("flex-start");

      appTodos = storedTodos;
      console.log(appTodos);

      // the newest task should the first on the list
      renderTodos(appTodos);
    } else {
      noTodoPage();
    }
  } catch (error) {
    console.log("error fetching todos:", error);
  }
}

loadFromDataBase();

// HANDLING BOTH SAVE AND UPDATE
async function handleTodo(event) {
  // to prevent browser from reloading after submit
  event.preventDefault();

  let textFieldValue = textFieldElement.value;
  let dateFieldValue = dateFieldElement.value;
  let timeFieldValue = timeFieldElement.value;
  let textAreaField = textAreaElement.value;

  // this ensures a category is selected
  if (!selectedCategoryItem) {
    alert("Please select a category!");
    return; // return the selected category
  }

  // to check if all required fields are filled
  if (
    textFieldValue &&
    dateFieldValue &&
    timeFieldValue &&
    selectedCategoryItem
  ) {
    // Create new todo object
    const todoItem = {
      title: textFieldValue,
      category: selectedCategoryItem,
      date: dateFieldValue,
      time: timeFieldValue,
      notes: textAreaField,
      state: 1, // Default state for new todos (1 = Incomplete)
    };

    // EXISTING TODOID IS ONLY PRESENT IF THERE IS AN ALREADY CREATED TASK AND IT IS BEING CLICKED ON
    const existingTodoId = event.target.dataset.id;

    if (existingTodoId) {
      // UPDATE EXISTING TODO

      try {
        // Make a PUT request to update the todo in the database
        const response = await fetch(
          `http://localhost:3000/api/todos/${existingTodoId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(todoItem),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update todo");
        }

        const todos = await response.json();

        renderTodos(todos);

        // Hide the form and return to home page
        goBack();

        // change button text back to SAVE after update is done.
        saveButton.innerHTML = "Save";

        // Clear saveButton dataset
        event.target.removeAttribute("data-id");
      } catch (error) {
        console.error("Error updating todo:", error);
        alert("Failed to update todo. Please try again.");
      }
    } else {
      // SAVING A NEWLY CREATED TODO

      try {
        console.log("Sending Todo:", todoItem); // Debugging

        // Send todo to backend
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todoItem),
        });

        const savedTodo = await response.json();
        console.log("Full backend response:", savedTodo);

        // Handle server error response

        if (!response.ok || !savedTodo.todo) {
          // If the server response is not ok, throw an error
          throw new Error("Failed to save todo");
        }
        console.log("Received from backend:", savedTodo.todo);
        // Add the new todo to the UI
        appTodos.unshift(savedTodo.todo); // add new todo at the beginning

        renderTodos(appTodos);

        // Remove no-todo UI elements and let incomplete items start at the top of the page
        if (appTodos.length > 0) {
          removeNoTodoContentElement();
        }

        alert("Task created successfully");

        // Hide create page, show home page
        createPage.classList.add("hidden");
        homePage.classList.remove("hidden");
      } catch (error) {
        console.error("Error saving todo:", error);
        alert("Error saving todo. Please try again.");
      }
    }
  } else {
    alert("Fill complete form");
  }

  // Reset the form inputs
  resetInputFields();
  resetCategoryIcon();
}

if (saveButton !== null) {
  // add an event to the button so it can save the todoitem
  saveButton.addEventListener("click", handleTodo);
}

// function to delete items from both incompletetodolist and completetodolist
async function deleteTodo(event) {
  // this works to prevent bubbling(propagation) of this event from the todolist(both incomplete and complete)
  event.stopPropagation();
  // to check if the Todolist has a delete icon present
  if (event.target.closest(".delete-icon")) {
    console.log("Delete icon clicked");
    // finding the closest todo element to the clicked delete icon
    const todoItem = event.target.closest(".todo");
    // console.log("present");
    // if a todo element exists
    if (todoItem) {
      // showing a confirmation dialogue to the user
      const isconfirmed = confirm("Are you sure you want to delete this item");
      if (isconfirmed) {
        // Extracting the correct mongo db id
        const idToDelete = todoItem.getAttribute("data-id");
        console.log(idToDelete);
        try {
          const response = await fetch(
            `http://localhost:3000/api/todos/${idToDelete}`,
            {
              method: "DELETE",
            }
          );

          if (!response.ok) {
            throw new Error("Failed to delete todo");
          }

          //remove the todo item from the DOM and it removes from the ui immediately
          todoItem.remove();

          // Remove the todo with the idtodelete from the array and display the rest of the todos
          appTodos = appTodos.filter((todo) => todo._id !== idToDelete);

          renderTodos(appTodos);
          alert("Todo deleted successfully!");

          // when the incompletelist becomes empty
          if (incompleteTodoListElement.children.length === 0) {
            console.log("no present todoitem");
            // maintain a minimum height of 150px
            incompleteMainContentElement.classList.add(
              "incomplete-empty-display"
            );
          }

          if (completedTodoListElement.children.length === 0) {
            // when there is item in the completedtodlist, remove the display and let the incomplete list appear full screen.
            completedMainContentElement.style.display = "none";
            // completedMainContentElement.classList.add("complete-main-content");
            // the incompletelist takes the full page
            incompleteMainContentElement.classList.remove(
              "incomplete-max-height"
            );
          }

          if (
            incompleteTodoListElement.children.length === 0 &&
            completedTodoListElement.children.length === 0
          ) {
            console.log("no todo items");
            // show the empty page which is just the notodo icon and create button
            noTodoPage();
          }
        } catch (error) {
          console.error("Error deleting todo:", error);
          alert("Error deleting todo. Please try again.");
        }
      }
    }
  }
}

//FUNCTION TO GET A SINGLE TODO BY ID
async function getTodoById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/todo/${id}`); // Make a request to the backend
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }
    const foundTodo = await response.json(); // Parse the JSON response
    // console.log("Fetched Todo:", foundTodo);
    return foundTodo;
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    return null; // Return null if there was an error
  }
}

//FUNCTION TO UPDATE STATE
async function updateTodoState(id, newState) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/todos/${id}/state`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: newState }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Todo State");
    }
    const updatedTodo = await response.json();
    return updatedTodo;
  } catch (error) {
    return null;
  }
}

// THIS FUNCTION SIMPLY POPULATES THE RETRIEVED VALUES OF A SINGLE TODO
async function populateUpdateFields(event) {
  // console.log("Populating Update Fields");

  event.stopPropagation();

  const target = event.target; // Value is the LI

  // console.log(event.target);

  const clickedLi = target.closest("li"); // Find the closest <li> being clicked on

  // console.log(clickedLi);

  if (!clickedLi) {
    return;
  }

  // Retrieve the ID of the clickedLi using dataset
  const retrievedTodoId = clickedLi.dataset.id || null;

  // Check todo data ID
  if (!retrievedTodoId) {
    console.log("No Todo ID FOUND");
    return;
  }

  // Prevent switching page if checkbox is clicked
  if (target.classList.contains("checkbox")) {
    // checkbox clicked
    const isChecked = target.checked;
    console.log(isChecked);
    if (isChecked) {
      const todo = await updateTodoState(retrievedTodoId, 2);

      //apply the strikethrough effect
      clickedLi.classList.add("strike-through");
    }
    return; // Stop execution if it's the checkbox
  }

  saveButton.innerHTML = "Update";

  switchPage(true);
  // updatebtn.style.display = "block";

  // Store the Todo Id inside the saveButton dataset
  saveButton.dataset.id = retrievedTodoId;

  // console.log("Retrieved Todo ID:", retrievedTodoId);

  // Fetch the todo from the backend
  const retrievedTodo = await getTodoById(retrievedTodoId);
  // console.log("Retrieved Todo:", retrievedTodo);

  if (!retrievedTodo) {
    console.error("Todo not found");
    return;
  }

  // Populate the form fields
  textFieldElement.value = retrievedTodo.title || "";
  dateFieldElement.value = retrievedTodo.date || "";
  timeFieldElement.value = retrievedTodo.time || "";
  textAreaElement.value = retrievedTodo.notes || "";

  // Ensure category is correctly assigned
  if (retrievedTodo.category) {
    selectedCategoryItem = retrievedTodo.category;
    // console.log("Category:", selectedCategoryItem);

    // Highlight the selected category in UI
    const categoryElementArray = Array.from(categoryIconElementList);
    const selectedCategoryElement = categoryElementArray.find(
      (iconElement) => iconElement.dataset.id == selectedCategoryItem.id
    );

    if (selectedCategoryElement) {
      selectedCategoryElement.classList.add("active");
    }
  }
}
