import React from 'react';

const CardCategory = ({ icon, name, totalEvents, route }) => {
    return (
        <div className="p-5 bg-primary rounded-2xl relative inline-flex gap-[14px] items-center w-full hover:ring-2 hover:ring-butter-yellow transition ease-in-out duration-300 group">
            <a href={route} className="after:absolute after:inset-0">
                <img src={icon} alt="tickety-assets" />
            </a>
            <div>
                <p className="text-xl font-semibold capitalize">{name}</p>
                <p className="mt-[6px] text-sm text-pastel-purple">{new Intl.NumberFormat().format(totalEvents)} events</p>
            </div>
            <img
                src='/assets/svgs/ic-arrow-right.svg'
                className="absolute transition duration-300 ease-in-out -translate-x-8 translate-y-1/2 opacity-0 bottom-1/2 right-5 group-hover:translate-x-0 group-hover:opacity-100"
                alt="tickety-assets"
            />
        </div>
    );
}

export default CardCategory;
