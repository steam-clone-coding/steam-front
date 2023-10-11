import React from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {

  return (
    <div className='loginform'>
      <form>
        <label>
          계정 이름으로 로그인
          <input type='text'></input>
        </label>
        <label>
          비밀번호
          <input type='password'></input>
        </label>
        <label>
          <input type='checkbox'></input>
          로그인 정보 저장
        </label>
        <button type='submit' value="Submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;