import Header from "../organisms/Header.js";
import TestAPI from "../organisms/TestAPI.js";

const homeStyle = {
    display: 'flex',
    alignItems: 'center',
}

function TestPage(props) {
    return (
        <div className={'home'}>
            <Header label={props.label}/>
            <TestAPI/>
        </div>
    );
}

export default TestPage;
