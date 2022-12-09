import { useParams, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

const Gamedetails = () => {
  const { id } = useParams();
  const location = useLocation();
  // console.log(location.state.screenshots);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--gamepad-backend--c7br8w6v87r6.code.run/gamedetails/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="page__content-wrap-centerer">
      <div className="page__content-wrap with-sidebar">
        <div className="style1"></div>
        <main className="page__content">
          <div className="game__content-wrap">
            <div></div>
            <div className="game-content-columns">
              <div>
                <div></div>
                <div className="game__head">
                  <div className="game__head-meta">
                    <div className="platforms platforms_big">
                      <div className="platforms__platform platforms__platform_medium platforms__platform_pc"></div>
                      <div className="platforms__platform platforms__platform_medium platforms__platform_playstation"></div>
                      <div className="platforms__platform platforms__platform_medium platforms__platform_xbox"></div>
                    </div>
                    <div className="game__meta-playtime">
                      Average Playtime: {data.playtime} hours
                    </div>
                    <h1 className="heading heading_12 game__title">
                      {data.name_original}
                    </h1>
                  </div>
                </div>
                <div className="game-buttons-new game__buttons">
                  <button className="button-button_fill-button_medium-color">
                    Add to my game
                  </button>
                </div>
                <div className="rating-chart ">
                  <div className="rating-chart__chart rating-chart__chart_rating">
                    <div className="rating__icon rating__icon_exceptional"></div>
                    <div className="rating__text">{data.ratings[0].title}</div>
                  </div>
                </div>
                <div className="game__about">
                  <div className="about"></div>
                  <h2 className="heading heading_2 game__block-title game__about-title">
                    About
                  </h2>
                  <div className="game__about-text">
                    <div className="styleoverflow">
                      <div>
                        <span>{data.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="game__screenshots">
                  <div className="game__screenshots-inner">
                    <div className="game__movie">
                      <div className="game-card-video started">
                        <img
                          src={data.background_image}
                          alt="background"
                          className="game-card-video__video"
                        />
                      </div>
                    </div>
                    <div className="game__screenshots-list">
                      {location.state.screenshots.map((image, index) => {
                        return (
                          <div className="game__screenshots-item" key={index}>
                            <img
                              src={image.image}
                              alt="screenshots"
                              className="responsive-image game__screenshot-image"
                            />
                            ;
                          </div>
                        );
                      })}
                      <div className="game__screenshots-item">
                        <img
                          src={data.background_image_additional}
                          alt="additional"
                          className="responsive-image game__screenshot-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content content_columns-1">
              <div className="game__suggestions">
                <div className="suggestions"></div>
                <h2 className="heading heading_2 game__suggestions-heading-h">
                  Games like :<span> {data.name_original}</span>
                </h2>
                <div className="game__suggestions-games">
                  <div className="load-more">
                    <div className="discover-columns__column">
                      {data.stores.map((elem, indexes) => {
                        return (
                          <img
                            className="videohelp"
                            key={indexes}
                            src={elem.store.image_background}
                            alt="aditionalgame"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gamedetails;
