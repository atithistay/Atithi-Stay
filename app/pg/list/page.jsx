'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Star, 
  Wifi, 
  Utensils, 
  Coffee, 
  Search, 
  Filter, 
  ChevronDown,
  Check
} from 'lucide-react';

// Extended sample data for demonstration
const extendedPGs = [
  {
    _id: '1',
    name: 'Sunshine Residency',
    area: 'Koramangala, Bangalore',
    location: 'Near Forum Mall, 5th Block',
    gender: 'female',
    min_rent: 12000,
    amenities: ['WiFi', 'Food', 'AC', 'Gym', 'Laundry'],
    rating: 4.7,
    reviews: 32,
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ]
  },
  {
    _id: '2',
    name: 'Urban Nest PG',
    area: 'HSR Layout, Bangalore',
    location: 'Sector 2, Near BDA Complex',
    gender: 'male',
    min_rent: 10500,
    amenities: ['WiFi', 'Food', 'Gym', 'Power Backup'],
    rating: 4.3,
    reviews: 17,
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ]
  },
  {
    _id: '3',
    name: 'Comfort Stay PG',
    area: 'Indiranagar, Bangalore',
    location: '12th Main, 100ft Road',
    gender: 'unisex',
    min_rent: 15000,
    amenities: ['WiFi', 'Food', 'Laundry', 'AC', 'Parking'],
    rating: 4.5,
    reviews: 28,
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ]
  },
  {
    _id: '4',
    name: 'Metro Heights',
    area: 'Whitefield, Bangalore',
    location: 'ITPL Main Road, Near Phoenix Mall',
    gender: 'male',
    min_rent: 11000,
    amenities: ['WiFi', 'Food', 'Gym', 'AC'],
    rating: 4.1,
    reviews: 45,
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ]
  },
  {
    _id: '5',
    name: 'Lakeside Residency',
    area: 'Electronic City, Bangalore',
    location: 'Phase 1, Near Infosys Campus',
    gender: 'female',
    min_rent: 9500,
    amenities: ['WiFi', 'Food', 'Laundry', 'Security'],
    rating: 4.4,
    reviews: 19,
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ]
  },
  {
    _id: '6',
    name: 'Royal Comforts PG',
    area: 'JP Nagar, Bangalore',
    location: '6th Phase, Near Metro Station',
    gender: 'unisex',
    min_rent: 13500,
    amenities: ['WiFi', 'Food', 'AC', 'TV Room', 'Parking'],
    rating: 4.8,
    reviews: 37,
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ]
  }
];

// Image Carousel Component for List Items
function ImageCarousel({ images, name }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <div className="relative h-full w-full">
        <Image
          src={images[currentImageIndex]}
          alt={`${name} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-1 text-white transition-colors duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-1 text-white transition-colors duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      {/* Image Indicator Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
              idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// PG List Item Component
function PGListItem({ pg }) {
  const getAmenityIcon = (amenity) => {
    switch(amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'food': return <Utensils className="h-4 w-4" />;
      case 'coffee': return <Coffee className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow duration-300 group">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/3 h-48 md:h-auto relative">
          <ImageCarousel images={pg.images} name={pg.name} />
          
          {/* PG Type Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold z-10">
            {pg.gender === 'male' ? 'Boys PG' : pg.gender === 'female' ? 'Girls PG' : 'Unisex PG'}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="w-full md:w-2/3 p-5 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl text-gray-900">{pg.name}</h3>
              
              <div className="flex items-center mt-1 text-gray-600">
                <MapPin className="h-4 w-4 flex-shrink-0 mr-1" />
                <p className="text-sm">{pg.area}</p>
              </div>
              
              <p className="text-xs text-gray-500 mt-1 ml-5">{pg.location}</p>
            </div>
            
            <div className="flex items-center bg-indigo-50 px-2 py-1 rounded text-xs font-semibold text-indigo-700">
              <Star className="h-3 w-3 text-indigo-600 mr-1 fill-indigo-500" />
              <span>{pg.rating}</span>
              <span className="text-gray-500 ml-1">({pg.reviews})</span>
            </div>
          </div>
          
          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mt-4">
            {pg.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center text-gray-700 bg-gray-100 rounded-full px-3 py-1 text-xs">
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4">
            <div>
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="text-xl font-bold text-indigo-600">₹{pg.min_rent.toLocaleString()}<span className="text-gray-500 text-xs font-normal">/month</span></p>
            </div>
            
            <Link href={`/pg/${pg._id}`} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Filter Component
function FilterSection({ filters, setFilters, applyFilters }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Search Input */}
        <div className="flex-grow">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by name or area..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {/* Gender Filter */}
        <div className="w-full lg:w-auto">
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              value={filters.gender}
              onChange={(e) => setFilters({...filters, gender: e.target.value})}
            >
              <option value="">All PG Types</option>
              <option value="male">Boys PG</option>
              <option value="female">Girls PG</option>
              <option value="unisex">Unisex PG</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Price Range */}
        <div className="w-full lg:w-auto">
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
            >
              <option value="">Price Range</option>
              <option value="0-10000">Below ₹10,000</option>
              <option value="10000-15000">₹10,000 - ₹15,000</option>
              <option value="15000-20000">₹15,000 - ₹20,000</option>
              <option value="20000+">Above ₹20,000</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Apply Filters Button */}
        <button 
          onClick={applyFilters}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 py-2 font-medium flex items-center justify-center transition-colors duration-200"
        >
          <Filter className="h-4 w-4 mr-2" />
          Apply Filters
        </button>
      </div>
    </div>
  );
}

// Sort Component
function SortSection({ sortOption, setSortOption }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-gray-600"><span className="font-medium">6</span> PGs Found</p>
      
      <div className="flex items-center">
        <span className="text-gray-600 mr-2 text-sm">Sort by:</span>
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1 pr-8 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating_desc">Rating: High to Low</option>
            <option value="reviews_desc">Most Reviewed</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

// Main List Page Component
export default function PGListPage() {
  const [pgList, setPgList] = useState([]);
  const [filteredPgs, setFilteredPgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    gender: '',
    priceRange: '',
  });
  const [sortOption, setSortOption] = useState('price_asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // For demo purposes, we'll use the sample data directly
    const fetchPGs = async () => {
      try {
        // Simulate API fetch delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPgList(extendedPGs);
        setFilteredPgs(extendedPGs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching PGs:', error);
        setLoading(false);
      }
    };

    fetchPGs();
  }, []);

  // Apply filters function
  const applyFilters = () => {
    let result = [...pgList];
    
    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(pg => 
        pg.name.toLowerCase().includes(searchTerm) || 
        pg.area.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply gender filter
    if (filters.gender) {
      result = result.filter(pg => pg.gender === filters.gender);
    }
    
    // Apply price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-');
      if (max) {
        result = result.filter(pg => pg.min_rent >= parseInt(min) && pg.min_rent <= parseInt(max));
      } else {
        // Handle "20000+" case
        result = result.filter(pg => pg.min_rent >= parseInt(min.replace('+', '')));
      }
    }
    
    // Apply sorting
    result = sortPGs(result, sortOption);
    
    setFilteredPgs(result);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Sort function
  const sortPGs = (pgs, option) => {
    switch(option) {
      case 'price_asc':
        return [...pgs].sort((a, b) => a.min_rent - b.min_rent);
      case 'price_desc':
        return [...pgs].sort((a, b) => b.min_rent - a.min_rent);
      case 'rating_desc':
        return [...pgs].sort((a, b) => b.rating - a.rating);
      case 'reviews_desc':
        return [...pgs].sort((a, b) => b.reviews - a.reviews);
      default:
        return pgs;
    }
  };

  // Apply sort when sort option changes
  useEffect(() => {
    setFilteredPgs(prevPgs => sortPGs([...prevPgs], sortOption));
  }, [sortOption]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPgs.length / itemsPerPage);
  const paginatedPGs = filteredPgs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">PG Accommodations</h1>
        
        {/* Filters */}
        <FilterSection 
          filters={filters} 
          setFilters={setFilters} 
          applyFilters={applyFilters} 
        />
        
        {/* Sort and Results Count */}
        <SortSection sortOption={sortOption} setSortOption={setSortOption} />
        
        {/* PG List */}
        {loading ? (
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-48 bg-gray-200 animate-pulse"></div>
                  <div className="w-full md:w-2/3 p-5">
                    <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2 mb-4"></div>
                    <div className="flex gap-2 mb-4">
                      <div className="h-6 bg-gray-200 animate-pulse rounded-full w-16"></div>
                      <div className="h-6 bg-gray-200 animate-pulse rounded-full w-16"></div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="h-8 bg-gray-200 animate-pulse rounded w-1/3"></div>
                      <div className="h-8 bg-gray-200 animate-pulse rounded-full w-24"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredPgs.length > 0 ? (
          <>
            <div className="space-y-6">
              {paginatedPGs.map(pg => (
                <PGListItem key={pg._id} pg={pg} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {/* Page Numbers */}
                  {[...Array(totalPages)].map((_, i) => (
                    <button 
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      currentPage === i + 1
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${
                    currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg font-medium">No PGs match your filters.</p>
          <p className="text-sm mt-1">Try adjusting your search or filters to see more results.</p>
        </div>
      )}
    </div>
  </div>
);
}
