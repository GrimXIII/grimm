import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Games from "../pages/games";
import test from "../pages/test";
import login from "../pages/login"
import deep from "../pages/deep"
import admin from "../pages/admin"
import doogle from "../pages/doogle/doogle"
import doogle2 from "../pages/doogle/doogleForms"
import doogle3 from "../pages/doogle/doogleDocs"
import doogle4 from "../pages/doogle/doogleContacts"
import doogle5 from "../pages/doogle/doogleTube"
import doogle6 from "../pages/doogle/doogleDomains"
import doogle7 from "../pages/doogle/doogleApps"
import doogle8 from "../pages/doogle/doogleNews"
import leader from "../pages/leader"
import info from "../pages/info"
import edit from "../pages/editor"
import custo from "../pages/custo"

import error from "../pages/404"



export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/games" component={Games} />
      <Route path="/test" component={test} />
      <Route path="/login" component={login} />
      <Route path="/deep" component={deep} />
      <Route path="/doogle" component={doogle} />
      <Route path="/doogleForms" component={doogle2} />
      <Route path="/doogleDocs" component={doogle3} />
      <Route path="/doogleContacts" component={doogle4} />
      <Route path="/doogleTube" component={doogle5} />
      <Route path="/doogleDomain" component={doogle6} />
      <Route path="/doogleApps" component={doogle7} />
      <Route path="/doogleNews" component={doogle8} />
      <Route path="/leader" component={leader} />
      <Route path="/admin" component={admin} />
      <Route path="/info" component={info} />
      <Route path="/edit" component={edit} />
      <Route path="/custo" component={custo} />
    
      <Route path="/:rest*" component={error} />
   </Switch>
);
