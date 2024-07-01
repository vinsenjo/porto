function Navbar() {
  return (
    <div>
      <nav className=" fixed w-screen  justify-end flex h-[50px] content-center gap-[10px] right-7 text-white z-30 font-popins text-[16px]">
       
        <button className="  hover:text-[20px]">
          About Me !
        </button>
        <button className="  hover:text-[20px]">
          Resume
        </button>
        <button className="  hover:text-[20px]">
          Work
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
