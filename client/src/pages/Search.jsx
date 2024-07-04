import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListingCard from '../components/ListingCard';

export default function Search() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);
    const [sideBarData, setSideBarData] = useState({
        searchTerm: '',
        type: 'all',
        parking: false,
        furnished: false,
        offer: false,
        sort: 'created_at',
        order: 'desc',
    });

    console.log(listings);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromURL = urlParams.get('searchTerm');
        const typeFromURL = urlParams.get('type');
        const parkingFromURL = urlParams.get('parking');
        const furnishedFromURL = urlParams.get('furnished');
        const offerFromURL = urlParams.get('offer');
        const sortFromURL = urlParams.get('sort');
        const orderFromURL = urlParams.get('order');

        if (searchTermFromURL ||
            typeFromURL ||
            parkingFromURL ||
            furnishedFromURL ||
            offerFromURL ||
            sortFromURL ||
            orderFromURL
        ) {
            setSideBarData({
                searchTerm: searchTermFromURL || '',
                type: typeFromURL || 'all',
                parking: parkingFromURL === 'true' ? true : false,
                furnished: furnishedFromURL === 'true' ? true : false,
                offer: offerFromURL === 'true' ? true : false,
                sort: sortFromURL || 'created_at',
                order: orderFromURL || 'desc',
            });
        }

        const fetchListings = async () => {
            setLoading(true);
            const searchQuery = urlParams.toString();

            const res = await fetch(`/api/listing/get?${searchQuery}`);
            const data = await res.json();

            setListings(data);
            setLoading(false);
        }

        fetchListings();

    }, [location.search]);

    const handleChange = (e) => {
        if (
            e.target.id === 'all' ||
            e.target.id === 'rent' ||
            e.target.id === 'sale'
        ) {
            setSideBarData({
                ...sideBarData,
                type: e.target.id
            });
        }

        if (e.target.id === 'searchTerm') {
            setSideBarData({
                ...sideBarData,
                searchTerm: e.target.value
            });
        }

        if (
            e.target.id === 'parking' ||
            e.target.id === 'furnished' ||
            e.target.id === 'offer'
        ) {
            setSideBarData({
                ...sideBarData,
                [e.target.id]: e.target.checked || e.target.checked === 'true' ? true : false
            });
        }

        if (e.target.id === 'sort_order') {
            const sort = e.target.value.split('_')[0] || 'created_at';
            const order = e.target.value.split('_')[1] || 'desc';

            setSideBarData({
                ...sideBarData,
                sort,
                order,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const urlParams = new URLSearchParams();
        urlParams.set('searchTerm', sideBarData.searchTerm);
        urlParams.set('type', sideBarData.type);
        urlParams.set('parking', sideBarData.parking);
        urlParams.set('furnished', sideBarData.furnished);
        urlParams.set('offer', sideBarData.offer);
        urlParams.set('sort', sideBarData.sort);
        urlParams.set('order', sideBarData.order);

        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }

    return (
        <div className='flex flex-col md:flex-row'>
            <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div className="flex items-center gap-3">
                        <label className='whitespace-nowrap font-semibold'>Search Term :</label>
                        <input
                            type="text"
                            id='searchTerm'
                            placeholder='Seach Property'
                            className='border rounded-lg p-3 w-full'
                            value={sideBarData.searchTerm}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex gap-3 flex-wrap items-center">
                        <label className='font-semibold'>Type :</label>
                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                id='all'
                                className='w-5'
                                onChange={handleChange}
                                checked={sideBarData.type === 'all'}
                            />

                            <span>Rent & Sale</span>
                        </div>

                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                id='rent'
                                className='w-5'
                                onChange={handleChange}
                                checked={sideBarData.type === 'rent'}
                            />

                            <span>Rent</span>
                        </div>

                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                id='sale'
                                className='w-5'
                                onChange={handleChange}
                                checked={sideBarData.type === 'sale'}
                            />

                            <span>Sale</span>
                        </div>

                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                id='offer'
                                className='w-5'
                                onChange={handleChange}
                                checked={sideBarData.offer}
                            />

                            <span>Offer</span>
                        </div>
                    </div>

                    <div className="flex gap-3 flex-wrap items-center">
                        <label className='font-semibold'>Amenities :</label>
                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                id='parking'
                                className='w-5'
                                onChange={handleChange}
                                checked={sideBarData.parking}
                            />

                            <span>Parking</span>
                        </div>

                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                id='furnished'
                                className='w-5'
                                onChange={handleChange}
                                checked={sideBarData.furnished}
                            />

                            <span>Furnished</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <label className='font-semibold'>Sort :</label>
                        <select onChange={handleChange} defaultValue={'created_at_desc'} id="sort_order" className='border rounded-lg p-2'>
                            <option value={'regularPrice_desc'}>Price High to Low</option>
                            <option value={'regularPrice_asc'}>Price Low to High</option>
                            <option value={'createdAt_desc'}>Latest</option>
                            <option value={'createdAt_asc'}>Oldest</option>
                        </select>
                    </div>

                    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Search</button>
                </form>
            </div>

            <div className="flex-1">
                <h1 className='text-3xl font-semibold font-serif border-b p-3 mt-5 text-slate-700'>Listing Results:</h1>
                <div className="flex flex-wrap gap-4 p-7">
                    {!loading && listings.length === 0 && (
                        <p className='text-3xl text-red-500 text-center w-full font-serif'>No Listings Available!</p>
                    )}

                    {loading && (
                        <p className='text-2xl text-violet-400 text-center w-full font-serif'>Loading...</p>
                    )}

                    {!loading && listings && listings.map((listing) =>
                        <ListingCard key={listing._id} listing={listing} />
                    )}
                </div>
            </div>
        </div>
    )
}
