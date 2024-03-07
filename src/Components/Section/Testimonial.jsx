const Testimonial = () => {
    return (
        <div className="min-h-[400px] bg-blue-500">
            <div className="container mx-auto py-10">
                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
                    <div className="relative">
                        <img
                            className="w-[150px] lg:w-auto rounded-xl"
                            src="https://s3-alpha-sig.figma.com/img/7bff/9ca0/f8f286e6ae0e12eb5ec5f8ee73d13811?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HNce2Nfy5C8jRQxjFI66wXeepSxJMioVOemyVRRZ4y89BEV30B565zP~u8Hw~sgcyv3uYnd8REIQQiQJt~AzU2GOO11b7N-Y1TLHOzE25oO-b3SW0cpjK3vfFFXvFrtWYnh1b9c3bVOpfe6UfGwRihmOAL49UguhUTKjaDyrophQ8TveSYU5WvAgCaTIFBMwGC3TEIia6r51O~ijqp06HDQhMT0VzxmFBYdptT08ScOyKmo6~-59K8mNBcXpTglwb4saafFqMio5bHBfRA7ot8QaFtoFSzT6BeE8hawQVqlUYpctz4OixQf7FJEo3kq1lF~U7Kpa6rZr7S11l86NGQ__"
                            alt="User"
                        />

                        <div className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-blue-500/50 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                                <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex gap-5 w-full bg-white rounded-xl relative">
                        <div className="text-[100px] leading-none text-blue-500 absolute bottom-0 right-[50px]">”</div>

                        <div>
                            <img
                                className="w-[500px] h-full rounded-xl"
                                src="https://s3-alpha-sig.figma.com/img/9e94/6dfd/bdabd8af641aadefda63053ad7c2456e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbuhdtW5vuFSxdemY~SJNbjtT3XOwpCw2wxe3h8n92f2abSnIGnqQIcXlmjEcOPsXpUvFrUepvX5lqM321wuHwOIyEd~CX8tfpmGGonUc2yqAVqQycYa6D8qGiCROypiKjEFOS9hLcxyHT7bBJuvZMWZAOIHLfRRLsKywF9p5vAR9ObKNFZKtwx0iNQJY9VwWHuv9ndZeNxazZOZ3tb-8r9ibUrn4wfxnMpXPDTLShSPIsJWGKGF9BmaVsbzMt~sG23-nO1Thp8rhfnsFUVyvNs9QP86uHH-5Rvlfz1Ax~D2TO05nmjEkGIIMjv65~lTul1HYbaiH3kUD0rD1wzJag__"
                                alt="User"
                            />
                        </div>

                        <div className="px-3 md:px-20 mt-5 md:mt-20">
                            <div className="mb-5">"Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"</div>

                            <div className="font-bold">Emily</div>
                            <div className="text-sm">Adventure Enthusiast</div>
                            <div className="flex gap-1 text-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            className="w-[150px] lg:w-auto rounded-xl"
                            src="https://s3-alpha-sig.figma.com/img/1d22/50a8/b16a25ebb7e249f2d9d1d3786395dc43?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APC92htLDUA0KtFrDaNZfxLt-QJZ0GKCqvzchC5NtT8M7GcfrihFSxhIqeQFPWiEiYttgrur4myYm6FTim7F47RCcaxkN95qOWJzc24OCD778lL6yV3OGZGB6Pkgw9fWbK8eErt2sAkbvL6CyDUpwNb2Wo5L5030keLSQAkAg-lrLZidUGs-TaomxbWcieawqfbY7C3tWkDY6KOkmDuLFeVAcRBLKGT0HJj~w7SO4SwZ7OcZW~F5Xehx0~b~4pKLjCuqSY1YP5MeSrMCV2qYVJWp64xo0gnIH676y3m~1~5vKhC8hnBZKw5NhTSID6VppuZ5KjfuAWaIWGnknajo2g__"
                            alt="User"
                        />

                        <div className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-blue-500/50 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                                <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
