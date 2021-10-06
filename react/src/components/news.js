import axios from 'axios';

function News() {
    const onclickevent = () => {
        axios.post('/api/api_test', {data: "test"})
            .then(result => {
                console.log('success')
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
export default News;

