import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import WebPanel from '../../Components/WebPanel/WebPanel';
import './NewFormC.scss';

let initialOptions = {
  [`${Math.random() * 10000}`] : '',
  [`${Math.random() * 10000}`] : '',
  [`${Math.random() * 10000}`] : '',
};
// [1, 2, 3].forEach(_ => Object.assign(initialOptions, {[`${new Date().getTime()}`] : ''}));

function NewFormC(){

  const [ques, setQues] = useState('');

  const [options, setOptions] = useState(initialOptions);

  console.log(initialOptions);

  function inputQuestion({value}) {
    setQues(value);
  }

  function inputOptions({value, inputId}) {
    setOptions({...options, [inputId]: value});
  }

  return (
    <WebPanel>
      <div className={'new-form'}>
        <h1>Create a poll</h1>
        <div className={'msg'}>Complete the below fields to create your poll</div>
        <Input type={'text'} onChange={inputQuestion} label={'Poll question'} value={ques} />
        <br/>
        {
          Object.keys(options).map(
            (key, i) => <Input
            key={key}
            inputId={key}
            type={'text'}
            onChange={inputOptions}
            label={`Poll Option ${i+1}`}
            value={options[key]}
            />
          )
        }
      </div>
    </WebPanel>
  );
}

export default NewFormC;
