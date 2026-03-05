type SortSelectorProps = {
  selected: string;
  onChange: (value: string) => void;
};

function SortSelector({ selected }: SortSelectorProps) {
  const options = ["average", "min"];

  return (
    <div className="sort-selector selector">
      <label className="title" htmlFor="sort">Sort Mode: </label>
      <select 
        className="description" 
        id="sort" 
        value={selected} 
        disabled
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortSelector;
