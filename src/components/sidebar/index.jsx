// import tw, { styled } from "twin.macro"
// import styled from "styled-components"
// import { SidebarContainer } from "./index.styles"
import { orangeLogo } from '../../assets'

const Sidebar = () => {
    return (
        <div className="hidden lg:flex w-64 h-full bg-white dark:bg-black">
            <div className="w-64 h-[160px] relative border-b border-sky-400">
                <div className='absolute bottom-5 left-2 flex flex-row w-[calc(100%_-_1rem)] justify-center items-center gap-4'>
                    <img src={orangeLogo} alt="logo" className='w-20'/>
                    <h1 className="text-[2rem] font-['Fredoka']">tudu</h1>
                </div>
            </div>
        </div>
    )
}
export default Sidebar