import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import MenuAppBar from "./components/Navigation";
import Todo from "./todo/Todo";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00838f",
        light: "#4fb3bf",
        dark: "#005662",
      },
      secondary: {
        main: "#26c6da",
        light: "#6ff9ff",
        dark: "#0095a8",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <MenuAppBar />
        </div>
        <div className="App">
          <Switch>
            <Route path="/todos">
              <Todo />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
