import "./App.css";

import LoginPage from "./views/LoginPage";
import TranslationsPage from "./views/TranslationsPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/translations" component={TranslationsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
