import Card from "../Card/Card";

const CardContainer = () => {
  const clickHandler = () => console.log("clicked!");

  return (
    <div>
      <Card clickHandler={clickHandler}/>
    </div>
  );
};

export default CardContainer;
