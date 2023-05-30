import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Highlight from "../Highlight/Highlight";
import OfferedMenu from "../OfferedMenu/OfferedMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Highlight></Highlight>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <OfferedMenu></OfferedMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;