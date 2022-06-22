import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../app/reducers/basketReducer";
const ProductFeedCard = ({
  isCheckout,
  product: { id, title, price, category, description, image },
}) => {
  const dispatch = useDispatch();
  function addItemToBasket() {
    dispatch(
      addToBasket({
        id,
        title,
        price,
        category,
        description,
        image,
      })
    );
  }
  function removeItemFromBasket() {
    dispatch(removeFromBasket(id))
  }
  return (
    <div className="bg-white px-5 py-4 flex flex-col shadow-xl mb-2">
      <div className="w-full flex justify-center">
        <Image src={image} width={130} height={130} objectFit="contain" />
      </div>
      <div className="mt-2 w-2/3">
        <p className="text-sm font-bold">{title}</p>
      </div>
      <div className="mt-2 w-2/3">
        <p className="text-xs font-semibold">
          {description.length > 70
            ? description.slice(0, 70) + "..."
            : description}
        </p>
      </div>
      <div className="mt-2 w-2/3">
        <p className="text-lg font-bold">${price}</p>
      </div>
      <div>
      {
        isCheckout&&  <button onClick={removeItemFromBasket} className="mb-3 font-bold text-sm bg-yellow-400 px-6 py-2 tew w-full active:bg-yellow-500">
        Remove from basket
      </button>
      }
        <button
          onClick={addItemToBasket}
          className="font-bold text-sm bg-yellow-400 px-6 py-2 tew w-full active:bg-yellow-500"
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductFeedCard;
