import React, { useState } from 'react';
import './Restaurants.css'
import RestaurantCard from '../RestaurantCard';
function Restaurants() {
    const [searchQuery, setSearchQuery] = useState('');
    const data = [
        {
          "name": "The Rusty Spoon",
          "location": "123 Main St, Anytown, USA",
          "rating": 4.5,
          "cuisine": ["American", "Burgers", "Steakhouse"],
          "price_range": "$$",
          "website": "https://www.therustyspoon.com",
          "phone": "(123) 456-7890"
        },
        {
          "name": "La Trattoria",
          "location": "456 Elm St, Othertown, USA",
          "rating": 4.2,
          "cuisine": ["Italian", "Pasta", "Pizza"],
          "price_range": "$$$",
          "website": "https://www.latrattoria.com",
          "phone": "(987) 654-3210"
        },
        {
          "name": "Sakura Sushi",
          "location": "789 Maple St, Anothertown, USA",
          "rating": 4.7,
          "cuisine": ["Japanese", "Sushi"],
          "price_range": "$$",
          "website": "https://www.sakurasushi.com",
          "phone": "(555) 123-4567"
        },
        {
          "name": "El Mariachi",
          "location": "567 Oak St, Somewhereville, USA",
          "rating": 4.0,
          "cuisine": ["Mexican"],
          "price_range": "$",
          "website": "https://www.elmariachi.com",
          "phone": "(111) 222-3333"
        },
        {
          "name": "Thai Orchid",
          "location": "890 Pine St, Anothercity, USA",
          "rating": 4.3,
          "cuisine": ["Thai", "Asian"],
          "price_range": "$$",
          "website": "https://www.thaiorchid.com",
          "phone": "(999) 888-7777"
        },
        {
          "name": "The Bistro",
          "location": "1010 Cedar St, Yetanothertown, USA",
          "rating": 4.6,
          "cuisine": ["French", "European"],
          "price_range": "$$$",
          "website": "https://www.thebistro.com",
          "phone": "(777) 666-5555"
        },
        {
          "name": "Mama Mia Pizzeria",
          "location": "1212 Walnut St, Newville, USA",
          "rating": 4.8,
          "cuisine": ["Italian", "Pizza"],
          "price_range": "$",
          "website": "https://www.mamamiapizzeria.com",
          "phone": "(444) 333-2222"
        },
        {
          "name": "The Chop House",
          "location": "1414 Birch St, Elsewhereville, USA",
          "rating": 4.4,
          "cuisine": ["Steakhouse", "Seafood"],
          "price_range": "$$$",
          "website": "https://www.chophouse.com",
          "phone": "(666) 777-8888"
        },
        {
          "name": "Lotus Garden",
          "location": "1616 Oak St, Garden City, USA",
          "rating": 4.1,
          "cuisine": ["Chinese", "Asian"],
          "price_range": "$$",
          "website": "https://www.lotusgarden.com",
          "phone": "(888) 999-0000"
        },
        {
          "name": "The Veggie Patch",
          "location": "1818 Elm St, Greensville, USA",
          "rating": 4.9,
          "cuisine": ["Vegetarian", "Healthy"],
          "price_range": "$",
          "website": "https://www.veggiepatch.com",
          "phone": "(222) 111-0000"
        },
            {
              "name": "The Fisherman's Wharf",
              "location": "2000 Harbor St, Seaside, USA",
              "rating": 4.3,
              "cuisine": ["Seafood", "American"],
              "price_range": "$$$",
              "website": "https://www.fishermanswharf.com",
              "phone": "(555) 555-1234"
            },
            {
              "name": "Raj Palace",
              "location": "30 Curry Ln, Spice City, USA",
              "rating": 4.6,
              "cuisine": ["Indian", "Vegetarian"],
              "price_range": "$$",
              "website": "https://www.rajpalace.com",
              "phone": "(555) 123-4567"
            },
            {
              "name": "Mediterraneo",
              "location": "40 Olive Ave, Meditown, USA",
              "rating": 4.2,
              "cuisine": ["Mediterranean", "Greek"],
              "price_range": "$$",
              "website": "https://www.mediterraneo.com",
              "phone": "(555) 987-6543"
            },
            {
              "name": "Tokyo Grill",
              "location": "50 Sushi St, Japanville, USA",
              "rating": 4.5,
              "cuisine": ["Japanese", "Teppanyaki"],
              "price_range": "$$$",
              "website": "https://www.tokyogrill.com",
              "phone": "(555) 321-6548"
            },
            {
              "name": "Le Petit Café",
              "location": "60 Rue de Paris, Petitville, USA",
              "rating": 4.4,
              "cuisine": ["French", "Café"],
              "price_range": "$$",
              "website": "https://www.lepetitcafe.com",
              "phone": "(555) 876-5432"
            },
            {
              "name": "El Taqueria",
              "location": "70 Taco Blvd, Mexicoville, USA",
              "rating": 4.8,
              "cuisine": ["Mexican", "Tacos"],
              "price_range": "$",
              "website": "https://www.eltaqueria.com",
              "phone": "(555) 234-5678"
            },
            {
              "name": "Bella Italia",
              "location": "80 Pasta St, Italytown, USA",
              "rating": 4.7,
              "cuisine": ["Italian", "Pizza", "Pasta"],
              "price_range": "$$$",
              "website": "https://www.bellaitalia.com",
              "phone": "(555) 789-0123"
            },
            {
              "name": "Hana Sushi",
              "location": "90 Sushi Ave, Sushiville, USA",
              "rating": 4.6,
              "cuisine": ["Japanese", "Sushi"],
              "price_range": "$$",
              "website": "https://www.hanasushi.com",
              "phone": "(555) 210-9876"
            },
            {
              "name": "The Grill House",
              "location": "100 Steak St, Grilltown, USA",
              "rating": 4.4,
              "cuisine": ["Steakhouse", "Barbecue"],
              "price_range": "$$$",
              "website": "https://www.thegrillhouse.com",
              "phone": "(555) 543-2109"
            },
            {
              "name": "Green Leaf Café",
              "location": "110 Veggie Ln, Healthytown, USA",
              "rating": 4.9,
              "cuisine": ["Vegetarian", "Healthy", "Vegan"],
              "price_range": "$",
              "website": "https://www.greenleafcafe.com",
              "phone": "(555) 678-9012"
            },
            {
                "name": "The Cozy Corner",
                "location": "120 Cozy St, Warmville, USA",
                "rating": 4.2,
                "cuisine": ["Comfort Food", "American"],
                "price_range": "$$",
                "website": "https://www.cozycorner.com",
                "phone": "(555) 111-2222"
              },
              {
                "name": "Taste of India",
                "location": "130 Spice St, Currytown, USA",
                "rating": 4.5,
                "cuisine": ["Indian", "Vegetarian"],
                "price_range": "$$",
                "website": "https://www.tasteofindia.com",
                "phone": "(555) 222-3333"
              },
              {
                "name": "Sabor Latino",
                "location": "140 Salsa St, Salsaville, USA",
                "rating": 4.4,
                "cuisine": ["Latin American", "Mexican"],
                "price_range": "$$",
                "website": "https://www.saborlatino.com",
                "phone": "(555) 333-4444"
              },
              {
                "name": "The Noodle House",
                "location": "150 Noodle St, Ramenville, USA",
                "rating": 4.1,
                "cuisine": ["Asian", "Noodles"],
                "price_range": "$$",
                "website": "https://www.noodlehouse.com",
                "phone": "(555) 444-5555"
              },
              {
                "name": "Pizza Paradise",
                "location": "160 Pizza St, Pizzatown, USA",
                "rating": 4.6,
                "cuisine": ["Italian", "Pizza"],
                "price_range": "$",
                "website": "https://www.pizzaparadise.com",
                "phone": "(555) 555-6666"
              },
              {
                "name": "The Garden Grill",
                "location": "170 Green St, Gardenia, USA",
                "rating": 4.3,
                "cuisine": ["Vegetarian", "Healthy", "Grill"],
                "price_range": "$$",
                "website": "https://www.gardengrill.com",
                "phone": "(555) 666-7777"
              }
              
      ]

      const filteredRestaurants = data.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||restaurant.cuisine.some(cuisine =>
            cuisine.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
  return (
        <div className='restaurant-container'>
            <div  className="filter-bar">
            <input type='text' placeholder='Search Restaurants...' className='search' value={searchQuery} onChange={handleSearchChange}></input>
            </div>
            <div className='cards'>
            {
                 filteredRestaurants.map((elem, index)=>{
                    return(
                        <RestaurantCard
                            name={elem.name}
                            location={elem.location}
                            rating={elem.rating}
                            cuisine={elem.cuisine}
                            phone={elem.phone}
                            key={index}
                        />
                    ) 
                })
            }
            </div>
        </div>
  )
}

export default Restaurants