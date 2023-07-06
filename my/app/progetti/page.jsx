"use client"
import { ExistRequiredError } from "../lib/exceptions";
import Image from "next/image";
import galleryItems from "../api/gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { Suspense } from "react";
import Loading from "./loading";
import ScrollUpBtn from "../components/ScrollUp";


const Progetti = () => {
  
  
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

    const handlePhotoClick = (photoIndex) => {
    setIndex(photoIndex);
    setOpen(true);
  };
  const closeLightbox = () => {
    setOpen(false);
    setIndex(-1);
  };


  const columns = [[], [], [], []];

  galleryItems.forEach(({ id, imageSrc }, index) => {
    const columnIndex = [1, 5, 9].includes(parseInt(id)) ? [1, 5, 9].indexOf(parseInt(id)) : index % 3;
    columns[columnIndex].push({ id, imageSrc });
  });

  return (
    <div className="flex justify-center">
      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {column.map(({ id, imageSrc }, photoIndex) => (
              <div key={id} onClick={() => handlePhotoClick(photoIndex + columnIndex * 3)} className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat cursor-pointer">
               <Suspense fallback={<Loading/>}>
                <Image
                    src={imageSrc}
                    alt=""
                   className="h-auto rounded-lg max-w-full transition duration-300 ease-in-out hover:scale-110"
                    width={500}
                    height={500}
                  />
                  </Suspense>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={closeLightbox}
       slides={galleryItems.map(({ imageSrc }) => ({ src: imageSrc }))}
        index={index}
      />
      <ScrollUpBtn />
    </div >
      
  );
}
export default Progetti
 


