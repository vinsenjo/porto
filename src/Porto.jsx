import grid1 from "./assets/grid-1.png";
import grid2 from "./assets/grid-2.png";
import grid3 from "./assets/grid-3.png";
import grid4 from "./assets/grid-4.jpeg";
import grid5 from "./assets/gr-2.png";
function Porto() {
  return (
    <div className="bg-black h-screen p-[30px] ">
        <h2 className="text-white text-4xl font-popins font-semibold pl-[20px] ">My Porto</h2>
        <div className=" grid grid-cols-4 pt-[50px] p-[5px] grid-rows-2 w-[100%] gap-[10px] ">
            <div className="bg-white h-[270px] col-start-1 col-span-2  overflow-hidden rounded-xl "><img src={grid1} alt="" className="  w-[100%] hover:scale-110 duration-300"/></div>
            <div className="bg-white rounded-xl row-start-1 row-span-2 overflow-hidden col-start-3 col-end-5 rad"><img src={grid5} alt="" className="w-[100%] h-[100%] object-cover hover:scale-110 duration-300" /></div>

            <div className="bg-white rounded-xl overflow-hidden"><img src={grid2} alt="" className="h-[100%] hover:scale-110 duration-300"/></div>
            <div className="bg-white rounded-xl overflow-hidden"><img src={grid3} alt="" className="h-[100%] hover:scale-110 duration-300"/></div>
            
          
            
        </div>
    </div>
  );
}

export default Porto;
