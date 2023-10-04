import { Blue, Green, List, Orange, Red, Wrapper, } from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage})=>{
    return(
        <Wrapper>
         <h2>Statistics</h2>
        <List>
            <li> <Green>Good: {good}</Green></li>
            <li> <Orange>Neutral: {neutral}</Orange></li>
            <li> <Red>Bad: {bad}</Red></li>
            <li> <Blue>Total: {total}</Blue></li>
            <li> <Green>Positive feedback: {positivePercentage} %</Green></li>
        </List>
        </Wrapper>
    );
};

export default Statistics;