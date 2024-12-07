"use client";
import { getCountries } from "@/api/getCountries";
import { CountryList } from "@/components/country";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { data: countries } = useSuspenseQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Country Information</h1>
      </header>
      <main className="container mx-auto py-6">
        <CountryList countries={countries} />
      </main>
    </div>
  );
}
