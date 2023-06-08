"use client"
import Image from "next/image";
// import React, { useState } from 'react';
import Link from "next/link";
// import galleryItems from "../../gallery"
import galleryItems from "../api/gallery"
// import { useRouter,usePathname,useSearchParams } from 'next/navigation';
// import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
// import ModalImg from "../components/ModalImg";
// import { ImageDetail } from "../components/ImageDetail";
import Loading from "./loading";

// import { Suspense } from "react";


const Progetti = () => {
//     const router = useRouter();
//     const pathname = usePathname();
// const searchParams = useSearchParams();
    const photos = galleryItems;
    
console.log('photos-progettiPage',photos)
    
    
  return (
    <div className="grid grid-cols-4 gap-4">
    {/* <Suspense fallback={<Loading />}> */}
      {photos.map(({id, imageSrc, imageAlt}) => (
          <Link key={id} href={`/progetti/${id}`}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={200}
                height={400}
                className="image cursor-pointer"
              />
          </Link>
      ))}
              {/* </Suspense> */}
    </div>
  );
}

export default Progetti;
// const Progetti = () => {
//  const router = useRouter();
//   const pathname = usePathname();
//     const searchParams = useSearchParams();
//     // const createQueryString = useCallback(
//     // (id, value) => {
//     //   const params = new URLSearchParams(searchParams);
//     //   params.set(id, value);
 
//     //   return params.toString();
//     // },
//     // [searchParams],
//     // );
//     const imageQuery = searchParams.get('image');
//   return (
//       <div className="grid grid-cols-4 gap-4">
//           {imageQuery && (
//         <ModalImg
//                   onClose={() => {() => router.push('/progetti');
//           }}
//         >
//           <ImageDetail image={router.query.image} />
//         </ModalImg>
//       )}
//       {galleryItems.map((item) => (
//         <div key={item.id} onClick={() => router.push(`/?image=${item.src}`)}>
//           <Image
//             src={item.src}
//             alt={item.alt}
//             width={200}
//             height={400}
//             className="image cursor-pointer"
//           />
//         </div>
//       ))}
//     </div>
//     );
// }

// export default Progetti;

// const express = require('express')
// const app = express()

// app.get('/data', (req, res,next) => {
//     res.json({
//         status: 'success', code: 200,
//     data:{data}})
// })
// app.get('/contact/:id', (req, res) => {
//     const contact= contacts.filter(el =>el.id===id)
//     res.json({
//     status: 'success',
//     code: 200,
//     data: { contact },
//   })
// })
// app.post('/contact/:id', (req, res,next) => {
//     const id = req.params.id
//     const { name, number } = req.body;
//     const task = {
//     id: nanoid(),
//     name,
//     number,
//   };

//  contacts.push(task);

//   res.status(201).json({
//     status: 'success',
//     code: 201,
//     data: { task },
//   });
//     // const newContact = new Contact({ name, number })
//     // newContact.save()
// const contact = contacts.filter(el => el.id === id);
//   res.json(contact);
   
// })
// router.put('/tasks/:id', (req, res, next) => {
//   const { id } = req.params;
//   const { title, text } = req.body;
//   const [task] = tasks.filter(el => el.id === id);
//   task.title = title;
//   task.text = text;
//   res.json({
//     status: 'success',
//     code: 200,
//     data: { task },
//   });
// });
// router.patch('/tasks/:id/status', (req, res, next) => {
//   const { id } = req.params;
//   const { done } = req.body;
//   const [task] = tasks.filter(el => el.id === id);
//   task.done = done;
//   res.json({
//     status: 'success',
//     code: 200,
//     data: { task },
//   });
// });



// app.listen(3000, () => {
//     console.log('port listening 3000')
// })
