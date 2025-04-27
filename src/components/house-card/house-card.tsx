import "./house-card.scss";
import { useTranslation } from "react-i18next";

interface HouseCardProps {
  image: string;
  title: string;
  description: string;
  remainingTimeLabel: string;
  remainingTimeValue: string;
  priceLabel: string;
  priceValue: string;
  liked: boolean;
}
const HouseCard = ({
  image,
  title,
  description,
  remainingTimeLabel,
  remainingTimeValue,
  priceLabel,
  priceValue,
  liked,
}: HouseCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="house-card">
      <div
        className="house-card__image-container"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="house-card__image-container__fav">
          {liked ? (
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7498 0.5C15.2815 0.5 17.3332 2.58333 17.3332 5.5C17.3332 11.3333 11.0832 14.6667 8.99984 15.9167C6.9165 14.6667 0.666504 11.3333 0.666504 5.5C0.666504 2.58333 2.74984 0.5 5.24984 0.5C6.79984 0.5 8.1665 1.33333 8.99984 2.16667C9.83317 1.33333 11.1998 0.5 12.7498 0.5Z"
                fill="#F61010"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7498 0.5C15.2815 0.5 17.3332 2.58333 17.3332 5.5C17.3332 11.3333 11.0832 14.6667 8.99984 15.9167C6.9165 14.6667 0.666504 11.3333 0.666504 5.5C0.666504 2.58333 2.74984 0.5 5.24984 0.5C6.79984 0.5 8.1665 1.33333 8.99984 2.16667C9.83317 1.33333 11.1998 0.5 12.7498 0.5ZM9.77817 13.5033C10.5123 13.04 11.1748 12.5792 11.7948 12.0858C14.279 10.1108 15.6665 7.9525 15.6665 5.5C15.6665 3.53333 14.3857 2.16667 12.7498 2.16667C11.8532 2.16667 10.8832 2.64167 10.1782 3.345L8.99984 4.52333L7.8215 3.345C7.1165 2.64167 6.1465 2.16667 5.24984 2.16667C3.63317 2.16667 2.33317 3.54667 2.33317 5.5C2.33317 7.95333 3.7215 10.1108 6.204 12.0858C6.82484 12.5792 7.48734 13.04 8.2215 13.5025C8.47067 13.66 8.71734 13.8108 8.99984 13.9792C9.28234 13.8108 9.529 13.66 9.77817 13.5033Z"
                fill="#C3C5CE"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="house-card__title">
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <div className="house-card__time-and-price">
        <div className="house-card__time-and-price__box">
          <span>{remainingTimeValue}</span>
          <span>{remainingTimeLabel}</span>
        </div>
        <div className="house-card__time-and-price__box">
          <span>{priceValue}</span>
          <span>{priceLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
