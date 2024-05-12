import { useState } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router, usePage } from '@inertiajs/react';

const Create = ({ event, categories, errors }) => {

    const { auth } = usePage().props

    const [formData, setFormData] = useState({
        name: event ? event.name : '',
        headline: event ? event.headline : '',
        description: event ? event.description : '',
        start_time: event ? event.start_time : '',
        location: event ? event.location : '',
        duration: event ? event.duration : '',
        category_id: event ? event.category_id : '',
        type: event ? event.type : '',
        is_popular: event ? event.is_popular : false,
        files: []
    });

    const handleChange = e => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : files ? [...prevState.files, ...files] : value
        }));
    };

    const handleFilesChange = e => {
        const files = Array.from(e.target.files);
        setFormData(prevState => ({
            ...prevState,
            files: files
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        const formDataToSend = new FormData();

        formDataToSend.append('name', formData.name);
        formDataToSend.append('headline', formData.headline);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('start_time', formData.start_time);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('duration', formData.duration);
        formDataToSend.append('category_id', formData.category_id);
        formDataToSend.append('type', formData.type);
        formDataToSend.append('is_popular', formData.is_popular ? 1 : 0);

        formData.files.forEach((file, index) => {
            formDataToSend.append(`files[${index}]`, file);
        });

        router.post(route('admin.events.store'), formDataToSend, {
            onSuccess: () => router.get(route('admin.events.index'))
        });
        console.log(formDataToSend);
        console.log(errors);
    };

    return (
        <>
            <Head title="Create Event" />
            {errors.length > 0 ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Whoops!</strong>
                    <ul>
                        {errors.map((error, index) => <li key={index}>{error}</li>)}
                    </ul>
                </div>
            ) : null}
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm">
                                Event Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Categories */}
                        <div className="mb-6">
                            <label htmlFor="category_id" className="block mb-2 text-sm">
                                Category
                            </label>
                            <select
                                name="category_id"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                value={formData.category_id}
                                onChange={handleChange}
                            >
                                <option value="">Select category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="headline" className="block mb-2 text-sm">
                                Headline
                            </label>
                            <input
                                type="text"
                                name="headline"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                value={formData.headline}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block mb-2 text-sm">
                                Description
                            </label>
                            <textarea
                                name="description"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="start_time" className="block mb-2 text-sm">Start Date</label>
                            <input type="datetime-local" name="start_time"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                value={formData.start_time} onChange={handleChange} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="location" className="block mb-2 text-sm">Location</label>
                            <input type="text" name="location" className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                value={formData.location} onChange={handleChange} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="duration" className="block mb-2 text-sm">Duration (in hours)</label>
                            <input type="number" name="duration" className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
                                value={formData.duration} onChange={handleChange} />
                        </div>
                        {/* Type (online/offline) */}
                        <div className="mb-6">
                            <label htmlFor="type" className="block mb-2 text-sm">Type</label>
                            <select name="type" className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5" onChange={handleChange} defaultValue='offline' >
                                <option value="offline" >
                                    Offline
                                </option>
                                <option value="online">
                                    Online
                                </option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="files" className="block mb-2 text-sm">Photo</label>
                            <input type="file" name="files[]" onChange={handleFilesChange} multiple className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5" />

                        </div>
                        {/* Is Popular */}
                        <div className="mb-6">
                            <label htmlFor="is_popular" className="block mb-2 text-sm">
                                Populer?
                            </label>
                            <input
                                type="checkbox"
                                name="is_popular"
                                value={formData.is_popular}
                                checked={formData.is_popular}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 rounded-lg p-2.5"
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-dark-indigo rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Save
                        </button>
                    </form>
                </div >
            </div >
        </>
    );
};

Create.layout = page => <DashboardLayout children={page} title="Create Event" />;

export default Create;
