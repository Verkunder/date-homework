import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {
	dateJs,
	rangeDate,
	programmersDay,
	dateToFormat,
	dateToObject,
} from './date'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <div id="dateJs">${dateJs()}</div> 
      <div id="rangeDate">${rangeDate()}</div> 
      <div id="programmersDay">${programmersDay()}</div> 
      <div>${dateToFormat()}</div> 
      <div>${dateToObject()}</div> 
    </div>
  </div>
`

const number = 1234567.89;
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

console.log(formatter.format(number));

const date = new Date();
const formatterTwo = new Intl.DateTimeFormat('de-DE', {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
});

console.log(formatterTwo.format(date));

const string1 = 'apple';
const string2 = 'banana';
const collator = new Intl.Collator('en-US');

console.log(collator.compare(string1, string2));