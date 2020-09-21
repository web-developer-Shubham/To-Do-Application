import React from "react";
import Header from "./appComponent/shared/Header/Header.jsx";
import Footer from "./appComponent/shared/Footer/Footer.jsx";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
