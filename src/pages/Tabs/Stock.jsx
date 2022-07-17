import {RiStockLine} from "react-icons/ri"
import SuiviBouteille from "../../components/SuiviBouteille";
import SuiviService from "../../components/SuiviService";
function Stock(){
    const data=[
        {
            service:"service1",
            reference:"B922/333",
            quantite:"30 B",
            capacite:"50L",
            reste:53,
        },
        {
            service:"service2",
            reference:"B912/333",
            quantite:"30 B",
            capacite:"50L",
            reste:33,
         },
         {
            service:"service3",
            reference:"B932/333",
            quantite:"90 B",
            capacite:"75L",
            reste:88,
         },
         {
            service:"service4",
            reference:"B992/333",
            quantite:"30 B",
            capacite:"25L",
            reste:45,
         },
         {
            service:"service5",
            reference:"B920/333",
            quantite:"30 B",
            capacite:"50L",
            reste:13,
         },
    ];
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className=" w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between">
                <div className="flex items-center justify-center">
                <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l"><RiStockLine/></div>
                <h1 >Suivi des bouteilles de stock</h1>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-between bg-[#fff] rounded-xl h-5/6 mt-5">
                <div className="w-full bg-[#2d62ec] text-[#fff] grid grid-cols-5 font-bold text-lg py-3 rounded-t-xl px-5">
                    <div>Service</div>
                    <div>Référence bouteille </div>
                    <div>Quantité</div>
                    <div>Capacité</div>
                    <div>Reste Quantité</div>
                </div>
                <div className="w-full h-full py-3 self-center overflow-y-scroll">
                    {
                        data.map((record,index)=>{
                            return (
                                <SuiviBouteille index={index} service={record.service} reference={record.reference} quantite={record.quantite} capacite={record.capacite} reste={record.reste}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Stock;