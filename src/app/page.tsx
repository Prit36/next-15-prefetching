import React from "react";
import HomePage from "@/components/HomePage";
import HydratedCountries from "@/providers/HydratedCountries";
// import Loading from "@/components/loading";

// This force the page to have suspense in production
// export const dynamic = "force-dynamic";

export default function Home() {
  return (
    // <Suspense fallback={<Loading />}>
    <HydratedCountries>
      <HomePage />
    </HydratedCountries>
    // </Suspense>
  );
}
