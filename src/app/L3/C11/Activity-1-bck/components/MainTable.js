"use client";

import './style.css';
import { useState } from 'react';

export default function Table() {
  const [data, setData] = useState([
    { day: 1, temperature: 35, weather: 'Sunny', predictedCustomer: 0, actualCustomer: 0, existingInventory: 0, moreInventoryNeeded: 0, totalInventory: 0, inventoryShortfall: 0, executive: '' },
    { day: 2, temperature: 32, weather: 'Sunny', predictedCustomer: 0, actualCustomer: 0, existingInventory: 0, moreInventoryNeeded: 0, totalInventory: 0, inventoryShortfall: 0, executive: '' },
    { day: 3, temperature: 24, weather: 'Cloudy', predictedCustomer: 0, actualCustomer: 0, existingInventory: 0, moreInventoryNeeded: 0, totalInventory: 0, inventoryShortfall: 0, executive: '' },
    { day: 4, temperature: 22, weather: 'Cloudy', predictedCustomer: 0, actualCustomer: 0, existingInventory: 0, moreInventoryNeeded: 0, totalInventory: 0, inventoryShortfall: 0, executive: '' },
    { day: 5, temperature: 18, weather: 'Rainy', predictedCustomer: 0, actualCustomer: 0, existingInventory: 0, moreInventoryNeeded: 0, totalInventory: 0, inventoryShortfall: 0, executive: '' },
    { day: 6, temperature: 16, weather: 'Rainy', predictedCustomer: 0, actualCustomer: 0, existingInventory: 0, moreInventoryNeeded: 0, totalInventory: 0, inventoryShortfall: 0, executive: '' },
  ]);

  const [dayWiseResult, setDayWiseResult] = useState([])
  const [highlightedCell, setHighlightedCell] = useState(null);

  const handleInputChange = (value, rowIndex, field) => {
    const newData = [...data];
    newData[rowIndex][field] = value;
  
    if (field === "moreInventoryNeeded") {
      let newTotalInventory = parseInt(newData[rowIndex].existingInventory) + parseInt(value);
      if (!isNaN(newTotalInventory)) {
        newData[rowIndex].totalInventory = newTotalInventory;
      }
    }
  
    setData(newData);
  
    setHighlightedCell({ row: rowIndex, field });
    setTimeout(() => setHighlightedCell(null), 2000);
  };
  

  const isHighlighted = (rowIndex, field) => highlightedCell && highlightedCell.row === rowIndex && highlightedCell.field === field;



  const handleUpdateTotal = (rowValues, rowIndex) => {
    let newTotalInventory = parseInt(rowValues.existingInventory) + parseInt(rowValues.moreInventoryNeeded)
    if (typeof newTotalInventory === 'number') {
      handleInputChange(newTotalInventory, rowIndex, 'totalInventory')
    } else {
      alert('Issue with the input Existing Inventory and More Inventory Needed')
    }
  };

  const updateActualCustomers = (temperature, rowIndex) => {
    let actualCustomers = 0;
    if (temperature >= 30) {
      actualCustomers = Math.floor(Math.random() * (80 - 50 + 1) + 50);
    } else if (temperature >= 20) {
      actualCustomers = Math.floor(Math.random() * (50 - 20 + 1) + 20);
    } else {
      actualCustomers = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    }
    return actualCustomers;
  }


  const executive = (rowValues, rowIndex) => {
    if (rowValues.totalInventory === 0) {
      alert('Make sure Inventory Needed field is updated for day : ' + rowValues.day);
      return;
    }
  
    let resultForTheDay = 'Result for the day : ' + rowValues.day;
    let actualCustomers = updateActualCustomers(rowValues.temperature, rowIndex);
    handleInputChange(actualCustomers, rowIndex, 'actualCustomer');
  
    setTimeout(function () {
      let pendingInventory = rowValues.totalInventory - actualCustomers;
  
      if (pendingInventory > 0) {
        // If inventory is left, carry it forward if there is a next day
        if (rowIndex < data.length - 1) {
          handleInputChange(pendingInventory, rowIndex + 1, 'existingInventory');
        }
        handleInputChange(0, rowIndex, 'inventoryShortfall'); // No shortfall if there's extra inventory
        resultForTheDay += `, you are left with ${pendingInventory} extra lemonades`;
      } else {
        // If inventory is short, update shortfall even for the last day
        handleInputChange(Math.abs(pendingInventory), rowIndex, 'inventoryShortfall');
  
        // Ensure last day's `existingInventory` is not mistakenly updated
        if (rowIndex < data.length - 1) {
          handleInputChange(0, rowIndex + 1, 'existingInventory');
        }
        resultForTheDay += `, you fell short of ${Math.abs(pendingInventory)} lemonades`;
      }
  
      setDayWiseResult([...dayWiseResult, resultForTheDay]);
    }, 2500);
  };
  

  const isReadOnlyColumn = (columnName) => {
    if (columnName === 'predictedCustomer' || columnName === 'moreInventoryNeeded') {
      return false
    } else {
      return true
    }
  }

  const inputType = (columnName) => {
    if (columnName === 'weather') {
      return 'text'
    } else {
      return 'number'
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th >Temperature (°C)</th>
            <th >Weather</th>
            <th >Predicted Customers</th>
            <th >Actual Customers</th>
            <th >Existing Inventory</th>
            <th >More Inventory Needed</th>
            <th >Total Inventory</th>
            <th >Inventory Shortfall</th>
            <th >Execute</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
            >
              {Object.keys(row).map((key, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    backgroundColor: isHighlighted(rowIndex, key) ? "#ffffcc" : "transparent",
                  }}
                >
                  {key === 'executive' ? (
                    <>
                      <button className="executiveBtn" onClick={() => executive(row, rowIndex)} >
                        Execute
                      </button>
                    </>
                  ) : (
                    <input
                      className="inputBox"
                      type={inputType(key)}
                      readOnly={isReadOnlyColumn(key)}
                      value={row[key]}
                      onChange={(e) => handleInputChange(e.target.value, rowIndex, key)}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="resultContainer">
        {dayWiseResult.length > 0 &&
          <h2>
            Results :
          </h2>
        }
        {dayWiseResult.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))}
      </div>

    </div>
  );
}
