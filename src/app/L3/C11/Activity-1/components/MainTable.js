'use client'

import { useState } from 'react';

// No longer needed since location selection is removed
// const LOCATIONS = ['Beach', 'School', 'Park', 'Mall'];

const WEATHER = ['Sunny', 'Hot', 'Cloudy', 'Cool', 'Cloudy']; // Day 1, Day 2, Day 3, Day 4, Day 5

export default function IceCreamChallenge() {
  // Directly start in 'play' step
  const [step, setStep] = useState('play');
  // No need for a location state since it's removed
  // const [location, setLocation] = useState('');
  const [wallet, setWallet] = useState(50);
  const [currentDay, setCurrentDay] = useState(0);
  const [order, setOrder] = useState({ vanilla: 0, chocolate: 0 });
  const [remainingBudget, setRemainingBudget] = useState(null);
  const [weather, setWeather] = useState(WEATHER[0]); // Start with Day 1's weather
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const cost = { vanilla: 1, chocolate: 2 };
  const price = { vanilla: 2, chocolate: 4 };

  // This handler is no longer needed
  // const handleLocationSelect = (loc) => {
  //   setLocation(loc);
  //   setStep('play');
  // };

  const updateOrder = (type, value) => {
    if (value < 0) return;
    const newOrder = { ...order, [type]: value };
    const totalCost =
      newOrder.vanilla * cost.vanilla + newOrder.chocolate * cost.chocolate;
    if (totalCost <= wallet) {
      setOrder(newOrder);
      setRemainingBudget(wallet - totalCost);
      setError('');
    }
  };

  const handleExecute = () => {
    if (currentDay >= 5) return;

    if (order.vanilla === 0 && order.chocolate === 0) {
      setError('Both Vanilla and Chocolate order quantities must be greater than 0');
      return;
    }

    setError('');

    const maxCustomers = weather === 'Sunny' || weather === 'Hot' ? 50 : 30;
    const vanillaDemand = Math.floor(Math.random() * maxCustomers);
    const chocolateDemand = Math.floor(Math.random() * maxCustomers);

    const vanillaSold = Math.min(order.vanilla, vanillaDemand);
    const chocolateSold = Math.min(order.chocolate, chocolateDemand);

    const vanillaEarned = vanillaSold * price.vanilla;
    const chocolateEarned = chocolateSold * price.chocolate;
    const vanillaSpent = order.vanilla * cost.vanilla;
    const chocolateSpent = order.chocolate * cost.chocolate;

    const vanillaProfitLoss = vanillaEarned - vanillaSpent;
    const chocolateProfitLoss = chocolateEarned - chocolateSpent;
    const totalProfitLoss = vanillaProfitLoss + chocolateProfitLoss;
    const updatedWallet = wallet + totalProfitLoss;

    setWallet(updatedWallet);
    setHistory([
      ...history,
      {
        day: currentDay + 1,
        weather,
        vanillaOrdered: order.vanilla,
        vanillaSold,
        vanillaProfitLoss,
        chocolateOrdered: order.chocolate,
        chocolateSold,
        chocolateProfitLoss,
        totalProfitLoss,
        walletAfter: updatedWallet,
      },
    ]);

    setOrder({ vanilla: 0, chocolate: 0 });
    setRemainingBudget(currentDay === 4 ? null : updatedWallet);
    setCurrentDay(currentDay + 1);
    if (currentDay < 4) setWeather(WEATHER[currentDay + 1]);
  };

  const isExecuteDisabled = order.vanilla === 0 && order.chocolate === 0;
  const totalProfitLossAllDays = history.reduce((acc, d) => acc + d.totalProfitLoss, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 p-4 font-sans flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-purple-800 select-none">
        🍦 Ice Cream Truck Challenge
      </h1>

      {/* The step 'select' block is removed */}
      {/* {step === 'select' && (
        <div className="w-full max-w-lg text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Choose a location to park your truck
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            {LOCATIONS.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocationSelect(loc)}
                className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      )} */}

      {step === 'play' && (
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-2 md:gap-6">
          {/* Left: Order & Info */}
          <div className="md:w-1/3 bg-white rounded-lg shadow-lg p-5 flex flex-col gap-5 sticky top-4 max-h-[80vh] overflow-auto relative">
            {/* Location badge removed */}
            {/* <div className="absolute top-3 right-4 bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full text-sm select-none shadow-md">
              Location: {location}
            </div> */}

            <div className="space-y-1 text-center mt-2">
              <p className="text-xl font-semibold text-indigo-700 select-none">
                💰 Wallet: <span className="font-bold">${wallet.toFixed(2)}</span>
              </p>
              {currentDay < 5 && (
                <p className="text-xl font-semibold text-indigo-800 select-none">
                  🌤️ Tomorrow’s weather: <span className="font-bold">{weather}</span>
                </p>
              )}
              <p className="text-sm text-gray-600 italic select-none">
                Order Costs: Vanilla - $1, Chocolate - $2<br />
                Selling Prices: Vanilla - $2, Chocolate - $4
              </p>
            </div>

            {currentDay < 5 && (
              <>
                <h3 className="text-xl font-bold text-purple-700 text-center">
                  Day {currentDay + 1}: Place Your Order
                </h3>
                <div className="grid grid-cols-2 gap-3 items-center">
                  <label className="text-md font-semibold text-gray-700 text-right select-none">
                    Vanilla:
                  </label>
                  <input
                    type="number"
                    value={order.vanilla}
                    onChange={(e) => updateOrder('vanilla', parseInt(e.target.value) || 0)}
                    className="border border-purple-400 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <label className="text-md font-semibold text-gray-700 text-right select-none">
                    Chocolate:
                  </label>
                  <input
                    type="number"
                    value={order.chocolate}
                    onChange={(e) => updateOrder('chocolate', parseInt(e.target.value) || 0)}
                    className="border border-purple-400 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {remainingBudget !== null && (
                  <p className="mt-2 text-center text-gray-700 font-semibold select-none">
                    Remaining budget after order:{' '}
                    <span className="text-indigo-600">${remainingBudget.toFixed(2)}</span>
                  </p>
                )}

                {error && (
                  <p className="mt-2 text-center text-red-600 font-semibold select-none">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleExecute}
                  className={`mt-4 w-full py-2 rounded-lg font-bold text-white transition select-none ${isExecuteDisabled
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  disabled={isExecuteDisabled}
                >
                  Execute
                </button>
              </>
            )}

            {currentDay === 5 && (
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold select-none">
                  You finished with a total{' '}
                  <span
                    className={`${totalProfitLossAllDays >= 0 ? 'text-green-700' : 'text-red-700'
                      }`}
                  >
                    {totalProfitLossAllDays >= 0 ? 'profit' : 'loss'}
                  </span>{' '}
                  of{' '}
                  <span className="font-bold">
                    ${Math.abs(totalProfitLossAllDays).toFixed(2)}
                  </span>
                  .
                </p>
                {/* Restart button to reset the game */}
                <button
                  onClick={() => {
                    setStep('play'); // Stays in play mode, just resets values
                    // setLocation(''); // No location
                    setWallet(50);
                    setCurrentDay(0);
                    setOrder({ vanilla: 0, chocolate: 0 });
                    setRemainingBudget(null);
                    setHistory([]);
                    setWeather(WEATHER[0]); // Reset to Day 1 weather
                    setError('');
                  }}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-lg transition select-none"
                >
                  Restart Challenge
                </button>
              </div>
            )}
          </div>

          {/* Right: History Table */}
          <div className="md:w-2/3 bg-white rounded-lg shadow-lg p-4 overflow-auto max-h-[80vh]">
            {history.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-4 text-purple-700 select-none">
                  Days Summary
                </h3>
                <table className="w-full border-collapse table-auto text-sm md:text-base">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white select-none">
                      <th className="p-2 border border-purple-300">Day</th>
                      <th className="p-2 border border-purple-300">Weather</th>

                      <th className="p-2 border border-purple-300">Vanilla ice cream Ordered</th>
                      <th className="p-2 border border-purple-300">Vanilla ice cream Sold</th>
                      <th className="p-2 border border-purple-300">Vanilla ice cream P/L</th>

                      <th className="p-2 border border-purple-300">Chocolate ice cream Ordered</th>
                      <th className="p-2 border border-purple-300">Chocolate ice cream Sold</th>
                      <th className="p-2 border border-purple-300">Chocolate ice cream P/L</th>

                      <th className="p-2 border border-purple-300">Total P/L</th>
                      <th className="p-2 border border-purple-300">Wallet After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((day, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-purple-50' : 'bg-indigo-50'}
                      >
                        <td className="p-2 text-center font-semibold">{day.day}</td>
                        <td className="p-2 text-center font-semibold">{day.weather}</td>

                        <td className="p-2 text-center">{day.vanillaOrdered}</td>
                        <td className="p-2 text-center">{day.vanillaSold}</td>
                        <td
                          className={`p-2 text-center font-semibold ${day.vanillaProfitLoss >= 0
                              ? 'text-green-600'
                              : 'text-red-600'
                            }`}
                        >
                          {day.vanillaProfitLoss >= 0
                            ? `$${day.vanillaProfitLoss}`
                            : `-$${Math.abs(day.vanillaProfitLoss)}`}
                        </td>

                        <td className="p-2 text-center">{day.chocolateOrdered}</td>
                        <td className="p-2 text-center">{day.chocolateSold}</td>
                        <td
                          className={`p-2 text-center font-semibold ${day.chocolateProfitLoss >= 0
                              ? 'text-green-600'
                              : 'text-red-600'
                            }`}
                        >
                          {day.chocolateProfitLoss >= 0
                            ? `$${day.chocolateProfitLoss}`
                            : `-$${Math.abs(day.chocolateProfitLoss)}`}
                        </td>

                        <td
                          className={`p-2 text-center font-bold ${day.totalProfitLoss >= 0 ? 'text-green-800' : 'text-red-800'
                            }`}
                        >
                          {day.totalProfitLoss >= 0
                            ? `$${day.totalProfitLoss}`
                            : `-$${Math.abs(day.totalProfitLoss)}`}
                        </td>

                        <td className="p-2 text-center font-semibold text-indigo-700">
                          ${day.walletAfter.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {history.length === 0 && (
              <p className="text-center text-gray-500 select-none">No data yet. Start ordering!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}