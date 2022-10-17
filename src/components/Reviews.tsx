import { Grid, Typography } from "@mui/material";
import React from "react";

const Reviews = () => {

    return <Grid  sx={{
        paddingTop: {xs: 2, sm: 0, md: 0},
        paddingLeft: {xs: 5, sm: 10, md: 15},
        // marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5
      }}  direction="row">
                {/* <Box sx={{ width: '100%' }}> */}
        <br></br>
        {/* <br></br> */}
        <Grid sx={{ paddingTop: 2}} item >
          <Grid container alignItems="center">
            {/* <Grid item> */}
            <Grid item>
            <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{"Reviews"}</Typography>
            {/* </Grid> */}
            <br></br>
            <Typography variant="subtitle2">{"Latest reviews from customers"}</Typography>
            <br></br>
            </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default Reviews;