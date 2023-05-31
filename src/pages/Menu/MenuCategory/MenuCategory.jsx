import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img, msg}) => {
    return (
      <div>
        {title && <Cover img={img} title={title} msg={msg}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 mt-12 mb-12">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center mb-24">
          <button className="btn btn-outline border-0 border-b-4">
            Order your favourite food
          </button>
        </div>
      </div>
    );
};

export default MenuCategory;