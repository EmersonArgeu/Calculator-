import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Black Ops One', cursive;
`
export const Calculator = styled.div`
  border: none;
  padding: 1rem;
  background: ${(props) => props.theme['background-calculator']};
  width: 20rem;
  border-radius: 8px;
`
export const Display = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
`

export const FormulaScreen = styled.div`
  color: ${(props) => props.theme['formula-screen-color']};
  font-size: 1rem;
  font-family: 'Black Ops One', cursive;
  display: flex;
  justify-content: flex-end;
`
export const OutputScreen = styled.div`
  font-family: 'Black Ops One', cursive;
  display: flex;
  font-size: 1.5rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
`
export const Keys = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;

  button {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 50%;
    font-size: 1.25rem;
    color: ${(props) => props.theme.color};
  }

  button:hover {
    cursor: pointer;
    transition: 1ms;
    opacity: 0.6;
  }
  .keys {
    background: ${(props) => props.theme.keys};
  }
  .ope-keys {
    background: ${(props) => props.theme['operation-keys']};
  }
  .num-keys {
    background: ${(props) => props.theme['number-keys']};
  }
`
