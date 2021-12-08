// import functions and grab DOM elements
import { renderColor } from './render-colors.js';
import { colors } from './array-colors.js';
//console.log(colors)
const colorsEl = document.getElementById('colors-list');

// for(let color of colors) {
  //console.log(color)
    const colorEl = renderColor(colors);
    colorsEl.append(colorEl);
    
// };

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
