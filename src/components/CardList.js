import { countries } from "../api/country-mock";
import Card from "./Card";
const CardList = () => {
  return (
    <div className="mx-auto">
      {countries.map((country) => (
        <Card key={country.id} data={country} />
      ))}
    </div>
  );
};
export default CardList;
