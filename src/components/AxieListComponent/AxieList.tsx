import { useState, useEffect } from "react";
import AxieCard from "../CardComponent/AxieCard";
import "./AxieList.css";
import LevelSelector from "../Selectors/LevelSelector/LevelSelector";
import SortSelector from "../Selectors/SortSelector/SortSelector";
import ClassSelector from "../Selectors/ClassSelector/ClassSelector";
import Footer from "../FooterComponent/Footer";
import { useAxies } from "../../hooks/useAxies";
import { useElapsedTime } from "../../hooks/useElapsedTime";
import { useSearchParams } from "react-router-dom";

type AxieListProps = {
  initialLevel: string;
  initialSort: string;
  initialClass: string;
};

function AxieList({ initialLevel, initialSort, initialClass }: AxieListProps) {
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [sortMode, setSortMode] = useState(initialSort);
  const [axieClass, setAxieClass] = useState(initialClass);
  const [page, setPage] = useState(1);

  const { axies, loading, lastUpdate } = useAxies(selectedLevel, sortMode, axieClass, page);
  const elapsed = useElapsedTime(lastUpdate);

  const [, setSearchParams] = useSearchParams();

  // 🔹 Actualizar la URL cada vez que cambian los filtros
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedLevel !== "Not simulated") params.level = selectedLevel;
    if (sortMode !== "average") params.sort = sortMode;
    if (axieClass !== "any") params.class = axieClass;
    setSearchParams(params);
  }, [selectedLevel, sortMode, axieClass, setSearchParams]);

  return (
    <>
      <div className="selectors-box">
        <LevelSelector selected={selectedLevel} onChange={(v) => { setSelectedLevel(v); setPage(1); }} />
        <SortSelector selected={sortMode} onChange={(v) => { setSortMode(v); setPage(1); }} />
        <ClassSelector selected={axieClass} onChange={(v) => { setAxieClass(v); setPage(1); }} />
      </div>

      <div className="title title-card-container">
        <h2>
          Axies List Level {selectedLevel} (Sort: {sortMode}, Class: {axieClass})
        </h2>
        <p>{lastUpdate ? `Last update: ${elapsed}` : "Loading last update..."}</p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards-container">
          {axies.map((axie) => (
            <AxieCard
              key={axie.id}
              axieId={axie.id}
              current_price={axie.current_price}
              level={axie.level}
              min={axie.min}
              max={axie.max}
              avg={axie.avg}
              breed={axie.breed}
              marketplace_url={axie.marketplace_url}
            />
          ))}
        </div>
      )}

      <Footer page={page} setPage={setPage} />
    </>
  );
}

export default AxieList;