import React from "react";
import Photo from "../../components/frame/index";

import Image from "next/image";
import galleryItems from "../../api/gallery";

export default function PhotoPage({ params: { id } }) {
  const photo = galleryItems.find((p) => p.id === id);
console.log('photo[id]', photo)
   return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
         {/* <Photo photo={photo} /> */}
          <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />
      </div>
    </div>
  );
}