import { useEffect, useState } from "react";

type Axie = {
  id: string;
  current_price: number;
  level: number;
  min: number;
  max: number;
  avg: number;
  breed: number;
  marketplace_url: string;
};

export function useAxies(selectedLevel: string, sortMode: string, axieClass: string, page: number) {
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const axies = [
    {
        "avg": 6.100329798236058,
        "breed": 4,
        "class": "Beast",
        "current_price": 4.182190750967173,
        "id": "645339",
        "image": "https://assets.axieinfinity.com/axies/645339/axie/axie-full-transparent.png",
        "level": 40,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/645339",
        "max": 8.156833908076706,
        "min": 4.043825688395412,
        "name": "Low ID pure"
    },
    {
        "avg": 0.2355281488845484,
        "breed": 3,
        "class": "Plant",
        "current_price": 1.0511569414160762,
        "id": "404917",
        "image": "https://assets.axieinfinity.com/axies/404917/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/404917",
        "max": 0.4928651669446734,
        "min": -0.021808869175576354,
        "name": "UNIQUE"
    },
    {
        "avg": -0.01201569149364689,
        "breed": 3,
        "class": "Mech",
        "current_price": 2.0910953754835866,
        "id": "11738095",
        "image": "https://assets.axieinfinity.com/axies/11738095/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/11738095",
        "max": 0.4038002453043407,
        "min": -0.4278316282916343,
        "name": "Axie #11738095"
    },
    {
        "avg": -0.02238170477622822,
        "breed": 3,
        "class": "Beast",
        "current_price": 2.0910953754835866,
        "id": "11779216",
        "image": "https://assets.axieinfinity.com/axies/11779216/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/11779216",
        "max": 0.39136102936524353,
        "min": -0.43612443891769975,
        "name": "Axie #11779216"
    },
    {
        "avg": -0.03956596683820128,
        "breed": 3,
        "class": "Dusk",
        "current_price": 0.5855067051354041,
        "id": "6486315",
        "image": "https://assets.axieinfinity.com/axies/6486315/axie/axie-full-transparent.png",
        "level": 9,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/6486315",
        "max": 0.06962218082123947,
        "min": -0.1487541144976418,
        "name": "Axie #6486315"
    },
    {
        "avg": -0.04010138560115448,
        "breed": 3,
        "class": "Mech",
        "current_price": 2.0910953754835866,
        "id": "11775835",
        "image": "https://assets.axieinfinity.com/axies/11775835/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/11775835",
        "max": 0.3700974123753317,
        "min": -0.45030018357764046,
        "name": "Axie #11775835"
    },
    {
        "avg": -0.08129344218771706,
        "breed": 3,
        "class": "Reptile",
        "current_price": 2.6918749525213115,
        "id": "351633",
        "image": "https://assets.axieinfinity.com/axies/351633/axie/axie-full-transparent.png",
        "level": 15,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/351633",
        "max": 0.440822859879002,
        "min": -0.6034097442544357,
        "name": "Axie #351633"
    },
    {
        "avg": -0.09593275778731222,
        "breed": 2,
        "class": "Aquatic",
        "current_price": 1.2546572252901518,
        "id": "929264",
        "image": "https://assets.axieinfinity.com/axies/929264/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/929264",
        "max": 0.13581213571325573,
        "min": -0.32767765128788007,
        "name": "Naruto "
    },
    {
        "avg": -0.10577368395176386,
        "breed": 3,
        "class": "Mech",
        "current_price": 1.9865406067094071,
        "id": "180034",
        "image": "https://assets.axieinfinity.com/axies/180034/axie/axie-full-transparent.png",
        "level": 14,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/180034",
        "max": 0.2703797005997641,
        "min": -0.4819270685032922,
        "name": "mech 100%"
    },
    {
        "avg": -0.13277531631551745,
        "breed": 3,
        "class": "Dawn",
        "current_price": 2.0910953754835866,
        "id": "11733682",
        "image": "https://assets.axieinfinity.com/axies/11733682/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/11733682",
        "max": 0.25888869551809635,
        "min": -0.5244393281491307,
        "name": "Axie #11733682"
    },
    {
        "avg": -0.1362694713412193,
        "breed": 3,
        "class": "Reptile",
        "current_price": 2.917078048799603,
        "id": "5522289",
        "image": "https://assets.axieinfinity.com/axies/5522289/axie/axie-full-transparent.png",
        "level": 10,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/5522289",
        "max": 0.4198922441504571,
        "min": -0.6924311868328957,
        "name": "2803 Roland"
    },
    {
        "avg": -0.14572541747610673,
        "breed": 4,
        "class": "Plant",
        "current_price": 2.070833588996327,
        "id": "392306",
        "image": "https://assets.axieinfinity.com/axies/392306/axie/axie-full-transparent.png",
        "level": 17,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/392306",
        "max": 0.23929621682793767,
        "min": -0.5307470517801507,
        "name": "NIGHT FURY"
    },
    {
        "avg": -0.15307936884565718,
        "breed": 3,
        "class": "Reptile",
        "current_price": 2.9149869534241195,
        "id": "5850231",
        "image": "https://assets.axieinfinity.com/axies/5850231/axie/axie-full-transparent.png",
        "level": 10,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/5850231",
        "max": 0.39930214807003517,
        "min": -0.7054608857613496,
        "name": "Axie #5850231"
    },
    {
        "avg": -0.16703336591037404,
        "breed": 3,
        "class": "Dawn",
        "current_price": 2.0910953754835866,
        "id": "11779184",
        "image": "https://assets.axieinfinity.com/axies/11779184/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/11779184",
        "max": 0.21777903600426818,
        "min": -0.5518457678250163,
        "name": "Axie #11779184"
    },
    {
        "avg": -0.1679193499516203,
        "breed": 3,
        "class": "Plant",
        "current_price": 2.0910953754835866,
        "id": "11983040",
        "image": "https://assets.axieinfinity.com/axies/11983040/axie/axie-full-transparent.png",
        "level": 19,
        "marketplace_url": "https://app.axieinfinity.com/marketplace/axies/11983040",
        "max": 0.21671585515477265,
        "min": -0.5525545550580134,
        "name": "Axie #11983040"
    }
]
  return { axies, loading, lastUpdate };
}