import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Webinar from "./screens/Webinar/Webinar";
import SingleWebinar from "./screens/SingleWebinar/SingleWebinar";
import CreateWebinar from "./screens/SingleWebinar/CreateWebinar";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote} />;
        <Route path="/profile" component={ProfileScreen} />
        <Route
          path="/webinar"
          component={({ history }) => (
            <Webinar search={search} history={history} />
          )}
        />
        <Route path="/webinar/:id" component={SingleWebinar} />
        <Route path="/createwebinar" component={CreateWebinar} />;
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
