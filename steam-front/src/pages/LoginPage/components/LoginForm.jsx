import React from 'react';
import Button from '../../../components/Button/Button';
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
          <div className='loginform_checkbox'>
            <div className='loginform_checkbox_check'>
              <svg version="1.1" id="base" xmlns="http://www.w3.org/2000/svg" class="SVGIcon_Button SVGIcon_Check" x="0px" y="0px" width="256px" height="256px" viewBox="0 0 256 256" stroke-width="35" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><polyline fill="none" points="49.5,147.75 95,210.75 206.5,45.25 "></polyline></svg>
            </div>
          </div>
          로그인 정보 저장
        </label>
        <Button
          type='submit'
          className='blue-gradient-button'
          onClick={()=>{}}
          label='로그인'
        />
      </form>
    </div>
  );
};

export default LoginForm;