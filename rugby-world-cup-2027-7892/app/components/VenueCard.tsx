import Image from 'next/image';
import { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
  className?: string;
  showMatches?: boolean;
}

export default function VenueCard({ 
  venue, 
  className = '', 
  showMatches = false 
}: VenueCardProps) {
  const formatCapacity = (capacity: number) => {
    return capacity.toLocaleString('en-AU');
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}>
      {/* Venue Image */}
      <div className="relative h-48 w-full">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-venue.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{venue.name}</h3>
          <p className="text-sm opacity-90">{venue.city}</p>
        </div>
      </div>

      {/* Venue Details */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-gray-900">{venue.name}</h4>
            <p className="text-sm text-gray-600">{venue.city}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-rugby-green">
              {formatCapacity(venue.capacity)}
            </div>
            <div className="text-xs text-gray-500">Capacity</div>
          </div>
        </div>

        {/* Venue Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 py-3 border-t border-b border-gray-100">
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">
              {venue.city}
            </div>
            <div className="text-xs text-gray-500">Location</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">
              {Math.round(venue.capacity / 1000)}k
            </div>
            <div className="text-xs text-gray-500">Capacity</div>
          </div>
        </div>

        {showMatches && (
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-gray-900 mb-2">Upcoming Matches</h5>
            <div className="space-y-1">
              <div className="text-xs text-gray-600 flex justify-between">
                <span>Oct 1 - NZ vs NA</span>
                <span>19:00</span>
              </div>
              <div className="text-xs text-gray-600 flex justify-between">
                <span>Oct 5 - FR vs IT</span>
                <span>16:30</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <a
            href={`/venues/${venue.slug}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-3 rounded text-sm font-medium transition-colors"
          >
            Venue Info
          </a>
          <a
            href={`/venues/${venue.slug}/matches`}
            className="flex-1 bg-rugby-green hover:bg-green-700 text-rugby-gold text-center py-2 px-3 rounded text-sm font-medium transition-colors"
          >
            View Matches
          </a>
        </div>

        {/* Quick Info */}
        <div className="mt-3 text-center">
          <a
            href={`/tickets?venue=${venue.id}`}
            className="text-rugby-green hover:text-green-700 text-xs font-medium"
          >
            Get tickets for matches at this venue →
          </a>
        </div>
      </div>
    </div>
  );
}