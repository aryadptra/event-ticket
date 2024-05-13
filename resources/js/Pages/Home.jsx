import CardCategory from '@/Components/Frontend/CardCategory'
import CardEvent from '@/Components/Frontend/CardEvent'
import AppLayout from '@/Layouts/AppLayout'

const Home = ({ events, categories }) => {
    console.log(categories)
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
                        <h5 className="text-[24px] md:text-[38px] font-bold text-white">
                            <span className="text-butter-yellow">Big</span> Events, <br />
                            Coming <span className="text-butter-yellow">Soon</span>
                        </h5>

                        <a href="#" className="btn-primary">
                            View All
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] text-white">
                        {events.map((event, index) => (
                            <CardEvent
                                key={index}
                                cover={event.photos[0]}
                                name={event.name}
                                category={event.category.name}
                                date={event.start_time}
                                price={event.start_from}
                                isPopular={event.is_popular}
                                description={event.headline} // Sesuaikan dengan path detail di aplikasi Anda
                            />
                        ))}
                    </div>
                </section>

                <section id="categoriesSection" className="relative pb-[100px] overflow-hidden text-white">
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
                                <CardCategory
                                    key={index}
                                    icon={category.icon}
                                    name={category.name}
                                    totalEvents={category.events_count}
                                    route={`/categories/${category.slug}`}
                                />
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
