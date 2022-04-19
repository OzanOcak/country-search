# Getting Started with Create React App

```console
npx create-react-app country-select
```

delete all the files but index.js, create components folder and create App.js Card.js and CardList.js in it, place the CDN links of FontAwsome an Bootsrap.css in head section of index.js

```javascript
import Card from "./Card";

const CardList = () => {
  return <Card />;
};
export default CardList;
```

Type of CardList is a function but it is special, it is called arrow function and it is not allowed to pass by reference thus we can't use pointer a.k.a. **this** within arrow functions. Arrow functions are assign to variable thus wherever it is unmount , it has lexical scope which means it can access variable outside of its function's scope where it is launched.

## passing props

we first get the mock data and pass it to child component with a argument name we define

```javascript
import { countries } from "../api/country-mock";

const CardList = () => {
  return <Card country={countries[0]} />;
};
```

Then we can reach props in child component. All primitives except null pass by value, objects and functions pass by reference. Props is also kind of object, it pass by reference but react library copy values of props' element every time when we reach them.

```javascript
const Card = (props) => {
  return <p>{props.country.name}</p>;
};
```

## using map method

```javascript
const CardList = () => {
  return {countries.map((country) => (
        <Card key={country.id} data={country} />
      ))};
};
```
