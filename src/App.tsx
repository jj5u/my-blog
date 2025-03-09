import { Outlet } from "react-router";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-slate-600 relative overflow-auto min-h-screen">
      <div className="py-2 md:py-4 mx-2 md:mx-5 xl:max-w-4xl flex flex-col gap-2 xl:mx-auto">
        <div className="w-full ">
          <Nav />
        </div>
        <div className="w-full h-full max-h-fit flex flex-col p-4 bg-white rounded-2xl mx-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
