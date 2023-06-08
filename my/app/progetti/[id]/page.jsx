"use client"
import Link from "next/link";
// import { useRouter } from "next/router";
import  galleryItems  from "@/app/api/gallery";
import Photo from "@/app/components/frame";

const GalleryId = ({ params: { id } }) => {
 
  const photo = galleryItems.find((p)=>p.id===id)
console.log('[id]photo', photo)
  return (
    <>
          <div>
           <Photo  photo={photo}/>
          </div>
      
</>
  );
}

export default GalleryId;

