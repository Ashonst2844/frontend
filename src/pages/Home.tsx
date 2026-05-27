import Pages from "../assets/ui/layout/Pages";

interface HomeProps {
    nama?: string;
    subject?: string;
}

function Home({nama, subject}: HomeProps) {
    return (
        <Pages id='home' className='center'>
            <div id='title' className='center' style={{flexDirection:"column"}}>
                <h1>Hallo, Bapak/Ibu:</h1>
                <h2 className='background-gradient'>{nama} | {subject}</h2>
                <p style={{margin:"20px 0"}}>Selamat dan semangat untuk mengajar.</p>
            </div>
        </Pages>
    )
}
export default Home;