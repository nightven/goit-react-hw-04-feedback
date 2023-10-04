import { Button, WrapButtons } from "./Buttons.styled";

const Buttons = ({ keys, onClickButton }) => {
  return (
    <WrapButtons>
    {keys.map(key => (
    <Button key={key} type="button" onClick={() => onClickButton(key)}>
      {key}
    </Button>
  ))}
    </WrapButtons>
  ) 
};

export default Buttons;
