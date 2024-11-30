"use server";

export async function getCountryCodeFromIPINFO(): Promise<string> {
  const res = await fetch("https://ipinfo.io/json");
  const json = await res.json();
  const country = json.country;

  return country;
}
