
const FoodCard = ({item}) => {
    const { image, name, price, recipe } = item;

    return (
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="object-cover w-96"
          />
        </figure>
        <p className="absolute right-0 mr-6 mt-6 px-4 py-2 rounded-md bg-slate-900 text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-900 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;