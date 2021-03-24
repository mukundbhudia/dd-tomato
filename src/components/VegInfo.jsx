import React from 'react'

const VegInfo = ({ vegInfoData }) => {
  const vegType = vegInfoData.type
  return (
    <>
      <div className={vegType}>
        <h1>{vegInfoData.title}</h1>
        <img
          className={`${vegType}__image`}
          alt={vegType}
          src={vegInfoData.image}
        />
      </div>
      <div className={vegType}>
        <h2>Varieties</h2>
        <p>{vegInfoData.varietyInfo}</p>
        <p>{vegInfoData.varietyDivisions}</p>
        <ul>
          {vegInfoData.varieties.map((variety, i) => {
            return <li key={`${vegType}-variety-${i}`}>{variety}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default VegInfo
