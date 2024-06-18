import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable
} from 'firebase/storage';
import { app } from '../firebase.js';

export default function CreateListing() {
    const { currentUser } = useSelector(state => state.user);
    const navigate=useNavigate();

    const [files, setFiles] = useState([]);
    const [formData, setFormData] = useState({
        imageUrls: [],
        name: '',
        description: '',
        address: '',
        type: 'rent',
        bedrooms: 1,
        bathrooms: 1,
        regularPrice: 50,
        discountPrice: 0,
        offer: false,
        parking: false,
        furnished: false,
    });
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(formData);

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) / 100;
                    console.log(`Upload is ${progress}% done.`);
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    }

    const handleImageSubmit = (e) => {
        e.preventDefault();
        if ((files.length > 0) && (files.length + formData.imageUrls.length < 7)) {
            setUploading(true);
            setImageUploadError(false);
            const promises = [];
            for (let i = 0; i < files.length; ++i) {
                promises.push(storeImage(files[i]));
            }

            Promise.all(promises).then((urls) => {
                setFormData({
                    ...formData,
                    imageUrls: formData.imageUrls.concat(urls)
                });

                setUploading(false);
                setImageUploadError(false);
            }).catch((error) => {
                setUploading(false);
                setImageUploadError('Image Upload failed! (max image size: 2 MB)');
            });
        } else {
            setUploading(false);
            setImageUploadError('You can only upload upto 6 images per listing.');
        }
    }

    const handleRemoveImage = (index) => {
        setFormData({
            ...formData,
            imageUrls: formData.imageUrls.filter((_, i) => i !== index),
        })
    }

    const handleChange = (e) => {
        if (e.target.id === 'sale' || e.target.id === 'rent') {
            setFormData({
                ...formData,
                type: e.target.id,
            });
        }

        if (
            e.target.id === 'parking' ||
            e.target.id === 'furnished' ||
            e.target.id === 'offer'
        ) {
            setFormData({
                ...formData,
                [e.target.id]: e.target.checked,
            });
        }

        if (
            e.target.type === 'number' ||
            e.target.type === 'text' ||
            e.target.type === 'textarea'
        ) {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value,
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (formData.imageUrls.length < 1)
                return setError('You must upload at least one image.');

            if (+formData.regularPrice < +formData.discountPrice)
                return setError('Discounted price must be less than the Regular price');

            setLoading(true);
            setError(false);

            const res = await fetch('/api/listing/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    userRef: currentUser._id,
                }),
            });

            const data = await res.json();
            setLoading(false);

            if (data.success === false) {
                setError(data.message);
            }

            navigate(`/listing/${data._id}`);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>
                Create a Listing
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <input
                        onChange={handleChange}
                        value={formData.name}
                        type="text"
                        placeholder='Name'
                        className='border p-3 rounded-lg'
                        id='name'
                        maxLength='62'
                        minLength='10'
                        required
                    />

                    <textarea
                        onChange={handleChange}
                        value={formData.description}
                        type="text"
                        placeholder='Description'
                        className='border p-3 rounded-lg'
                        id='description'
                        required
                    />

                    <input
                        onChange={handleChange}
                        value={formData.address}
                        type="text"
                        placeholder='Address'
                        className='border p-3 rounded-lg'
                        id='address'
                        required
                    />

                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input
                                onChange={handleChange}
                                checked={formData.type === 'sale'}
                                type="checkbox"
                                id='sale'
                                className='w-5'
                            />
                            <span>Sell</span>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                onChange={handleChange}
                                checked={formData.type === 'rent'}
                                type="checkbox"
                                id='rent'
                                className='w-5'
                            />
                            <span>Rent</span>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                onChange={handleChange}
                                checked={formData.parking}
                                type="checkbox"
                                id='parking'
                                className='w-5'
                            />
                            <span>Parking spot</span>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                onChange={handleChange}
                                checked={formData.furnished}
                                type="checkbox"
                                id='furnished'
                                className='w-5'
                            />
                            <span>Furnished</span>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                onChange={handleChange}
                                checked={formData.offer}
                                type="checkbox"
                                id='offer'
                                className='w-5'
                            />
                            <span>Offer</span>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center gap-2'>
                            <input
                                onChange={handleChange}
                                value={formData.bedrooms}
                                type="number"
                                id='bedrooms'
                                min='1'
                                max='10'
                                className='p-3 border border-grey-300 rounded-lg'
                                required
                            />
                            <p>Beds</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                onChange={handleChange}
                                value={formData.bathrooms}
                                type="number"
                                id='bathrooms'
                                min='1'
                                max='10'
                                className='p-3 border border-grey-300 rounded-lg'
                                required
                            />
                            <p>Baths</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                onChange={handleChange}
                                value={formData.regularPrice}
                                type="number"
                                id='regularPrice'
                                min='50'
                                max='1000000000'
                                className='p-3 border border-grey-300 rounded-lg'
                                required
                            />
                            <div className='flex flex-col items-center'>
                                <p>Regular Price</p>
                                <span className='text-xs'>($ / month)</span>
                            </div>
                        </div>

                        {formData.offer && (
                            <div className='flex items-center gap-2'>
                                <input
                                    onChange={handleChange}
                                    value={formData.discountPrice}
                                    type="number"
                                    id='discountPrice'
                                    min='0'
                                    max='10000000'
                                    className='p-3 border border-grey-300 rounded-lg'
                                    required
                                />

                                <div className='flex flex-col items-center'>
                                    <p>Discounted Price</p>
                                    <span className='text-xs'>($ / month)</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex flex-col flex-1 gap-4'>
                    <p className='font-semibold '>Images:
                        <span className='font-normal text-gray-600 ml-2'>
                            The first image will be the cover image (max 6)
                        </span>
                    </p>

                    <div className='flex gap-4'>
                        <input
                            onChange={(e) => setFiles(e.target.files)}
                            className='p-3 border border-gray-300 rounded w-full'
                            type="file"
                            id='images'
                            accept='image/*'
                            multiple
                        />

                        <button
                            onClick={handleImageSubmit}
                            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
                            type='button'
                            disabled={uploading}
                        >
                            {uploading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>

                    <p className='text-red-700 text-sm'>{imageUploadError && imageUploadError}</p>

                    {
                        formData.imageUrls.length > 0 && formData.imageUrls.map((url, index) => (
                            <div
                                className='flex justify-between items-center p-3 border'
                                key={url}
                            >
                                <img
                                    src={url}
                                    alt="Listing image"
                                    className='w-20 h-20 object-contain rounded-lg'
                                />
                                <button
                                    onClick={() => handleRemoveImage(index)}
                                    className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                                    type='button'
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    }

                    <button
                        className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                        type='submit'
                        disabled={loading || uploading}
                    >
                        {loading ? 'Creating...' : 'Create Listing'}
                    </button>

                    {error && <p className='text-red-700 text-sm'>{error}</p>}
                </div>
            </form>
        </main>
    )
}
