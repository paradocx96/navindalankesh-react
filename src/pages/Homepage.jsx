import React, {Component} from 'react';

import Home from "./home/home";
import Features from "./features/features";
import Resume from "./resume/resume";
import Skills from "./skills/skills";
import Portfolio from "./portfolio/portfolio";
import Blog from "./blog/blog";
import Contact from "./contact/contact";

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Homepage</h1>

                <Home/>

                <Features/>

                <Resume/>

                <Skills/>

                <Portfolio/>

                <Blog/>

                <Contact/>

            </div>
        );
    }
}

export default Homepage;
