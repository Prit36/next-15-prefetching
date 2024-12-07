"use client";
import { Country } from "@/api/getCountries";

type CountryCardProps = {
  country: Country;
};

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { common, official } = country.name;
  const nativeNames = Object.entries(country.name.nativeName || {}).map(
    ([key, value]) => (
      <div key={key} className="text-sm text-gray-600">
        <strong>{key.toUpperCase()}:</strong> {value.common} ({value.official})
      </div>
    )
  );
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold text-gray-800">{common}</h2>
      <p className="text-gray-500 text-sm mb-2">Official: {official}</p>
      <div className="mt-2">
        <h3 className="text-gray-700 font-medium">Native Names:</h3>
        {nativeNames.length > 0 ? (
          <div className="mt-1 space-y-1">{nativeNames}</div>
        ) : (
          <p className="text-gray-500 text-sm">No native names available</p>
        )}
      </div>
    </div>
  );
};

type CountryListProps = {
  countries: Country[];
};

export const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};
