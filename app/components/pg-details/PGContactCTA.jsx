'use client';
import { Phone, Mail, User, MessageSquare } from 'lucide-react';

export default function PGContactCTA({ contact, name, id }) {
  const handleWhatsAppClick = () => {
    // Ensure that the contact phone is in a valid international format and the message is encoded
    if (!contact?.phone) {
      alert("Phone number is missing");
      return; // Exit if there's no phone number
    }
  
    const message = encodeURIComponent(`Hi, I'm interested in ${name}. Please contact me with more information.`);
    const whatsappUrl = `https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${message}`;
  
    // Open WhatsApp in a new tab or window
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-blue-600 p-5 text-white">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p className="mt-1 text-blue-100">Get in touch for booking or inquiries</p>
      </div>
      
      <div className="p-5">
        {contact?.phone && (
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center mr-4">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href={`tel:${contact.phone}`} className="text-gray-800 font-medium hover:text-blue-600">
                {contact.phone}
              </a>
            </div>
          </div>
        )}
        
        {contact?.email && (
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center mr-4">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href={`mailto:${contact.email}`} className="text-gray-800 font-medium hover:text-blue-600 break-words">
                {contact.email}
              </a>
            </div>
          </div>
        )}
        
        {contact?.person && (
          <div className="flex items-center mb-5">
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center mr-4">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact Person</p>
              <p className="text-gray-800 font-medium">{contact.person}</p>
            </div>
          </div>
        )}
        
        <div className="border-t border-gray-100 pt-5 mt-2">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition flex items-center justify-center"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Contact via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}