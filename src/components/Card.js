const Card = (props) => {
  return (
    <div className=" pt-2 px-2 mb-2 rounded border border-3 ">
      <img
        className="d-inline mb-2 "
        src={props.data.flag}
        width="80"
        alt="Canada"
      />
      <p className="d-inline mx-2 fs-1">{props.data.name}</p>
      <p className="mt-2">Capital City: {props.data.capital}</p>
      <p>Population: {props.data.population} millions</p>
    </div>
  );
};
export default Card;
