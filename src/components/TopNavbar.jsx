import {GiHamburgerMenu} from "react-icons/gi"
import {TbAlertTriangle} from "react-icons/tb"
import {BsBell,BsSearch} from "react-icons/bs"
import {HiOutlineDocument} from "react-icons/hi"
import userIcon from "../assets/userIcon.jpg"
function TopNavbar({setShowSidebar}){
    // STYLES
    const mainDivStyle="flex items-center justify-between h-[50px] bg-[#2d62ec] px-5 text-[#fff] "
    const iconStyle="text-[#fff] text-3xl font-bold mx-1"
    const searchStyle="w-full pl-12 p-1 outline-none bg-[#2d62ec] rounded-full border-2 border-[#c6c6c6] placeholder-white "
    return(
        <div className={mainDivStyle}>
            <div className="flex flex-1 items-center justify-start">
               <button onClick={()=>setShowSidebar(true)}> <GiHamburgerMenu className={iconStyle} /></button>
            </div>
            <div className="relative flex-[3_3_0%] flex items-center justify-center  ">
                <input className={searchStyle} type="search" placeholder="Rechercher"/>
                <div className="absolute top-2 left-3"><BsSearch className="text-[#c6c6c6] text-xl "/></div>
            </div>
            <div className="flex flex-1 items-center justify-end  ">
                <div className="relative w-fit h-fit">
                <HiOutlineDocument className={iconStyle}/>
                <span className="absolute  left-1 top-1 rounded-xl bg-[#f00] w-[9px] h-[9px]"></span>
                </div>

                <div className="relative w-fit h-fit">
                <TbAlertTriangle className={iconStyle}/>
                <span className="absolute   left-1 top-1 rounded-xl bg-[#f00] w-[9px] h-[9px]"></span>
                </div>

                <div className="relative w-fit h-fit">
                <BsBell className={iconStyle}/>
                <span className="absolute    left-1 top-1 rounded-xl bg-[#f00] w-[9px] h-[9px]"></span>
                </div>

                <img className="rounded-full border-3 border-[#fff] w-[35px] h-[35px] ml-5 " src={userIcon} alt=""/>
            </div>
            
        </div>

    );
}
export default TopNavbar;