import Image from "next/image";
const Garanty = () => {
  const styling = {
    backgroundColor: "rgba(77, 73, 73, 0.64)",
    background: "url('/GarantySection.jpg')",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    };
      const garantyItems = [
    {
      id: 1,
      src: "/garanty/garanty1.png",
      alt: "done all",
      title: "Garanzia",
      description: "qualità del prodotto",
    },
    {
      id: 2,
      src: "/garanty/garanty2.png",
      alt: "done all",
      title: "Minimo",
      description: "Tempo di consegna stimato",
    },
    {
      id: 3,
      src: "/garanty/garanty3.png",
      alt: "done all",
      title: "Professionale",
      description: "squadra",
        },
    {
      id: 4,
      src: "/garanty/garanty4.png",
      alt: "Consegna",
      title: "Consegna ",
      description: "prodotti",
        },
    {
      id: 5,
      src: "/garanty/garanty5.png",
      alt: "done all",
      title: "Ordini",
      description: "da 10 mq. M.",
          },
     {
      id: 6,
      src: "/garanty/garanty6.png",
      alt: "done all",
      title: "misurazioni",
      description: "con partenza",
          },
      {
      id: 7,
      src: "/garanty/garanty7.png",
      alt: "done all",
      title: "Tutta la vita",
      description: "garanzia",
          },
       {
      id: 8,
      src: "/garanty/garanty8.png",
      alt: "done all",
      title: "Misurazioni",
      description: "Gratuito",
          }
      ]
    
  return (
      <section style={styling} className="px-4">
      <ul className="max-w-3xl mx-auto py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {garantyItems.map(({ id, src, alt, title, description }) => (
          <li key={id} className="flex justify-center items-center flex-col">
            <Image src={src} alt={alt} width={70} height={70} className=" hover:scale-125 transition duration-500" />
            <h3 className="text-cyan-900 text-xl text-center font-bold">{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Garanty;
