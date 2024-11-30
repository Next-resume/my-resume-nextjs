import React from "react";
import { getCountryCodeFromIPINFO } from "../actions/get-country-code";
import { getCountryCodeFromAPI } from "../actions/get-country-code2";
import { getCountryCodeFromBDC } from "../actions/get-country-code3";
import { getCountryCodeFromAPIROUTE } from "../actions/get-country-code4";

export default async function ServeSideCountryCode() {
  const firstCountryCode = await getCountryCodeFromIPINFO();
  const secondCountryCode = await getCountryCodeFromAPI()
  const thirdCountryCode = await getCountryCodeFromBDC()
  const fourthCountryCode = await getCountryCodeFromAPIROUTE()
  return <div>
    <h1>This is the server side country code 1: {firstCountryCode} - https://ipinfo.io/json</h1>
    <h1>This is the server side country code 2: {secondCountryCode} - https://ipapi.co/ip/json</h1>
    <h1>This is the server side country code 3: {thirdCountryCode} - https://api-bdc.net/data/reverse-geocode-client</h1>
    <h1>This is the server side country code 4: {fourthCountryCode} - /api/geo </h1>
  </div>;
}
