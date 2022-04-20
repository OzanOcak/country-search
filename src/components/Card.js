const Card = ({ user }) => {
  return (
    <div className=" pt-2 px-2 mb-2 rounded border border-3 ">
      <img
        className="d-inline mb-2 "
        src={user.avatar_url}
        width="80"
        alt={user.name}
      />
      <div className="content">
        <div className="header">{user.name}</div>
      </div>
    </div>
  );
};
export default Card;
