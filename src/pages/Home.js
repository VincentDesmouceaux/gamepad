import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    console.log(
      `https://api.rawg.io/api/games?name=${search}&key=c23c094efc5643d28c1e1e2d7bd0dab4`
    );
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?name=${search}&key=c23c094efc5643d28c1e1e2d7bd0dab4`
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
              <h1 className="heading heading_1">Jeux du moment</h1>
            </div>
            <div className="discover-page__content-header__right"></div>
          </div>
          <div className="offer-container">
            <div className="discover-games-list">
              {data.results.map((game, index) => {
                return (
                  <div className="load-more" key={game.id}>
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
                                <div class="heading heading_4">
                                  <p className="game-card-medium__info__name">
                                    {game.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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