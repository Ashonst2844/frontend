import Pages from "../assets/ui/layout/Pages";
import ButtonGroup from "../assets/ui/layout/ButtonGroup";
import Button from "../assets/ui/components/Button";

interface HomeProps {
    nama?: string;
    initiate?: boolean;
}

function Home({nama, initiate}: HomeProps) {
    return (
        <Pages id='home' className='center'>
            <ButtonGroup id='login-button-group' position='absolute' style={initiate ? {display:"none"} : {display:"flex"}}>
                <Button type="secondary" w='120px' h='50px' link='/login'><p>Masuk</p></Button>
                <Button type="secondary" w='120px' h='50px' link='/register'><p>Daftar</p></Button>
            </ButtonGroup>
            <div id='title' className='center' style={{flexDirection:"column"}}>
                <h1>Hallo, Bapak/Ibu:</h1><span className='background-gradient'>{nama}</span>
                <p style={{margin:"20px 0"}}>Selamat dan semangat untuk mengajar.</p>
            </div>
        </Pages>
    )
}
export default Home;