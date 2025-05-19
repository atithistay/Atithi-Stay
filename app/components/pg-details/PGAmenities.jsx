'use client';
import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Wifi, Tv, Slash } from 'lucide-react';

export default function PGAmenities({ amenities }) {
  const [expanded, setExpanded] = useState(false);
  
  // Define important amenities that should always be shown
  const keyAmenities = ['wifi', 'tv', 'laundry', 'ac', 'water_purifier', 'fridge', 'power_backup'];
  
  // Group amenities into important and other
  const importantAmenities = amenities.filter(a => keyAmenities.includes(a.id));
  const otherAmenities = amenities.filter(a => !keyAmenities.includes(a.id));
  
  // Amenities to display based on expanded state
  const visibleAmenities = expanded ? amenities : importantAmenities;
  
  // Function to get appropriate icon for an amenity
  const getAmenityIcon = (id) => {
    switch(id) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'tv': return <Tv className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Amenities & Facilities</h2>
      
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-y-4">
        {visibleAmenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center text-gray-700">
            <div className="text-blue-500 mr-2">
              {getAmenityIcon(amenity.id)}
            </div>
            <span>
              {amenity.available 
                ? amenity.name 
                : <span className="flex items-center text-gray-400">
                    {amenity.name}
                    <Slash className="h-4 w-4 ml-1" />
                  </span>
              }
            </span>
          </div>
        ))}
      </div>
      
      {otherAmenities.length > 0 && (
        <button 
          className="mt-5 flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Show less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Show {otherAmenities.length} more amenities <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
