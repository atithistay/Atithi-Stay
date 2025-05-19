import { notFound } from "next/navigation";
import Image from "next/image";
// import connectDB from '@/lib/db';
import PG from "@/models/PG";
import PGImageGallery from "@/components/pg-details/PGImageGallery";
import PGBasicInfo from "@/components/pg-details/PGBasicInfo";
import PGRoomDetails from "@/components/pg-details/PGRoomDetails";
import PGAmenities from "@/components/pg-details/PGAmenities";
import PGFoodInfo from "@/components/pg-details/PGFoodInfo";
import PGRules from "@/components/pg-details/PGRules";
import PGNearbyPlaces from "@/components/pg-details/PGNearbyPlaces";
import PGContactCTA from "@/components/pg-details/PGContactCTA";
import samplePG from "@/samplePg";
// import PGMap from '@/components/pg-details/PGMap';

// export async function generateMetadata({ params }) {
//   // await connectDB();
//   const pg = await PG.findById(params.id);

//   if (!pg) {
//     return {
//       title: 'PG Not Found - Atithi PG',
//       description: 'The requested PG accommodation could not be found.'
//     };
//   }

//   return {
//     title: `${pg.name} - Atithi PG`,
//     description: `${pg.gender === 'male' ? 'Boys' : pg.gender === 'female' ? 'Girls' : 'Unisex'} PG in ${pg.area}. Starting at ₹${pg.min_rent}. ${pg.food.included ? 'Food included.' : ''}`,
//   };
// }

// async function getPGDetails(id) {
//   // await connectDB();

//   try {
//     return {
//       _id: '1',
//       name: 'Sunshine Residency',
//       area: 'Koramangala, Bangalore',
//       address: '123, 4th Block, Koramangala',
//       gender: 'female',
//       min_rent: 12000,
//       amenities: ['WiFi', 'Food', 'AC'],
//       rating: 4.7,
//       images: [
//         '/api/placeholder/600/400',
//         '/api/placeholder/600/400',
//         '/api/placeholder/600/400'
//       ]
//     }
//     const pg = await PG.findById(id);
//     if (!pg) return null;

//     // Convert mongoose document to plain object
//     return JSON.parse(JSON.stringify(pg));
//   } catch (error) {
//     console.error('Error fetching PG details:', error);
//     return null;
//   }
// }

export default async function PGDetailsPage({ params }) {
  const pg = samplePG?.find(pg => pg?._id===params.id);

  if (!pg) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        <PGImageGallery
          images={pg?.images}
          videos={pg?.videos}
          name={pg?.name}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <PGBasicInfo
              name={pg.name}
              address={pg.address}
              area={pg.area}
              gender={pg.gender}
            />

            <PGRoomDetails rooms={pg.rooms} deposit={pg.deposit} />

            <PGAmenities amenities={pg.amenities} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <PGContactCTA contact={pg.contact} name={pg.name} id={pg._id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
