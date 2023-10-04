import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import {
  Calculator,
  Display,
  FormulaScreen,
  Keys,
  OutputScreen,
  Wrapper,
} from './App'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { evaluate } from 'mathjs'

export function App() {
  const [formulaScreen, setFormulaScreen] = useState<string[]>([])
  const [outputDisplay, setOutputDisplay] = useState(['0'])
  const [result, setResult] = useState('')

  function handlePressKeys(ev) {
    setFormulaScreen((state) => [...state, ev.target.value])
    if (outputDisplay[0] === '0' && outputDisplay[1] !== '.') {
      setOutputDisplay(ev.target.value)
    } else {
      setOutputDisplay((state) => [...state, ev.target.value])
    }

    if (ev.target.value === '.' && outputDisplay.includes('.') === true) {
      setOutputDisplay((state) => [...state].slice(0, -1))
      setFormulaScreen((state) => [...state].slice(0, -1))
    }
  }

  function handleAllClear() {
    setFormulaScreen([])
    setOutputDisplay(['0'])
    setResult('')
  }

  function handleClear() {
    setOutputDisplay((state) => [...state].slice(0, -1))
    setFormulaScreen((state) => [...state].slice(0, -1))
  }

  function handleMathOperations(ev: React.MouseEvent<HTMLButtonElement>) {
    setOutputDisplay(ev.target.value)
    if (result === '') {
      setFormulaScreen((state) => [...state, ev.target.value])
    } else {
      setFormulaScreen([result, ev.target.value])
    }

    const regex1 = /[/*][/*]+/g
    const regex2 = /[+\-*/]{2}/g
    const regex3 = /\/[+-]/g
    const string = formulaScreen.join('')

    if (regex1.test(string)) {
      setFormulaScreen([string.replace(regex1, ev.target.value)])
    } else if (regex2.test(string)) {
      setFormulaScreen([string.replace(regex2, ev.target.value)])
    } else if (regex3.test(string)) {
      setFormulaScreen([string.replace(regex3, ev.target.value)])
    }
  }

  function handleEqual() {
    const calc = formulaScreen.join('')
    const resultCalc = evaluate(calc)
    setResult(resultCalc)
    setFormulaScreen([`${calc} = ${resultCalc}`])
    setOutputDisplay([resultCalc])
  }

  console.log(formulaScreen)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Wrapper>
        <h1>Calculator</h1>
        <Calculator>
          <Display>
            <FormulaScreen>{formulaScreen}</FormulaScreen>
            <OutputScreen id="display">{outputDisplay}</OutputScreen>
          </Display>
          <Keys>
            <button className="keys" id="clear" onClick={handleAllClear}>
              AC
            </button>
            <button className="keys" onClick={handleClear}>
              C
            </button>
            <button className="keys" value="%" onClick={handlePressKeys}>
              %
            </button>
            <button
              className="ope-keys"
              value="/"
              id="divide"
              onClick={handleMathOperations}
            >
              /
            </button>
            <button
              className="num-keys"
              value="7"
              id="seven"
              onClick={handlePressKeys}
            >
              7
            </button>
            <button
              className="num-keys"
              value="8"
              id="eight"
              onClick={handlePressKeys}
            >
              8
            </button>
            <button
              className="num-keys"
              value="9"
              id="nine"
              onClick={handlePressKeys}
            >
              9
            </button>
            <button
              className="ope-keys"
              value="*"
              id="multiply"
              onClick={handleMathOperations}
            >
              *
            </button>
            <button
              className="num-keys"
              value="4"
              id="four"
              onClick={handlePressKeys}
            >
              4
            </button>
            <button
              className="num-keys"
              value="5"
              id="five"
              onClick={handlePressKeys}
            >
              5
            </button>
            <button
              className="num-keys"
              value="6"
              id="six"
              onClick={handlePressKeys}
            >
              6
            </button>
            <button
              className="ope-keys"
              value="+"
              id="add"
              onClick={handleMathOperations}
            >
              +
            </button>
            <button
              className="num-keys"
              value="1"
              id="one"
              onClick={handlePressKeys}
            >
              1
            </button>
            <button
              className="num-keys"
              value="2"
              id="two"
              onClick={handlePressKeys}
            >
              2
            </button>
            <button
              className="num-keys"
              value="3"
              id="three"
              onClick={handlePressKeys}
            >
              3
            </button>
            <button
              className="ope-keys"
              value="-"
              id="subtract"
              onClick={handleMathOperations}
            >
              -
            </button>
            <button
              className="keys"
              value="."
              id="decimal"
              onClick={handlePressKeys}
            >
              .
            </button>
            <button
              className="num-keys"
              value="0"
              id="zero"
              onClick={handlePressKeys}
            >
              0
            </button>
            <button className="keys" id="equals" onClick={handleEqual}>
              =
            </button>
          </Keys>
        </Calculator>
        <GlobalStyle />
      </Wrapper>
    </ThemeProvider>
  )
}
