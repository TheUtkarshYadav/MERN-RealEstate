import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper';
import "swiper/css/bundle";
import ListingCard from '../components/ListingCard';

const Home = () => {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);

    console.log(offerListings);
    SwiperCore.use([Navigation]);

    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch(`/api/listing/get?offer=true&limit=3`);
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        }

        const fetchRentListings = async () => {
            try {
                const res = await fetch(`/api/listing/get?type=rent&limit=3`);
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        }

        const fetchSaleListings = async () => {
            try {
                const res = await fetch(`/api/listing/get?type=sale&limit=3`);
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchOfferListings();
    }, []);

    return (
        <div>
            {/* Top */}
            <div className="flex flex-col gap-6 px-3 p-28 max-w-6xl mx-auto">
                <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
                    Find your <span className='text-slate-500'>Perfect</span>
                    <br />
                    home with comfort
                </h1>

                <div className="text-gray-400 text-xs sm:text-sm">
                    With Utkarsh Estates, finding your dream home is swift, effortless, and enjoyable.
                    <br />
                    Discover a diverse array of properties tailored to your needs.
                </div>

                <Link to={"/search"} className='text-xs sm:text-sm text-blue-800 font-serif font-bold hover:underline hover:text-blue-600'>
                    Let's get you a home...
                </Link>
            </div>

            {/* Swipper */}
            <Swiper navigation>
                {
                    offerListings &&
                    offerListings.length > 0 &&
                    offerListings.map((listing) => (
                        <SwiperSlide>
                            <div style={{ background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover" }} className="h-[500px]" key={listing._id}></div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Listings */}
            <div className="flex items-center">
                <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
                    {
                        offerListings && offerListings.length > 0 && (
                            <div className="">
                                <div className="my-3">
                                    <h2 className='text-2xl font-semibold text-slate-600'>Recent Offers</h2>
                                    <Link to={`/search?offer=true`} className='text-sm text-blue-800 hover:underline hover:text-blue-600'>
                                        Show more offers
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {
                                        offerListings.map((listing) => (
                                            <ListingCard listing={listing} key={listing._id} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }

                    {
                        rentListings && rentListings.length > 0 && (
                            <div className="">
                                <div className="my-3">
                                    <h2 className='text-2xl font-semibold text-slate-600'>Properties for Rent</h2>
                                    <Link to={`/search?type=rent`} className='text-sm text-blue-800 hover:underline hover:text-blue-600'>
                                        Show more properties for Rent
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {
                                        rentListings.map((listing) => (
                                            <ListingCard listing={listing} key={listing._id} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }

                    {
                        saleListings && saleListings.length > 0 && (
                            <div className="">
                                <div className="my-3">
                                    <h2 className='text-2xl font-semibold text-slate-600'>Properties for Sale</h2>
                                    <Link to={`/search?type=sale`} className='text-sm text-blue-800 hover:underline hover:text-blue-600'>
                                        Show more Properties for Sale
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {
                                        saleListings.map((listing) => (
                                            <ListingCard listing={listing} key={listing._id} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Home;
