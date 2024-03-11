import logo from "./logo.svg";
import "./App.css";
import SuperHeader from "./components/SuperHeader/SuperHeader";
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  return (
    <>
      <SuperHeader />
      <Header />
      <MainComponent />
    </>
  );
}

export default App;
