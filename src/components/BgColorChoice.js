// Composant en fin de chaine

import { useContext } from "react";
import BgContext from "../BgColorContext";

// Il reçoit dans ses props le thème et la fonction qui permet de le changer
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
