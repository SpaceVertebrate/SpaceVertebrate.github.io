import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    const routeProps = {
      theme: this.props.theme,
      onToggle: this.props.onToggle,
      isNightTheme: this.props.isNightTheme,
    };

    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} {...routeProps} />
              ) : (
                <Home {...props} {...routeProps} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} {...routeProps} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => <Experience {...props} {...routeProps} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} {...routeProps} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} {...routeProps} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} {...routeProps} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => <Projects {...props} {...routeProps} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} {...routeProps} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
