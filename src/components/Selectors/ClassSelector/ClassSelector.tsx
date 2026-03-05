type ClassSelectorProps = {
  selected: string;
  onChange: (value: string) => void;
};

function ClassSelector({ selected }: ClassSelectorProps) {
  const classes = ["any", "beast", "bug", "bird", "plant", "aquatic", "reptile"];

  return (
    <div className="class-selector selector">
      <label className="title" htmlFor="class">Class: </label>
      <select 
        className="description" 
        id="class" 
        value={selected} 
        disabled
      >
        {classes.map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ClassSelector;
