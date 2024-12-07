import React, { PropsWithChildren } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCountries } from "@/api/getCountries";

export default async function HydratedCountries({
  children,
}: PropsWithChildren) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
