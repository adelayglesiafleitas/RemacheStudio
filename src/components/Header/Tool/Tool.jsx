// navHandlers.js

export const handleMouseEnterWorks = (
  item,
  setItemType,
  setDropdownVisibleWork
) => {
  setItemType(item);
  setDropdownVisibleWork(true);
};

export const handleMouseEnterTeams = (
  item,
  setItemType,
  setDropdownVisibleTeam
) => {
  setItemType(item);
  setDropdownVisibleTeam(true);
};

export const handleMouseEnter = (
  item,
  setItemType,
  setDropdownVisibleWork,
  setDropdownVisibleTeam
) => {
  if (item === "Equipo") {
    handleMouseEnterTeams(item, setItemType, setDropdownVisibleTeam);
  } else if (item === "Trabajos") {
    handleMouseEnterWorks(item, setItemType, setDropdownVisibleWork);
  }
};

export const handleMouseLeave = (
  itemType,
  setItemType,
  setDropdownVisibleTeam,
  setDropdownVisibleWork
) => {
  setItemType("");
  if (itemType === "Equipo") {
    setDropdownVisibleTeam(false);
  } else if (itemType === "Trabajos") {
    setDropdownVisibleWork(false);
  }
};

export const handlePos = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};
export const handleDisplayBurger = (setDisplayBurger) => {
  setDisplayBurger((prev) => !prev);
};
