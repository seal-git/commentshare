import News from "./news";
import Header from "./header";

const homeStyle = {
    display: 'flex',
    alignItems: 'center',
}

function Home(){
    return (
        <div className={'home'}>
            <Header/>
            <News/>
        </div>
    );
}
export default Home;
