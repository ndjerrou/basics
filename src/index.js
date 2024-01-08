// React - ReactDOM

import { createRoot } from 'react-dom/client';

import HomePage from './routing/HomePage';

const root = createRoot(document.querySelector('#root'));

const firstName = 'Nissim';
const age = 33.5;
const gender = 'F';
const isM = gender === 'M' ? true : false;
const bankAccount = null;
const undef = undefined;
const me = {
  name: 'Nissim',
  age: 33,
};
const hobbies = ['Roller', 'Foot', 'Escalade'];

// display multiple types of values inside jsx and check the web app
const template = (
  <>
    <h1>Hobbies de {firstName}</h1>
    <p>age : {age}</p>
    <p>Sexe masculin ? {isM}</p>
    <p>Bank Account : {bankAccount}</p>
    <p>Do u display undefined ? {undef}</p>
    {/* <p>Qui suis-je ? {me}</p> */}
    {/* <p>Mes superbes hobbies : {hobbies}</p> */}
    {/* <ul>
      <li>Foot</li>
      <li>Roller</li>
      <li>Escalade</li>
      <li>Basket</li>
    </ul> */}
    {/* Display my hobbies programmatically using the array*/}
    <ul>
      {hobbies.map(function (hobby) {
        return <li>{hobby}</li>;
      })}
    </ul>
  </>
);

root.render(<HomePage />);
