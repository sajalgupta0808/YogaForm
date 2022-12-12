import Header from "./components/Header"
import RegistrationForm from './components/RegistrationForm';
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import ChangeBatchPopUp from "./components/ChangeBatchPopUp";
import { BrowserRouter as Router, Route, Routes }
from "react-router-dom";

function App() {
    return ( <
        >
        <
        Header / >
        <
        Router >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < LoginForm / > }
        /> <
        Route exact path = "RegistrationForm"
        element = { < RegistrationForm / > }
        /> <
        Route exact path = "Dashboard"
        element = { < Dashboard / > }
        /> <
        Route exact path = "LoginForm"
        element = { < LoginForm / > }
        /> <
        Route exact path = "LoginForm"
        element = { < LoginForm / > }
        /> <
        Route exact path = "ChangeBatchPopUp"
        element = { < ChangeBatchPopUp / > }
        /> <
        /Routes> <
        /Router>

        <
        />
    );
}

export default App;