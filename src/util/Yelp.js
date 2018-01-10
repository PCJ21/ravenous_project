const apiKey = 'pbpFDshhcX98f4lVUBLiiXpfkEikUTCeUMyaYvabQdSMUKO7sovG1fKYXo6NcM9JpPEOOYcanwnaVXP34GzihmaxT3gCO2hZj9whZ9rc_StJW8O7_FZF6Xys_z5WWnYx';
const Yelp ={

  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{ headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
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
