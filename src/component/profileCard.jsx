import pp from "../assets/pp.png";
import profil from "../assets/foto.jpg";
function Profil() {
  return (
    <div className="h-[450px] w-[300px] bg-[#344C34]  border-[2px] border-solid border-white overflow-hidden font-popins rounded-xl">
      <img
        src={profil}
        alt=""
        className="w-[350px] relative top-[-30px]  rounded-t-xl hover:scale-110 duration-300"
      />
     
      <div className="bg-black h-[130px] w-[300px] p-4 relative top-[-55px] text-center rounded-b-xl">
        <h4>Vinsensius Jovinda Priamdoko</h4>
        <p>IG : @ Lorem, ipsum.</p>
        <p>LI : @ Lorem, ipsum.</p>
        <p>X  : @ Lorem, ipsum.</p>
      </div>
    </div>
  );
}

export default Profil;
