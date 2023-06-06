import Image from "next/image";
import s from "../styles/components/mainPage/productions.module.scss"
const Productions = () => {



  const styling = {
    backgroundColor: "rgba(77, 73, 73, 0.64)",
   background: "linear-gradient(193deg, rgba(34, 33, 33, 0.91), rgba(77, 73, 73, 0.34) 16%, rgba(88, 87, 87, 0.28)), url('/productions/bg2x.jpg')",
    // width: "100%",
    // height: "100%",
    backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    padding: "30px",
     minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1e23"
  };
  return (
    <section style={styling} >
      <h2 className="text-3xl mb-10  font-bold text-white text-center">
        La nostra produzione
      </h2>
      <div className={s.cardContainer}>
      {/* <ul className="w-full  block  md:flex justify-between items-center mx-auto max-w-max sm:justify-center"> */}
        {/* <li > */}
            {" "}
            <div className={s.card}>
              
            <div className={s.cardBackground} style={{
              backgroundImage:
                "url('/productions/1.jpg')",
              }}></div>
               <div className={s.content}>
        <div className={s.cardMembers}>Il nostro lavoro</div>
        {/* <h3 className={s.cardEtablish}>Iron Man</h3> */}
      </div>
          {/* <Image
            src=""
            alt="img1"
            width={200}
            height={60}
            className="mb-2 md:mr-10"

              /> */}
        </div>
          <div className={s.card}>
              
              <div className={s.cardBackground} style={{
              backgroundImage:
                "url('/productions/3.jpg')",
              }}></div>
               <div className={s.content}>
        <div className={s.cardMembers}>Tempo testato</div>
        {/* <h3 className={s.cardEtablish}>Iron Man</h3> */}
      </div>
         
        </div>
              <div className={s.card}>
              
              <div className={s.cardBackground} style={{
              backgroundImage:
                "url('/productions/2.jpg')",
              }}></div>
               <div className={s.content}>
        <div className={s.cardMembers}>Qualità testata</div>
        {/* <h3 className={s.cardEtablish}>Iron Man</h3> */}
      </div>
         
              </div>
       
        </div>

    </section>
  );
};
export default Productions;

{/* <div class="card-container">
    <div class="card">
      <div class="card-background" style="background-image:url('https://www.fredzone.org/wp-content/uploads/2020/05/iron-man.jpg');"></div>
      <div class="content">
        <div class="card-members">This is Tony Stark</div>
        <h3 class="card-etablish">Iron Man</h3>
      </div>
    </div>
    <div class="card">
      <div class="card-background" style="background-image:url('https://resize.elle.fr/article/var/plain_site/storage/images/loisirs/livres/news/marvel-comics-devoile-son-tout-premier-captain-america-gay-3920880/94703465-1-fre-FR/Marvel-Comics-devoile-son-tout-premier-Captain-America-gay.jpg');"></div>
      <div class="content">
        <div class="card-members">This is Steve Rogers</div>
        <h3 class="card-etablish">Captain America</h3>
      </div>
    </div>
    <div class="card">
      <div class="card-background" style="background-image:url('https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/cinema/news/spider-man-quand-tom-holland-andrew-garfield-et-tobey-maguire-se-reunissent-pour-recreer-un-meme-3996236/96201296-1-fre-FR/Spider-Man-quand-Tom-Holland-Andrew-Garfield-et-Tobey-Maguire-se-reunissent-pour-recreer-un-meme.jpg');">
      </div>
      <div class="content">
        <div class="card-members">This is Peter Parker</div>
        <h3 class="card-etablish">Spider Man</h3>
      </div>
    </div>
  </div> */}
