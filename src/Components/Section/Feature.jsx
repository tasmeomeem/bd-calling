

const Feature = () => {
    let card = [
        {
            img: '/public/assets/card1.png',
            title: 'Stopover opportunity is istanbul with Tuurkish Airlines',
        },
        {
            img: '/public/assets/card2.png',
            title: 'Stopover opportunity is istanbul with Tuurkish Airlines',
        },
        {
            img: '/public/assets/card3.png',
            title: 'Stopover opportunity is istanbul with Tuurkish Airlines',
        }
    ]
        
  
    return (
        <section>
            <div>
                <h1 className="text-2xl font-semibold px-5">Featured Destinations</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 pt-10">
                {card.map((cards,index) => {
                    return(
                        <>
                            
                        </>
                    )
                })}
            </div>
        </section>
    );
};

export default Feature;