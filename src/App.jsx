import { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";

function App() {
  return (
    <div className="container">
      <HeroBanner />
      <Header/>
    </div>
  );
}

export default App;
