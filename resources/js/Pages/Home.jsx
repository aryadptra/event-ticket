import AppLayout from '@/Layouts/AppLayout'

const Home = ({ events, categories }) => {
    return (
        <>
            <div>
                <section id="heroSection" className="container relative max-w-screen-xl pt-10 pb-24">
                    <div className="flex flex-wrap items-center justify-between w-full gap-8">
                        <div className="w-full max-w-[400px] flex flex-col gap-4">
                            <div className="inline-flex gap-[6px] items-center bg-lavender-pink rounded-full px-4 py-[6px] w-max">
                                <img src="/assets/svgs/ic-champion-cup.svg" alt="tickety-assets" />
                                <p className="text-sm font-semibold text-dark-indigo">
                                    Buy one get three tickets
                                </p>
                            </div>
                            <h1 className="text-[36px] md:text-[48px] text-white font-bold">
                                Empower Your
                                <span className="text-dark-indigo bg-butter-yellow inline-flex items-center h-[49px] w-max">Passions</span>
                                Today
                            </h1>
                            <p className="text-base leading-8 md:text-lg text-iron-grey">
                                You deserve new experiences that enhance
                                the things you are truly passionate about.
                            </p>
                            <div className="mt-[14px]">
                                <a href="#eventSection" className="btn-secondary">
                                    Explore Now
                                </a>
                            </div>
                        </div>

                        <img src="/assets/images/hero-image.webp" className="max-w-[584px] max-h-[400px] w-full h-full"
                            alt="tickety-assets" />
                    </div>
                </section>

                {/* Wavy line ornament */}
                <img src="/assets/svgs/wavy-line-1.svg" className="absolute -z-10 md:top-[160px] w-full"
                    alt="tickety-assets" />

                <section id="eventSection" className="container relative max-w-screen-xl py-10">
                    {/* Section Header */}
                    <div className="flex justify-between items-center gap-4 mb-[50px]">
                        <h5 className="text-[24px] md:text-[38px] font-bold">
                            <span className="text-butter-yellow">Big</span> Events, <br />
                            Coming <span className="text-butter-yellow">Soon</span>
                        </h5>

                        <a href="#" className="btn-primary">
                            View All
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        {events.map((event, index) => (
                            <div key={index} className="event-card">
                                {/* Render your event card component here */}
                                <h3>{event.name}</h3>
                                <p>{event.start_time}</p>
                                {/* Add more event details */}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="categoriesSection" className="relative pb-[100px] overflow-hidden">
                    <div className="container relative max-w-screen-xl py-10">
                        {/* Section Header */}
                        <div className="flex justify-between items-center gap-4 mb-[50px]">
                            <h5 className="text-[24px] md:text-[38px] font-bold">
                                <span className="text-butter-yellow">Browse</span> by <br />
                                Top <span className="text-butter-yellow">Categories</span>
                            </h5>

                            <a href="#" className="btn-primary">
                                View All
                            </a>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] relative">
                            {categories.map((category, index) => (
                                <div key={index} className="category-card">
                                    {/* Render your category card component here */}
                                    <h3>{category.name}</h3>
                                    <p>{category.events_count}</p>
                                    {/* Add more category details */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wavy line ornament */}
                    <img src="/assets/svgs/wavy-line-2.svg" className="absolute -z-10 top-[250px] w-full" alt="tickety-assets" />
                </section>
            </div>
        </>
    )
}

Home.layout = page => <AppLayout children={page} title="Inertia" />

export default Home
