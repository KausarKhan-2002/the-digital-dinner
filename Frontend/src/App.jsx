import React from "react";
import Header from "./Components/Header/Header";
import MyOutlet from "./Pages/MyOutlet";

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main className="pt-16">
        <MyOutlet />
      </main>
    </div>
  );
}

export default App;
