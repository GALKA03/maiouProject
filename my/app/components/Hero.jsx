import Image from "next/image"


const Hero = () => {

    const styling = {
        backgroundColor:"rgba(77, 73, 73, 0.64)",
        background: "linear-gradient(193deg, rgba(34, 33, 33, 0.91)26%, rgba(77, 73, 73, 0.64) 76%, rgba(88, 87, 87, 0.96)), url('/heroOptim.jpg')",
            width: "100%",
            height: "720px",
            backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      
        }
    
    return (
        <section style={styling} className="">
           <div className="flex flex-col justify-center items-center   py-64">
                
                <Image          
        src="/logo.png"
        alt="logo"
        width={320}
        height={320}
        className="object_contain text-center "
                    />
                   
                <h2 className="text-2xl text-white capitalize align-middle break-words">Un'azienda specializzata nell'isolamento dei tubi.</h2>
      </div>
        </section>
       
    )
}
export default Hero