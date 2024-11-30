"use client"
import React, { useEffect, useState } from "react";

interface ReverseGeocodeResponse {
  countryCode?: string;
}

function ClientSideCountryCode() {
  const [countryCode, setCountryCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch(
          `https://api-bdc.net/data/reverse-geocode-client`
        );
        const data: ReverseGeocodeResponse = await response.json();
        setCountryCode(data.countryCode || null);
      } catch (error) {
        console.error("Error fetching country code!", error);
      }
    };

    fetchCountryCode();
  }, []);

  return <div>
    <h1>This is the client side country code: {countryCode} - https://api-bdc.net/data/reverse-geocode-client</h1>
  </div>;
}

export default ClientSideCountryCode;
