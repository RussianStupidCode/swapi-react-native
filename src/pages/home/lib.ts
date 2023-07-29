import {
  FILM_PNG,
  PERSON_PNG,
  PLANET_PNG,
  SPECIE_PNG,
  STARSHIP_PNG,
  VEHICLE_PNG,
} from "@/shared/image-assets";

const getAllTiles = () => {
  const tiles = [
    {
      source: FILM_PNG,
      title: "Фильмы",
      size: "180px",
    },
    {
      source: PERSON_PNG,
      title: "Персонажи",
      size: "180px",
    },
    {
      source: STARSHIP_PNG,
      title: "Звездолеты",
      size: "180px",
    },
    {
      source: VEHICLE_PNG,
      title: "Транспорты",
      size: "180px",
    },
    {
      source: SPECIE_PNG,
      title: "Виды",
      size: "180px",
    },
    {
      source: PLANET_PNG,
      title: "Планеты",
      size: "180px",
    },
  ];

  return tiles;
};

export { getAllTiles };
