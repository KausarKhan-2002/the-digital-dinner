import React from "react";
import Header from "./Components/Header/Header";
import MyOutlet from "./Pages/MyOutlet";

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main className="pt-16 px-10 sm:px-15 px:20 lg:px-25 xl:px-35">
        <MyOutlet />
      </main>
    </div>
  );
}

export default App;
