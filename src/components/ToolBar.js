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
