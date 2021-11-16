import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useHistory
} from "react-router-dom";
// import {createBrowserHistory} from "history";
// import UploadPage from './components/pages/Upload.js'
import TestPage from './components/pages/Test.js'
import HomePage from './components/pages/Home.js'

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
                    <Route exact path='/' element={<HomePage label={"basic"}/>}/>
                    {/*<Route exact path='/upload' component={UploadPage}/>*/}
                    <Route exact path='/test' element={<TestPage label={"basic"}/>}/>
                    <Route component={Home}/> {/*not foundの時*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
