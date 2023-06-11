// import Photo from "../../../components/frame/index";
import Modal from "../../../components/modal/index.js";
import galleryItems from "../../../api/gallery"
import Image from "next/image";

export default function PhotoModal({ params: { id: photoId } }) {
  const photos = galleryItems;
  //  console.log('photos @modal', photos)
  const photo = photoId && photos.find((p) => p.id === photoId);
//  console.log('photo @modal', photo)
  return (
    <Modal>
      {/* <Photo photo={photo} /> */}
      {photo && <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />}
    </Modal>
  );
}

// const PhotoModal=({ params: { id: photoId } })=> {
//   const photos = galleryItems;
//   console.log('photos @modal', photos)
//   // const photo =   photoId && photos.find((p) => p.id === photoId);
// const photo = photoId ? photos.find((p) => p.id === photoId) : null;
//   console.log('photo @modal', photo)
//   return (
//     <Modal>
//       {/* <Photo photo={photo} /> */}
//           <Image
//         alt=""
//         src={photo.imageSrc}
//         height={600}
//         width={600}
//         className="w-full object-cover aspect-square col-span-2"
//       />
//     </Modal>
//   );
// }
// export default PhotoModal
