"use client"
import React from "react";
import Photo from "../../components/frame/index";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";
import galleryItems from "../../api/gallery";
import { useRouter } from "next/navigation";


export default function ProgettiId({params}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const router = useRouter();
  const photoID = params.id
  console.log('photoID', photoID)

  const photo = galleryItems.find((item) => item.id === photoID);

  if (!photo) {
    return <div>Loading...</div>;
  }
  const closeLightbox = () => {
    setOpen(false);
    setIndex(-1);
    router.push("/progetti"); // Redirect to the main progetti page after closing the lightbox
  };
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
          <img
            alt=""
            src={photo.imageSrc}
            // height={1200}
            // width={800}
            className="w-full object-cover aspect-square col-span-2"
          />
        </div>
      </div>

    </>
  );
}