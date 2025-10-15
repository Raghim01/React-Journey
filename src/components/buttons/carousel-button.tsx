import ArrowRightIcon from "../../assets/arrow-right.svg";
import ArrowLeftIcon from "../../assets/arrow-left.svg";

export function CarouselButton({ label }: { label: string }) {
  return (
    <div className="carousel">
      <span>{label}</span>
      <div className="buttons">
        <ArrowLeftIcon />
        <ArrowRightIcon />
      </div>
    </div>
  );
}
