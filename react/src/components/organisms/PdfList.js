import{ Link} from "react-router-dom";
import axios from "axios";


function PdfList(props){
    const onclickevent = () => {
        axios.post('/api/get_pdf', {pdf_id: "samplepdf"})
            .then(result => {
                console.log(result["data"])
            })
            .catch(error => {
                console.log("error")
            })
    }
    return (
        <div >
            <p>PdfList</p>
            <Link to={"samplepdf"} onClick={onclickevent}>
                samplepdf
            </Link>
        </div>
    );
}
export default PdfList;
