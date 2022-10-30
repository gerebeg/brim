import '../assets/css/App.css';
import eycl from '../assets/img/eye-closed.png'
import eyop from '../assets/img/eye-opened.png'
import {useNavigate} from 'react-router-dom'
import user from '../assets/img/username.png'
import sandi from '../assets/img/password.png'
import fprint from '../assets/img/s.png'
import muda from '../assets/img/muda.png'
import top from '../assets/img/top-icon.png'

function Login(props) {
  const nav = useNavigate(); 
  const filled = (e) => {
    props.pass(e.target.value)
    document.querySelector('.btn-disable').classList.remove('btn-disable')
    document.querySelector('.disdis').classList.remove('disdis')
  } 

  const eye = () => {
    if(document.querySelector('#pwd').type === 'password'){
      document.querySelector('#pwd').type = 'text'
      document.querySelector('#eyi').src = eyop
    }else if(document.querySelector('#pwd').type === 'text'){
      document.querySelector('#pwd').type = 'password'
      document.querySelector('#eyi').src = eycl
    }
  }

  const yes = () => {
    props.send()
    nav('/pin')
  }

  return (
    <>
    <div className="bg">
      <nav style={{backgroundColor:"transparent",display:"flex",justifyContent:"center"}}>
        <img src={top} />
      </nav>
      <div className="anjing">
        <center>
        <h2>Selamat Datang</h2>
        <img src={muda} className="login-img" />
        </center>
      </div>
    </div>
    <div className="App-v2">
      <h1>Login</h1>
      <br />
      <form action='' onSubmit={yes}>
        <div className="form">
          <div className="ipt">
            <img src={user} className="icon-login" width={'24px'} />
            <input type="text" placeholder="Username" onInput={(e) => props.user(e.target.value)} required/>
          </div>
          <hr />
          <div className="ipt">
            <img src={sandi} className="icon-login" width={'20px'} />
            <input pattern='(?=.*\d)(?=.*[a-z]).{8,}' type="password" placeholder="Password" id="pwd" onInput={filled} required/>
            <div className="eye" onClick={eye}>
              <img src={eycl} width="24px" id='eyi' />
            </div>
          </div>
          </div>
      <div className="dp">
      <button id="dis" type="submit" className='btn-disable btn-fs'>Login</button>
      <button className='btn-fp'><img src={fprint} width="40%" /></button>
      </div>
      </form>
      <br /><br />
      <h4>Lupa Password?</h4>
    </div>
    </>
  );
}

export default Login;