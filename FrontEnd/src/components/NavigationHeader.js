import * as React from 'react';
import { Tabs, Tab, AppBar} from "@mui/material";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

import NewGymNote from "../pages/NewGymNote";
import ProfilePage from "../pages/Profile";
import Explore from "../pages/Explore";
import Guides from "../pages/Guides";
import LogOnPage from "../pages/LogOn";

const StyledTab = styled(Tab)({
    color: "black",
    fontSize: 20,

    "&.Mui-selected":{
        color: "gray",
        indicatorColor: "red",
    }
})
export default function NavigationHeader() {
    const routes = ["/Profile","/NewGymNote","/Explore", "/Guides", "/LogOn"];
    return (
      <BrowserRouter>
      <AppBar>
        <Tabs sx={{bgcolor: '#9b9b9b'}}>
          <StyledTab label={<NavLink to={routes[0]}>Profile</NavLink>} />
          <StyledTab label={<NavLink to={routes[1]}>New Gym Note</NavLink>} />
          <StyledTab label={<NavLink to={routes[2]}>Explore</NavLink>} />
          <StyledTab label={<NavLink to={routes[3]}>Guides</NavLink>} />
          <StyledTab label={<NavLink to={routes[4]}>Log In</NavLink>} />
        </Tabs>

        <Switch>
          <Route exact path={routes[0]} component={ProfilePage} />
          <Route exact path={routes[1]} component={NewGymNote} />
          <Route exact path={routes[2]} component={Explore} />
          <Route exact path={routes[3]} component={Guides} />
          <Route exact path={routes[4]} component={LogOnPage} />
          <Route exact path="/" component={ProfilePage} />
        </Switch>
      </AppBar>
    </BrowserRouter>
    );
}
