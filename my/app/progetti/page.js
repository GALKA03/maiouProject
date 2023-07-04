"use client"
import Link from "next/link";
import Image from "next/image";
import galleryItems from "../api/gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";




export default function Progetti() {
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
 const firstColumnImages = galleryItems.filter(
  ({ id }) => id === "1" || id === "5" || id === "9" || id === "13"
);

  const otherColumnsImages = galleryItems.filter(({ id }) => !["1", "5", "9", "13"].includes(id));

  return (
    <>
       <div className="p-4 grid grid-cols-4 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          {firstColumnImages.map(({ id, imageSrc }, photoIndex) => (
            <div key={id} onClick={() => handlePhotoClick(photoIndex)}>
              <Link href={`/progetti/${id}`} className="relative overflow-hidden">
                <Image
                  src={imageSrc}
                  alt=""
                  className="h-auto rounded-lg max-w-full transition duration-300 ease-in-out hover:scale-110"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {otherColumnsImages.slice(0, 3).map(({ id, imageSrc }, photoIndex) => (
            <div key={id} onClick={() => handlePhotoClick(photoIndex + firstColumnImages.length)}>
              <Link href={`/progetti/${id}`} className="relative overflow-hidden">
                <Image
                  src={imageSrc}
                  alt=""
                  className="h-auto rounded-lg max-w-full transition duration-300 ease-in-out hover:scale-110"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {otherColumnsImages.slice(3, 6).map(({ id, imageSrc }, photoIndex) => (
            <div key={id} onClick={() => handlePhotoClick(photoIndex + firstColumnImages.length + 3)}>
              <Link href={`/progetti/${id}`} className="relative overflow-hidden">
                <Image
                  src={imageSrc}
                  alt=""
                  className="h-auto rounded-lg max-w-full transition duration-300 ease-in-out hover:scale-110"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {otherColumnsImages.slice(6, 9).map(({ id, imageSrc }, photoIndex) => (
            <div key={id} onClick={() => handlePhotoClick(photoIndex + firstColumnImages.length + 6)}>
              <Link href={`/progetti/${id}`} className="relative overflow-hidden">
                <Image
                  src={imageSrc}
                  alt=""
                  className="h-auto rounded-lg max-w-full transition duration-300 ease-in-out hover:scale-110"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryItems.map(({ id, imageSrc }, photoIndex) => (
          <div key={id} className="grid gap-4 " onClick={() => handlePhotoClick(photoIndex)}>
            <Link href={`/progetti/${id}`} className={`relative max-w-xs overflow-hidden${(photoIndex === 0 || photoIndex === 4 || photoIndex === 8 || photoIndex === 12) ? ' col-span-1' : ''} bg-cover bg-no-repeat`}>
              <Image
                src={imageSrc}
                alt=""
               className="h-auto rounded-lg max-w-full transition duration-300 ease-in-out hover:scale-110"
                width={500}
                height={500}
              />
            </Link>
          </div>
        ))}
      </div> */}
 
        <Lightbox
          open={open}
          close={closeLightbox}
          slides={galleryItems.map(({ imageSrc }) => ({ src: imageSrc }))}
          index={index}
        />
      
    </>
  );
}
  //  <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //     {progetti.map(({ id, imageSrc }) => (
  //         <div key={id}>
  //         <Link /*key={id}*/ href={`/progetti/${id}`}>
  //         <div className="relative max-w-xs overflow-hidden bg-cover w-full aspect-square overflow-hidden rounded-lg">
  //           <img
  //             alt=""
  //             src={imageSrc}
  //             // height={200}
  //             // width={400}
  //             className=" w-full object-cover aspect-square h-auto max-w-full rounded-lg  transition duration-300 ease-in-out hover:scale-110 "
  //             />
  //             </div>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>


//   <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//       <div class="grid gap-4">
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping1x1.jpg" alt=""/>
        
//         </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping8x1.jpg" alt=""/>
//           </div>
//           </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping6x1.jpg" alt=""/>
//         </div>
//         </Link>
//     </div>
//       <div className="grid gap-4">
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping3x1.jpg" alt=""/>
//         </div>
//         </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping9x1.jpg" alt=""/>
//         </div>
//         </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping5x1.jpg" alt=""/>
//         </div>
//         </Link>
//     </div>
//       <div className="grid gap-4">
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping2x1.jpg" alt=""/>
//         </div>
//         </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping7x1.jpg" alt=""/>
//         </div>
//         </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping10x1.jpg" alt=""/>
//         </div>
//         </Link>
//     </div>
//       <div className="grid gap-4">
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-90 max-w-xs rounded-lg" src="/gallery/piping11x1.jpg" alt=""/>
//         </div>
//         </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping4x1.jpg" alt=""/>
//         </div>
//         </Link>
//         <Link /*key={id}*/ href={`/progetti/${id}`}>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/gallery/piping12x1.jpg" alt=""/>
//           </div>
//           </Link>
//     </div>
// </div>