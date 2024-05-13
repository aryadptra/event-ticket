import InputError from '@/Components/InputError';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { router, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

const Create = ({ event, ticket, errors }) => {
    const isEdit = ticket !== null;

    const { data, setData, post, processing, errors: formErrors } = useForm({
        name: '',
        price: '',
        quantity: '',
        max_buy: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        router.post(route('admin.events.tickets.store', event.id), {
            ...data,
        }, {
            onSuccess: () => setData({ name: '', price: '', quantity: '', max_buy: '' })
        })

        console.log(data);
    }

    return (
        <div>
            <h2 className="text-xl font-semibold leading-tight text-gray-800 mb-5">
                Event &raquo; {event.name} &raquo; Ticket &raquo; {isEdit ? 'Edit' : 'Buat'}
            </h2>

            {errors.length > 0 && (
                <div className="mb-5" role="alert">
                    <div className="px-4 py-2 font-bold text-white bg-red-500 rounded-t">
                        Ada kesalahan!
                    </div>
                    <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
                        <ul>
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm">Ticket Name</label>
                            <input
                                type="name"
                                name="name"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                onChange={handleChange}
                                value={data.name}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="price" className="block mb-2 text-sm">Price (Rp.)</label>
                            <input
                                type="number"
                                name="price"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                onChange={handleChange}
                                value={data.price}
                            />
                            <InputError message={errors.price} className="mt-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="quantity" className="block mb-2 text-sm">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                onChange={handleChange}
                                value={data.quantity}
                            />
                            <InputError message={errors.quantity} className="mt-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="max_buy" className="block mb-2 text-sm">Max. Buy</label>
                            <input
                                type="number"
                                name="max_buy"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                onChange={handleChange}
                                value={data.max_buy}
                            />
                            <InputError message={errors.max_buy} className="mt-2" />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-dark-indigo rounded w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};



Create.layout = page => <DashboardLayout children={page} title="Inertia" />

export default Create
