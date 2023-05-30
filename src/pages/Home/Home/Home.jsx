import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Highlight from "../Highlight/Highlight";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Highlight></Highlight>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
        </div>
    );
};

export default Home;