import Image from "next/image";

export default function Photo({ photo }) {
    const unoPhoto = photo
    console.log('unoPhoto', unoPhoto)
    console.log('photo', photo)
    return (
    <>
            <Image
                alt={photo.imageAlt}
        src={photo.imageSrc}
        height={800}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.imageAlt}</h3>
      </div>
    </>
  );
}