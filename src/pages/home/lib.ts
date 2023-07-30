import { STACK_PAGE_NAMES } from "@/shared/config";
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
      navigationKey: STACK_PAGE_NAMES.home.films.main,
    },
    {
      source: PERSON_PNG,
      title: "Персонажи",
      size: "180px",
      navigationKey: STACK_PAGE_NAMES.home.persons.main,
    },
    {
      source: STARSHIP_PNG,
      title: "Звездолеты",
      size: "180px",
      navigationKey: "",
    },
    {
      source: VEHICLE_PNG,
      title: "Транспорты",
      size: "180px",
      navigationKey: "",
    },
    {
      source: SPECIE_PNG,
      title: "Виды",
      size: "180px",
      navigationKey: "",
    },
    {
      source: PLANET_PNG,
      title: "Планеты",
      size: "180px",
      navigationKey: "",
    },
  ];

  return tiles;
};

export { getAllTiles };
