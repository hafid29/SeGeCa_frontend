import { Login, HomeView, ViewDashboard } from "./view";
import Routes from "./route";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

export default App;
