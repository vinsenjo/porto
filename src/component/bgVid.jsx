import tape2 from "../assets/tape2.mp4";
function BgVid() {
  return (
    <div className="video-back">
      <video src={tape2} autoPlay loop muted></video>
    </div>
  );
}

export default BgVid;
