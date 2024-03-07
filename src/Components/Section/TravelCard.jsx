
const TravelCard = (props) => {
    return (
        <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card w-full md:w-96 bg-base-100 shadow-xl ">
                            
        <div className=" p-5">
            <div>
                <figure className=' h-full'>
                    <img className="rounded-md" src={props.img1}/>
                </figure>
            </div>
            <div className="flex gap-20">
                <h1 className="text-orange-400 pt-5">{props.title1}</h1>
                <h1 className="pt-5">{props.title2}</h1>
            </div>
            <div>
                <p className="font-bold pb-5 pt-5">{props.description}</p>
            </div>
            <div>
                <hr className="pt-5"/>
                <div className=' flex w-full  gap-10 '>
                   
                    <img className="rounded-md" src={props.img2}/>
                    <p className="text-orange-400 pt-4">Read More >></p>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default TravelCard;