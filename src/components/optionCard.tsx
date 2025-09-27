export type OptionCardProps = {
  imageUrl: string;
  alt: string;
  title: string;
};
import "./index.css";
export default function OptionCard({
  imageUrl,
  alt,
  title,
}: OptionCardProps) {
  return (
    <div className="item_card">
      <img src={imageUrl} alt={alt} />
        <h3>{title}</h3>
    </div>
  );
}
