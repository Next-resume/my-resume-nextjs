import React from "react";
import { getCountryCodeFromIPINFO } from "../actions/get-country-code";
import { getCountryCodeFromAPI } from "../actions/get-country-code2";

export default async function ServeSideCountryCode() {
  const firstCountryCode = await getCountryCodeFromIPINFO();
  const secondCountryCode = await getCountryCodeFromAPI()
  return <div>
    <h1>This is the server side country code 1: {firstCountryCode} - https://ipinfo.io/json</h1>
    <h1>This is the server side country code 2: {secondCountryCode} - https://ipapi.co/ip/json</h1>
  </div>;
}
