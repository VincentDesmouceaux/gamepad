import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    console.log(`http://localhost:4000/games?search=${search}`);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/games?search=${search}`
        );
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="page__content-wrap-centerer">
      <div className="page__content-wrap with-sidebar"></div>
      <main className="page__content">
        <div className="discover-page__content">
          <div className="discover-page__content-header">
            <div className="discover-page__content-header__left">
              <h1 className="heading heading_1">Games of the moment</h1>
            </div>
            <div className="discover-page__content-header__right"></div>
          </div>
          <div className="discover-games-list__controls">
            <div className="discover-games-list__controls__left">
              <div className="discover-filter">
                <div className="discover-filter__selects">
                  <div className="dropdown discover-filter__select">
                    <div div className="dropdown__button">
                      <button className="button button_inline select-button discover-filter-button select-button_inline">
                        <div className="select-button__content">
                          Order by :
                          <span className="discover-filter-button__value">
                            Rating
                          </span>
                        </div>
                      </button>
                      <button className="button button_inline select-button discover-filter-button select-button_inline">
                        <div className="select-button__content">
                          Order by :
                          <span className="discover-filter-button__value">
                            Release date
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-container">
            <div className="discover-games-list">
              {data.results.map((game, index) => {
                return (
                  <Link to={`/gamedetails/${game.id}`} key={index}>
                    <div className="load-more">
                      <div className="discover-columns">
                        <div className="discover-columns__column">
                          <div className="game-card-medium">
                            <div className="game-card-medium__wrapper">
                              <div className="game-card-medium__media">
                                <div className="game-card-video">
                                  <img
                                    className="game-card-video__video"
                                    src={game.background_image}
                                    alt="backgroundimage"
                                  />
                                </div>
                              </div>
                              <div className="game-card-medium__info">
                                <div className="game-card-medium__meta">
                                  <div className="platforms platforms_medium game-card-medium__platforms">
                                    <div className="platforms__platform platforms__platform_medium platforms__platform_pc"></div>
                                    <div className="platforms__platform platforms__platform_medium platforms__platform_playstation"></div>
                                    <div className="platforms__platform platforms__platform_medium platforms__platform_xbox"></div>
                                  </div>
                                  <div className="heading heading_4">
                                    <div className="game-card-medium__info__name">
                                      {game.name}
                                    </div>
                                    <div className="release">
                                      Release date : {game.released}
                                      <div className="h5">
                                        Rating : {game.rating}
                                      </div>
                                      <div className="genreflex">
                                        <div className="genres"> Genres :</div>
                                        {game.genres.map((genre, index) => {
                                          return (
                                            <span
                                              className="game-card-about__desription"
                                              key={index}
                                            >
                                              {genre.name}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
