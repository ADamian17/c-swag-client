import Routes from "./config/routes";

import Navbar from './components/Navbar/Navbar';




import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes />
      </main>
    </>
  );
};

export default App;
