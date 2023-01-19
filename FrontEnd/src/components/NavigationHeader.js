import * as React from 'react';
import { Tabs, Tab, AppBar} from "@mui/material";
import { Route, BrowserRouter, Switch, Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NewGymNote from "../pages/NewGymNote";
import ProfilePage from "../pages/Profile";

const StyledTab = styled(Tab)({
    color: "black",
    fontSize: 20,

    "&.Mui-selected":{
        color: "gray",
        indicatorColor: "red",
    }
})
export default function NavigationHeader() {
    const routes = ["/Profile","/NewGymNote"];
    return (
      <BrowserRouter>
      <AppBar>
        <Tabs>
          <StyledTab label={<Link to={routes[0]}>Profile</Link>} />
          <StyledTab label={<Link to={routes[1]}>New Gym Note</Link>} />
        </Tabs>
        <Switch>
          <Route exact path={routes[0]} component={ProfilePage} />
          <Route exact path={routes[1]} component={NewGymNote} />
        </Switch>
      </AppBar>
    </BrowserRouter>
    );
  }