import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
function App() {
  return (
    <div className="App">
      {/* the class attribute in JSX conflicts with the JavaScript class keyword
      used for defining classes (ES6 classes) in JavaScript. To avoid this
      conflict, React introduced the use of className instead of class in JSX.
      */}
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element ={  <Home/>}/>
        <Route exact path="/adduser" element ={  <AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser />} />
        <Route exact path="/viewuser/:id" element={<ViewUser />} />
      </Routes>
    
      </Router>
      
    </div>
  );
}

export default App;
/*
🅳🅸🅿🆃🅾
*/