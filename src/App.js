import "./App.css";
import Profile from "./components/Profile";
import Stories from "./components/Stories";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Profile />
        <Stories />
        <Timeline />
      </div>
    </div>
  );
}

export default App;
