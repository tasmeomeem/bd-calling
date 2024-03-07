

const popularCard = (props) => {
    return (
        <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card w-full md:w-96 bg-base-100 shadow-xl ">
                            
            <div className="flex gap-3 p-5">
                <div>
                    <figure className=' h-full'>
                        <img className="rounded-md" src={props.img}/>
                    </figure>
                </div>

                <div>

                    <div className='w-full px-5 '>
                        <h4 className="text-md font-bold pt-5 text-blue-600">{props.title}</h4>
                        <div className="flex gap-2">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="text-sm mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <h2 className="text-lg">{props.review}</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default popularCard;