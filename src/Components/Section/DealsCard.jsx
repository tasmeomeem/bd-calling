

const DealsCard = (props) => {
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
                        <h4 className="text-sm pt-20">{props.title}</h4>
                        <h2 className=" font-bold">{props.description}</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DealsCard;