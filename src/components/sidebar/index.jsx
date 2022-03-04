// import tw, { styled } from "twin.macro"
// import styled from "styled-components"
// import { SidebarContainer } from "./index.styles"
import { logo } from '../../assets'

const Sidebar = () => {
    return (
        <div className="hidden lg:flex w-64 h-full bg-white dark:bg-black">
            <div className="w-64 h-[160px] bg-gray-500 relative">
                <img src={logo} alt="logo" className='w-20 absolute bottom-5 left-2'/>
            </div>
        </div>
    )
}
export default Sidebar