/* eslint-disable react-refresh/only-export-components */
 import { useState } from "react";
 import InputBox1  from './Component/InputBox';
import UseCurrencyInfo from "./Component/Hooks";

function App() {  
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("inr");

  const currencyInfo = UseCurrencyInfo(from);
  console.log("curr info ", currencyInfo);
  
 const options = Object.keys(currencyInfo);

  const convert = () => {
    
      setConvertedAmount(amount * currencyInfo[to]);

  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
  <>
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/OIP.2bf303U0V7AH3wP6ezUZ5gHaEK?rs=1&pid=ImgDetMain')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox1
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onChangeAmount={(newAmount) => setAmount(newAmount)}
                onChangeCurrency={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox1
                label="To"
                amount={convertedAmount}
                 currencyOptions={options}
                onChangeCurrency={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from?.toUpperCase()} to {to?.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>

  </> 
   
  
  );
}

export default App;
