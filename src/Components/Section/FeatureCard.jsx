

const FeatureCard = (props) => {
    return (
        <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card w-full md:w-96 bg-base-100 shadow-xl ">
                            
            <figure className=''>
                <img src={props.img}/>
            </figure>

            <div className=' w-full px-5 pt-2'>
                <h2>{props.title}</h2>
            </div>
            <div className="card-body items-center">
                <button className="btn w-32 btn-warning ">View more</button> 
            </div>
        </div>
    );
};

export default FeatureCard;