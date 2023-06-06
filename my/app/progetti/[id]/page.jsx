import { useEffect } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { galleryItems } from '../api/gallery';

Modal.setAppElement('#__next');

const ModalId = () => {
  return (
    <div>
      {galleryItems.map(({ src, alt, id }) => (
        <Image key={id} src={src} alt={alt} width={800} height={600}/>
      ))}
    </div>
  );
};

export default ModalId;