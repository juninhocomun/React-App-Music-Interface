// SideMenu.tsx
import "./index.css";
import OptionCard from "../components/optionCard";
import type { OptionCardProps } from "../components/optionCard";

export default function SideMenu() {
  const gatoFullChad = "gato full chad";

  const imageurl: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Pe68oq409W00aqhW1tJtuHSUng_4Zk265g&s";
  const gearUrl: string = "https://svgsilh.com/svg/1615049.svg";
  const array: OptionCardProps[] = [
    { imageUrl: imageurl, alt: gatoFullChad, title: "o que eu quiser" },
    { imageUrl: imageurl, alt: gatoFullChad, title: "o que eu preferir" },
    { imageUrl: imageurl, alt: gatoFullChad, title: "o que eu desejar" },
    { imageUrl: imageurl, alt: gatoFullChad, title: "o que eu almejar" },
    { imageUrl: imageurl, alt: gatoFullChad, title: "o que eu sonhar" },
    { imageUrl: imageurl, alt: gatoFullChad, title: "o que eu conceber" },
  ];
  return (
    <aside>
  <input type="checkbox" className="invisible" id="checkboxForLabel1" />

  <label htmlFor="checkboxForLabel1" className="menu-toggle">
    <div className="main_text">
      <h2>Options</h2>
      <img className="gear-icon invisible" src={gearUrl} alt="gearOption" />
    </div>
  </label>

  <section className="itens_container">
    {array.map((item, index) => (
      <OptionCard key={index} {...item} />
    ))}
  </section>
</aside>
  );
}
