import {RiHomeLine,RiStockLine,RiHistoryLine} from "react-icons/ri"
import {HiLocationMarker} from "react-icons/hi"
import {VscCircuitBoard,VscFileSymlinkFile} from "react-icons/vsc"
import {TbTruckDelivery,TbBrowser} from "react-icons/tb"
import {FiUsers} from "react-icons/fi"
import {MdOutlineMiscellaneousServices,MdLogout} from "react-icons/md"
import {AiFillSetting} from "react-icons/ai"
import {ImBell} from "react-icons/im"
import {CgCarousel} from "react-icons/cg"
import userIcon from "../assets/userIcon.jpg"
function SideNavbar({openTab,setOpenTab,setSection}){
    const openStyle="bg-[#2d62ec] rounded-full  text-[#fff] w-full cursor-pointer flex items-center justify-left text-lg p-3   border-[#000]"
    const closedStyle="cursor-pointer w-full flex items-center justify-left text-lg py-2"
    const iconStyleOpen="mr-3  text-2xl text-[#fff]"
    const iconStyleClosed="mr-3 text-2xl text-[#2d62ec]"
    
    return(
        <div className=" h-full w-1/4  top-0 left-0 bg-[#fff] shadow-xl  ">
              <div className=" flex items-center justify-center border-b-2 border-[#000] py-3 mb-5">
                  <img className="w-16 h-14 rounded-full mr-3" src={userIcon} alt=""/>
                  <h1 className="font-bold">admin admin</h1>
              </div>
              <ul className="flex flex-col items-center w-full h-full px-16 " role="tablist">
                                <li  className={openTab==1? openStyle:closedStyle}>
                                    <a   onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist" className="flex items-center"> <RiHomeLine className={openTab==1? iconStyleOpen:iconStyleClosed}/><span>Dashboard</span></a> 
                                </li>
                                <li className={openTab==2? openStyle:closedStyle}>
                                    <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Lieux")
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist" className="flex items-center">  <RiStockLine  className={openTab==2? iconStyleOpen:iconStyleClosed}/><span>Stock </span></a></li>

                    <li className={openTab==3? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <CgCarousel  className={openTab==3? iconStyleOpen:iconStyleClosed}/><span>Usage</span></a></li>
                
                <li className={openTab==4? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <ImBell  className={openTab==4? iconStyleOpen:iconStyleClosed}/><span>Notifications</span></a></li>
                
                <li className={openTab==5? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <VscFileSymlinkFile  className={openTab==5? iconStyleOpen:iconStyleClosed}/><span>Commandes</span></a></li>
                
                <li className={openTab==6? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(6);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <TbTruckDelivery  className={openTab==6? iconStyleOpen:iconStyleClosed}/><span>Fournisseurs</span></a></li>
                
                <li className={openTab==7? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(7);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <FiUsers  className={openTab==7? iconStyleOpen:iconStyleClosed}/><span>Utilisateurs</span></a></li>
                
                <li className={openTab==8? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(8);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <MdOutlineMiscellaneousServices  className={openTab==8? iconStyleOpen:iconStyleClosed}/><span>Services</span></a></li>
                
                <li className={openTab==9? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(9);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <RiHistoryLine  className={openTab==9? iconStyleOpen:iconStyleClosed}/><span>Historique</span></a></li>
                
                <li className={openTab==10? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(10);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <AiFillSetting className={openTab==10? iconStyleOpen:iconStyleClosed}/><span>Paramètres</span></a></li>
                
                <li className={openTab==11? openStyle:closedStyle}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(11);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <TbBrowser  className={openTab==11? iconStyleOpen:iconStyleClosed}/><span>A propos</span></a></li>
                <button className={closedStyle}><MdLogout className={iconStyleClosed}/>Déconnecter</button>
                 </ul>
                            
        </div>
    )
}
export default SideNavbar;