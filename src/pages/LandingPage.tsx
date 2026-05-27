import Badge from "../assets/ui/components/Badge";
import Button from "../assets/ui/components/Button";

import datas from "../assets/data/templates.json"

function LandingPage() {
    return (
        <div id="landing-page" className="center">
            <div id="landing-container" className="center">
                <h1 className="center">Selamat datang di Dashboard Guru</h1>
                <p>Kami Hadir Mempermudah Tenaga Kependidikan Dalam Kegiatan Belajar Mengajar</p>
                <span>Mempermudah anda untuk mengatur:</span>
                <div id="landing-badge-box">
                    {datas.apps
                    .filter(data => data.onMenu)
                    .map((data, index) => (
                        <Badge key={index} icon={<img style={{width:"30px", height:"30px"}} src={`src/assets/icon/app-icon/${data.name}.svg`}/>} w="70px" h="70px" title={data.label}/>
                    ))}
                </div>
                <Button type="primary" w="250px" h="50px" link="/login" style={{marginTop:"40px", flexDirection:"row"}}>Mulai <img src="src/assets/icon/arrow.svg" alt="" /></Button>
            </div>
        </div>
    )
}
export default LandingPage;