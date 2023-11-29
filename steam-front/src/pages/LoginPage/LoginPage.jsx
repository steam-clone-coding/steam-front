import React from 'react';
import LoginForm from './components/LoginForm';
import Button from '../../components/Button/Button';
import './styles/LoginPage.css';

const LoginPage = () => {

  return (
    <div className='login'>
      <div className='login_top'>
        <LoginForm/>
      </div>
      <div className='login_bottom'>
        <div className='login_bottom_signup'>
          <p>Steam에 처음 오셨나요?</p>
          <Button
          type='button'
          className='blue-gradient-button'
          onClick={()=>{}}
          label='가입하기'
        />
        </div>
        <div className='login_bottom_subtext'>
          <p>무료로 쉽게 가입할 수 있습니다. 수천 종류의 게임을 전 세계 새로운 친구들과 힘께 즐겨보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;