import{
    Link
} from "react-router-dom";

import Header from "../organisms/Header.js";
import PdfList from "../organisms/PdfList";

const homeStyle = {
    display: 'flex',
    alignItems: 'center',
}

function PdfListPage(props){
    return (
        <div >
            <Header label={props.label}/>
            <PdfList label={props.label}/>
        </div>
    );
}
export default PdfListPage;
