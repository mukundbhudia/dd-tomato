import React from 'react'

const NutritionInfo = ({ vegType, vegQuantity, vegNutritionData }) => {
  const firstNutritionRow = vegNutritionData.shift()
  return (
    <div className="nutritional-info-panel">
      <h6>{vegType}</h6>
      <p>{vegQuantity}</p>
      <table className="table table-sm table-borderless">
        <thead className="thead-light">
          <tr>
            <th scope="col">{firstNutritionRow.nutrition}</th>
            <th scope="col">{firstNutritionRow.value}</th>
          </tr>
        </thead>
        <tbody>
          {vegNutritionData.map((row, i) => {
            return (
              <tr key={`nutrition-row-${i}`}>
                <td>{row.nutrition}</td>
                <td>{row.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p>
        Percentages are relative to US recommendations for adults. Source: ​
        <a href="http://www.nal.usda.gov/fnic/foodcomp/search/">
          USDA Nutrient Database
        </a>
      </p>
    </div>
  )
}

export default NutritionInfo
