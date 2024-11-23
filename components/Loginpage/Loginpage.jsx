import React from 'react';
import './Loginpage.css';
import Background from '../Assets/Background.png';
import Logo from'../Assets/GSSlogo.png';
const Loginpage = () => {
  return (
    <div className='form'>
        <form action=''>
            <div><img src={Logo} alt=''/></div> <br />
            <div className='heading'><h1>Login</h1></div>
            <div className='input-field'>
                <div>
                    <input type='email' className='input-email' placeholder='email' required/>
                </div>
                <div>
                    <input type='passwword' className='input-password' placeholder='password'required/>
                </div>
                <div>
                    <input type='checkbox' className="bet"></input>
                 <label htmlFor="#" className="me">Remember me</label>
                </div>
                <div>
                    <a href='#' className='Forgot-password'><label htmlFor="#"className="pass" >Forgot password?</label></a>
                </div>
                    <button className='submit-button'>Login</button>
            </div>
            <div><img src={Background} alt=''/></div>

        </form>

    </div>
  );
};

export default Loginpage;