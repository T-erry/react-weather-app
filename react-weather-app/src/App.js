import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This code was coded by{" "}
          <a href="https://github.com/T-erry">Terry Wachuka</a>
          and{" "}
          <a
            href="https://github.com/T-erry/react-weather-app.git"
            target="-blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
