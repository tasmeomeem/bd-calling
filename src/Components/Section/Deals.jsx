import DealsCard from "./DealsCard";


const Deals = () => {
    let card = [
        {
            img: '/public/assets/deals1.png',
            title: 'With Bakash payment only',
            description: 'Up To 14% Discount On The Base Fare Of Domestic Flights',
        },
        {
            img: '/public/assets/deals2.png',
            title: 'With Bakash payment only',
            description: 'Up To 14% Discount On The Base Fare Of Domestic Flights',
        },
        {
            img: '/public/assets/deals3.png',
            title: 'With Bakash payment only',
            description: 'Up To 14% Discount On The Base Fare Of Domestic Flights',
        }
    ]
        
  
    return (
        <section>
            <div>
                <h1 className="text-xl md:text-3xl font-semibold px-5 pt-10">Deals and Offers</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 pt-10">
                {card.map((deals,index) => {
                    return(
                        <div key={`deals-card-${index}`}>
                            <DealsCard
                               img ={deals.img} 
                               title ={deals.title}
                               description={deals. description}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Deals;