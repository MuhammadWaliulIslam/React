

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from './components/FeedbackFrom';
import AboutIconLInk from './components/AboutIconLInk';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';



function App(){  
    
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' 
                            element={<><FeedbackForm /> <FeedbackStates /> <FeedbackList /> <AboutIconLInk /></>}>
                        </Route>
                        <Route exact path='/about' element={<AboutPage />}></Route>
                    </Routes>
                    
                </div>
            </Router>
        </FeedbackProvider>
    )
    
}

export default App;