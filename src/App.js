import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Stories from "./components/Stories";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-container">
        <Profile />
        <Stories />
        <Timeline />
      </div>
    </div>
  );
}

export default App;
