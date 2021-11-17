import logo from './logo.svg';
import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Navigate,
    Route,
    Routes,
    useHistory
} from "react-router-dom";
// import {createBrowserHistory} from "history";
// import UploadPage from './components/pages/Upload.js'
import TestPage from './components/pages/Test.js'
import HomePage from './components/pages/Home.js'
import PdfListPage from "./components/pages/PdfList";
import PdfViewPage from "./components/pages/PdfView";

function App() {
    // const myHistory = createBrowserHistory(
    //     {basename: '/yoshinari/'}
    // );
    return (
            // <div className="App">
            //     home
            // </div>

        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<HomePage label={"basic"}/>}/>
                    <Route path='/test' element={<TestPage label={"basic"}/>}/>
                    <Route path='/pdf' element={<PdfListPage label={"basic"}/>}/>
                    <Route path='/pdf/:pdfId' element={<PdfViewPage label={"basic"}/>}/>
                    <Route path='/*' element={<Navigate to='/' />} />{/*not foundの時*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
