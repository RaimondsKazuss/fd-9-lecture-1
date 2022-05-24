import { useContext, useState } from "react";
import DataContext from "../../DataContext";

const Card = ({ clickHandler }) => {
  const data = useContext(DataContext);
  //local state
  const [isOpen, setIsOpen] = useState(false);

  const toggleElement = () => setIsOpen(!isOpen);

  //destructuring assignment
  const { image, title, description } = data;

  return (
    //react fragment
    <>
      <div onClick={() => clickHandler()}>
        <div>{image}</div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <button onClick={toggleElement}>btn</button>
      {isOpen ? <div>dropdown open</div> : <div>dropdown closed</div>}
    </>
  );
};

export default Card;
