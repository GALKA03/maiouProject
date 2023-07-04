// import Photo from "../../../components/frame/index";
"use client"
import galleryItems from "../../../api/gallery"
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
// import slides from "@/data/slides";
import { useRouter } from "next/navigation.js"; 
import Link from "next/link.js";

export default function ProgettiId({params}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const router = useRouter();
  // const { id } = router.query;
const photoID = params.id
  // const handlePhotoClick = (photoIndex) => {
  //   setIndex(photoIndex);
  //   setOpen(true);
  // };

  const closeLightbox = () => {
    setOpen(false);
    setIndex(-1);
    router.push("/progetti"); // Redirect to the main progetti page after closing the lightbox
  };

  const photo = galleryItems.find((item) => item.id === photoID);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto my-10" /*onClick={handlePhotoClick}*/>
        {/* <div className="w-1/2 mx-auto border border-gray-700">
          <Image
            alt=""
            src={photo.imageSrc}
            height={600}
            width={600}
            className="w-full object-cover aspect-square col-span-2"
          />
        </div> */}
      </div>
    </>
  );

}

    // <Modal>
    //   {/* <Photo photo={photo} /> */}
    //   {photo && <Image
    //     alt=""
    //     src={photo.imageSrc}
    //     height={600}
    //     width={600}
    //     className="w-full object-cover aspect-square col-span-2"
    //   />}
    // </Modal>
