function DessertsList(props) {
  // Implement the component here.
  const lowCalDessert = props.data
  .filter((dessert) => {
    return dessert.calories<500;
    })
  .sort((a,b) => {
    return a.calories - b.calories;
  })
 .map((dessert) => {
    return(
      <li>
        {dessert.name} - {dessert.calories} cal
      </li>
    );
 });
 
 return (
  <ul>{lowCalDessert}</ul>
 );
}

export default DessertsList;
