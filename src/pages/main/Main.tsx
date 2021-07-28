import React from "react";
import PhoneImage from "../../media/images/phone-image.png";
import PageCentre from "../../components/PageCentre";

import DiamondIcon from "../../media/images/diamond-icon.png";
import LayersIcon from "../../media/images/layers-icon.png";
import TankIcon from "../../media/images/tank-icon.png";

import SliderImage from "../../media/images/slider.png";

import CloudyPhoneImage from "../../media/images/cloudy-phone.png";
import CloudyIcon from "../../media/images/cloudy-icon.png";

import SunnyPhoneImage from "../../media/images/sunny-phone.png";
import SunnyIcon from "../../media/images/sunny-icon.png";

import RainyPhoneImage from "../../media/images/rainy-phone.png";
import RainyIcon from "../../media/images/rainy-icon.png";

import QuotesLeft from "../../media/images/quotes-left.png";
import QuotesRight from "../../media/images/quotes-right.png";

import DownloadPhoneImage from "../../media/images/download-phone.png";
import AppStoreButtonImage from "../../media/images/app-store-button.png";
import GooglePlayButtonImage from "../../media/images/google-play-button.png";

import "./main.scss";

interface IscreenShotBlock {
  image: string;
  altImage: string;
  icon: string;
  altIcon: string;
  title: string;
  description: string;
  weatherInfo: string;
  align?: "left" | "right";
}

const ScreenshotBlock = (props: IscreenShotBlock) => (
  <div className="screenshot-block">
    <div
      className={
        "phone-image " + (props.align === "right" ? "right-position" : "")
      }
    >
      <img alt={props.altImage} src={props.image} />
    </div>
    <div className="content">
      <div className="icon">
        <img alt={props.altImage} src={props.icon} />
      </div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <div className="weather-info">{props.weatherInfo}</div>
    </div>
  </div>
);

interface IReviewBlock {
  description: string;
  author: string;
}

const ReviewBlock = (props: IReviewBlock) => (
  <div className="review-item">
    <div className="review-quotes-left">
      <img alt="quotes" src={QuotesLeft} />
    </div>
    <div className="review-description">{props.description}</div>
    <div className="review-author">{props.author}</div>
    <div className="review-quotes-right">
      <img alt="quotes" src={QuotesRight} />
    </div>
  </div>
);

const Main = () => {
  return (
    <>
      <section className="main-page">
        <div className="wrapper">
          <div className="welcome">
            <div className="title">Get the most fun weather app</div>
            <div className="sub-text">
              Simple, nice and user-friendly application of the weather. Only
              useful inforamation
            </div>
            <div className="buttons">
              <button>Download</button>
              <button>Features</button>
            </div>
          </div>
          <div className="image">
            <img alt="phone icon" src={PhoneImage} />
          </div>
        </div>
        <div className="go-bottom-button">
          <button>
            <span></span>
          </button>
        </div>
      </section>
      <PageCentre>
        <section className="perfect-features">
          <div className="section-title">PERFECT FEATURES</div>
          <div className="section-sub-title">Only necessary</div>
          <div className="features-group">
            <div className="feature-item">
              <div className="image">
                <img alt="diamond icon" src={DiamondIcon} />
              </div>
              <div className="content">
                <div className="title">Usability</div>
                <div className="description">
                  Sometimes the simplest things are the hardest to find. So we
                  created a new line for everyday life
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="image">
                <img alt="layer icon" src={LayersIcon} />
              </div>
              <div className="content">
                <div className="title">Parallax Effect</div>
                <div className="description">
                  Sometimes the simplest things are the hardest to find. So we
                  created a new line for everyday life
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="image">
                <img alt="tank icon" src={TankIcon} />
              </div>
              <div className="content">
                <div className="title">Unlimites Colors</div>
                <div className="description">
                  Sometimes the simplest things are the hardest to find. So we
                  created a new line for everyday life
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageCentre>
      <PageCentre>
        <section className="simple-widgets">
          <div className="section-title">SIMPLE WIDGETS</div>
          <div className="section-sub-title">Drag and Drop</div>
          <div className="widgets-image">
            <img alt={"weather info"} src={SliderImage} />
          </div>
        </section>
      </PageCentre>
      <PageCentre>
        <section className="screenshots">
          <div className="section-title">SCREENSHOTS</div>
          <div className="section-sub-title">The brightest images</div>
          <div className="screenshots-cloudy">
            <ScreenshotBlock
              image={CloudyPhoneImage}
              altImage={"cloudy phone"}
              icon={CloudyIcon}
              altIcon={"cloudy icon"}
              title={"WHEN THE CLOUDS"}
              description={
                "Variable information on the air humidity, the feeling of the weather, and the ability to share this with your friends"
              }
              weatherInfo={"95% 9* Rainy"}
              align={"left"}
            />
          </div>
          <div className="screenshots-sunny">
            <ScreenshotBlock
              image={SunnyPhoneImage}
              altImage={"cloudy phone"}
              icon={SunnyIcon}
              altIcon={"cloudy icon"}
              title={"WHEN THE SUN"}
              description={
                "Sometimes the simplest things are the hardest to find. So we created a new line for everyday life"
              }
              weatherInfo={"95% 9* Rainy"}
              align={"right"}
            />
          </div>
          <div className="screenshots-rainy">
            <ScreenshotBlock
              image={RainyPhoneImage}
              altImage={"cloudy phone"}
              icon={RainyIcon}
              altIcon={"cloudy icon"}
              title={"WHEN THE SUN"}
              description={
                "Sometimes the simplest things are the hardest to find. So we created a new line for everyday life"
              }
              weatherInfo={"95% 9* Rainy"}
              align={"left"}
            />
          </div>
        </section>
      </PageCentre>
      <PageCentre>
        <section className="what-people-are-saying">
          <div className="section-title">WHAT PEOPLE ARE SAYING</div>
          <div className="section-sub-title">Reviews</div>
          <div className="reviews">
            <ReviewBlock
              description={
                "What art offers is space - a certain breathing room for the spirit."
              }
              author={"John Updike"}
            />
            <ReviewBlock
              description={
                "We do not see nature with our eyes, but with our understandings and our hearts."
              }
              author={"William Hazlitt"}
            />
            <ReviewBlock
              description={
                "The only courage that matters is the kind that gets you from one moment to the next."
              }
              author={"Mignon McLaughlin"}
            />
            <ReviewBlock
              description={
                "No man has a good enough memory to be a successful liar."
              }
              author={"Abraham Lincoln"}
            />
          </div>
        </section>
      </PageCentre>
      <div className="how-to-download-app-wrapper">
        <section className="how-to-download-app">
          <div className="info">
            <div className="title">HOW TO DOWNLOAD THE APP?</div>
            <div className="description">
              Just download the app from the store. Simple, nice and
              user-friendly application of theweather. Only relevant and useful
              information.
            </div>
            <div className="buttons">
              <img alt={"app store button"} src={AppStoreButtonImage} />
              <img alt={"google play button"} src={GooglePlayButtonImage} />
            </div>
          </div>
          <div className="phone-image">
            <img alt={"download phone"} src={DownloadPhoneImage} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
