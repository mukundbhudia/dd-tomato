import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import TabbedContent from './components/TabbedContent'
import NutritionInfo from './components/NutritionInfo'
import VegInfo from './components/VegInfo'
import veggies from './data/veggies'

const tomato = veggies.tomato

function Tomato() {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-sm-8">
          <VegInfo vegInfoData={tomato.info} />
        </div>
        <div className="col-sm-4">
          <NutritionInfo
            vegNutritionData={tomato.nutritionalInfo.data}
            vegType={tomato.nutritionalInfo.type}
            vegQuantity={tomato.nutritionalInfo.quantity}
          />
        </div>
      </div>
      <TabbedContent tabData={tomato.tabData} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Tomato />, rootElement)
