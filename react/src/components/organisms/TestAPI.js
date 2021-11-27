import axios from 'axios';

function TestAPI(props) {
    const onclickevent = () => {
        axios.post('/api/api_test', {data: "test"})
            .then(result => {
                console.log(result["data"])
            })
            .catch(error => {
                console.log('error')
            })
    }
    return (
        <div className={'news'}>
            <button className="App-link"
                    onClick={onclickevent}>
                api!!!
            </button>
        </div>
    );
}
export default TestAPI;

