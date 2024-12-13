import { Location } from './locations';

export interface Event {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  venue: string;
  industry: string;
  description: string;
  website?: string;
  image: string;
  expectedAttendees?: number;
  boothOptions?: string[];
}

export const industries = [
  'Technology',
  'Healthcare',
  'Manufacturing',
  'Marketing',
  'Education',
  'Construction',
  'Food & Beverage',
  'Automotive',
  'Energy',
  'Fashion'
] as const;

export const events: Event[] = [
  // Existing events...
  {
    id: 6,
    name: "PACK EXPO 2025",
    startDate: "2025-09-08",
    endDate: "2025-09-12",
    location: "Chicago, Illinois",
    venue: "McCormick Place",
    industry: "Manufacturing",
    description: "The largest packaging trade show in North America, featuring the latest innovations in packaging technology and solutions.",
    website: "https://www.packexpointernational.com",
    image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&q=80",
    expectedAttendees: 70000,
    boothOptions: ["10x10", "10x20", "20x20", "Island Booths"]
  },
  {
    id: 7,
    name: "FABTECH 2025",
    startDate: "2025-09-23",
    endDate: "2025-09-26",
    location: "Chicago, Illinois",
    venue: "McCormick Place",
    industry: "Manufacturing",
    description: "North America's largest metal forming, fabricating, welding and finishing event.",
    website: "https://www.fabtechexpo.com",
    image: "https://images.unsplash.com/photo-1565434275951-e2f5ee3e2316?auto=format&fit=crop&q=80",
    expectedAttendees: 48000,
    boothOptions: ["10x10", "10x20", "20x20", "Custom Islands"]
  },
  {
    id: 11,
    name: "National Restaurant Association Show 2025",
    startDate: "2025-05-17",
    endDate: "2025-05-20",
    location: "Chicago, Illinois",
    venue: "McCormick Place",
    industry: "Food & Beverage",
    description: "The largest annual gathering of foodservice professionals in the Western Hemisphere.",
    website: "https://www.nationalrestaurantshow.com",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    expectedAttendees: 65000,
    boothOptions: ["10x10", "10x20", "20x20", "Custom"]
  },
  {
    id: 12,
    name: "IMTS 2025",
    startDate: "2025-09-08",
    endDate: "2025-09-13",
    location: "Chicago, Illinois",
    venue: "McCormick Place",
    industry: "Manufacturing",
    description: "The International Manufacturing Technology Show - North America's largest manufacturing trade show.",
    website: "https://www.imts.com",
    image: "https://images.unsplash.com/photo-1565434275951-e2f5ee3e2316?auto=format&fit=crop&q=80",
    expectedAttendees: 129000,
    boothOptions: ["10x10", "10x20", "20x20", "30x30", "Custom Islands"]
  },
  {
    id: 13,
    name: "ProMat 2025",
    startDate: "2025-03-10",
    endDate: "2025-03-13",
    location: "Chicago, Illinois",
    venue: "McCormick Place",
    industry: "Manufacturing",
    description: "The premier showcase of material handling, supply chain and logistics solutions in North America.",
    website: "https://www.promatshow.com",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80",
    expectedAttendees: 50000,
    boothOptions: ["10x10", "10x20", "20x20", "Island"]
  },
  {
    id: 14,
    name: "Chicago Dental Society Midwinter Meeting 2025",
    startDate: "2025-02-20",
    endDate: "2025-02-22",
    location: "Chicago, Illinois",
    venue: "McCormick Place West",
    industry: "Healthcare",
    description: "One of the largest dental exhibitions in North America, featuring the latest in dental technology and education.",
    website: "https://www.cds.org/meetings-events/midwinter-meeting",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    expectedAttendees: 30000,
    boothOptions: ["10x10", "10x20", "20x20"]
  },
  {
    id: 15,
    name: "NeoCon 2025",
    startDate: "2025-06-09",
    endDate: "2025-06-11",
    location: "Chicago, Illinois",
    venue: "The Merchandise Mart",
    industry: "Construction",
    description: "The world's leading platform for commercial design, featuring the latest in furniture and interior design.",
    website: "https://www.neocon.com",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    expectedAttendees: 50000,
    boothOptions: ["Showroom", "7x10", "10x10", "Custom"]
  }
  // ... other existing events
];