import React from 'react';
import JumbotronHanding from "../components/body/JumbotronHanding";
import GridPost from "../components/body/GridPost";
import { BrowserRouter as Router} from 'react-router-dom';

function Home() {
    return(
        <Router>
            <JumbotronHanding/>
            <GridPost/>
        </Router>
    );
}
export default Home;