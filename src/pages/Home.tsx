import Navbar from "../components/Navbar/Navbar"
import RecipesBox from "../components/Home/RecipesBox"
import React from "react"
const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <RecipesBox />
        </React.Fragment>
    )
}

export default Home