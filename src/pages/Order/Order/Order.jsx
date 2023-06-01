import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter((item) => item.category === "dessert");
    const soups = menu.filter((item) => item.category === "soup");
    const salads = menu.filter((item) => item.category === "salad");
    const pizzas = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Order Food</title>
        </Helmet>
        <Cover
          img={orderCoverImg}
          title={"Order Food"}
          msg={
            "Convenient and Flavorful Food Delivery: Enjoy a hassle-free dining experience from the comfort of your own home. Delight in our delectable menu offerings delivered right to your doorstep, bringing culinary joy to your table."
          }
        ></Cover>
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="my-12"
        >
          <TabList className="text-center my-6">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Order;
