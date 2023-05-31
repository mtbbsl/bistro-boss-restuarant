import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our Menu"}
        msg={"Would you like to try a dish?"}
      ></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"Desserts"}
        img={dessertImg}
        msg={
          "Decadent Dessert Delights: Indulge your sweet tooth with our heavenly selection of desserts. From rich chocolate creations to delicate fruit-infused delights, experience a symphony of flavors that will leave you craving for more."
        }
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizzas}
        title={"Pizzas"}
        img={pizzaImg}
        msg={
          "Delicious Pizza Delights: A tantalizing array of mouthwatering pizzas crafted with the finest ingredients, baked to perfection, and bursting with flavor. Savor the ultimate pizza experience at our restaurant!"
        }
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soups}
        title={"Soups"}
        img={soupImg}
        msg={
          "Soul-Warming Soup Sensations: Dive into a comforting bowl of our expertly crafted soups, simmered to perfection. From hearty classics to exotic blends, savor the warmth and nourishment that will embrace your taste buds."
        }
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salads}
        title={"Salads"}
        img={saladImg}
        msg={
          "Fresh and Vibrant Salad Creations: Immerse yourself in a symphony of crisp, colorful ingredients expertly tossed together. Discover a medley of flavors and textures that will invigorate your palate and leave you feeling refreshed."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
