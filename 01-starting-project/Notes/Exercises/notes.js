//Exercise 1: 

// Exercise -- Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.

// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

// function transformToObjects(numberArray) {
//   // Todo: Add your logic
//   // should return an array of objects
// }

//Solution

/* 
The .map() method creates a new array with the results of calling a provided function on every element in the calling array. 
The function takes each number in the numberArray and returns a new object with a val property set to that number. 
The .map() method returns an array of these objects, which in theory then returns the transformToObjects() function.

function transformToObjects(numberArray) {
  const objectsArray = numberArray.map(number => {
    return {val: number};
  });
  return objectsArray;
}

const numberArray = [1, 2, 3];
const objectsArray = transformToObjects(numberArray);
console.log(objectsArray);
*/

//-----------------------------------------------------

/*
--Exercise 2: Working with JSX Code
This is a quick exercise to get started with React and JSX code: Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.
Important: The custom JSX code must be added inside the existing <div> element.

Solution:

import React from 'react';

export default function App() {
    return (
        <div>
            <h1>
            Exercise done!
            </h1>
        </div>
    );
}
-------------------------------------------------------
--Exercise 3: Building a First Component
Your task is to build a custom <ExerciseComponent /> that outputs the text "First exercise - done!" on the screen.
Use the empty ExerciseComponent.js file for your new component code and output this component inside the already existing App component thereafter (replace the existing JSX code in App with your own component).

App.js--
import React from 'react';

// don't change the Component name "App"
export default function App() {
    return <p>Todo: solve exercise</p>;
}

ExerciseComponent.js--
import React from 'react';
// Todo: Add your component code
// Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!

Solution: 

App.js --
import React from 'react';
import ExerciseComponent from './ExerciseComponent';

// don't change the Component name "App"
export default function App() {
    return <ExerciseComponent />;
}

ExerciseComponent.js --
import React from 'react';

export default function ExerciseComponent() {
  return <p>First exercise - done!</p>;
}

-------------------------------------------------------

Exercise 4: Passing Data via "props"
You're working on the UI prototype for an online shop and your task is to output two product items (via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in the App component.

The two product items should use the same component (<Product />) but output different data (title, price & description). Data should be passed to the components (and output there) via props.
The first product item is expected to display the following information:

Title: Product 1
Price: 10
Description: First product

The second product item is expected to display the following information:

Title: Product 2
Price: 20
Description: Second product

Solution: 
App.js --
import React from 'react';
import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <h1>My Demo Shop</h1>
      <Product
        title="Product 1"
        price={'10'}
        description="First product"
      />
      <Product
        title="Product 2"
        price={'20'}
        description="Second product"
      />
    </div>
  );
}

Product.js--
import React from 'react';

export default function Product(props) {
  return (
    <article className="product">
      <h2>{props.title}</h2>
      <p className="price">${props.price}</p>
      <p>{props.description}</p>
    </article>
  );
}

-------------------------------------------------------

---Exercise 5: Listening to Events
Imagine you're working on a brand-new React app that should allow users to bookmark articles (e.g., news articles).
To start with your work, your task is to "connect" a click event listener to an already existing button and output "Stored!" via console.log(). And, of course, you should do that "the React way".


---Solution: 
import React from 'react';
import './styles.css';

// don't change the Component name "App"
export default function App() {
  const handleClick = () => {
    console.log('Stored!');
  };

  return (
    <button onClick={handleClick}>
      Bookmark
    </button>
  );
}

-------------------------------------------------------

---Exercise 6: Working with "State"
You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.
Your task is to add an event listener to listen for clicks on the button that's already included in the App component.
Upon a button click, the price should change from $100 to $75.
Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

Solution:

The state variable named price is declared using the useState hook with an initial value of 100.
The clickHandler function is defined to update the price state variable to 75 when the button is clicked.
The price state variable is displayed using JSX, and the clickHandler function is passed to the onClick prop of the button.
When the button is clicked, the clickHandler function is called, which updates the price state variable to 75. 

import React, { useState } from 'react';
 
import './styles.css';
 
export default function App() {
    const [price, setPrice] = useState(100);
    
    function clickHandler() {
        setPrice(75);
    }
    
    return (
        <div>
            <p>${price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}

-------------------------------------------------------

---Exercise 7: Using State with Form Inputs
You're working on a text messaging app and your task is to validate the text entered by a user whilst the user is typing.
If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.

To achieve this result, you should store the current message validity (e.g., the string "Invalid" or "Valid") in some state value. That state value must be updated every time the input value changes. You therefore must add a fitting event listener that triggers the code that updates the state.
To derive the proper state value (i.e., whether it should be "Invalid" or "Valid"), you could use this if-condition:
if (value.trim().length < 3) {
  // Todo: Update state to say "Invalid"
} else {
  // Todo: Update state to say "Valid"
}
Of course, you must also output the state value as part of the App component's JSX code so that either "Invalid message" or "Valid message" is displayed.


Solution:
import React, { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div>
      <label>Your message</label>
      <input type="text" onChange={handleMessageChange} />
      <p>{message.trim().length < 3 ? 'Invalid message' : 'Valid message'}</p>
    </div>
  );
}

I tried to use a ternary operator to render the message "Invalid message" based on whether the message state variable has a length less than 3.

Then define a handleMessageChange function to update the message state variable whenever the input value changes. After, we use the message state variable to display the appropriate message using the ternary operator inside the JSX.

-------------------------------------------------------

---Exercise 8: Updating State Based On Older State
Your task is to build a basic counter that should increment whenever the "Increment" button is clicked.
Whilst this task allows you to apply your general knowledge about event handling and state (which you already practiced quite a bit at this point in the course), there's also one crucial new aspect: You should update the state following React best practices!

Important: Unfortunately, there's no way of automatically testing whether you used the best practice approach or not. Hence you should take a look at the "Solution explanation" to make sure you solved this task in the best possible way.
Also make sure to use React.useState() instead of just useState() as the latter might fail in Udemy's code environment!

Solution:
import React from 'react';
 
import './styles.css';
 
// don't change the Component name "App"
export default function App() {
    const [counter, setCounter] = React.useState(0);
    
    function incrementCounterHandler() {
        setCounter(prevCounter => prevCounter + 1);
    }
    
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={incrementCounterHandler}>Increment</button>
      </div>
    );
}

-------------------------------------------------------

---Exercise 9: Rendering Lists of Data
You're working on a "Todo List" web app and your task is to output a list of dummy todo items dynamically. 
For this task, a Todo component has been prepared for you, though you must still add some code to it to receive and output the todo text.
To be more precise: In the App component, you should transform the DUMMY_TODOS array that's provided to you (which must not be changed!) to a list of JSX elements (<Todo> elements to be precise). Every Todo component item must receive and output the todo text via a prop called text.

Solution:
App.js:
import React from 'react';
import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// don't change the Component name "App"
export default function App() {
  const todoItems = DUMMY_TODOS.map(todo => <Todo text={todo} key={todo} />);
  return (
    <ul>
      {todoItems}
    </ul>
  );
}

Todo.js:
import React from 'react';

export default function Todo(props) {
  return <li>{props.text}</li>;
}

-------------------------------------------------------

---Exercise 10: Outputting Conditional Content
You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.
Therefore, your task is to conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).
For this task, you must react to clicks on both <button> elements that are part of the starting code. The second button, outside of the <div> with the id="alert", should show the <div id="alert"> (and all its content). The button inside that <div> should then hide it again (i.e., remove it from the DOM).
It's up to you whether you want to use a ternary expression or store the conditionally shown JSX code in a variable.

Solution:
import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  const [showWarning, setShowWarning] = useState(false);

  function handleDeleteClick() {
    setShowWarning(true);
  }

  function handleProceedClick() {
    setShowWarning(false);
  }

  return (
    <div>
      {showWarning ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceedClick}>Proceed</button>
        </div>
      ) : null}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

In the solution, "state" is used to keep track of whether the warning should be shown or not.
We define two event handlers: handleDeleteClick and handleProceedClick. handleDeleteClick sets the showWarning state to true, which triggers the rendering of the warning box. handleProceedClick sets the showWarning state back to false, 
which removes the warning box. 
A ternary expression is used to conditionally render the warning box based on the showWarning state. If showWarning is true, the warning box is rendered. Otherwise, it is not rendered.
The Delete button has an onClick event handler attached that triggers the handleDeleteClick function, which sets the showWarning state to true.
The Proceed button inside the warning box has an onClick event handler attached that triggers the handleProceedClick function, which sets the showWarning state back to false.

-------------------------------------------------------

---Exercise 11: Dynamic Styles
Your task is to dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.
The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.
Make sure that the button toggles between these two styles (color: white <=> color: red).

Solution:
import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    const [isRed, setIsRed] = useState(false);

    function handleClick() {
        setIsRed(!isRed);
    }

    return (
        <div>
            <p style={{ color: isRed ? 'red' : 'white' }}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}

The useState hook is to create a isRed state variable with an initial value of false. 
Then define an event handler function called handleClick that toggles the value of isRed between true and false.
In the code, the <p> element is styled using the style attribute. 
We use a ternary operator to conditionally set the color to either 'red' or 'white' based on the value of isRed.
When the button is clicked, the handleClick function is called, which toggles the value of isRed. 

-------------------------------------------------------

---Exercise 12: Dynamic CSS Classes
Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app. This task is therefore very similar to the previous coding exercise but you're now going to set a CSS class dynamically - instead of an inline style.
The style should be applied as an CSS class (i.e., via the className attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, all CSS classes should be removed from the <p> element (this should also be the initial state).
Make sure that the button toggles between these two styles (no CSS class <=> active  CSS class).

Solution:
import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleButtonClick() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <p className={isActive ? 'active' : ''}>Style me!</p>
      <button onClick={handleButtonClick}>Toggle style</button>
    </div>
  );
}

In the example, the useState hook is used to create a isRed state variable with an initial value of false. 
We also define an event handler function called handleClick that toggles the value of isRed between true and false.
A ternary operator is used to conditionally set the color to either 'red' or 'white' based on the value of isRed.

-------------------------------------------------------

---Exercise 13: Fix Errors
For this exercise, imagine that colleagues gave you code they wrote for a React app they're working on.
At the moment, this code is failing and it's your job to find and fix all errors that are hiding in the code.

Code:
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const clickHandler = () => {
        console.log('Clicked!');
    };
    
    return (
        <Div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          <button onclick={clickHandler}>Click me!</button>
        </Div>
    );
}

Solution:

To fix these errors, we changed <Div> to <div>, changed onclick to onClick, and closed the <div> element with a closing </div> tag.
The onclick attribute on the <button> element was written in lowercase. It should be onClick.
The <Div> element wasn't closed, which caused a syntax error.
The opening tag of the <div> element was capitalized as <Div>.



// Section 3 ----

//react core syntax & JSX
//Working with Components
//Working with Data
//create an expense tracker app


//React is a JS library for building user interfaces. React makes building complex, interactive and reactive user interfaces simpler
//React is all about "Components". All user interfaces in the end are made up of components. Components are resusable.
//Why Components? -- Reusability, Separations of Concerns, No repetition, Manageable code, split big chunks into multiple smaller functions.
// React allows you to create reusable and reactive components constisting of HTML and JS. (CSS sometimes)

/* Creating a new react project
-- downloaded starter zip for file structure.
if you define a function in file A and you want to use it in file B to split code across multiple files, you have to export it in file A and then import it in file B.
*/
