import React from 'react';
import Header from "./components/Header";
import "./assets/scss/main.scss";
import "./assets/scss/libs.min.css";
import Footer from "./components/Footer";
import Modal from "./components/modal/Modal";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Loader from "./components/Loader";
import {useDispatch} from "react-redux";
import AppActionCreators from "./store/reducers/app/action-creator";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const isInitialized = useTypedSelector(state=>state.appReducer.initialized);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(AppActionCreators.checkAuth())
    })

  return (
    <div className="App">
        {isInitialized
            ?
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                <Footer/>
                <Modal/>
                <ToastContainer />
            </BrowserRouter>
        : <Loader fullSize={true}/>
        }
    </div>
  );
}

export default App;
