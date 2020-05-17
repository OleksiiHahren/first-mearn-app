import React from "react";

interface Listing {
    title: string;
}
export const Listings = ({title}: Listing) =>{
return <h2> TinyHouse {title}</h2>
}
