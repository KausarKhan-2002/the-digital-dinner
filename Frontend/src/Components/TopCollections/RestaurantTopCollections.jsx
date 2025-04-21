import React, { useEffect, useState } from 'react'
import { useCollections } from '../../Hooks/useCollections'
import { Link } from 'react-router-dom';
import RestaurantCard from '../Landing/RestaurantCard';
import CollectionShimmerUI from '../ShimmerUI/CollectionShimmerUI';

function RestaurantTopCollections() {
    const [collection, setCollection] = useState([])
    const topcollections = useCollections()
    
    useEffect(() => {
        topcollections(setCollection)
    }, [])

    if (collection.length === 0) return <CollectionShimmerUI />

    const filterCards = collection.filter((item) => item.card.card.info);
  // console.log(filterCards);

  return (
    <div className="pt-10">
      <div id="Heading">
        <h2 className="text-4xl text-slate-800 font-bold">
          {collection[0].card.card.title}
        </h2>
        <p className="mt-2 font-medium text-slate-500">
          {collection[0].card.card.description}
        </p>
      </div>

      {/* filters here.... */}
      {/* ____________________ */}

      <h2 className="text-2xl text-slate-900 font-bold my-5">
        Restaurants to explore
      </h2>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-9 gap-y-11">
        {filterCards.map((item) => (
          <Link
            to={`/restaurant/${item.card.card.info.id}`}
            key={item.card.card.info.id}
          >
            <RestaurantCard cardData={item.card.card} />
          </Link>
        ))}
      </div>
    </div>
  )
} 

export default RestaurantTopCollections
