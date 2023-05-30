import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white">
            <div className="bg-black bg-opacity-40 py-6 my-12">
                <SectionTitle
                heading={"Featured Item"}
                subHeading={"Check It Out"}
                ></SectionTitle>
            <div className="md:flex justify-center items-center px-24 pb-24">
                <div>
                    <img src={featuredImg} />
                </div>
                <div className="md:ml-10 my-4 space-y-4">
                    <p>May 22, 2025</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolor soluta dolorum? Architecto facilis voluptas nisi, repellendus vitae eveniet sed adipisci omnis corrupti vel voluptatem iure, illo quisquam aliquam perferendis? Ipsam tenetur itaque, enim eaque provident consectetur iure deleniti saepe dicta dolorem. Ad labore debitis alias neque dolorum eius esse?</p>
                    <button className="btn btn-outline border-0 border-b-4">ORDER NOW</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Featured;