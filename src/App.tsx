import React from 'react';
import Header from "./components/Header";
import "./assets/scss/main.scss";
import "./assets/scss/libs.min.css";
import Footer from "./components/Footer";
import Modal from "./components/modal/Modal";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
            <Modal/>
        </BrowserRouter>

    </div>
  );
}

export default App;
