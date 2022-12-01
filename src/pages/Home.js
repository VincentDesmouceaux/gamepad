import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    console.log(
      `https://api.rawg.io/api/games?key=c23c094efc5643d28c1e1e2d7bd0dab4?name=${search}`
    );
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=c23c094efc5643d28c1e1e2d7bd0dab4?name=${search}`
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
          <div className="discover-games-list">
            {data.results.map((game, index) => {
              return (
                <div className="load-more" key={game.id}>
                  <img
                    src={game.thumbnail.path + "." + game.thumbnail.extension}
                    alt="game"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
