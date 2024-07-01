function Education(props) {
  return (
    <div
      className="font-popins text-white"
    >
      <h3 className="text-2xl">{props.school}</h3>
      <p className="text-md">{props.year}</p>
      <p className="text-md">{props.info}</p>
    </div>
  );
}

export default Education;
