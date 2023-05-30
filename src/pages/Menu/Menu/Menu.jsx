import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} msg={"Would you like to try a dish?"}></Cover>
      <h2>Men men menu</h2>
    </div>
  );
};

export default Menu;
