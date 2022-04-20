//import { countries } from "../api/country-mock";
import Card from "./Card";
const CardList = ({ users = [] }) => {
  return (
    <div className="mx-auto">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};
export default CardList;
