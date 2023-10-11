import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
  console.log(card);
  const {
    id,
    title,
    category,
    donate_img,
    text_color,
    card_bg,
    button_bg,
    donate_btn_bg,
    price,
  } = card || {};

  console.log(card);

  return (
    <div>
      <div
        style={{ backgroundColor: card_bg, color: text_color }}
        className="relative mt-11 flex w-full max-w-[48rem] flex-row rounded-xl  text-gray-700 shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={donate_img}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 w-full rounded">
          <h6
            style={{ backgroundColor: button_bg }}
            className="mb-4 block text-base font-semibold w-fit rounded p-1"
          >
            {category}
          </h6>
          <h4 className="mb-2 block text-2xl font-semibold">{title}</h4>
          <h3 className="font-semibold mb-2">${price}.00</h3>
          <Link
            to={`/CardDetails/${id}`}
            style={{ backgroundColor: donate_btn_bg }}
            className="text-white px-4 py-2 rounded"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
