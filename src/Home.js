import React from 'react';
import banner from './media/main-banner.jpg';
import Restaurant from './Restaurant';
import Popeyes from './media/restaurants/popeyes.png';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="" />

      <div className="home__row">
        {/* Sample restaurant (will be generated using maps and database in the future) */}
        <Restaurant
          id="0001" // For now, four-digit numeric internal id
          name="Popeyes Louisiana Chicken" // Will be pulled from db
          image={Popeyes} // Will be accessed from database (firebase?)
          distance={10} // Will access user location, in kilometers
          deliveryFee={0.99} // Relate this to distance somehow
          rating={4.3} // Will be from google reviews
        />
        <Restaurant
          id="0001" // For now, four-digit numeric internal id
          name="Popeyes Louisiana Chicken" // Will be pulled from db
          image={Popeyes} // Will be accessed from database (firebase?)
          distance={10} // Will access user location, in kilometers
          deliveryFee={0.99} // Relate this to distance somehow
          rating={4.3} // Will be from google reviews
        />
        <Restaurant
          id="0001" // For now, four-digit numeric internal id
          name="Popeyes Louisiana Chicken" // Will be pulled from db
          image={Popeyes} // Will be accessed from database (firebase?)
          distance={10} // Will access user location, in kilometers
          deliveryFee={0.99} // Relate this to distance somehow
          rating={4.3} // Will be from google reviews
        />
      </div>
      <div className="home__row">
        {/* Sample restaurant (will be generated using maps and database in the future) */}
        <Restaurant
          id="0001" // For now, four-digit numeric internal id
          name="Popeyes Louisiana Chicken" // Will be pulled from db
          image={Popeyes} // Will be accessed from database (firebase?)
          distance={10} // Will access user location, in kilometers
          deliveryFee={0.99} // Relate this to distance somehow
          rating={4.3} // Will be from google reviews
        />
        <Restaurant
          id="0001" // For now, four-digit numeric internal id
          name="Popeyes Louisiana Chicken" // Will be pulled from db
          image={Popeyes} // Will be accessed from database (firebase?)
          distance={10} // Will access user location, in kilometers
          deliveryFee={0.99} // Relate this to distance somehow
          rating={4.3} // Will be from google reviews
        />
        <Restaurant
          id="0001" // For now, four-digit numeric internal id
          name="Popeyes Louisiana Chicken" // Will be pulled from db
          image={Popeyes} // Will be accessed from database (firebase?)
          distance={10} // Will access user location, in kilometers
          deliveryFee={0.99} // Relate this to distance somehow
          rating={4.3} // Will be from google reviews
        />
      </div>
    </div>
  );
}

export default Home;
