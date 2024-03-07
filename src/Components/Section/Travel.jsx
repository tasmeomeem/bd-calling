import TravelCard from "./TravelCard";


const Travel = () => {
    let card = [
        {
            img1: '/public/assets/travel3.png',
            img2: '/public/assets/travelcard1.png',
            title1: 'Work and Travel',
            title2: '16 Septembar 23',
            description: 'Embracing The digital Nomad Lifestyle The Degital Nomad Thr..',
        },
        {
            img1: '/public/assets/travel2.png',
            img2: '/public/assets/travelcard2.png',
            title1: 'Historical',
            title2: '14 Septembar 23',
            description: 'Historical Journeys : Stepping Back In Time Travel',

        },
        {
            img1: '/public/assets/travel1.png',
            img2: '/public/assets/travelcard3.png',
            title1: 'Sustainable Tourism',
            title2: '10 Septembar 23',
            description: 'Sustainable Tourism :Preserving The Planet While Seeing All',
        }
    ]
    return (
        <section>
            <div>
                <h1 className="text-xl md:text-3xl font-semibold px-5 pt-10">Travels Blog</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 pt-10">
                {card.map((travel,index) => {
                    return(
                        <div key={`deals-card-${index}`}>
                            <TravelCard
                               img1 ={travel.img1} 
                               img2 ={travel.img2}
                               title1 ={travel.title1}
                               title2 ={travel.title2}
                               description={travel.description}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Travel;