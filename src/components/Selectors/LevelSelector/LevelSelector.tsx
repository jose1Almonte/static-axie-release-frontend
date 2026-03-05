import { useNavigate } from "react-router-dom";
import "../Selectors.css";

type LevelSelectorProps = {
  selected: string;
  onChange: (value: string) => void;
};

function LevelSelector({ selected }: LevelSelectorProps) {
  const navigate = useNavigate();

  const levels = ["Not simulated", ...Array.from({ length: 6 }, (_, i) => `${(i + 1) * 10}`)];

  return (
    <div className="level-selector selector">
      <label className="description" htmlFor="level">Select Level: </label>
      <select 
        className="description" 
        id="level" 
        value={selected} 
        disabled 
        style={{ cursor: "not-allowed", opacity: 0.7 }} 
      >
        {levels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LevelSelector;
