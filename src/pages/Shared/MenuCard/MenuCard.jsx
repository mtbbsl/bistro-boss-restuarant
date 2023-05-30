

const MenuCard = ({item}) => {
    const {image, name, recipe} = item;
    return (
      <div className="mx-auto">
        <div className="card w-96 bg-gray-300 shadow-xl">
          <figure>
            <img src={image} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
              <button className="btn">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MenuCard;