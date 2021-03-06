import React from "react";
import { Grid } from "@material-ui/core";

import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from "./components/Main/Main";

const App = () => {
    const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} alignItems="center" justify="center" style={{height: '100vh'}}>
        <Grid item xs={12} sm={4}>
            <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
            <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Details />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
