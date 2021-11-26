import React from "react";
import Listings from "../components/Listings";
import Comments from "../components/Comments";
import Banner from "../components/Banner";
import Promotion from "../components/Promotion";
import MoreInfo from "../components/MoreInfo";

const Home:React.FC = (props) =>{
    return (
        <main>
            <Banner/>
            <Promotion/>
            <Listings/>
            <Promotion invert={true}/>
            <MoreInfo/>
            <Comments/>
        </main>
    )
}

export default Home;