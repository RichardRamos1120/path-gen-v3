import './App.css';
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";

//hook context
import {useAuthContext} from "./hooks/useAuthContext";



//route
import Home from "./pages/home/home";
import Create from "./pages/create/create";
import Question from "./pages/question/question";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  const {user,authIsReady} = useAuthContext();
  console.log(user)

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Routes>

            {/*<Route path="/" element={<Home/>}/>*/}

            <Route path="/" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
            <Route path="/question/:id/:qs" element={<Question/>}/>

            <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
            <Route path="/create/:id/:qs" element={user ? <Create/> : <Navigate to="/login"/> }/>

            <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/dashboard"/>}/>
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/dashboard"/>}/>


          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
