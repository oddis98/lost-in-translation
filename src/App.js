import "./App.css";

import LoginPage from "./views/LoginPage/LoginPage";
import TranslationsPage from "./views/TranslationPage/TranslationsPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/translations" component={TranslationsPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
