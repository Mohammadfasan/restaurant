// components/SriLankaMap.tsx
"use client";

import { useState } from 'react';

interface Location {
  id: number;
  name: string;
  address: string;
  type: 'headquarters' | 'delivery' | 'kitchen';
  hours: string;
  phone: string;
  coordinates: { lat: number; lng: number };
}

const SriLankaMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const locations: Location[] = [
    {
      id: 1,
      name: "Food Express HQ - Colombo",
      address: "123 Galle Road, Colombo 03",
      type: "headquarters",
      hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-10PM",
      phone: "+94 11 234 5678",
      coordinates: { lat: 6.9271, lng: 79.8612 }
    },
    {
      id: 2,
      name: "Delivery Hub - Kandy",
      address: "45 Peradeniya Road, Kandy",
      type: "delivery",
      hours: "24/7 Operation",
      phone: "+94 81 234 5678",
      coordinates: { lat: 7.2906, lng: 80.6337 }
    },
    {
      id: 3,
      name: "Kitchen Center - Galle",
      address: "78 Church Street, Galle Fort",
      type: "kitchen",
      hours: "7AM-11PM Daily",
      phone: "+94 91 234 5678",
      coordinates: { lat: 6.0535, lng: 80.2110 }
    },
    {
      id: 4,
      name: "Delivery Hub - Negombo",
      address: "12 Beach Road, Negombo",
      type: "delivery",
      hours: "24/7 Operation",
      phone: "+94 31 234 5678",
      coordinates: { lat: 7.2099, lng: 79.8370 }
    },
    {
      id: 5,
      name: "Kitchen Center - Jaffna",
      address: "34 Temple Road, Jaffna",
      type: "kitchen",
      hours: "7AM-10PM Daily",
      phone: "+94 21 234 5678",
      coordinates: { lat: 9.6615, lng: 80.0255 }
    },
    {
      id: 6,
      name: "Delivery Hub - Matara",
      address: "56 Beach Road, Matara",
      type: "delivery",
      hours: "24/7 Operation",
      phone: "+94 41 234 5678",
      coordinates: { lat: 5.9480, lng: 80.5353 }
    }
  ];

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'headquarters': return '🏢';
      case 'delivery': return '🚚';
      case 'kitchen': return '👨‍🍳';
      default: return '📍';
    }
  };

  const getLocationColor = (type: string) => {
    switch (type) {
      case 'headquarters': return 'bg-blue-500';
      case 'delivery': return 'bg-green-500';
      case 'kitchen': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const openGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  // Simple SVG map of Sri Lanka as fallback
  const SriLankaSVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="coastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>
      
      {/* Ocean background */}
      <rect width="100%" height="100%" fill="#dbeafe" />
      
      {/* Sri Lanka shape - simplified outline */}
      <path 
        d="M120,120 Q140,100 160,110 Q180,130 170,150 Q160,170 150,180 Q140,200 130,220 Q120,240 140,260 Q160,280 180,270 Q200,260 220,250 Q240,240 250,220 Q260,200 240,180 Q220,160 200,150 Q180,140 160,130 Q140,120 120,120 Z" 
        fill="url(#landGradient)"
        stroke="#64748b"
        strokeWidth="2"
      />
      
      {/* Coastal outline */}
      <path 
        d="M120,120 Q140,100 160,110 Q180,130 170,150 Q160,170 150,180 Q140,200 130,220 Q120,240 140,260 Q160,280 180,270 Q200,260 220,250 Q240,240 250,220 Q260,200 240,180 Q220,160 200,150 Q180,140 160,130 Q140,120 120,120 Z" 
        fill="none"
        stroke="url(#coastGradient)"
        strokeWidth="4"
      />
    </svg>
  );

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 relative">
          {/* Interactive Map Container */}
          <div className="w-full h-full relative">
            {/* SVG Map */}
            <div className="absolute inset-0">
              <SriLankaSVG />
            </div>
            
            {/* Interactive Location Markers */}
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getLocationColor(location.type)} text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold shadow-lg hover:scale-110 transition-all duration-200 border-2 border-white z-10`}
                style={{
                  left: `${((location.coordinates.lng - 79.5) / (81.0 - 79.5)) * 60 + 20}%`,
                  top: `${((9.9 - location.coordinates.lat) / (9.9 - 5.9)) * 60 + 20}%`
                }}
                title={location.name}
              >
                {getLocationIcon(location.type)}
              </button>
            ))}
          </div>
          
          {/* Map Overlay Info */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>HQ</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Delivery</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Kitchen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{getLocationIcon(selectedLocation.type)}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{selectedLocation.name}</h3>
                    <p className="text-sm text-gray-600">{selectedLocation.address}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600"><strong>Hours:</strong> {selectedLocation.hours}</p>
                    <p className="text-gray-600"><strong>Phone:</strong> {selectedLocation.phone}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openGoogleMaps(selectedLocation.coordinates.lat, selectedLocation.coordinates.lng)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium flex-1"
                    >
                      Get Directions
                    </button>
                    <button
                      onClick={() => window.open(`tel:${selectedLocation.phone}`, '_self')}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium flex-1"
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600 ml-4"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* All Locations List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <div 
            key={location.id} 
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
              location.type === 'headquarters' ? 'border-blue-500' :
              location.type === 'delivery' ? 'border-green-500' : 'border-orange-500'
            } hover:shadow-lg transition-shadow cursor-pointer`}
            onClick={() => setSelectedLocation(location)}
          >
            <div className="flex items-start space-x-3">
              <div className={`${getLocationColor(location.type)} text-white rounded-full w-10 h-10 flex items-center justify-center text-lg`}>
                {getLocationIcon(location.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{location.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                <p className="text-green-600 text-sm font-medium mb-1">{location.hours}</p>
                <p className="text-blue-600 text-sm">{location.phone}</p>
                <div className="flex space-x-2 mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openGoogleMaps(location.coordinates.lat, location.coordinates.lng);
                    }}
                    className="text-orange-500 hover:text-orange-700 text-sm font-medium"
                  >
                    Directions
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`tel:${location.phone}`, '_self');
                    }}
                    className="text-green-500 hover:text-green-700 text-sm font-medium"
                  >
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Our Presence in Sri Lanka</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-3xl font-bold">6+</div>
            <div className="text-sm">Cities</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm">Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm">Restaurant Partners</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SriLankaMap;