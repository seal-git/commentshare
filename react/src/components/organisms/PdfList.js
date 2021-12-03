import{ Link} from "react-router-dom";
import axios from "axios";


function PdfList(props){
    const onclickevent = () => {
        axios.post('/api/get_pdf', {pdf_id: "001"})
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
            <Link to={"001"} onClick={onclickevent}>
                sample pdf 001
            </Link>
        </div>
    );
}
export default PdfList;
