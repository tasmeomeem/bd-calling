

const News = () => {
    return (
        <section className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-48">
                <div className="pt-20">
                    <img className="h-[400px] w-[600px]" src="/public/assets/news.png"/>
                </div>
                <div className="md:pt-10">
                    <h1 className="text-2xl font-bold md:pt-40">Subscribs To Our News Latter</h1>
                    <h2  className="text-xl font-semibold text-blue-500" >Subscribs To Our News Latter </h2>
                    <div className="pt-5">
                    <input type="text" placeholder="Your email" className=" input input-bordered input-primary w-full max-w-xs" />
                </div>
                    <button className="btn btn-warning mt-5 mb-5">Subscribe</button>
                </div>
                
            </div>
        </section>
    );
};

export default News;