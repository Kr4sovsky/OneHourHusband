import { Grid } from "@mui/material"

import ServiceBooking from "../components/ServiceBooking";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import React from "react";
import NavBar from "../components/NavBar";

const Main = () => {


    return <Grid>
        <NavBar/>
            <Grid container>
                <Grid item>
                    <ServiceBooking/>
                </Grid>
                <Grid item>
                    <Services/>
                </Grid>
                <Grid item>
                    <Gallery/>
                </Grid>
                <Grid item>
                    <About/>
                </Grid>
                <Grid item>
                    <Contact/>
                </Grid>
            </Grid>
    </Grid>
}

export default Main;