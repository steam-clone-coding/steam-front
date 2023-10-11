import React from 'react';
import LoginForm from './components/LoginForm';
import './styles/LoginPage.css';

const LoginPage = () => {

  return (
    <div className='login'>
      Login Page
      <LoginForm/>
      <div className='login_bottom'>
        <div className='login_bottom_signup'>
          <p>Steam에 처음 오셨나요?</p>
          <button>가입하기</button>
        </div>
        <div>
          <p>무료로 쉽게 가입할 수 있습니다. 수천 종류의 게임을 전 세계 새로운 친구들과 힘께 즐겨보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;