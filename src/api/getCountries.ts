export type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName?: NativeName;
  };
};

export const getCountries = async () => {
  const t0 = performance.now();
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
  const data: Country[] = await res.json();
  const t1 = performance.now();
  console.log(`Fetched ${data.length} countries in ${t1 - t0}ms`);
  return data;
};
