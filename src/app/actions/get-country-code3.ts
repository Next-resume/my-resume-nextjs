"use server"
export const getCountryCodeFromBDC = async (): Promise<string> => {
  const response = await fetch(
    "https://api-bdc.net/data/reverse-geocode-client"
  );
  const json = await response.json();
  return json.countryCode;
};