import './App.css';
import Onboarding from './components/Onboarding';
import React from 'react';

/*
ONBOARDING
- When a page is the current page, its content should be passed as props.
*/

/*
when either button is clicked:
-reassign the active class to the correct <span> dot. Compare the value of currPage to 
-load the new content for that page
*/

function App() {

  const [currPage, setCurrPage] = React.useState(0);

  const pageContent = [
    {
      image: "https://i.postimg.cc/v8nFMkrK/tracking-and-maps.png",
      header: "Nearby restaurants",
      body: "You don't have to go far to find a good restaurant. We have provided all the restaurants that are near you."
    },
    {
      image: "https://i.postimg.cc/rpQS2ppk/order-illustration.png",
      header: "Select the Favorites Menu",
      body: "Now you can eat well without leaving the house! Order your favorite food with just one click."
    },
    {
      image: "https://i.postimg.cc/cHCfxNK8/safe-food.png",
      header: "Good food at a cheap price",
      body: "Eat at any restaurant, even expensive ones, at an affordable price."
    }
  ]

  function handlePageChange() {
    if (currPage < 2) {
      setCurrPage(prevPage => {return prevPage + 1});
    }
  }

  return (
    <div className="app">
      <Onboarding
      pageValue={currPage}
      handlePageChange={handlePageChange}
      image={pageContent[currPage].image}
      header={pageContent[currPage].header}
      body={pageContent[currPage].body}/>
    </div>
  );
}

export default App;
