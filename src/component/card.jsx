function Card(props) {
  return (
    <div className="h-[200px] w-[300px] bg-white">
      <div className="w-[90px]">{props.image}</div>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
      <h2>{props.link}</h2>
    </div>
  );
}

export default Card;
