import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
const PropertiesCard = ({ filteredProperties }) => {
  const images = ['/prop1.jpg', '/prop2.jpg', '/prop3.jpg', '/prop4.jpg', '/prop5.jpg'];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.map((property, id) => (
        <Card key={property.id}>
          <CardContent className="p-0">
            <div className="relative h-48">
              <Image
                src={images[id % images.length]}
                width={400}
                height={400}
                alt={property.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <hr />
            <div className="p-4 bg-gray-100 dark:bg-gray-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{property.name}</h3>
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{property.location}</p>
                    <Badge variant="outline">{property.type}</Badge>
                  </div>
                </div>
                <div>
                  <p
                    className={`${
                      property.status === 'Rented'
                        ? 'text-red-600'
                        : property.status === 'Sold'
                        ? 'text-green-600'
                        : 'text-blue-600'
                    } ${
                      property.status === 'Rented'
                        ? 'dark :text-red-400'
                        : property.status === 'Sold'
                        ? 'dark:text-green-400'
                        : 'dark:text-blue-400'
                    } font-semibold`}
                  >
                    {property?.price?.toLocaleString()} tk
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {property.date && new Date(property.date).toLocaleDateString('en-US')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Bath</span>
                <span>{property.sqft} sqft</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertiesCard;
