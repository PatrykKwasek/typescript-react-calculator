import React, { useState } from 'react';

import { Button } from '../../components/Button/Button';

export const Home = () => {
  const [equationExpression, setEquationExpression] = useState('');
  const [result, setResult] = useState(0);

  const updateEquation = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    const updateEquation = equationExpression + value;
    setEquationExpression(updateEquation);
  }

  const removeElement = () => {
    const newEquation = equationExpression.slice(0, -1);
    setEquationExpression(newEquation);
  }

  const deleteEquation = () => {
    setEquationExpression('');
    setResult(0);
  }

  const getResult = () => {
    switch (equationExpression.slice(-1)) {
      case '%':
      case '/':
      case '*':
      case '-':
      case '+':
      case '.':
        // console.log('Error, because /');
        break;
      default:
        // console.log('Say nothing!');
        setEquationExpression(eval(equationExpression));
        setResult(eval(equationExpression));
    }
  }

  return (
    <div>
      <div>
        <p>Expression: {equationExpression}</p>
        <p>Result: {result}</p>
      </div>

      <div>
        <div>
          <Button txt='AC' value='AC' onClick={deleteEquation} />
          <Button txt='DEL' value='DEL' onClick={removeElement} />
          <Button txt='%' value='%' onClick={updateEquation} />
          <Button txt='/' value='/' onClick={updateEquation} />
        </div>

        <div>
          <Button txt='7' value='7' onClick={updateEquation} />
          <Button txt='8' value='8' onClick={updateEquation} />
          <Button txt='9' value='9' onClick={updateEquation} />
          <Button txt='x' value='*' onClick={updateEquation} />
        </div>

        <div>
          <Button txt='4' value='4' onClick={updateEquation} />
          <Button txt='5' value='5' onClick={updateEquation} />
          <Button txt='6' value='6' onClick={updateEquation} />
          <Button txt='-' value='-' onClick={updateEquation} />
        </div>

        <div>
          <Button txt='1' value='1' onClick={updateEquation} />
          <Button txt='2' value='2' onClick={updateEquation} />
          <Button txt='3' value='3' onClick={updateEquation} />
          <Button txt='+' value='+' onClick={updateEquation} />
        </div>

        <div>
          <Button txt='0' value='0' onClick={updateEquation} />
          <Button txt='.' value='.' onClick={updateEquation} />
          <Button txt='=' value='=' onClick={getResult} />
        </div>
      </div>
    </div>
  )
}