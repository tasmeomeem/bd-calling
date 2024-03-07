

const FeatureCard = () => {
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl ">
                            
            <figure className=''>
                <img src="/public/assets/card1.png"/>
            </figure>

            <div className=' w-full px-5 pt-2'>
                <h2></h2>
            </div>
            <div className="card-body">
                <button className="btn w-24 btn-warning">View more</button> 
            </div>
        </div>
    );
};

export default FeatureCard;