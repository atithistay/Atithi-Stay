import Link from 'next/link';
import Image from 'next/image';

export default function PGCard({ pg }) {
  // Find the minimum rent from all room types
  const minRent = pg.min_rent;
  
  return (
    <div className="card group">
      <div className="relative h-48 w-full">
        <Image
          src={pg.images[0] || '/images/placeholder.jpg'}
          alt={pg.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium text-indigo-600">
          {pg.gender === 'male' ? 'Boys PG' : pg.gender === 'female' ? 'Girls PG' : 'Unisex PG'}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{pg.name}</h3>
        <p className="text-gray-600 text-sm mb-2 flex items-center">
          <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {pg.area}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-xs text-gray-500">Starting from</span>
            <p className="text-lg font-semibold text-indigo-600">₹{minRent.toLocaleString()}</p>
          </div>
          
          <Link href={`/pg/${pg._id}`} className="btn-outline text-sm py-1">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}