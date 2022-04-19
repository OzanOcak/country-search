import CardList from "./CardList";
import Search from "./Search";

const App = () => {
  return (
    <div className="justify-content-center">
      <div className="container col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6 mt-3 ">
        <Search />
        <CardList />
      </div>
    </div>
  );
};
export default App;
