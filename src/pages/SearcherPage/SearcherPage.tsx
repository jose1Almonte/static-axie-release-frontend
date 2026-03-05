import { useSearchParams } from "react-router-dom";
import AxieList from "../../components/AxieListComponent/AxieList";
import MementoList from "../../components/MementoListComponent/MementoList";

function SearcherPage() {
  const [searchParams] = useSearchParams();

  const level = searchParams.get("level") || "Not simulated";
  const sort = searchParams.get("sort") || "average";
  const axieClass = searchParams.get("class") || "any";

  return (
    <>
      <MementoList />
      <AxieList initialLevel={level} initialSort={sort} initialClass={axieClass} />
    </>
  );
}

export default SearcherPage;