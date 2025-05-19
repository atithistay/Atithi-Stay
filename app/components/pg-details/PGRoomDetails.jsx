
// components/pg-details/PGRoomDetails.jsx
import { BedDouble, Users, Home } from 'lucide-react';

export default function PGRoomDetails({ rooms, deposit }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <Home className="h-5 w-5 text-blue-500 mr-2" />
        Room Options & Pricing
      </h2>
      
      <div className="mt-4 space-y-6">
        {rooms.map((room, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <Users className={`h-5 w-5 text-blue-600`} />
                </div>
                <h3 className="font-medium text-gray-800">
                  {room.type === 'single' ? 'Single Occupancy' : 
                   room.type === 'double' ? 'Double Sharing' : 
                   room.type === 'triple' ? 'Triple Sharing' : 
                   `${room.type} Sharing`}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">₹{room.rent.toLocaleString('en-IN')}</p>
                <p className="text-sm text-gray-500">per month</p>
              </div>
            </div>
            
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-600">
                <BedDouble className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm">
                  {room.furnishing === 'fully_furnished' ? 'Fully Furnished' : 
                   room.furnishing === 'semi_furnished' ? 'Semi Furnished' : 
                   'Unfurnished'}
                </span>
              </div>
              {room.ac && (
                <div className="flex items-center text-gray-600">
                  <span className="text-sm">AC Available</span>
                </div>
              )}
              {room.balcony && (
                <div className="flex items-center text-gray-600">
                  <span className="text-sm">With Balcony</span>
                </div>
              )}
              {room.attached_bathroom && (
                <div className="flex items-center text-gray-600">
                  <span className="text-sm">Attached Bathroom</span>
                </div>
              )}
            </div>
            
            {room.description && (
              <p className="mt-3 text-sm text-gray-600">{room.description}</p>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Security Deposit</span>
          <span className="font-medium text-gray-800">
            {deposit.type === 'fixed' 
              ? `₹${deposit.amount.toLocaleString('en-IN')}` 
              : `${deposit.amount} month's rent`}
          </span>
        </div>
        {deposit.refundable && (
          <p className="text-sm text-gray-500 mt-1">Refundable at the time of vacating</p>
        )}
      </div>
    </div>
  );
}
