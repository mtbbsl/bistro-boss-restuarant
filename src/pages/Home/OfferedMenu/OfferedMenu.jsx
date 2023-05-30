import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const OfferedMenu = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const offeredItems = data.filter(item => item.category === 'offered');
            setCard(offeredItems)})
    } , [])

    return (
        <section>
            <SectionTitle
                heading={"Offered Menu"}
                subHeading={"Should Try"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-12 my-12">
                {
                    card.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
        </section>
    );
};

export default OfferedMenu;