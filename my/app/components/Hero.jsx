import Image from "next/image"


const Hero = () => {

    const styling = {
        backgroundColor:"rgba(77, 73, 73, 0.64)",
        background: "linear-gradient(193deg, rgba(34, 33, 33, 0.91)26%, rgba(77, 73, 73, 0.64) 76%, rgba(88, 87, 87, 0.96)), url('/heroOptim.jpg')",
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      
        }
    
    return (
        <section style={styling} className="py-28">
           <div className="flex flex-col justify-center items-center  ">
                 {/* <div className="animate-skew-y-12"> */}
                <Image          
        src="/logo.png"
        alt="logo"
        width={320}
        height={320}
        className="object_contain text-center"
                // placeholder="blur" 
                />
                   {/* </div> */}
                <h2 className="text-2xl text-white text-center capitalize align-middle break-words">Isolamento. Efficienza. Sicurezza.</h2>
      </div>
        </section>
       
    )
}
export default Hero