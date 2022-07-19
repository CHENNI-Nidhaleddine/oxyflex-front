import { Stack, HStack, VStack ,Icon,Box} from '@chakra-ui/react'
import {TbVaccineBottle} from "react-icons/tb"
import {ImUser} from "react-icons/im"
function Dashboard(){
    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
           <div className="h-fit w-full flex lg:flex-row flex-col items-center justify-center ">
                        <div className="m-2 bg-[#6ce2f1] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full p-5  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl"><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Estimation <br/>[0-7] fevrier</div>
                            <div className="text-xl ">90</div>
                        </div>
                  
                        <div className="m-2 bg-[#00b7da] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full p-5  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl "><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Bouteilles<br/>dans stock</div>
                            <div className="text-xl ">90</div>
                        </div>
                        <div className="m-2 bg-[#4b78ec] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full p-5  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl  text-[#f00]"><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Bouteilles<br/>utilisées</div>
                            <div className="text-xl ">90</div>
                        </div>
                        <div className="m-2 bg-[#096b9c] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full p-5  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl  text-[#ff7800]"><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Consommation<br/>d'aujourd'hui</div>
                            <div className="text-xl ">90</div>
                        </div>
                        <div className="m-2 bg-[#00055d] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full p-5  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl"><Icon as={ImUser}/></div>
                            <div className="text-lg font-normal mx-5">Utilisateurs</div>
                            <div className="text-xl ">90</div>
                        </div>
            </div>
            <div>
                ff
            </div>
        </div>
    )
}
export default Dashboard;