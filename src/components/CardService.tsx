import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { DiscountIcon } from "./icons/discount-icon";

interface CardServiceProps {
  id: string
  name: string;
  description: string;
  image: string;
  discount?: number;
  price: number;
}

export function CardService ({ id, description, image, name: title, discount, price }: CardServiceProps) {
  const hasDiscount = discount !== undefined
  const priceWithDiscount = hasDiscount ? price - (price * (discount / 100)) : price

  return (
    <div className="relative flex bg-slate-100 gap-4 items-center rounded-3xl p-4 justify-between">
      {hasDiscount && (
        <Discount discount={discount} />
      )}

      <div className="flex gap-4 items-center flex-1">
        <div className="w-28 h-28">
          <Image
            src={image}
            width="50"
            height="50"
            alt={`${title} image`}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <span className="text-2xl text-black">{title}</span>
          <p className="text-slate-500 text-sm">{description}</p>

          <div className="justify-end flex gap-1">
            <p className={`px-2 rounded-md font-semibold text-lg border ${hasDiscount ? 'text-slate-400 bg-slate-200 border-slate-300 line-through' : 'text-green-600 bg-green-100 border-green-300'}`}>
              R$ {price.toFixed(2)}
            </p>

            {hasDiscount && (
              <p className="text-green-600 bg-green-100 border border-green-300 px-2 rounded-md font-semibold text-lg">
                R$ {priceWithDiscount.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>

      <AddToCartButton
        item={{
          id: id,
          name: title,
          price: priceWithDiscount,
        }}
      />
    </div>
  )
}

interface DiscountProps {
  discount: number
}

function Discount ({ discount }: DiscountProps) {
  return (
    <div className="flex items-center justify-center absolute top-2">
      <span className="absolute text-white z-10 text-xl font-semibold">
        {discount}%
      </span>

      <DiscountIcon
        width={75}
        height={75}
        className="absolute text-tertiary"
      />
    </div>
  )
}
