// components/MyMap.tsx
"use client";

import {GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
import {Facebook, Instagram} from "lucide-react";

const containerStyle = {
  width: "50%",
  height: "400px",
};

const center = {
  lat: -34.60172742328778, // Replace with your lat
  lng: -58.37471515784839, // Replace with your lng
};

export default function Map() {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // .env
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="container mx-auto px-4 py-16 md:px-6">
      <div className="flex items-center max-md:flex-col max-md:gap-y-4 md:gap-x-4">
        <GoogleMap center={center} mapContainerStyle={containerStyle} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
        <div className="text-xl font-semibold max-md:text-center">
          <p>WayComputer SRL -</p>
          <p>Direccion: Florida 537 1er Piso local 436. CABA. Buenos Aires, Argentina.</p>
          <p>Telefono: 4328-5865</p>
          <p>Mail: waycomputer@hotmail.com</p>
          <div className="flex items-center gap-x-2 pt-4 max-md:justify-center">
            <a href="https://www.facebook.com/waycomputer" rel="noreferrer" target="_blank">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/waycomputer/" rel="noreferrer" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
