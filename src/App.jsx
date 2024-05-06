import { useState } from "react";
import people from "../src/data";
const App = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  console.log(name);
  return <h2>Reviews Starter</h2>;
};
export default App;
