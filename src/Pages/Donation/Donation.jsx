import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  // const [totalDonate, setTotalDonate] = useState(0);
  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donate"));

    if (donateItem) {
      setDonate(donateItem);
    } else {
      setNotFound("No Donation found");
    }
  }, []);

  return (
    <div>
      <div>
        {notFound ? (
          <h4 className="text-center">{notFound}</h4>
        ) : (
          <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7">
              {isShow
                ? donate.map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))
                : donate
                    .slice(0, 4)
                    .map((card) => (
                      <DonationCard key={card.id} card={card}></DonationCard>
                    ))}
            </div>
          </div>
        )}
      </div>
      {donate.length > 4 && (
        <button
          onClick={() => setIsShow(!isShow)}
          className="flex justify-center items-center mx-auto p-3 rounded mb-14 mt-6 text-center bg-[#009444] font-semibold  text-white"
        >
          {isShow ? "See less" : "See All"}
        </button>
      )}
    </div>
  );
};

export default Donation;
