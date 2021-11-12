import React from 'react';

import { Button } from '../Button/Button';

export const Board = ({ deleteEquation, removeElement, updateEquation, getResult }: {
  deleteEquation: (e: any) => void;
  removeElement: (e: any) => void;
  updateEquation: (e: any) => void;
  getResult: (e: any) => void;
}) => {
  return (
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
  )
}