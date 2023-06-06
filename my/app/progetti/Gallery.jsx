"use client"

import { useState } from 'react';
import Modal from 'react-modal';
import { galleryItems } from "../api/gallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const items = galleryItems.map((item) => (
    <div
      key={item.id}
      className="grid-item"
      onClick={() => handleImageClick(item)}
    >
      <img
        src={item.src}
        alt={item.alt}
        width={200}
        height={400}
        className="image cursor-pointer"
      />
    </div>
  ));

  return (
    <div className="grid grid-cols-4 gap-4">
      {items}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        contentLabel="Enlarged Image"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <div>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={400}
              height={800}
            />
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;


// const Gallery = () => {


// export default Gallery;

{/* <section class="section section__backgroung"> */}
  // <div class="container__gallery">
  //   <h2 class="visually-hidden">Галерея</h2>
  //   <div class="grid">
  //     <div class="stamp stamp1"></div>
  //     <div class="stamp stamp2"></div>
  //     <div class="stamp stamp3"></div>
  //     <div class="stamp stamp4"></div>
  //     <div class="stamp stamp5"></div>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img7.webp    1x,
  //           ./images/gallery/desktop_img7@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img7.png    1x,
  //           ./images/gallery/desktop_img7@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img7.webp    1x,
  //           ./images/gallery/tablet_img7@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img7.png    1x,
  //           ./images/gallery/tablet_img7@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img7.webp    1x,
  //           ./images/gallery/img7@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img7.png 1x,
  //           ./images/gallery/img7@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item grid-item--gigante" src="./images/gallery/img7.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img2.webp    1x,
  //           ./images/gallery/desktop_img2@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img2.png    1x,
  //           ./images/gallery/desktop_img2@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img2.webp    1x,
  //           ./images/gallery/tablet_img2@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img2.png    1x,
  //           ./images/gallery/tablet_img2@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img2.webp    1x,
  //           ./images/gallery/img2@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img2.png 1x,
  //           ./images/gallery/img2@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img2.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img3.webp    1x,
  //           ./images/gallery/desktop_img3@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img3.png    1x,
  //           ./images/gallery/desktop_img3@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img3.webp    1x,
  //           ./images/gallery/tablet_img3@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img3.png    1x,
  //           ./images/gallery/tablet_img3@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img3.webp    1x,
  //           ./images/gallery/img3@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img3.png 1x,
  //           ./images/gallery/img3@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img3.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img4.webp    1x,
  //           ./images/gallery/desktop_img4@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img4.png    1x,
  //           ./images/gallery/desktop_img4@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img4.webp    1x,
  //           ./images/gallery/tablet_img4@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img4.png    1x,
  //           ./images/gallery/tablet_img4@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img4.webp    1x,
  //           ./images/gallery/img4@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img4.png 1x,
  //           ./images/gallery/img4@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img4.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img5.webp    1x,
  //           ./images/gallery/desktop_img5@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img5.png    1x,
  //           ./images/gallery/desktop_img5@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img5.webp    1x,
  //           ./images/gallery/tablet_img5@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img5.png    1x,
  //           ./images/gallery/tablet_img5@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img5.webp    1x,
  //           ./images/gallery/img5@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img5.png 1x,
  //           ./images/gallery/img5@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img5.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img6.webp    1x,
  //           ./images/gallery/desktop_img6@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img6.png    1x,
  //           ./images/gallery/desktop_img6@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img6.webp    1x,
  //           ./images/gallery/tablet_img6@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img6.png    1x,
  //           ./images/gallery/tablet_img6@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img6.webp    1x,
  //           ./images/gallery/img6@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img6.png 1x,
  //           ./images/gallery/img6@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img6.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img1.webp    1x,
  //           ./images/gallery/desktop_img1@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img1.png    1x,
  //           ./images/gallery/desktop_img1@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img1.webp    1x,
  //           ./images/gallery/tablet_img1@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img1.png    1x,
  //           ./images/gallery/tablet_img1@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img1.webp    1x,
  //           ./images/gallery/img1@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img1.png 1x,
  //           ./images/gallery/img1@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img1.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img8.webp    1x,
  //           ./images/gallery/desktop_img8@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img8.png    1x,
  //           ./images/gallery/desktop_img8@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img8.webp    1x,
  //           ./images/gallery/tablet_img8@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img8.png    1x,
  //           ./images/gallery/tablet_img8@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img8.webp    1x,
  //           ./images/gallery/img8@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img8.png 1x,
  //           ./images/gallery/img8@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img8.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img9.webp    1x,
  //           ./images/gallery/desktop_img9@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img9.png    1x,
  //           ./images/gallery/desktop_img9@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img9.webp    1x,
  //           ./images/gallery/tablet_img9@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img9.png    1x,
  //           ./images/gallery/tablet_img9@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img9.webp    1x,
  //           ./images/gallery/img9@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img9.png 1x,
  //           ./images/gallery/img9@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img9.png" alt="icecream" />
  //     </picture>
  //     <picture>
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img10.webp    1x,
  //           ./images/gallery/desktop_img10@2x.webp 2x
  //         "
  //         media="(min-width: 1200px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/desktop_img10.png    1x,
  //           ./images/gallery/desktop_img10@2x.png 2x
  //         "
  //         media="(min-width: 1200px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img10.webp    1x,
  //           ./images/gallery/tablet_img10@2x.webp 2x
  //         "
  //         media="(min-width: 768px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/tablet_img10.png    1x,
  //           ./images/gallery/tablet_img10@2x.png 2x
  //         "
  //         media="(min-width: 768px)"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img10.webp    1x,
  //           ./images/gallery/img10@2x.webp 2x
  //         "
  //         media="(max-width: 767px)"
  //         type="image/webp"
  //       />
  //       <source
  //         srcset="
  //           ./images/gallery/img10.png 1x,
  //           ./images/gallery/img10@2x.png 2x
  //         "
  //         media="(max-width: 767px)"
  //       />
  //       <img class="grid-item" src="./images/gallery/img10.png" alt="icecream" />
  //     </picture> 
  //   </div>
  // </div>
// </section>

// "use client"
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { galleryItems } from "../api/gallery";

// const Gallery = () => {
//   const imageVariants = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1 },
//   };

//   const [selectedImage, setSelectedImage] = useState(null);

//   const items = galleryItems.map((item) => (
//     <motion.div
//       key={item.id}
//       className="grid-item"
//       onClick={() => setSelectedImage(item)}
//       initial="initial"
//       animate="animate"
//       variants={imageVariants}
//       transition={{ duration: 0.3 }}
//     >
//       <motion.img
//         src={item.src}
//         alt={item.alt}
//         width={200}
//         height={400}
//         className="image cursor-pointer"
//       />
//     </motion.div>
//   ));

//   const renderSelectedImage = () => {
//     if (!selectedImage) return null;

//     return (
//       <div>
//         <motion.img
//           src={selectedImage.src}
//           alt={selectedImage.alt}
//           width={400}
//           height={800}
//           initial="initial"
//           animate="animate"
//           variants={imageVariants}
//           transition={{ duration: 0.3 }}
//         />
//         <h2>{selectedImage.title}</h2>
//         <p>{selectedImage.description}</p>
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {items}
//       {renderSelectedImage()}
//     </div>
//   );
// };

// export default Gallery;



                              