import { Badge } from '@/components/ui/Badge';

export default function PGBasicInfo({ name, address, area, gender }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-600 mt-1">{address}</p>
          <p className="text-gray-500 text-sm mt-1">Area: {area}</p>
        </div>
        
        <Badge 
          variant={
            gender === 'male' 
              ? 'blue' 
              : gender === 'female' 
                ? 'pink' 
                : 'purple'
          }
        >
          {gender === 'male' 
            ? 'Boys PG' 
            : gender === 'female' 
              ? 'Girls PG' 
              : 'Unisex PG'
          }
        </Badge>
      </div>
    </div>
  );
}

// import { MapPin, Users } from 'lucide-react';

// export default function PGBasicInfo({ name, address, area, gender }) {
//   const getGenderText = () => {
//     switch(gender) {
//       case 'male': return 'Boys PG';
//       case 'female': return 'Girls PG';
//       default: return 'Unisex PG';
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">{name}</h1>
      
//       <div className="flex items-center mt-3 text-gray-600">
//         <MapPin className="h-5 w-5 text-blue-500 mr-2" />
//         <p>{address}, {area}</p>
//       </div>
      
//       <div className="flex items-center mt-3 text-gray-600">
//         <Users className="h-5 w-5 text-blue-500 mr-2" />
//         <p>{getGenderText()}</p>
//       </div>
      
//       <div className="mt-4 pt-4 border-t border-gray-100">
//         <p className="text-gray-600">
//           This paying guest accommodation is perfectly located in {area} with easy access to local amenities and transport options. Ideal for {gender === 'male' ? 'working professionals and male students' : gender === 'female' ? 'working professionals and female students' : 'all working professionals and students'}.
//         </p>
//       </div>
//     </div>
//   );
// }