

// components/pg-details/PGNearbyPlaces.jsx
import { MapPin } from 'lucide-react';

export default function PGNearbyPlaces({ nearby }) {
  // Group nearby places by category
  const groupedPlaces = nearby.reduce((acc, place) => {
    if (!acc[place.category]) {
      acc[place.category] = [];
    }
    acc[place.category].push(place);
    return acc;
  }, {});

  const getCategoryIcon = (category) => {
    return <MapPin className="h-5 w-5 text-blue-500" />;
  };

  const getCategoryName = (category) => {
    switch(category) {
      case 'education': return 'Educational Institutions';
      case 'healthcare': return 'Healthcare Facilities';
      case 'shopping': return 'Shopping Centers';
      case 'food': return 'Restaurants & Cafes';
      case 'transport': return 'Transport Options';
      case 'recreation': return 'Recreation';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Nearby Places</h2>
      
      <div className="mt-4 space-y-6">
        {Object.keys(groupedPlaces).map((category) => (
          <div key={category}>
            <h3 className="flex items-center text-gray-700 font-medium">
              {getCategoryIcon(category)}
              <span className="ml-2">{getCategoryName(category)}</span>
            </h3>
            
            <div className="mt-2 space-y-2">
              {groupedPlaces[category].map((place, index) => (
                <div key={index} className="flex justify-between text-sm ml-7">
                  <span className="text-gray-600">{place.name}</span>
                  <span className="text-gray-700">{place.distance}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {nearby.length === 0 && (
        <p className="text-gray-500 mt-4">Information about nearby places not available.</p>
      )}
    </div>
  );
}
