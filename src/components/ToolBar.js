// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même

import { BgColorChoice } from "./BgColorChoice";

// Just to display BgColorChoice Component ...
export default function ToolBar() {
  return (
    <div>
      <button>Zoomer</button>
      <button>Dezoomer</button>
      <BgColorChoice />
    </div>
  );
}
