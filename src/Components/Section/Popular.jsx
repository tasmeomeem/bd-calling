import PopularCard from "./PopularCard";


const Popular = () => {
    let card = [
        {
            img: '/public/assets/popular1.png',
            title: 'Biman Bangladesh Airlines',
            review: '5(753 Review)'
        },
        {
            img: '/public/assets/popular2.png',
            title: 'Emirates',
            review: '5(753 Review)'
        },
        {
            img: '/public/assets/popular3.png',
            title: 'Turkish Airlines',
            review: '5(753 Review)'
        },
        {
            img: '/public/assets/popular4.png',
            title: 'Malayshia Airlines',
            review: '5(783 Review)'
        },
        {
            img: '/public/assets/popular5.png',
            title: 'Singapore Airlines',
            review: '5(753 Review)'
        },
        {
            img: '/public/assets/popular1.png',
            title: 'Malayshia Airlines',
            review: '3(753 Review)'
        },
        {
            img: '/public/assets/popular2.png',
            title: 'Biman Bangladesh Airlines',
            review: '4(753 Review)'
        },
        {
            img: '/public/assets/popular3.png',
            title: 'Turkish Airlines',
            review: '3(753 Review)'
        },
        {
            img: '/public/assets/popular4.png',
            title: 'American Airlines',
            review: '5(783 Review)'
        },
        {
            img: '/public/assets/popular5.png',
            title: 'Emirates',
            review: '4(753 Review)'
        },
        {
            img: '/public/assets/popular1.png',
            title: 'Turkish Airlines',
            review: '3(753 Review)'
        },
        {
            img: '/public/assets/popular2.png',
            title: 'Malayshia Airlines',
            review: '5(753 Review)'
        }

    ]
    return (
        <section>
            <div>
                <h1 className="text-xl md:text-3xl font-semibold px-5 pt-10">Deals and Offers</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 pt-10">
                {card.map((popular,index) => {
                    return(
                        <div key={`popular-card-${index}`}>
                            <PopularCard
                               img ={popular.img} 
                               title ={popular.title}
                               review={popular.review}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Popular;