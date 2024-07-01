import Profil from "./component/profileCard";
import Outline from "./component/resume";
import Education from "./component/education";
import svgHtml from "./assets/html.svg";
import svgCss from "./assets/css.svg";
import svgJs from "./assets/js.svg";
import svgReact from "./assets/react.svg";
import svgTailwind from "./assets/tailwind.svg";
import svgNext from "./assets/next.svg";
import tape from "./assets/tape.mp4";
import tape2 from "./assets/tape2.mp4";

function Home() {
  return (
    <div className="overflow-y-hidden overflow-x-hidden bg-[#e8ded5] ">
      {/* HEAD SECTION */}
      <video
        src={tape2}
        autoPlay
        loop
        muted
        className="w-screen h-[100%] absolute  z-10 left-0 object-cover hover:"
      ></video>
      <div className=" h-screen w-screen text-center flex flex-col justify-center  space-y-0 relative top-[10px]  bg-[#e8ded5] border-2 border-solid border-[#ee7214]">
        <h1 className="  text-[#ee7214] font-bold font-serif text-[180px] z-10 h-[150px] tracking-[2px] ">
          PORTFOLIO
        </h1>
        <h1 className="outline-title relative top-[-15px] font-serif bg-fixed font-bold text-[180px] z-10 h-[220px] tracking-[2px]">
          PORTFOLIO
        </h1>
        <h1 className="outline-title relative bg-fixed top-[-95px] font-serif font-bold text-[180px] z-10 h-[220px] tracking-[2px]">
          PORTFOLIO
        </h1>
        <h1 className="outline-title bg-fixed relative top-[-175px] font-serif font-bold text-[180px] z-10  h-[153px] tracking-[2px]">
          PORTFOLIO
        </h1>
      </div>
      <div className="bg-fixed bg-[url(./assets/caca2.jpg)] bg-cover-z-30 relative h-[250px]"></div>

      {/* PROFIL SECTION */}
      <div className="bg-black  h-[500px] flex w-lvh justify-between items-center t-[50px] gap-[30px] px-[50px] text-white">
        <div className="flex-1 p-[30px] ">
          <h2 className="text-6xl pl-[40px] mb-[20px] font-bold font-playfair">
            Hello, <br /> World
          </h2>
          <p className="text-justify font-popins pl-[40px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut hic
            unde laudantium ipsum esse eaque! Dolore illum eius nulla dicta sed
            autem magnam rerum ex, ratione repellendus dolor eaque laboriosam
            quasi. Repellat corrupti facilis dignissimos numquam similique nobis
            praesentium nostrum minima ipsa, magnam deleniti sit nulla illo
            corporis in neque nesciunt autem officiis aut exercitationem dicta
            id, tenetur dolore temporibus? Iusto quos voluptatem nihil, optio,
            eius ut ab voluptatibus perferendis excepturi dignissimos eos ad
            obcaecati possimus maxime, nulla corrupti expedita cumque
            consectetur beatae nemo ducimus labore quibusdam. Inventore
            obcaecati, accusantium doloribus neque facilis corrupti nam suscipit
            saepe! Voluptates, quod neque!
          </p>
        </div>
        <div className="flex-1 flex place-content-center ">
          <div className="relative top-[120px] left-[20px] z-10">
            <Profil />
          </div>
        </div>
      </div>

      {/* SKILL & EDUCATION SECTION */}
      <div className="bg-black h-[600px] w-lvh flex  ">
        {/* SKIL */}
        <div className="flex-1  self-center ">
          <div className="bg-black h-[600px] w-[100%] text-white pl-[120px] ">
            <h2 className="text-6xl font-bold font-playfair mb-[20px]">
              Education
            </h2>
            <Education school="SD Santa Maria Cimahi" year="2011" info="" />

            <hr />
            <br />
            <Education school="SMPN 2 Cimahi" year="2014" info="" />
            <hr />
            <br />
            <Education
              school="SMA Santa Maria 3 Cimahi"
              year="2017"
              info="Math and Science"
            />
            <hr />
            <br />

            <Education
              school="Maranatha Christian University"
              year="2023"
              info="Computer Engineering"
            />
            <hr />
            <br />
          </div>
          {/* <div className="pl-[170px] text-white">
            
          </div> */}
        </div>
        <div className="flex-1  text-center gap-0 object-center">
          {/* outline h2 */}
          <div className="relative top-[-190px] left-[20px]">
            <Outline />
          </div>
          <div className="ml-[180px] relative top-[-150px] text-start">
            <h2 className="text-white font-playfair text-6xl mb-[20px] ">Skill</h2>
            <p className="font-popins text-white text-xl">HTML, CSS, JS</p>
            <hr className="w-[200px] pb-[20px]"/>
            <p className="font-popins text-white text-xl">Tailwind</p>
            <hr className="w-[250px] pb-[20px]"/>
            
            <p className="font-popins text-white text-xl ">React.js</p>
            <hr className="w-[300px] pb-[20px]"/>
            
            <p className="font-popins text-white text-xl">Next.js</p>
            <hr className="w-[350px] pb-[20px]"/>
            
          </div>
          {/* SKILL SECTIOn */}
          {/* <div className=" border-[3px] border-solid border-black h-[300px] w-[460px]   mr-[50px]  p-[20px] relative left-[185px] text-black place-content-center rounded-xl top-[-110px]">
            < h2 className="font-playfair font-bold text-xl ">SKILL</h2>
            <div className="w-[100%]  h-[80%]  mt-[26px] grid grid-cols-3 justify-center place-items-center  ">
              <img src={svgHtml} alt="" className="w-[80px]" />
              <img src={svgCss} alt="" className="w-[80px]" />
              <img src={svgJs} alt="" className="w-[80px]" />
              <img src={svgTailwind} alt="" className="w-[80px]" />
              <img src={svgReact} alt="" className="w-[80px]" />
              <img src={svgNext} alt="" className="w-[80px]" />
            </div>
          </div> */}
        </div>
      </div>
      {/* **************************** */}
      <div className="relative overflow-hidden  h-[200px]">
        <video
          src={tape}
          autoPlay
          loop
          muted
          className="w-screen h-[100%] absolute  z-10 left-0 object-cover hover:scale-105 duration-300"
        ></video>
      </div>
    </div>
  );
}
export default Home;
