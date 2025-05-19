
// components/pg-details/PGFoodInfo.jsx
import { Utensils, Clock } from 'lucide-react';

export default function PGFoodInfo({ type, timings }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <Utensils className="h-5 w-5 text-blue-500 mr-2" />
        Food Information
      </h2>
      
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-gray-700 font-medium">Food Type</h3>
          <p className="text-gray-600 mt-1">
            {type === 'veg' ? 'Vegetarian Only' : 
             type === 'non_veg' ? 'Both Veg and Non-Veg options available' : 
             'Food type not specified'}
          </p>
        </div>
        
        <div>
          <h3 className="text-gray-700 font-medium flex items-center">
            <Clock className="h-4 w-4 text-gray-400 mr-1" />
            Meal Timings
          </h3>
          <div className="mt-2 space-y-2">
            {timings.breakfast && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Breakfast</span>
                <span className="text-gray-700">{timings.breakfast}</span>
              </div>
            )}
            {timings.lunch && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Lunch</span>
                <span className="text-gray-700">{timings.lunch}</span>
              </div>
            )}
            {timings.evening_snacks && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Evening Snacks</span>
                <span className="text-gray-700">{timings.evening_snacks}</span>
              </div>
            )}
            {timings.dinner && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Dinner</span>
                <span className="text-gray-700">{timings.dinner}</span>
              </div>
            )}
          </div>
        </div>
        
        {type === 'veg' && (
          <div className="bg-green-50 p-3 rounded-md text-sm text-green-700">
            Pure vegetarian food is served at this property.
          </div>
        )}
      </div>
    </div>
  );
}