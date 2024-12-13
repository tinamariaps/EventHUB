import { lasVegasEvents } from './lasVegas';
import { floridaEvents } from './florida';
import { chicagoEvents } from './chicago';
import type { Event, CityEvents } from '../../types';

export const cityEvents: CityEvents = {
  'Las Vegas': lasVegasEvents,
  'Chicago': chicagoEvents,
  'Orlando': floridaEvents.filter(event => event.location.includes('Orlando')),
  'Miami': floridaEvents.filter(event => event.location.includes('Miami')),
  'Tampa': floridaEvents.filter(event => event.location.includes('Tampa')),
  'Fort Lauderdale': floridaEvents.filter(event => event.location.includes('Fort Lauderdale'))
};

// Combine all events for global search
export const allEvents: Event[] = Object.values(cityEvents).flat();