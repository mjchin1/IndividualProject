//Make some arrays of objects based on the schema I created

//trainers
const places = [
  {
    placeName: "Four Letter Word Coffee",
    address: "3022 W Diversey Ave, Chicago, IL 60647",
    hours: "8:00am-2:00pm daily",
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/5307d892e4b023a01adef0d0/1541427658386-D8ZHCZV2RN4KHT3WZKM8/4LW_Photo_JudeGoergen8261.jpg?format=2500w",
    description:
      "A beautiful Avondale cafe that is prized for its beautiful design and sustainably-sourced artisinal coffee blends.",
    locationType: "Cafe",
    neighborhood: "Avondale",
    website: "https://www.4lwcoffee.com/",
  },

  {
    placeName: "Cafè Deko",
    address: "800 W Diversey Pkwy, Chicago, IL 60614",
    hours: "Monday-Friday: 7:00am-4:00pm, Saturday-Sunday: 8:00am-4:00pm",
    imgUrl:
      "https://s3-media0.fl.yelpcdn.com/bphoto/CDCDdD3xx9RII5ZCnlP9BA/348s.jpg",
    description:
      "An Art Deco-themed cafe that makes you feel like you've traveled back in time.",
    locationType: "Cafe",
    neighborhood: "Lincoln Park",
    website: "https://cafedeko.com/",
  },

  {
    placeName: "Living Water Tea House",
    address: "1453 W Taylor St, Chicago, IL 60607",
    hours: "12:00pm-7:00pm daily",
    imgUrl:
      "https://cdn.vox-cdn.com/thumbor/Tu6CwLVDOgesKLTlN3gEKgOsLuo=/0x0:6016x4016/1200x0/filters:focal(0x0:6016x4016):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21852162/Interior_1.jpg",
    description:
      "A serene tea space with soft lighting and handmade pottery as decor.",
    locationType: "Tea Room",
    neighborhood: "Near West Side",
    website: "https://www.livingwaterteahouse.com/",
  },

  {
    placeName: "Maison Marcel",
    address: "3114 N Broadway, Chicago, IL 60657",
    hours: "Monday-Friday: 7:00am-3:00pm, Saturday-Sunday: 7:00am-4:00pm",
    imgUrl:
      "https://chicagoeventvenues.com/wp-content/uploads/2022/03/DSC05318-2-scaled.jpg",
    description:
      "A beautifully-lit French cafe that feels like a bright summer day.",
    locationType: "Cafe",
    neighborhood: "Lakeview",
    website: "https://maison-marcel.com/",
  },

  {
    placeName: "The Drawing Room",
    address: "12 S Michigan Ave, Chicago, IL 60603",
    hours:
      "Monday-Thursday: 11:00am-11:00pm, Friday-Saturday: 11am-12am, Sunday: 11am-9:00pm",
    imgUrl:
      "https://loopchicago.com/assets/Consumer-Facing-Images/caa_lobby.jpg",
    description:
      "A Regal, vintage escape nestled into the Chicago Athletic Association Hotel's lobby.",
    locationType: "Hotel",
    neighborhood: "The Loop",
    website: "https://www.lsdatcaa.com/drawing-room",
  },

  {
    placeName: "The Rookery",
    address: "209 S La Salle St, Chicago, IL 60604",
    hours: "Monday-Thursday: 6:00am-6:00pm, Saturday: 8:00am-2:00pm",
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/5b27c803f93fd453d058584f/1533760372613-PYB6BSOVX5BBBM8WY6VM/03_Shwartz_rookery4.jpg",
    description:
      "A historic gem in the midst of some of Chicago's most iconic buildings.",
    locationType: "Office Building",
    neighborhood: "The Loop",
    website: "https://www.therookerybuilding.com/contact",
  },

  {
    placeName: "The Winter Garden",
    address: "400 S State St, Chicago, IL 60605",
    hours:
      "Tuesday-Thursday: 9:00am-8:00pm, Friday-Saturday: 9:00am-5:00pm,Sunday: 1:00pm-5:00pm",
    imgUrl:
      "https://americanlibrariesmagazine.org/wp-content/uploads/2017/05/btn1.jpg",
    description:
      "A hidden gem located on the top floor of Chicago's largest public library.",
    locationType: "Library",
    neighborhood: "The Loop",
    website:
      "https://americanlibrariesmagazine.org/wp-content/uploads/2017/05/btn1.jpg",
  },

  {
    placeName: "Plein Air Cafe",
    address: "5751 S Woodlawn Ave, Chicago, IL 60637",
    hours: "Monday-Friday: 7:00am-8:00pm, Saturday-Sunday: 8:00am-6:00pm",
    imgUrl: "https://dailycoffeenews.com/wp-content/uploads/2014/04/l-2.jpg",
    description: "A beloved cafe on the University of Chicago's campus.",
    locationType: "Cafe",
    neighborhood: "Hyde Park",
    website: "https://www.pleinaircafe.co/",
  },

  {
    placeName: "Venteux",
    address: "224 N Michigan Ave, Chicago, IL 60601",
    hours: "Monday-Saturday: 7:00am-9:00pm, Sunday: 7:00am-4:00pm",
    imgUrl:
      "https://uploads.pendry.com/redesign/wp-content/uploads/sites/10/2023/09/15154806/JacobHand_AndysFavoriteCafeVenteux_7-3000x2001-849a82a-scaled.jpg",
    description: "A sunlit escape right off of Michigan Avenue.",
    locationType: "Cafe",
    neighborhood: "The Loop",
    website: "https://venteuxchicago.com/cafe/",
  },

  {
    placeName: "Garfield Park Conservatory",
    address: "300 N Central Park Ave, Chicago, IL 60624",
    hours: "Wednesday: 10:00am-8:00pm, Thursday-Sunday: 10:00am-5:00pm",
    imgUrl:
      "https://s3.amazonaws.com/architecture-org/files/modules/garfield-pk-conservatory-eric-allix-rogers-01.jpg",
    description:
      "A tropical escape filled with exotic plants and gorgeous koi ponds.",
    locationType: "Park",
    neighborhood: "Garfield Park",
    website: "https://garfieldconservatory.org/",
  },

  {
    placeName: "The Columbus Park Refectory",
    address: " 5701 W Jackson Blvd, Chicago, IL 60644",
    hours: "6:00am-11:00pm daily",
    imgUrl:
      "https://s3.amazonaws.com/architecture-org/files/modules/cover_columbus_ships_jamesiska.jpg",
    description:
      "A classically beautiful space on the grounds of Columbus Park.",
    locationType: "Park",
    neighborhood: "Austin",
    website:
      "https://www.chicagoparkdistrict.com/parks-facilities/columbus-refectory",
  },

  {
    placeName: "The Garden of the Phoenix",
    address: "6300 S Cornell Ave, Chicago, IL 60637",
    hours: "6:00am-11:00pm daily",
    imgUrl:
      "https://www.justlovewalking.com/wp-content/uploads/2019/10/01_J-Garden-1.jpg",
    description:
      "A serene garden that was first built by the Japanese government as a gift to the city of Chicago in 1893.",
    locationType: "Park",
    neighborhood: "Hyde Park",
    website: "https://www.gardenofthephoenix.org/",
  },

  {
    placeName: "The Old Post Office",
    address: "433 W Van Buren St, Chicago, IL 60607",
    hours: "Monday-Friday: 7:00am-6:00pm",
    imgUrl:
      "https://media-api.xogrp.com/images/6d89b688-bbd9-4cc9-a14e-ef64f6cd575a",
    description:
      "A former post office, originally built in 1921, that has recently reopened after extensive renovations.",
    locationType: "Office Building",
    neighborhood: "West Loop",
    website: "https://post433.com/",
  },
  {
    placeName: "Caffè Streets",
    address: "1750 W Division St, Chicago, IL 60622",
    hours: "7:00am-3:00pm daily",
    imgUrl:
      "https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/CaffeStreets_Interior_DerrickKoch_Chicago_q98m9x",
    description: "A cozy cafe with mezmerizing design details.",
    locationType: "Cafe",
    neighborhood: "West Town",
    website:
      "https://www.bonappetit.com/city-guides/chicago/venue/caffe-streets",
  },

  {
    placeName: "Hero Coffee Bar",
    address: "22 E Jackson Blvd, Chicago, IL 60604",
    hours: "Monday-Saturday: 8:00am-3:00pm",
    imgUrl:
      "https://loopchicago.com/assets/Tourism-Operators/images/2018-01-30-pickwick-place-04__FillWzEyMDAsMTIwMF0.jpg",
    description: "A cozy cafe tucked away in a beautiful brick alley.",
    locationType: "Cafe",
    neighborhood: "The Loop",
    website: "https://www.herocoffeebars.com/",
  },

  {
    placeName: "Bridgeport Art Center",
    address: "1200 W 35th St, Chicago, IL 60609",
    hours: "Monday-Saturday: 8:00am-6:00pm, Sunday: 8:00am-12:00pm",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkONSBOccuVhb0KO_xNTCTDfieY1n4mfZGdA&usqp=CAU",
    description:
      "A stunning industrial building with artist studios, galleries, and a cafe.",
    locationType: "Art Building",
    neighborhood: "Bridgeport",
    website: "https://www.bridgeportart.com/explore/",
  },

  {
    placeName: "Museum of Contemporary Photography",
    address: "600 S Michigan Ave, Chicago, IL 60605",
    hours: "Monday-Saturday: 10:00am-5:00pm, Sunday: 12:00pm to 5:00pm",
    imgUrl: "https://media.timeout.com/images/105668398/image.jpg",
    description:
      "A free photography museum on the campus of Columbia College Chicago.",
    locationType: "Museum",
    neighborhood: "The Loop",
    website: "https://www.mocp.org/",
  },

  {
    placeName: "The Lobby at the Palmer House Hotel",
    address: "17 E Monroe St, Chicago, IL 60603",
    hours: "Open 24 hours",
    imgUrl:
      "https://s3.amazonaws.com/architecture-org/files/modules/palmer-house-courtesy-of-site-03.jpg",
    description:
      "One of Chicago's most historic, classically beautiful hotel lobbies.",
    locationType: "Hotel",
    neighborhood: "The Loop",
    website: "https://www.palmerhousehiltonhotel.com/about-our-hotel/",
  },

  {
    placeName: "The Chicago Cultural Center",
    address: "78 E Washington St, Chicago, IL 60602",
    hours: "10:00am-5:00pm daily",
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/5ee148273642dc73d7318b36/1619023312297-HK6CCB1KVTKN0K1LDZ1W/Chicago-Cultural-Center-Real-Wedding-Rebecca-Marie-Photography_0004.jpg",
    description:
      "A stunning example of Neoclassical architecture in the heart of downtown Chicago.",
    locationType: "Museum",
    neighborhood: "The Loop",
    website:
      "https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_culturalcenter.html",
  },

  {
    placeName: "Stony Island Arts Bank",
    address: "6760 S Stony Is Ave, Chicago, IL 60649",
    hours: "8:00am-5:00pm daily",
    imgUrl:
      "https://www.thisiscolossal.com/wp-content/uploads/2015/10/stony-island-1.jpg",
    description:
      "A former bank transformed by artist Theaster Gates into a breathtaking public art/community space.",
    locationType: "Community Space",
    neighborhood: "Woodlawn",
    website:
      "https://www.theastergates.com/project-items/stony-island-arts-bank",
  },
];

//pokemon
const users = [
  {
    firstName: "Melody",
    lastName: "Nose",
    username: "placegirl",
    password: "alldaplaces",
  },

  {
    firstName: "Lucky",
    lastName: "Sleepfield",
    username: "placeguy",
    password: "allofdaplaces",
  },
];

//species
const userFavoritePlaces = [
  {
    userId: 1,
    placeId: 1,
  },
  {
    userId: 1,
    placeId: 2,
  },
  {
    userId: 1,
    placeId: 3,
  },

  {
    userId: 2,
    placeId: 6,
  },

  {
    userId: 2,
    placeId: 8,
  },
];

//export our mock data variables for use elsewhere
module.exports = { places, users, userFavoritePlaces };
