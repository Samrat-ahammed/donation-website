import swal from "sweetalert";

const SingleCard = ({ detailsCard }) => {
  const { id, title, description, img_url, price } = detailsCard || {};

  const handleDonate = () => {
    const addDonate = [];
    const donateItem = JSON.parse(localStorage.getItem("donate"));

    if (!donateItem) {
      addDonate.push(detailsCard);
      localStorage.setItem("donate", JSON.stringify(addDonate));
      swal("Donate", "", "success");
    } else {
      const isExist = donateItem.find((card) => card.id == id);

      if (!isExist) {
        addDonate.push(...donateItem, detailsCard);
        localStorage.setItem("donate", JSON.stringify(addDonate));
        swal("Donate", "", "success");
      } else {
        swal("Already donate!", "", "error");
      }
    }
  };

  return (
    <div className="mb-10">
      <div>
        <div className="relative">
          <img className="w-full mt-8" src={img_url} alt="" />
          <div className="absolute p-6 overlay bg-opacity-60 w-full bg-[#343332] bottom-0">
            <div
              onClick={handleDonate}
              className="bg-[#FF444A] w-fit text-2xl font-semibold py-4 px-6 rounded-md"
            >
              Donate ${price}
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-4xl mt-14 mb-6">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SingleCard;
