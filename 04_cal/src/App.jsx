import React, { useState } from 'react'; // Import React and the useState hook
import './App.css'; // Import CSS file for styling

const App = () => {
  // Array of buttons to display on the calculator
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'];

  // State to manage the calculator input/output
  const [value, setValue] = useState(''); // 'value' stores the current input, and 'setValue' updates it

  // Handle user input from the text field
  const handleChange = (e) => {
    setValue(e.target.value); // Update the value state with the input field's value
    console.log(value); // Log the current value (asynchronously, it might log the previous value due to React state updates)
  };

  // Handle button clicks
  const handleClick = (e) => {
    const id = e.target.id; // Get the ID of the button clicked
    if (id === 'C') { // If 'C' button is clicked, clear the input
      setValue('');
    } else if (id === '=') {
      // '=' logic is handled in form submission
      handleSubmit();
    } else {
      setValue((val) => val + id); // Append the button's value to the current input
    }
  };

  // Handle form submission when '=' is clicked
  const handleSubmit = (e) => {
    e?.preventDefault(); // Prevent form submission from refreshing the page
    try {
      const ans = eval(value); // Evaluate the mathematical expression in the input
      setValue(ans); // Update the state with the calculated result
    } catch (error) {
      alert('Invalid input'); // Alert the user if the input is invalid
    }
  };

  // Render the calculator UI
  return (
    <div className="App">
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleChange} value={value} type="text" /> 
        {/* Text input field for user to type values. Its value is controlled by the state */}
      </form>
      <div className="container" onClick={handleClick}>
        {/* Div container for buttons. Handles click events for all buttons */}
        {arr.map((item, idx) => (
          <button id={item} key={idx} className="cell">
            {/* Map over the array to dynamically create buttons */}
            {item} {/* Display the button's value */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App; // Export the component for use in other files
