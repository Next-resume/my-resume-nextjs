"use server";
export const getCountryCodeFromAPIROUTE = async (): Promise<string> => {
  const response = await fetch("https://repo-livid-omega.vercel.app/api/geo");
  const json = await response.text();

  return json;
};
