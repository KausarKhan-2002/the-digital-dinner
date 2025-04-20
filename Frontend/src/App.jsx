import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import MyOutlet from "./Pages/MyOutlet";
import { Toaster } from "react-hot-toast";
import useProfile from "./Hooks/useProfile";

function App() {
  const profile = useProfile()

  useEffect(() => {
    profile()
  }, [])
  return (
    <div className="bg-white text-slate-800">
      <Toaster />
      <Header />
      <main className="pt-16 px-10 sm:px-15 px:20 lg:px-25 xl:px-35">
        <MyOutlet />
      </main>
    </div>
  );
}

export default App;
