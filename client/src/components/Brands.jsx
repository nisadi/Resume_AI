import img1 from "../images/01.png";
import img2 from "../images/02.png";
import img3 from "../images/03.png";
import img4 from "../images/04.png";
import img5 from "../images/05.png";


export default function Brands() {
  return (
    <section className="text-center py-10">
      <p className="text-gray-500 mb-6">Trusting by leading brands, including</p>
      <div className="flex justify-center gap-8 opacity-80">
        <img src={img1} className="h-8" />
        <img src={img2} className="h-8" />
        <img src={img3} className="h-8" />
        <img src={img4} className="h-8" />
        <img src={img5} className="h-8" />

      </div>
    </section>
  );
}
