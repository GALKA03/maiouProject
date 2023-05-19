'use client';
import Image from "next/image"
const styling = {
    // backgroundColor: "rgba(77, 73, 73, 0.64)",
    // background: "url('/about/bg2x.jpg')",
    background: "linear-gradient(193deg, rgba(34, 33, 33, 0.91)26%, rgba(77, 73, 73, 0.74) 76%, rgba(88, 87, 87, 0.98)), url('/about/bg2x.jpg')",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
const AboutSection = () => {
    
    return (
        <section style={styling} className=" py-20 flex justify-around items-center">
            <div>
            < Image src="/about/1.jpg"
        alt="logo"
        width={200}
                    height={60}
                className="mb-10"
                />
{/*           
        < Image src="/about/2.jpg"
        alt="logo"
        width={200}
                    height={60}
                 className="mb-10"/>
             < Image src="/about/3.jpg"
        alt="logo"
        width={200}
        height={60} /> */}
            </div>
            <div className="w-9/12 text-white">
                <h2 className="text-3xl font-bold text-center mb-10">Chi siamo</h2>

            <p className="text-left  indent-7 whitespace-normal text-xl subpixel-antialiased leading-loose font-medium">Siamo un'azienda giovane e dinamica specializzata nell'isolamento di tubi. La nostra missione è fornire ai nostri clienti soluzioni personalizzate e di alta qualità, utilizzando i migliori materiali disponibili sul mercato.

I nostri prodotti di isolamento sono realizzati con lana minerale o elastomero in gomma, a seconda delle esigenze specifiche dei nostri clienti. Questi materiali offrono un'alta efficienza termica, riducendo al minimo le dispersioni di calore e contribuendo al risparmio energetico.

Inoltre, i nostri prodotti di isolamento sono rivestiti con alluminio, acciaio o isogenopak, a seconda delle necessità dei nostri clienti. Questi rivestimenti garantiscono una maggiore resistenza alle intemperie e ai raggi UV, proteggendo il tubo e il suo isolamento dall'usura del tempo.

Il nostro team di esperti offre consulenza personalizzata ai nostri clienti, consigliando loro la soluzione di isolamento più adatta alle loro esigenze. Inoltre, ci impegniamo costantemente nella ricerca e sviluppo di nuove soluzioni di isolamento, per garantire ai nostri clienti la migliore qualità possibile.

In sintesi, siamo un'azienda giovane e innovativa che si dedica all'isolamento di tubi utilizzando i migliori materiali e rivestimenti disponibili. Offriamo soluzioni personalizzate e consulenza esperta ai nostri clienti, per garantire efficienza energetica, risparmio sui costi e durata nel tempo.</p>
</div>
        </section>
    )
}
export default AboutSection