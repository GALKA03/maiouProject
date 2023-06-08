import Photo from "@/app/components/frame";
import Modal from "@/app/components/modal";
import  galleryItems  from "../../../gallery";



export default function PhotoModal({ params: { id: photoId } }) {
  const photos = galleryItems ;
  const photo = photoId && photos.find((p) => p.id === photoId);

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}