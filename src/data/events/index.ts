import { lasVegasEvents } from './lasVegas';
import { floridaEvents } from './florida';
import type { Event } from '../types';

// Combine all events
export const events: Event[] = [
  ...lasVegasEvents,
  ...floridaEvents,
  // ... other existing events
];

export * from '../types';