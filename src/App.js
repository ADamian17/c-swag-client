import Routes from "./config/routes";

import Navbar from "./components/Navbar/Navbar";

import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-5">
        <div class="album py-5 bg-light">
          <div class="container">
            <Routes />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
