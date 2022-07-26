import { ImBell } from "react-icons/im";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { border, color } from "@mui/system";

function Notifications() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="shadow-xl w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l">
            <ImBell />
          </div>
          <h1>Notification</h1>
        </div>
      </div>

      <div
        className="shadow-xl flex flex-col items-center justify-between bg-[#fff] rounded-xl w-1/3 h-fit py-5 mt-16 border-t-8 border-[#2d62ec]"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div className=" flex items-center justify-between px-10 my-2 text-20px font-bold">
          Liste des services atteindraient la quantité min d'usage
          <Button bg={"#2d62ec"}>30%</Button>
        </div>

        <div
          style={{
            backgroundColor: "#EEECF9",
            borderRadius: "10px",
            border: "1px solid #EEECF9",
          }}
        >
          <text align="left">Cardiologie </text>

          <text align="right">23% </text>
          <Text fontSize="2xl" color="#F65F9C   ">
            17 Bouteilles
          </Text>
        </div>
        <div
          style={{
            backgroundColor: "#EEECF9",
            borderRadius: "10px",
            border: "1px solid #EEECF9",
          }}
        >
          <text align="left">Cardiologie </text>

          <text align="right">23% </text>
          <Text fontSize="2xl" color="#F65F9C   ">
            17 Bouteilles
          </Text>
        </div>
        <div id="textbox">
          <p class="alignleft">Min stock:</p>
          <p class="alignright">20%.</p>
        </div>
      </div>
    </div>
  );
}
export default Notifications;
