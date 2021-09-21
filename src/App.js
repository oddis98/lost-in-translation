import "./App.css";

import LoginPage from "./views/LoginPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
