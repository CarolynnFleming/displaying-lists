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

import{elephants} from './array-elephants.js';
import{renderElephant} from './render-elephants.js'
const elephantsEl = document.getElementById('elephants-list');

for (let elephant of elephants) {
    const elephantEl = renderElephant(elephant);
    elephantsEl.append(elephantEl);
};
// initialize global state
import {renderTextMessage} from './render-text.js';
import {textMessages} from './array-text.js'

const textMessagesEl = document.querySelector('#text-messages-list')

for (let textMessage of textMessages) {
  const textMessageEl = renderTextMessage(textMessage);

  textMessagesEl.append(textMessageEl);
};

import {celebritys} from './array-celebrity.js';

const celebritysEl = document.querySelector('#celebrity-list');
for (let celebrity of celebritys) {
  const celebrityDiv = document.createElement('div');
  const celebrityNameEl = document.createElement('p');
  const celebrityAgeEl = document.createElement('p');

  const bestFriendDiv = document.createElement('div');
  const bestFriendNameEl = document.createElement('p');
  const bestFriendTypeEl = document.createElement('p');
  
  celebrityDiv.classList.add('celebrity');
  bestFriendDiv.classList.add('best-friend');

  celebrityNameEl.textContent = celebrity.name;
  celebrityAgeEl.textContent = celebrity.age;
  bestFriendNameEl.textContent = celebrity.bestFriend.name;
  bestFriendTypeEl.textContent - celebrity.bestFriend.type;

  bestFriendDiv.append(bestFriendNameEl, bestFriendTypeEl);

  celebrityDiv.append(celebrityNameEl, celebrityAgeEl, bestFriendDiv);

  celebritysEl.append(celebrityDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
