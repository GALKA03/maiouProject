import Link from "next/link";
import Image from "next/image";
import galleryItems from "../api/gallery";
export default function Progetti() {
  const progetti = galleryItems;

  return (
          <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {progetti.map(({ id, imageSrc }) => (
          <div key={id}>
          <Link /*key={id}*/ href={`/progetti/${id}`}>
          <div className="relative max-w-xs overflow-hidden bg-cover w-full aspect-square overflow-hidden rounded-lg">
            <img
              alt=""
              src={imageSrc}
              // height={200}
              // width={400}
              className=" w-full object-cover aspect-square h-auto max-w-full rounded-lg  transition duration-300 ease-in-out hover:scale-110 "
              />
              </div>
            </Link>
          </div>
        ))}
      </div>


  
  );
}
