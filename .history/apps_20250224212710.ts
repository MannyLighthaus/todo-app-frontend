// create constructor function for the category item. it creates the category objects with properties id, name and icon
// using the class keyword to create the categoryitem object and assigning a specific type annotation to the properties.
class CategoryItem {
  id: number;
  name: string;
  icon: string;
  color: string;

  // this constructor is a method that sets up the object (initialize) the object and gets it ready to use

  constructor(id: number, name: string, icon: string, color: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.color = color;
  }
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

// this function gets a category by its ID
// function getCategoryById(id:) {
//   // it goes through the array to find each category item by its id
//   const foundCategory = categories.find(function (categoryItem) {
//     return categoryItem.id == id;
//   });
//   console.log(foundCategory);

//   return foundCategory;
// }

// create a list for status
const states = [0, 1, 2]; // 0 for completed, 1 for incomplete, 2 for deleted.

// create constructor function for todos. This defines a Todo object with properties like id, title, category, date,time,note and state.
// class Todo {
//   id: number;
//   title: string;
//   category: CategoryItem | undefined | null;
//   date: string;
//   time: string;
//   notes?: string; //optional property
//   state: number;
//   constructor(
//     id: number,
//     title: string,
//     category: CategoryItem | undefined | null,
//     date: string,
//     time: string,
//     note: string,
//     state: number
//   ) {
//     this.id = id;
//     this.title = title;
//     this.category = category;
//     this.date = date;
//     this.time = time;
//     this.notes = note;
//     this.state = state;
//   }
// }

interface Todo {
  id: number;
  title: string;
  category: CategoryItem | undefined | null;
  date: string;
  time: string;
  notes: string; //optional property  notes?: string;
  state: number;
}
// array to store todo items
// todos: Todo[] explicitly defines that todo:Todo[] will store objects of type Todo
let todos: Todo[] = [];

// filtering  the todos list to reveal item with a state of 1 (incomplete state.)   .... using function expression
const incompleteTodos = todos.filter(function (item) {
  // this explicitly annotates that the item is an object with a state property of type number
  return item.state === 1;
});
// console.log(incompleteTodos, todos);

// filtering the todos list to reveal item with a state of 0 (completed state.)
const completedTodos = todos.filter(function (item) {
  return item.state === 0;
}); // empty array
// console.log(completedTodos);

// selcting the completed-main-content by the class and assigning it a variable completedMainContentElement
const completedMainContentElement = document.querySelector(
  ".completed-main-content"
) as HTMLElement;

// if the completedTodos array is not empty, i.e it has a todo item or more.
if (completedTodos.length > 0) {
  // add a class to indicate that there are completed todos.
  completedMainContentElement?.classList.add("todos-present");
}

//selecting the incomplete-main-content by the class and assigning it a variable incompleteMainContentElement
const incompleteMainContentElement = document.querySelector(
  ".incomplete-main-content"
);
// selcting the new-task-button by the class and assigning it a variable createButtonElement
const createButtonElement = document.querySelector(".new-task-btn");
// selecting the no-todo-icon by the class and assigning it a variable noTodoIconElement
const noTodoIconElement = document.querySelector(".no-todo-icon");

// if there is a todo item, move the createButton to the bottom of the page.
if (todos.length > 0) {
  if (createButtonElement !== null) {
    createButtonElement.classList.add("bottom-btn");
  }
  // hide the noTodo icon
  if (noTodoIconElement !== null) {
    noTodoIconElement.classList.add("hidden");
  }
  // if there is an incomplete todo item, let the content start from the top and not in the middle(without the flex-start)
  if (incompleteMainContentElement !== null) {
    //   // aligns the incomplete todo items to start from the top and not the middle (like with the nodo icon)
    incompleteMainContentElement.classList.add("flex-start");
  }
}

//selecting incomplete-todo-list by the class and assigning it a variable incompleteTodoListElement
const incompleteTodoListElement = document.querySelector(
  ".incomplete-todo-list"
);

// querySelector type annotation tells TS that the .checkbox element is an input element
const checkbox = document.querySelector<HTMLInputElement>(".checkbox");

// the if condition checks if the checkbox variable actually exists in the DOM.
if (checkbox !== null) {
  checkbox.addEventListener("change", (event: Event) => {
    // type assertion for event.target
    // this ensures event.target is an HTMLInputElement. if target is null the checked property is not accessible
    const target = event.target as HTMLInputElement | null;

    if (target) {
      const isChecked = target.checked;
      // console.log(isChecked); // Use the isChecked value as needed
    }
  });
}

//selecting categories-icons by the class and assigning it a variable categoriesIconsDivElement
const categoriesIconsDivElement = document.querySelector(".categories-icons");
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
// initially no category is selected, so its null
let selectedCategory: CategoryItem | undefined | null = null;
// this defines that selectedCategoryItem can hold the Categoryitem values ,undefined or null
let selectedCategoryItem: CategoryItem | undefined | null = null;

//categoryIconElementList (NodeList) of all the elements in the DOM that have the class category-icon-container.
const categoryIconElementList = document.querySelectorAll(
  ".category-icon-container"
);
// console.log(Array.from(categoryIconElementList));
// loop through the category icons. using forEach(array method) to loop over all items in the iconcontainers (nodelist)
categoryIconElementList.forEach((icon) => {
  // console.log(icon);
  // adding an event listener to each icon
  icon.addEventListener("click", function () {
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
          // console.log(iconElement);
          // asserting iconElement to type HTMLElement so that the dadtaset property can be accessed
          return (iconElement as HTMLElement).dataset.id == retrievedCategoryId;
        }
      );
      // console.log(selectedCategoryElement);
      selectedCategoryElement?.classList.add("active");
    }
  });
});

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

let id = 0;

// getting the input text element by its class
const textFieldElement = document.querySelector(
  ".new-text"
) as HTMLInputElement;
// getting the input date element by its class
const dateFieldElement = document.querySelector(".date") as HTMLInputElement;
//getting the input text element by its class
const timeFieldElement = document.querySelector(".time") as HTMLInputElement;
// getting the text area element by its class
const textAreaElement = document.querySelector(".note") as HTMLInputElement;
// get the button element by class
const saveButton = document.querySelector(".save-task-btn");

function updateItemById(array, id, updates) {
  // Find the index of the item with the matching id
  const index = array.findIndex((item) => item.id === id);

  // Check if the item exists
  if (index !== -1) {
    // Update the item by merging the current item with the updates
    array[index] = { ...array[index], ...updates };
    // console.log(array);
    return array; // Return new array
  } else {
    return null; // Return null if the item is not found
  }
}

function updateTodo(event: Event, todo) {
  // to prevent browser from reloading after submit
  event.preventDefault();

  // retrieve the value of the input field
  let textFieldValue: string = textFieldElement.value; // so i can access the propery(value) of the textfieldElement
  //retrieve the value of the datefield
  let dateFieldValue: string = dateFieldElement.value;
  //retrieve the value of the timefield
  let timeFieldValue: string = timeFieldElement.value;
  //retrieve the value of the textarea
  let textAreaField: string = textAreaElement.value;

  selectedCategory = todo.category;

  const editedTodoItem = {
    id: todo.id,
    title: textFieldValue,
    category: selectedCategoryItem,
    date: dateFieldValue,
    time: timeFieldValue,
    notes: textAreaField,
    state: 1,
  };

  // Find the index of the updated todo by Id
  const index = todos.findIndex(function (item) {
    return item.id === editedTodoItem.id;
  });

  // Check if the updated todo item exists in todo list
  if (index !== -1) {
    // Update the item by merging the current item with the updates
    todos[index] = editedTodoItem;
    // console.log(todos);

    // Update DOM

    // Get DOM element
    const editedTodoElement: HTMLElement | null = document.querySelector(
      `[data-id="${editedTodoItem.id}"`
    );

    // Check if the element exists before trying to update the dataset attributes
    if (editedTodoElement) {
      // Update data attributes
      editedTodoElement.dataset.date = editedTodoItem.date;
      editedTodoElement.dataset.time = editedTodoItem.time;
      editedTodoElement.dataset.notes = editedTodoItem.notes;
      editedTodoElement.dataset.category = editedTodoItem.category;
    }

    // Update Content
    if (editedTodoElement) {
      editedTodoElement.innerHTML = `
      <div  class="icon-text-container">
      <div data-id="${selectedCategory?.id}" style="background-color:${selectedCategoryItem?.color}" class="category-icon-container">
        
         ${selectedCategoryItem?.icon}
      </div>

      <p class="todo-text">${editedTodoItem.title}</p>
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
    </div>
  `;
    }

    createPage?.classList.add("hidden");
    homePage?.classList.remove("hidden");
  }
}

function saveTodo(event: Event) {
  // to prevent browser from reloading after submit
  event.preventDefault();

  // retrieve the value of the input field
  let textFieldValue: string = textFieldElement.value; // so i can access the propery(value) of the textfieldElement
  //retrieve the value of the datefield
  let dateFieldValue: string = dateFieldElement.value;
  //retrieve the value of the timefield
  let timeFieldValue: string = timeFieldElement.value;
  //retrieve the value of the textarea
  let textAreaField: string = textAreaElement.value;

  //ensure a category is selected
  if (!selectedCategoryItem) {
    alert("Please select a category!");
    return;
  }

  // check if all fields are filled
  if (
    textFieldValue !== "" &&
    dateFieldValue !== "" &&
    timeFieldValue !== "" &&
    selectedCategoryItem
  ) {
    // increasing the id when a new todo is created
    let newTodoId = ++id;

    // create a new todo item
    const newTodoItem = {
      id: newTodoId,
      title: textFieldValue,
      category: selectedCategoryItem,
      date: dateFieldValue,
      time: timeFieldValue,
      notes: textAreaField,
      state: 1,
    };

    if (incompleteTodos.length < 1) {
      if (createButtonElement !== null) {
        createButtonElement.classList.add("bottom-btn");
      }
      if (noTodoIconElement !== null) {
        noTodoIconElement.classList.add("hidden");
      }
      if (incompleteMainContentElement !== null) {
        incompleteMainContentElement.classList.add("flex-start");
      }
    }

    todos.push(newTodoItem);
    incompleteTodos.push(newTodoItem);

    // save the todos into the browser's memory
    saveToLocalStorage(); // Save the updated todos array to local storage

    // creating a new a li element and assigning it a variable
    const newLIElement = document.createElement("li");
    //
    newLIElement.classList.add("todo");

    // console.log(newLIElement);
    // the dataset attribute is used to store values in the liElement. (values like id,date,time,notes,category)
    // Update data attributes
    // dataset attributes in TS are always passed as strings but the id is a number so i have to convert the id to a string
    newLIElement.dataset.id = newTodoItem.id.toString(); //toString() converts id from number to string

    newLIElement.innerHTML = `<div  class="icon-text-container">
                  <div data-id="${selectedCategoryItem.id}" style="background-color:${selectedCategoryItem.color}" class="category-icon-container">
                    
                     ${selectedCategoryItem.icon}
                  </div>

                  <p class="todo-text">${newTodoItem.title}</p>
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

    //Insert the new item at the top of the list
    incompleteTodoListElement?.insertBefore(
      newLIElement,
      incompleteTodoListElement.firstChild
    );

    // Show alert after successfully creating the task
    alert("Task created successfully");

    createPage?.classList.add("hidden");

    // Reset the form by clearing all input fields and text area
    textFieldElement.value = ""; // type aasertion operator that says i"m sure this is a valid inputELement
    dateFieldElement.value = "";
    timeFieldElement.value = "";
    textAreaElement.value = "";

    //resetting the icon too
    if (selectedCategoryItem) {
      const categoryIconElementArray = Array.from(categoryIconElementList);
      // console.log(categoryIconElementArray);
      const selectedCategoryElement = categoryIconElementArray.find(
        (iconElement) => {
          // console.log(iconElement);
          return (
            (iconElement as HTMLElement).dataset.id == selectedCategoryItem?.id
          );
        }
      );
      // console.log(selectedCategoryElement);
      selectedCategoryElement?.classList.remove("active");
      selectedCategoryItem = null;
    }

    homePage?.classList.remove("hidden");
    //selecting delete-icon by its class and assigning it a variable deleteButtonElement
    const deleteButtonElement = document.querySelector(
      ".delete-icon"
    ) as HTMLElement;

    // delete items from the todolist
    deleteButtonElement.addEventListener("click", deleteTodo);
  } else {
    alert("Fill complete form");
  }
}

if (saveButton !== null) {
  // add an event to the button
  saveButton.addEventListener("click", saveTodo);
}

// selcting the home-page by the class and assigning it avaliable HomePage
const homePage = document.querySelector(".home-page");
// selecting the create-page by the class and assigning it avaliable createPage
const createPage = document.querySelector(".create-page");

const completedTodoListElement = document.querySelector(
  ".completed-todo-list"
) as HTMLElement;

incompleteTodoListElement?.addEventListener("change", function (event) {
  const target = event?.target;

  if (
    target instanceof HTMLInputElement &&
    target.classList.contains("checkbox")
  ) {
    // Type check to confirm target is an HTMLElement
    const checkbox = target;
    const todoItem = checkbox.closest(".todo");

    if (todoItem) {
      if (checkbox.checked) {
        // Move the todo item to the completed list and insert it at the top
        completedTodoListElement?.insertAdjacentElement("afterbegin", todoItem);

        // Apply the strikethrough effect
        todoItem.classList.add("strike-through");

        // Show the completed list if it has items
        if (completedTodoListElement?.children.length > 0) {
          completedMainContentElement.style.display = "block";

          // Adjust styles for incomplete main content
          incompleteMainContentElement?.classList.remove(
            "incomplete-empty-display"
          );
          incompleteMainContentElement?.classList.add("incomplete-max-height");
        }

        // Hide the incomplete main content if there are no items left
        if (incompleteTodoListElement.children.length === 0) {
          incompleteMainContentElement?.classList.add(
            "incomplete-empty-display"
          );
        }
      }
    }
  }
});

completedTodoListElement?.addEventListener("change", function (event) {
  const target = event?.target;
  if (
    // ensures that the target is an HTMLINputelement
    target instanceof HTMLInputElement &&
    // ensuring the target has a class of checkbox
    target.classList.contains("checkbox")
  ) {
    // Type check to confirm target is an HTMLElement
    const checkbox = target;
    const todoItem = checkbox.closest(".todo");

    if (!checkbox.checked) {
      // Move the todo item back to the incomplete list
      // ensure that both incompletetodolist and todoItem is not null(i.e it is valid) before prepending
      if (incompleteTodoListElement !== null && todoItem !== null) {
        incompleteTodoListElement.prepend(todoItem);
      }
      // Remove the strikethrough effect
      todoItem?.classList.remove("strike-through");

      // Hide completed list if it's empty
      if (completedTodoListElement?.children.length === 0) {
        completedMainContentElement.style.display = "none";
        completedMainContentElement?.classList.add("completed-main-content");
        incompleteMainContentElement?.classList.remove("incomplete-max-height");
      }
    }
  }
});

function openCreatePage() {
  if (createButtonElement !== null) {
    homePage?.classList.add("hidden");
    createPage?.classList.remove("hidden");
  }
}
createButtonElement?.addEventListener("click", openCreatePage);

// // selecting the backbtncontainer  and assigning it a variable backbutton
const backButton = document.querySelector(".back-btn-container");

function goBack() {
  if (backButton !== null) {
    homePage?.classList.remove("hidden");
    createPage?.classList.add("hidden");
    // textFieldElement is an HTMLinput element amd as such the property (value) can be accessed
    textFieldElement.value = "";
    dateFieldElement.value = "";
    timeFieldElement.value = "";
    textAreaElement.value = "";

    // constructing an array from the nodelist(categoryIconElementList) and assigning it a variable categoryElementArray
    const categoryElementArray = Array.from(categoryIconElementList);
    // looping through each iconElement
    const selectedCategoryElement = categoryElementArray.find((iconElement) => {
      // this returns if the iconElement.id matches the selectedcategoryitem id

      return (
        (iconElement as HTMLElement).dataset.id == selectedCategoryItem?.id
      );
    });
    // if both id matches remove the border from the selectedCategoryElement
    selectedCategoryElement?.classList.remove("active");
  }
}

//adding a goBack function to the event-listener
backButton?.addEventListener("click", goBack);

// function to delete items from both incompletetodolist and completetodolist
function deleteTodo(event: Event) {
  // this works to prevent bubbling(propagation) of this event from the todolist(both incomplete and complete)
  event.stopPropagation();
  // to check if the Todolist has a delete icon present
  const target = event.target;
  if (target instanceof HTMLElement) {
    if (target.closest(".delete-icon")) {
      // console.log("Delete icon clicked");
      // finding the closest todo element to the clicked delete icon
      const todoItem = target.closest(".todo");
      // console.log("present");
      // if a todo element exists
      if (todoItem) {
        // showing a confirmation dialogue to the user
        const isconfirmed = confirm(
          "Are you sure you want to delete this item"
        );
        if (isconfirmed) {
          // Extracting the unique id from the data-id attribute
          const idToDelete = parseInt(todoItem.getAttribute("data-id"));

          //remove the todo item from the DOM
          todoItem.remove();

          // Remove from the global todos array using the id
          todos = todos.filter((todo) => todo.id !== idToDelete);

          saveToLocalStorage(); // Save the updated todos array to local storage

          // console.log("Task deleted");
          // when the list becomes empty
          if (incompleteTodoListElement?.children.length === 0) {
            // console.log("no present todoitem");
            // maintain a minimum height of 150px
            incompleteMainContentElement?.classList.add(
              "incomplete-empty-display"
            );
          }
          if (completedTodoListElement?.children.length === 0) {
            // when there is item in the completedtodlist, remove the display and let the incomplete list appear full screen.
            completedMainContentElement !== null &&
              completedMainContentElement instanceof HTMLElement;
            completedMainContentElement.style.display = "none";
            // completedMainContentElement.classList.add("complete-main-content");
            // the incompletelist takes the full page
            incompleteMainContentElement?.classList.remove(
              "incomplete-max-height"
            );
          }
        }
      }
    }
  }
}

function getTodoById(id) {
  // converts from string to number (id) so the strict equality operator can function.
  const strId = id;
  const numId = Number(strId);
  // console.log(numId);
  // console.log(typeof numId);

  const foundTodo = todos.find(function (todo) {
    // console.log(todo);
    // console.log(typeof todo.id);

    // console.log(todo.id === numId);
    return todo.id === numId;
  });
  // console.log(foundTodo);
  return foundTodo;
}

const updatebtn = document.querySelector(".update-task-btn ");

incompleteTodoListElement?.addEventListener("click", function (event: Event) {
  // Ensure event.target is an element
  const targetElement = event.target;
  if (targetElement instanceof HTMLElement) {
    // find the closest todo
    // ensure the click is on the todo item itself and not the checkbox or delete icon
    const todoItemElement = targetElement.closest(".todo");
    if (!todoItemElement || targetElement.matches(".checkbox")) {
      return;
    }
    return; // Handle cases where event.target is null or undefined
  }

  // console.log("click detectedzzzz");
  homePage?.classList.add("hidden");
  createPage?.classList.remove("hidden");

  if (updatebtn !== null && updatebtn instanceof HTMLInputElement) {
    // instance of HTMLInputElement is a type guard that
    //tells TS to check if the updatebtn is specifically an  HTMLInputElement before accessing .style
    updatebtn.style.display = "block";
  }

  // retrieving the values for the todo(title,date,time and note) using the todoID

  // retriveing the todoID by targeting the id from the todoItemElement dataset
  const retrievedTodoId = todoItemElement.dataset.id;
  // the
  const retrievedTodo = getTodoById(retrievedTodoId);
  console.log(retrievedTodo);

  // Populate the form fields with values retrieved by id from the retrievedTodo
  if (retrievedTodo) {
    textFieldElement.value = retrievedTodo.title; // value for the title
    dateFieldElement.value = retrievedTodo.date; // value for the date
    timeFieldElement.value = retrievedTodo.time; // value for the time
    textAreaElement.value = retrievedTodo.notes; // value for the description.
    selectedCategoryItem = retrievedTodo.category;
  }

  const categoryElementArray = Array.from(categoryIconElementList);
  const selectedCategoryElement = categoryElementArray.find((iconElement) => {
    return (iconElement as HTMLElement).dataset.id == selectedCategoryItem?.id;
  });
  selectedCategoryElement?.classList.add("active");

  // if updatebtn is not null, run the event
  updatebtn?.addEventListener("click", (event) => {
    console.log("upddead");
    updateTodo(event, retrievedTodo);

    // reset the update button back to save so it doesn't show update on adding a new task
    if (updatebtn !== null && updatebtn instanceof HTMLInputElement) {
      // instance of HTMLInputElement is a type guard that
      //tells TS to check if the updatebtn is specifically an  HTMLInputElement before accessing .style
      updatebtn.style.display = "none";
    }
  });
});
// this function gets a category by its ID
function getCategoryById(id: number) {
  const strId = id;
  const numId = Number(strId);

  console.log(typeof id);
  const foundCategory = categories.find(function (category) {
    console.log(typeof category.id);
    return category.id === numId;
  });
  return foundCategory;
}

// this function is responsible for storing the todos array in the browser's localstorage so it persists eveb after the page is reloaded
function saveToLocalStorage() {
  console.log(todos);
  // localstorage: a built- in Js object that allows us to store data in the browser.
  localStorage.setItem("todos", JSON.stringify(todos)); // save todos array as a string
}

//  this function is responsible for retrieving the todos from the browser's local storage
function loadFromLocalStorage() {
  //getting the stringified version of todos from my localstorage
  const storedTodos = localStorage.getItem("todos");
  // console.log(storedTodos);
  // check if there is stored data before parsing it back into an array
  if (storedTodos) {
    // move the add button to the end of the page
    createButtonElement?.classList.add("bottom-btn");
    // remove the notodo icon
    noTodoIconElement?.classList.add("hidden");

    // converts the JSON string back into JS array and assign it to todos
    todos = JSON.parse(storedTodos);
    console.log(todos);
    renderTodos(todos);
  } else {
    todos = []; // Initialize an empty array if no data exists
  }
  // renderTodos(); // Render the todos in the UI
}

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

function renderTodos(todos) {
  const incompleteTodoList = document.getElementById(
    "incomplete-todo-list"
  ) as HTMLElement; // Ensure this exists in your HTML
  incompleteTodoList.innerHTML = ""; // Clear existing content

  const completedTodoList = document.getElementById(
    "completed-todo-list"
  ) as HTMLElement; // Ensure this exists in your HTML
  completedTodoList.innerHTML = ""; // Clear existing content

  // loop through each todo and creating a new li element for each todo item.
  todos.forEach((todo) => {
    const li = document.createElement("li"); //creating a new li element.
    li.classList.add("todo"); //
    li.dataset.id = todo.id;

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

    if (todo.state == 1) {
      incompleteTodoList.appendChild(li);
    } else if (todo.state == 0) {
      completedTodoList.appendChild(li);
    }
  });
}
