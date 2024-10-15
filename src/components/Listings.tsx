// app/listings/[productId]/page.tsx
import React from "react";

import { listingsData } from "../data/listingsData"; // Ensure this path is correct
import { Link, useParams } from "react-router-dom";
import { Footer, Header } from "./component-expo";
import { icons } from "../icons/icons";


// Your component
const Listings: React.FC = () => {
  const { productId } = useParams() // Use params to get productId
  console.log(productId);

  // Find the property by productId
  const property = listingsData.find(
    (listing) => listing.productId === productId
  );

  // If property is not found
  if (!property) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-semibold">Property Not Found</h1>
        <p className="text-gray-600 mt-4">
          The property you are looking for does not exist.
        </p>
        <Link to="/properties">
          <span className="text-blue-500 underline">Go back to listings</span>
        </Link>
      </div>
    );
  }

  // Render the property details
  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-md rounded-lg overflow-hidden">
          {/* Property Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={property.productImage}
              alt={property.productName}
              width={800}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Property Details */}
          <div className="lg:w-1/2 w-full p-6 lg:pl-10 space-y-4 text-left">
            <h1 className="text-3xl font-bold">{property.productName}</h1>
            <div className="flex gap-5">
              <button>{icons.dollarSign}</button>
              <p className="text-xl text-gray-800">{property.productPrice}</p>
            </div>
            <div className="flex gap-5">
              <button>{icons.location}</button>
              <p className="text-lg text-gray-700">
                {property.productLocation}
              </p>
            </div>
            <p className="text-gray-600">{property.productDetail}</p>

            {/* Navigation Buttons */}
            <div className="mt-6">
              <Link to="/properties">
                <span className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Back to Listings
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Listings;
