import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

const Gamedetails = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/gamedetails/${id}`
        );
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
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
                    <h1 className="heading heading_1 game__title">
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
                      <div className="game__screenshots-item">
                        <img
                          src={data.background_image_additional}
                          alt=""
                          className="responsive-image game__screenshot-image"
                        />
                      </div>
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
