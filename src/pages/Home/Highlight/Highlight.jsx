import highlight from "../../../assets/home/chef-service.jpg";

const Highlight = () => {
  return (
    <div
      className="hero h-96 my-12 p-12"
      style={{ backgroundImage: `url(${highlight})` }}
    >
      <div className="hero-overlay bg-white bg-opacity-80"></div>
      <div className="hero-content text-center text-black">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
