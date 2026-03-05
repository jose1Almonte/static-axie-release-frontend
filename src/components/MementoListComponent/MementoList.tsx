import { useEffect, useState } from "react";
import MementoCard from "../CardComponent/MementoCard";
import "./MementoList.css";

type Memento = {
  image_url: string;
  marketplace_url: string;
  name: string;
  price_usd: number;
  token_id: string;
};

function MementoList() {
  const mementos = [
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1099511627776.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1099511627776",
        "name": "Beast",
        "price_eth": 0.000009782,
        "price_ron": 0.219137,
        "price_usd": 0.020456,
        "status": "api",
        "token_id": "1099511627776"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1103806595072.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1103806595072",
        "name": "Bug",
        "price_eth": 0.00001149,
        "price_ron": 0.257401,
        "price_usd": 0.024027,
        "status": "api",
        "token_id": "1103806595072"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1108101562368.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1108101562368",
        "name": "Bird",
        "price_eth": 0.000007317,
        "price_ron": 0.163921,
        "price_usd": 0.015301,
        "status": "api",
        "token_id": "1108101562368"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1112396529664.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1112396529664",
        "name": "Plant",
        "price_eth": 0.00000455,
        "price_ron": 0.101936,
        "price_usd": 0.009515,
        "status": "api",
        "token_id": "1112396529664"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1116691496960.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1116691496960",
        "name": "Aquatic",
        "price_eth": 0.000004778,
        "price_ron": 0.107036,
        "price_usd": 0.009991,
        "status": "api",
        "token_id": "1116691496960"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1120986464256.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1120986464256",
        "name": "Reptile",
        "price_eth": 0.00001181,
        "price_ron": 0.264559,
        "price_usd": 0.024696,
        "status": "api",
        "token_id": "1120986464256"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1168231104512.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1168231104512",
        "name": "Mech",
        "price_eth": 0.000002496,
        "price_ron": 0.055906,
        "price_usd": 0.005219,
        "status": "api",
        "token_id": "1168231104512"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1172526071808.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1172526071808",
        "name": "Dawn",
        "price_eth": 0.000006319,
        "price_ron": 0.141549,
        "price_usd": 0.013213,
        "status": "api",
        "token_id": "1172526071808"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1176821039104.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1176821039104",
        "name": "Dusk",
        "price_eth": 0.000001025,
        "price_ron": 0.022953,
        "price_usd": 0.002143,
        "status": "api",
        "token_id": "1176821039104"
    },
    {
        "image_url": "https://cdn.axieinfinity.com/marketplace-website/materials/1020847100762815390390123824494327889920.png",
        "marketplace_url": "https://app.axieinfinity.com/marketplace/materials/1020847100762815390390123824494327889920",
        "name": "Radiant Spirit Shell",
        "price_eth": 0.001438061,
        "price_ron": 32.214719,
        "price_usd": 3.007123,
        "status": "api",
        "token_id": "1020847100762815390390123824494327889920"
    }
]
  const [loading, setLoading] = useState(false); // 👈 nuevo estado

  

  return (
    <div className="memento-list-container">
      <h2 className="memento-title">Materials List</h2>

      {loading ? (
        <p className="loading-text">Loading...</p> // 👈 se muestra mientras carga
      ) : (
        <div className="memento-grid">
          {mementos.map((memento) => (
            <>
            <MementoCard
              key={memento.token_id}
              image_url={memento.image_url}
              marketplace_url={memento.marketplace_url}
              name={memento.name}
              price_usd={memento.price_usd}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default MementoList;