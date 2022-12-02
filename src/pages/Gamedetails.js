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
          `https://api.rawg.io/api/games/${id}?key=c23c094efc5643d28c1e1e2d7bd0dab4`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? <p>Loading...</p> : <div>hello</div>;
};

export default Gamedetails;
