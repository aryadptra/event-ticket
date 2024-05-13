import React from 'react';

const CardEvent = ({ isPopular = false, cover, name, category, date, price, description, route = '/' }) => {
    return (
        <div className="group rounded-2xl w-full overflow-hidden relative min-h-[297px] bg-primary">
            {isPopular && (
                <p className="px-[14px] py-2 rounded-xl bg-butter-yellow text-dark-indigo font-semibold text-sm absolute top-5 right-5">
                    Popular
                </p>
            )}
            <img src={cover} className="w-full h-full max-h-[205px]" alt="tickety-assets" />
            <div className="p-5 w-full bg-primary flex flex-col absolute h-full group-hover:-translate-y-[70%] transition ease-in-out duration-300">
                <div className="flex flex-wrap items-center justify-between gap-y-4">
                    <div className="md:max-w-full">
                        <div className="text-xl font-semibold truncate">{name}</div>
                        <p className="text-pastel-purple text-sm mt-[6px]">{category} • {new Date(date).toLocaleDateString()}</p>
                    </div>
                    <p className="font-semibold text-secondary">Rp. {price}</p>
                </div>
                <p className="mt-4 text-base leading-7 transition duration-300 ease-in-out opacity-0 text-iron-grey group-hover:opacity-100 line-clamp-3">{description}</p>
                <div className="mt-auto transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                    <a href={route} className="block btn-secondary">View Details</a>
                </div>
            </div>
        </div>
    );
}

export default CardEvent;
