import "./App.css";
import Profile from "./components/Profile";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Profile />
        <Stories />
      </div>
    </div>
  );
}

export default App;
