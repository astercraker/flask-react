import { useEffect, useState } from "react";
import { BeakerIcon, MenuIcon } from '@heroicons/react/solid'
import Sidebar from './components/sidebar'

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="App bg-[#F5F5F5] h-full flex">
      <Sidebar />
      
      <MenuIcon className="h-10 w-10 text-blue-500 cursor-pointer" />
      {/* <p>The current time is {currentTime}.</p> */}
      <h1 className="text-3xl font-bold underline"> Root EM -> 16px</h1>
    </div>
  );
}

export default App;
