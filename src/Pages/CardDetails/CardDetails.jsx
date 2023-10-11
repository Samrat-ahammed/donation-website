import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const [detailsCard, setDetailsCard] = useState();

  const { id } = useParams();

  const details = useLoaderData();

  useEffect(() => {
    const findCard = details?.find((card) => card.id == id);
    setDetailsCard(findCard);
  }, [id, details]);

  return (
    <div>
      <SingleCard detailsCard={detailsCard}></SingleCard>
    </div>
  );
};

export default CardDetails;
