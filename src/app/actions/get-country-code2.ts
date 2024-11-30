"use server";

export async function getCountryCodeFromAPI(): Promise<string> {
  const res = await fetch("https://api.ipify.org/?format=json");
  const json = await res.json();
  const ip = json.ip;

  const data = await fetch(`https://ipapi.co/${ip}/json`);
  const response = await data.json();
  const countryCode = response.country_code;

  return countryCode;
}
