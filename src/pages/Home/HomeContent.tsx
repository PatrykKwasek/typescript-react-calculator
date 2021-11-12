import React from 'react';

import { Board } from '../../components/Board/Board';

export const HomeContent = ({ equationExpression, result, removeElement, deleteEquation, updateEquation, getResult }: {
  equationExpression: string;
  result: number;
  removeElement: (e: any) => void;
  deleteEquation: (e: any) => void;
  updateEquation: (e: any) => void;
  getResult: (data: string) => number;
}) => {
  return (
    <div>
      <h1>React Typescript Calculator</h1>

      <div>
        <p>Expression: {equationExpression}</p>
        <p>Result: {result}</p>
      </div>

      <Board
        deleteEquation={deleteEquation}
        removeElement={removeElement}
        updateEquation={updateEquation}
        getResult={getResult}
      />
    </div>
  )
}