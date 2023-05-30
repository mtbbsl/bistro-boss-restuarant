import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Highlight from "../Highlight/Highlight";
import OfferedMenu from "../OfferedMenu/OfferedMenu";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Highlight></Highlight>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <OfferedMenu></OfferedMenu>
        </div>
    );
};

export default Home;