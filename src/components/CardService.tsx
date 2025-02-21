import Image from 'next/image'
import AddToCartButton from './AddToCartButton'
import { DiscountIcon } from './icons/discount-icon'

interface CardServiceProps {
  description: string
  discount?: number
  id: string
  image: string
  name: string
  price: number
}

export function CardService({
  description,
  discount,
  id,
  image,
  name: title,
  price,
}: CardServiceProps) {
  const hasDiscount = discount !== undefined
  const priceWithDiscount = hasDiscount
    ? price - price * (discount / 100)
    : price

  return (
    <div className="relative flex items-center justify-between gap-4 rounded-3xl bg-slate-100 p-4">
      {hasDiscount && <Discount discount={discount} />}

      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <Image src={image} width="70" height="70" alt={`${title} image`} />

        <div className="flex w-full flex-col gap-1">
          <span className="text-2xl text-black">{title}</span>
          <p className="text-sm text-slate-500">{description}</p>

          <div className="flex justify-end gap-1">
            <p
              className={`w-min whitespace-nowrap rounded-md border px-2 text-lg font-semibold ${hasDiscount ? 'border-slate-300 bg-slate-200 text-slate-400 line-through' : 'border-green-300 bg-green-100 text-green-600'}`}
            >
              R$ {price.toFixed(2)}
            </p>

            {hasDiscount && (
              <p className="w-min whitespace-nowrap rounded-md border border-green-300 bg-green-100 px-2 text-lg font-semibold text-green-600">
                R$ {priceWithDiscount.toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <div className="flex w-full md:w-min">
          <AddToCartButton
            item={{
              id,
              name: title,
              price: priceWithDiscount,
            }}
          />
        </div>
      </div>
    </div>
  )
}

interface DiscountProps {
  discount: number
}

function Discount({ discount }: DiscountProps) {
  return (
    <div className="absolute top-2 flex items-center justify-center">
      <span className="absolute z-10 text-xl font-semibold text-white">
        {discount}%
      </span>

      <DiscountIcon width={75} height={75} className="absolute text-tertiary" />
    </div>
  )
}
