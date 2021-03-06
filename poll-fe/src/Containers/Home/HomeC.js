import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import './HomeC.scss';

function HomeC(){

  const history = useHistory();

  return (
    <div className={'home-container'}>
      <div className={'txt'}>Create instant, real-time polls</div>
      <Button onClick={()=>history.push('/new-form')} big filled>Create Poll</Button>
      <div className={'msg'}>No registration required, it’s 100% free and takes less than a minute.</div>
    </div>
  );
}

export default HomeC;
