import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Cards = ({ item }) => {
  const { id, title, category, img_url, text_color, card_bg, button_bg } =
    item || {};

  return (
    <div>
      <Link to={`/CardDetails/${id}`}>
        <div
          style={{ backgroundColor: card_bg }}
          className="relative mt-20 flex flex-col rounded-xl bg-[#ff444926] bg-clip-border text-gray-700"
        >
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img className="w-full" src={img_url} alt="ui/ux review check" />
          </div>
          <div className="p-6">
            <div
              style={{ backgroundColor: button_bg }}
              className="w-fit text-left rounded p-2"
            >
              <h4
                style={{ color: text_color }}
                className="block font-sans text-2xl font-semibold text-[#0052FF]"
              >
                {category}
              </h4>
            </div>
            <p
              style={{ color: text_color }}
              className="mt-3 block font-sans text-xl font-bold antialiased"
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.array,
};
export default Cards;
