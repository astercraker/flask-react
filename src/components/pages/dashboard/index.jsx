import { useEffect, useState } from "react"
import { MenuIcon } from '@heroicons/react/solid'
import Sidebar from '../../sidebar/index'

const Dashboard = () => {
    const [currentTime, setCurrentTime] = useState(0)

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
      </div>
    )
}

export default Dashboard