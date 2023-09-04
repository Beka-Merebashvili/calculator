import styled from "styled-components";

export default function Caclulator() {
  return (
    <Container>
      <div className="output">
        <div className="pervious-perand"></div>
        <div className="current-perand"></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>:</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  justify-content: center;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
  
 button {
  cursor: pointer;
  font-size: 2rem;
  border: 1px solid white;
  outline: none;
  background-color: rgba(255, 255, 255, .75);
}

 button:hover,
 button:focus {
  background-color: rgba(255, 255, 255, .9);
}

.span-two {
  grid-column: span 2;
}

.output {
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, .75);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: .75rem;
  word-wrap: break-word;
  word-break: break-all;
}

.output .previous-operand {
  color: rgba(255, 255, 255, .75);
  font-size: 1.5rem;
}

.output .current-operand {
  color: white;
  font-size: 2.5rem;
}
`;
