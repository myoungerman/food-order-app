import logo from './logo.svg';
import './App.css';
import Onboarding from './components/Onboarding';
import React from 'react';

/*
ONBOARDING

- state tracks the current page. Possible page values are 0, 1, and 2.

- When a page is the current page, its content should be passed as props.
- When the user clicks the "Skip" or arrow button, go to the next page.
*/

function App() {

  const [currPage, setCurrPage] = React.useState(0);
  console.log(currPage);

  return (
    <div class="app">
      <Onboarding handleState={() => setCurrPage}/>
    </div>
  );
}

export default App;
