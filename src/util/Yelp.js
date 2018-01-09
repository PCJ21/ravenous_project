const apiKey = "ifeoLsWsjWU0QjWTU-BAjQzxsBDBm4Li6yNT_5cQZXARgIMMB9KzegXCK-Dt1zO_b5lJonsWqNXvjXmTT9gyombGHKUFCdpuvWi7X15iqIVlvS1R99E1B90k1WFDWnYx";
const Yelp ={

  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{ headers: {Authorizarion: `Bearer ${apiKey}`}}).then(response => {
      return response.json();
    }
  ).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zipCode,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));
    }
  });
  }
};

export default Yelp;
