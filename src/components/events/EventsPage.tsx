import React, { useState, useMemo } from 'react';
import { industries } from '../../data/types';
import { locations } from '../../data/locations';
import { events } from '../../data/events';
import EventList from './EventList';
import SearchBar from '../common/SearchBar';
import FilterSection from '../common/FilterSection';
import CityFilter from './CityFilter';
import PageHeader from '../common/PageHeader';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const industryOptions = industries.map(industry => ({
    value: industry.toLowerCase(),
    label: industry
  }));

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesIndustry = selectedIndustries.length === 0 ||
                             selectedIndustries.some(industry => 
                               event.industry.toLowerCase() === industry.toLowerCase());
      
      const matchesLocation = selectedLocations.length === 0 ||
                             selectedLocations.some(loc => {
                               const location = locations.find(l => l.value === loc);
                               return event.location.includes(location?.label || '');
                             });
      
      return matchesSearch && matchesIndustry && matchesLocation;
    });
  }, [searchQuery, selectedIndustries, selectedLocations]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader 
        title="Trade Shows & Events 2025"
        description="Discover upcoming trade shows and events in your industry."
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Locations</h3>
                <CityFilter
                  locations={locations}
                  selectedLocations={selectedLocations}
                  onChange={setSelectedLocations}
                />
              </div>
              
              <FilterSection
                title="Industries"
                options={industryOptions}
                selectedValues={selectedIndustries}
                onChange={setSelectedIndustries}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6">
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery}
              placeholder="Search events..."
            />
          </div>

          <EventList events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}