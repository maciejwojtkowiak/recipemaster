import Breakfast from "../../images/Breakfast.jpg";
import Lunch from "../../images/Lunch.jpg";
import Dinner from "../../images/Dinner.jpg";
import Supper from "../../images/Supper.jpg";

export const getRecipeImage = (type: string) => {
  const imgName = { Breakfast, Lunch, Dinner, Supper }[type];
  return imgName;
};
