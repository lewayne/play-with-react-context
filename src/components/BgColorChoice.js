import { useContext } from "react";
import BgContext from "../BgColorContext";


// it get the bgColor and function to change it by Context
export function BgColorChoice() {
  const { bgColor, updateBgColor } = useContext(BgContext);

  // const handleChange = (e) => {
  //   const value = e.currentTarget.value;
  //   // const value = e.target.value;
  //   updateBgColor(value);
  // }

  return (
    <select name="theme" defaultValue={bgColor} onChange={(e) => updateBgColor(e.currentTarget.value)}>
      {/* <select name="theme" defaultValue={bgColor} onChange={handleChange}> */} 
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
    </select>
  );
}
