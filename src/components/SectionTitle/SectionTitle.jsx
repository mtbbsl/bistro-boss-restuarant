

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 mt-24 mb-12">
            <p className="text-yellow-600">--- {subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-2 py-2 my-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;