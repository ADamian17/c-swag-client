import Routes from "./config/routes";

import Navbar from "./components/Navbar/Navbar";

import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-5">
        <div className="album py-5 bg-light">
          <div className="container full--screen">
            <Routes />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
