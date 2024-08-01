import React, { useState } from "react";
import reviews from "./assets/data";
import Card from "./components/Card";
function App() {
  const [card, setCard] = useState(0);
  const rightClick = (id) => {
    if (id === 4) {
      setCard(0);
    } else {
      setCard(id + 1);
    }
  };

  const leftClick = (id) => {
    if (id === 0) {
      setCard(4);
    } else {
      setCard(id - 1);
    }
  };

  const onSurpriseClick = (id) => {
    const rand = () => {

      const value=Math.floor(Math.random() * 5);
      if(value===id)
      {
        rand();
      }
      return value;
    };
    setCard(rand);
  };
  return (
    <>
      <div className=" mx-auto max-w-[40vw] mt-[5rem] bg-gray-200 flex flex-col  items-center justify-center">
        {/* {reviews.map((review,index)=><Card employeeData={review} key={review.id}/>)} */}
        <Card
          employeeData={reviews[card]}
          index={card}
          onRightClick={rightClick}
          onLeftClick={leftClick}
          onSurpriseClick={onSurpriseClick}
        />
      </div>
    </>
  );
}

export default App;
