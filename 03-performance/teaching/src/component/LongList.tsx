import { FixedSizeList as List } from "react-window"
import "./LongList.css"
import useFetch from "../hooks/useFetch"
import React from "react"

export default function LongList() {
  const { data, loading, error } = useFetch("https://api.sampleapis.com/beers/ale")

  if (loading) return <div>Loading data...</div>
  if (error) return <div>Something went wrong: {error.message}</div>

  return (
    <List
      height={700}
      itemCount={data.length}
      itemSize={150}
      width={900}
    >
      {({ index, style }) => {
        const item = data[index]
        return <div key={item.id} className="beer-container" style={style}>
          <div className="beer-image-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="beer-text-container">
            <h2>{item.name}</h2>
            <h3>{item.rating.average.toFixed(2)} (from {item.rating.reviews} reviews)</h3>
            <p>{item.price}</p>
          </div>
        </div>
      }}
    </List>
  )

}