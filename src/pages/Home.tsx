import Pages from "../assets/ui/layout/Pages";

interface HomeProps {
    nama?: string;
}

function Home({nama}: HomeProps) {
    return (
        <Pages id='home' className='center'>
            <div id='title' className='center' style={{flexDirection:"column"}}>
                <h1>Hallo, Bapak/Ibu:</h1><span className='background-gradient'>{nama}</span>
                <p style={{margin:"20px 0"}}>Selamat dan semangat untuk mengajar.</p>
            </div>
        </Pages>
    )
}
export default Home;