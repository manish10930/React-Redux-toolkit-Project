import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componets/Navbar";
import UserDetails from "./componets/UserDetails";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>React Redux Toolkit</h1>
      </div>
      <UserDetails />
    </>
  );
}

export default App;
