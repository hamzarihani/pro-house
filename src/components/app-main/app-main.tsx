import HouseCard from "../house-card/house-card";
import "./app-main.scss";
import { useTranslation } from "react-i18next";

const AppContent = () => {
  const { t } = useTranslation();
  return (
    <div className="app-content-container">
      <div className="app-content-container__landing-section">
        <div className="app-content-container__landing-section__content">
          <span>Future of real estate investing</span>
          <span>
            Our real estate is virtual property you can purchase on a metaverse
            platform
          </span>
          <button className="app-content-container__landing-section__content__primary-button">
            Explore
          </button>
        </div>
        <div className="app-content-container__landing-section__cards-container">
          <div className="app-content-container__landing-section__cards">
            <div className="app-content-container__landing-section__cards__first-card">
              <HouseCard
                image="/assets/rachel-claire.png"
                title="Wish house"
                description="@UA real estate agency"
                remainingTimeLabel="Remaining Time"
                remainingTimeValue="09h : 45m : 08s"
                priceLabel="Current Bid"
                priceValue="29.71 ETH"
                liked={false}
              ></HouseCard>
            </div>
            <div className="app-content-container__landing-section__cards__second-card">
              <HouseCard
                image="/assets/rachel-claire.png"
                title="Wish house"
                description="@UA real estate agency"
                remainingTimeLabel="Remaining Time"
                remainingTimeValue="09h : 45m : 08s"
                priceLabel="Current Bid"
                priceValue="29.71 ETH"
                liked={true}
              ></HouseCard>
            </div>
          </div>
        </div>
        <div className="app-content-container__landing-section__stats">
          <div className="app-content-container__landing-section__stats__box">
            <span>12k+</span>
            <span>properties</span>
          </div>
          <div className="app-content-container__landing-section__stats__box">
            <span>10k+</span>
            <span>auction</span>
          </div>
          <div className="app-content-container__landing-section__stats__box">
            <span>12k+</span>
            <span>developers</span>
          </div>
        </div>
      </div>
      <div className="app-content-container__partners-section"></div>
    </div>
  );
};

export default AppContent;
