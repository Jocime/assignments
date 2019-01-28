var travelingPerson = {
    name: "Danny",
    locations: [
        {
          place: "Utah",
          distance: "1 hour",
          stops: [
              {
                  type: "springs",
                  name: "lava",
              },
              {
                  type: "vista",
                  name: "Ponderosa"
              }
          ]  
        },
        {
            place: "China"
        }
    ],
    haveBirthday: function(){

    }
}

travelingPerson.haveBirthday()
console.log(travelingPerson.locations[0].stops[1].name)