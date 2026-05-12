import React, { useState } from 'react';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';
import Tabs from './components/Tabs';
import Card from './components/Card';
import Pagination from './components/Pagination';
import { Link } from 'react-router';

const allListings = [
    { id: 1,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro Max', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'New' },
    { id: 2,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'Excellent (Like New)' },
    { id: 3,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'Very Good' },
    { id: 4,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15 Plus', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'Broken' },
    { id: 5,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-select?wid=470&hei=556&fmt=png&qlt=95', title: 'iPhone 14 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'Excellent (Like New)' },
    { id: 6,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=470&hei=556&fmt=png&qlt=95&.v=1660803972464', title: 'iPhone 14', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'Very Good' },
    { id: 7,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro Max', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'New' },
    { id: 8,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'Excellent (Like New)' },
    { id: 9,  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'Very Good' },
    { id: 10, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15 Plus', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'Broken' },
    { id: 11, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-select?wid=470&hei=556&fmt=png&qlt=95', title: 'iPhone 14 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'New' },
    { id: 12, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=470&hei=556&fmt=png&qlt=95&.v=1660803972464', title: 'iPhone 14', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'Very Good' },
    { id: 13, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro Max', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'Excellent (Like New)' },
    { id: 14, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'New' },
    { id: 15, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'Broken' },
    { id: 16, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15 Plus', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'Very Good' },
    { id: 17, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-select?wid=470&hei=556&fmt=png&qlt=95', title: 'iPhone 14 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'Excellent (Like New)' },
    { id: 18, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=470&hei=556&fmt=png&qlt=95&.v=1660803972464', title: 'iPhone 14', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'New' },
    { id: 19, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro Max', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'Broken' },
    { id: 20, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'Very Good' },
    { id: 21, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'Excellent (Like New)' },
    { id: 22, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro Max', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '10 Units', badge: 'New' },
    { id: 23, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972', title: 'iPhone 15 Pro', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '5 Units',  badge: 'Very Good' },
    { id: 24, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png&qlt=95&.v=1692923776972', title: 'iPhone 15', storage: '256GB', ram: '8GB RAM', originalPrice: 155000, discountedPrice: 155000, stock: 'Stock', units: '1 Units',  badge: 'Broken' },
];

const ITEMS_PER_PAGE = 6;

const Listings = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState({});

    const filteredListings = activeTab === 'All'
        ? allListings
        : allListings.filter(item => item.badge === activeTab);

    const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedListings = filteredListings.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    const handleFavorite = (id) => {
        setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="">
            {/* Header Row */}
            <div className="flex items-start justify-between">
                <AdminDashboardTitle
                    title="Phone Listings"
                    subtitle="Manage your inventory of new and used phones."
                />
                <Link to="/dashboard/admin/add-listing" className="btn-custom cursor-pointer text-white text-sm px-4 py-2 rounded transition whitespace-nowrap">
                    + Add New Listing
                </Link>
            </div>

            {/* Tabs */}
            <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {displayedListings.map((listing) => (
                    <Card
                        key={listing.id}
                        image={listing.image}
                        title={listing.title}
                        storage={listing.storage}
                        ram={listing.ram}
                        originalPrice={listing.originalPrice}
                        discountedPrice={listing.discountedPrice}
                        stock={listing.stock}
                        units={listing.units}
                        badge={listing.badge}
                        onEdit={() => console.log('Edit', listing.id)}
                        onDelete={() => console.log('Delete', listing.id)}
                        onFavorite={() => handleFavorite(listing.id)}
                        isFavorite={!!favorites[listing.id]}
                    />
                ))}
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Listings;