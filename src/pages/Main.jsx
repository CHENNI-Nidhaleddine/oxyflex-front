import SideNavbar from "../components/sideNavbar";
import {useState} from "react"
import Dashboard from "./Tabs/Dashboard";
import Usage from "./Tabs/Usage";
import Stock from "./Tabs/Stock";
import Notifications from "./Tabs/Notifications";
import Fournisseurs from "./Tabs/Fournisseurs";
import Utilisateurs from "./Tabs/Utilisateurs";
import Services from "./Tabs/Services";
import Apropos from "./Tabs/Apropos";
import Commandes from "./Tabs/Commandes";
import Historique from "./Tabs/Historique";
import Parametres from "./Tabs/Parametres";
const { default: TopNavbar } = require("../components/TopNavbar");

function Main(){
    const [showSidebar,setShowSidebar]=useState(false)
    const [openTab,setOpenTab]=useState(1)
    const [section,setSection]=useState("3")
    return(
        <div className="bg-[#eef5f9] h-screen">
            <TopNavbar setShowSidebar={setShowSidebar}/>
            {showSidebar &&
             <div className="fixed  flex top-0 h-full w-full z-50 ">
                 <SideNavbar openTab={openTab} setOpenTab={setOpenTab} setSection={setSection}/>
                 <div className="w-3/4 z-50 bg-[#000] opacity-30" onClick={()=>setShowSidebar(false)}>
                 </div>
            </div>
            }
            <div className="h-[calc(100vh-50px)]">
                {openTab==1 && <Dashboard/> }
                {openTab==2 && <Stock/>}
                {openTab==3 && <Usage/>}
                {openTab==4 && <Notifications/>}
                {openTab==5 && <Commandes/>}
                {openTab==6 && <Fournisseurs/>}
                {openTab==7 && <Utilisateurs/>}
                {openTab==8 && <Services/>}
                {openTab==9 && <Historique/>}
                {openTab==10 && <Parametres/>}
                {openTab==11 && <Apropos/>}
            </div>
            
            
        </div>
    )
}

export default Main;