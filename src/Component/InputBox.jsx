import { useId } from "react";

export default function InputBox1({
  label,
  amount,
  onChangeAmount, // Corrected prop name
  onChangeCurrency, // Corrected prop name
  currencyOptions = [],
  amountDisabled = false, // Treated as a boolean
  currencyDisabled = false, // Treated as a boolean
  selectCurrency = "eur",
}) {
  const amountInputId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {onChangeCurrency && onChangeCurrency(e.target.value)}}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// export default InputBox;
