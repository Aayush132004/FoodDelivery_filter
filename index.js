const restaurants=[
    {
      "image": "Ninth",
      "name": "Silver Saloon",
      "rating": 2,
      "foodTypes": "Thai",
      "price_for_two": 878,
      "location": "City Centre",
      "distance_from_customer": "0.0",
      "offers": 58,
      "alcohol": false,
      "restaurant_open_time": 16,
      "restaurant_close_time": 4
    },
    {
      "image": "Sixth",
      "name": "The Tandoori Nights",
      "rating": 3,
      "foodTypes": "Greek",
      "price_for_two": 844,
      "location": "Lashkar",
      "distance_from_customer": "4.0",
      "offers": 52,
      "alcohol": false,
      "restaurant_open_time": 13,
      "restaurant_close_time": 1
    },
    {
      "image": "Ninth",
      "name": "Alfanzo Restaurant",
      "rating": 3,
      "foodTypes": "Thai",
      "price_for_two": 1289,
      "location": "Padav",
      "distance_from_customer": "2.0",
      "offers": 18,
      "alcohol": false,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5
    },
    {
      "image": "Ninth",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 5,
      "foodTypes": "Mexican",
      "price_for_two": 1940,
      "location": "D.D. Nagar",
      "distance_from_customer": "5.0",
      "offers": 28,
      "alcohol": true,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5
    },
    {
      "image": "Eighth",
      "name": "Raj Hotel",
      "rating": 1,
      "foodTypes": "Greek",
      "price_for_two": 170,
      "location": "Balwant Nagar",
      "distance_from_customer": "2.0",
      "offers": 39,
      "alcohol": false,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9
    },
    {
      "image": "Tenth",
      "name": "Silver Saloon",
      "rating": 1,
      "foodTypes": "Japanese",
      "price_for_two": 1120,
      "location": "Gandhi Road",
      "distance_from_customer": "4.0",
      "offers": 54,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23
    },
    {
      "image": "First",
      "name": "Kwality Restaurant",
      "rating": 1,
      "foodTypes": "Greek",
      "price_for_two": 361,
      "location": "Lashkar",
      "distance_from_customer": "2.0",
      "offers": 53,
      "alcohol": false,
      "restaurant_open_time": 20,
      "restaurant_close_time": 8
    },
    {
      "image": "Ninth",
      "name": "Raj Hotel",
      "rating": 1,
      "foodTypes": "Italian",
      "price_for_two": 1556,
      "location": "Morar",
      "distance_from_customer": "2.0",
      "offers": 33,
      "alcohol": false,
      "restaurant_open_time": 16,
      "restaurant_close_time": 4
    },
    {
      "image": "Seventh",
      "name": "Indian Coffee House & Restaurant",
      "rating": 2,
      "foodTypes": "Thai",
      "price_for_two": 2388,
      "location": "Shinde Ki Chhawani",
      "distance_from_customer": "1.0",
      "offers": 33,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23
    },
    {
      "image": "Sixth",
      "name": "New New Burger Maxx",
      "rating": 3,
      "foodTypes": "Chinese",
      "price_for_two": 1658,
      "location": "Balwant Nagar",
      "distance_from_customer": "5.0",
      "offers": 20,
      "alcohol": false,
      "restaurant_open_time": 12,
      "restaurant_close_time": 0
    },
    {
      "image": "Tenth",
      "name": "Volga Restaurant",
      "rating": 4,
      "foodTypes": "Chinese",
      "price_for_two": 2444,
      "location": "Thatipur",
      "distance_from_customer": "5.0",
      "offers": 32,
      "alcohol": false,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14
    },
    {
      "image": "Fourth",
      "name": "Kwality Restaurant",
      "rating": 5,
      "foodTypes": "French",
      "price_for_two": 1150,
      "location": "Padav",
      "distance_from_customer": "1.0",
      "offers": 58,
      "alcohol": false,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16
    },
    {
      "image": "Eighth",
      "name": "Alfanzo Restaurant",
      "rating": 5,
      "foodTypes": "Japanese",
      "price_for_two": 380,
      "location": "Gandhi Road",
      "distance_from_customer": "5.0",
      "offers": 28,
      "alcohol": true,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Fourth",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 3,
      "foodTypes": "Italian",
      "price_for_two": 1623,
      "location": "Padav",
      "distance_from_customer": "0.0",
      "offers": 36,
      "alcohol": false,
      "restaurant_open_time": 18,
      "restaurant_close_time": 6
    },
    {
      "image": "Seventh",
      "name": "Raj Hotel",
      "rating": 4,
      "foodTypes": "Japanese",
      "price_for_two": 1910,
      "location": "Gandhi Road",
      "distance_from_customer": "1.0",
      "offers": 27,
      "alcohol": true,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13
    },
    {
      "image": "Second",
      "name": "7 Spice",
      "rating": 3,
      "foodTypes": "Greek",
      "price_for_two": 316,
      "location": "Shinde Ki Chhawani",
      "distance_from_customer": "4.0",
      "offers": 56,
      "alcohol": false,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22
    },
    {
      "image": "Sixth",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 2,
      "foodTypes": "American",
      "price_for_two": 993,
      "location": "Shinde Ki Chhawani",
      "distance_from_customer": "4.0",
      "offers": 25,
      "alcohol": true,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11
    },
    {
      "image": "Fourth",
      "name": "BansiWala Restaurant",
      "rating": 2,
      "foodTypes": "Japanese",
      "price_for_two": 157,
      "location": "Padav",
      "distance_from_customer": "2.0",
      "offers": 41,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12
    },
    {
      "image": "Sixth",
      "name": "Icy Spicy Restaurant",
      "rating": 3,
      "foodTypes": "Italian",
      "price_for_two": 1334,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "0.0",
      "offers": 42,
      "alcohol": true,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22
    },
    {
      "image": "Tenth",
      "name": "Amrit Bhoj",
      "rating": 2,
      "foodTypes": "Thai",
      "price_for_two": 286,
      "location": "Padav",
      "distance_from_customer": "3.0",
      "offers": 22,
      "alcohol": true,
      "restaurant_open_time": 6,
      "restaurant_close_time": 18
    },
    {
      "image": "Third",
      "name": "Alfanzo Restaurant",
      "rating": 3,
      "foodTypes": "French",
      "price_for_two": 2448,
      "location": "Lashkar",
      "distance_from_customer": "1.0",
      "offers": 45,
      "alcohol": true,
      "restaurant_open_time": 16,
      "restaurant_close_time": 4
    },
    {
      "image": "Ninth",
      "name": "Alfanzo Restaurant",
      "rating": 4,
      "foodTypes": "Greek",
      "price_for_two": 102,
      "location": "Thatipur",
      "distance_from_customer": "2.0",
      "offers": 39,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7
    },
    {
      "image": "Seventh",
      "name": "Mahalaxmi Restaurant",
      "rating": 4,
      "foodTypes": "Chinese",
      "price_for_two": 1173,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "0.0",
      "offers": 23,
      "alcohol": true,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Ninth",
      "name": "Indian Coffee House & Restaurant",
      "rating": 3,
      "foodTypes": "American",
      "price_for_two": 2335,
      "location": "Balwant Nagar",
      "distance_from_customer": "3.0",
      "offers": 24,
      "alcohol": false,
      "restaurant_open_time": 3,
      "restaurant_close_time": 15
    },
    {
      "image": "Ninth",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 3,
      "foodTypes": "Greek",
      "price_for_two": 403,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "4.0",
      "offers": 12,
      "alcohol": true,
      "restaurant_open_time": 22,
      "restaurant_close_time": 10
    },
    {
      "image": "Seventh",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 2,
      "foodTypes": "Thai",
      "price_for_two": 1392,
      "location": "Gandhi Road",
      "distance_from_customer": "4.0",
      "offers": 28,
      "alcohol": false,
      "restaurant_open_time": 3,
      "restaurant_close_time": 15
    },
    {
      "image": "Tenth",
      "name": "Gullu's Food Funda",
      "rating": 3,
      "foodTypes": "Thai",
      "price_for_two": 1018,
      "location": "Padav",
      "distance_from_customer": "2.0",
      "offers": 33,
      "alcohol": false,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5
    },
    {
      "image": "Fourth",
      "name": "Amrit Bhoj",
      "rating": 1,
      "foodTypes": "Greek",
      "price_for_two": 2223,
      "location": "City Centre",
      "distance_from_customer": "4.0",
      "offers": 52,
      "alcohol": false,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20
    },
    {
      "image": "Third",
      "name": "The Tandoori Nights",
      "rating": 4,
      "foodTypes": "Mexican",
      "price_for_two": 1967,
      "location": "Padav",
      "distance_from_customer": "5.0",
      "offers": 25,
      "alcohol": false,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11
    },
    {
      "image": "Ninth",
      "name": "Amrit Bhoj",
      "rating": 1,
      "foodTypes": "Chinese",
      "price_for_two": 1449,
      "location": "D.D. Nagar",
      "distance_from_customer": "2.0",
      "offers": 48,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17
    },
    {
      "image": "Sixth",
      "name": "Mahalaxmi Restaurant",
      "rating": 5,
      "foodTypes": "Italian",
      "price_for_two": 1666,
      "location": "City Centre",
      "distance_from_customer": "0.0",
      "offers": 11,
      "alcohol": true,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11
    },
    {
      "image": "First",
      "name": "Biryani By Kilo",
      "rating": 2,
      "foodTypes": "Greek",
      "price_for_two": 2095,
      "location": "Lashkar",
      "distance_from_customer": "0.0",
      "offers": 41,
      "alcohol": false,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Tenth",
      "name": "Momos Adda",
      "rating": 5,
      "foodTypes": "Thai",
      "price_for_two": 854,
      "location": "D.D. Nagar",
      "distance_from_customer": "4.0",
      "offers": 29,
      "alcohol": true,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Third",
      "name": "Indish",
      "rating": 1,
      "foodTypes": "American",
      "price_for_two": 322,
      "location": "Balwant Nagar",
      "distance_from_customer": "1.0",
      "offers": 49,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12
    },
    {
      "image": "Third",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 2,
      "foodTypes": "American",
      "price_for_two": 2208,
      "location": "Padav",
      "distance_from_customer": "1.0",
      "offers": 10,
      "alcohol": true,
      "restaurant_open_time": 18,
      "restaurant_close_time": 6
    },
    {
      "image": "Second",
      "name": "Indian Coffee House & Restaurant",
      "rating": 5,
      "foodTypes": "Greek",
      "price_for_two": 1826,
      "location": "Lashkar",
      "distance_from_customer": "0.0",
      "offers": 37,
      "alcohol": false,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Eighth",
      "name": "Momos Adda",
      "rating": 2,
      "foodTypes": "Thai",
      "price_for_two": 174,
      "location": "D.D. Nagar",
      "distance_from_customer": "3.0",
      "offers": 39,
      "alcohol": true,
      "restaurant_open_time": 6,
      "restaurant_close_time": 18
    },
    {
      "image": "First",
      "name": "New New Burger Maxx",
      "rating": 2,
      "foodTypes": "Italian",
      "price_for_two": 1873,
      "location": "Gandhi Road",
      "distance_from_customer": "4.0",
      "offers": 19,
      "alcohol": true,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5
    },
    {
      "image": "Ninth",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 5,
      "foodTypes": "American",
      "price_for_two": 1724,
      "location": "Gandhi Road",
      "distance_from_customer": "2.0",
      "offers": 38,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7
    },
    {
      "image": "First",
      "name": "Siddhi Vinayak Restaurant and Lodge",
      "rating": 4,
      "foodTypes": "Mexican",
      "price_for_two": 1119,
      "location": "Lashkar",
      "distance_from_customer": "3.0",
      "offers": 41,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23
    },
    {
      "image": "Third",
      "name": "Raj Hotel",
      "rating": 5,
      "foodTypes": "French",
      "price_for_two": 1621,
      "location": "D.D. Nagar",
      "distance_from_customer": "5.0",
      "offers": 34,
      "alcohol": false,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9
    },
    {
      "image": "Seventh",
      "name": "Icy Spicy Restaurant",
      "rating": 2,
      "foodTypes": "Chinese",
      "price_for_two": 1224,
      "location": "Balwant Nagar",
      "distance_from_customer": "1.0",
      "offers": 59,
      "alcohol": true,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17
    },
    {
      "image": "Ninth",
      "name": "Volga Restaurant",
      "rating": 2,
      "foodTypes": "Chinese",
      "price_for_two": 634,
      "location": "D.D. Nagar",
      "distance_from_customer": "1.0",
      "offers": 51,
      "alcohol": false,
      "restaurant_open_time": 16,
      "restaurant_close_time": 4
    },
    {
      "image": "First",
      "name": "7 Spice",
      "rating": 1,
      "foodTypes": "Thai",
      "price_for_two": 1949,
      "location": "Balwant Nagar",
      "distance_from_customer": "0.0",
      "offers": 29,
      "alcohol": true,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7
    },
    {
      "image": "Second",
      "name": "Indish",
      "rating": 2,
      "foodTypes": "French",
      "price_for_two": 454,
      "location": "Balwant Nagar",
      "distance_from_customer": "2.0",
      "offers": 11,
      "alcohol": true,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Second",
      "name": "Indish",
      "rating": 4,
      "foodTypes": "Chinese",
      "price_for_two": 289,
      "location": "City Centre",
      "distance_from_customer": "5.0",
      "offers": 38,
      "alcohol": false,
      "restaurant_open_time": 22,
      "restaurant_close_time": 10
    },
    {
      "image": "Seventh",
      "name": "Siddhi Vinayak Restaurant and Lodge",
      "rating": 4,
      "foodTypes": "Chinese",
      "price_for_two": 1378,
      "location": "City Centre",
      "distance_from_customer": "0.0",
      "offers": 39,
      "alcohol": false,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22
    },
    {
      "image": "First",
      "name": "Kwality Restaurant",
      "rating": 1,
      "foodTypes": "Mediterranean",
      "price_for_two": 246,
      "location": "Balwant Nagar",
      "distance_from_customer": "4.0",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11
    },
    {
      "image": "Ninth",
      "name": "House of K",
      "rating": 3,
      "foodTypes": "Chinese",
      "price_for_two": 589,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "1.0",
      "offers": 22,
      "alcohol": false,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11
    },
    {
      "image": "Third",
      "name": "Mahalaxmi Restaurant",
      "rating": 1,
      "foodTypes": "American",
      "price_for_two": 1557,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "1.0",
      "offers": 46,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23
    },
    {
      "image": "First",
      "name": "Alfanzo Restaurant",
      "rating": 4,
      "foodTypes": "Greek",
      "price_for_two": 1452,
      "location": "Thatipur",
      "distance_from_customer": "2.0",
      "offers": 51,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7
    },
    {
      "image": "Second",
      "name": "Silver Saloon",
      "rating": 5,
      "foodTypes": "French",
      "price_for_two": 530,
      "location": "Padav",
      "distance_from_customer": "3.0",
      "offers": 17,
      "alcohol": false,
      "restaurant_open_time": 13,
      "restaurant_close_time": 1
    },
    {
      "image": "First",
      "name": "Amrit Bhoj",
      "rating": 5,
      "foodTypes": "French",
      "price_for_two": 2150,
      "location": "City Centre",
      "distance_from_customer": "5.0",
      "offers": 42,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12
    },
    {
      "image": "Ninth",
      "name": "BansiWala Restaurant",
      "rating": 5,
      "foodTypes": "Mexican",
      "price_for_two": 308,
      "location": "Shinde Ki Chhawani",
      "distance_from_customer": "3.0",
      "offers": 45,
      "alcohol": false,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22
    },
    {
      "image": "Sixth",
      "name": "Silver Saloon",
      "rating": 1,
      "foodTypes": "American",
      "price_for_two": 209,
      "location": "Padav",
      "distance_from_customer": "0.0",
      "offers": 42,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12
    },
    {
      "image": "Second",
      "name": "Raj Hotel",
      "rating": 3,
      "foodTypes": "Mediterranean",
      "price_for_two": 2081,
      "location": "Balwant Nagar",
      "distance_from_customer": "3.0",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 15,
      "restaurant_close_time": 3
    },
    {
      "image": "First",
      "name": "Biryani By Kilo",
      "rating": 3,
      "foodTypes": "Mediterranean",
      "price_for_two": 1286,
      "location": "Morar",
      "distance_from_customer": "3.0",
      "offers": 56,
      "alcohol": true,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14
    },
    {
      "image": "Eighth",
      "name": "Indian Coffee House & Restaurant",
      "rating": 1,
      "foodTypes": "Mediterranean",
      "price_for_two": 841,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "3.0",
      "offers": 28,
      "alcohol": false,
      "restaurant_open_time": 13,
      "restaurant_close_time": 1
    },
    {
      "image": "Ninth",
      "name": "Indish",
      "rating": 4,
      "foodTypes": "Mediterranean",
      "price_for_two": 902,
      "location": "D.D. Nagar",
      "distance_from_customer": "0.0",
      "offers": 46,
      "alcohol": true,
      "restaurant_open_time": 12,
      "restaurant_close_time": 0
    },
    {
      "image": "Seventh",
      "name": "Raj Hotel",
      "rating": 2,
      "foodTypes": "Japanese",
      "price_for_two": 203,
      "location": "D.D. Nagar",
      "distance_from_customer": "2.0",
      "offers": 36,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7
    },
    {
      "image": "Fourth",
      "name": "Indish",
      "rating": 5,
      "foodTypes": "Japanese",
      "price_for_two": 826,
      "location": "Morar",
      "distance_from_customer": "3.0",
      "offers": 18,
      "alcohol": true,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23
    },
    {
      "image": "First",
      "name": "Volga Restaurant",
      "rating": 2,
      "foodTypes": "Mexican",
      "price_for_two": 1608,
      "location": "Lashkar",
      "distance_from_customer": "3.0",
      "offers": 40,
      "alcohol": false,
      "restaurant_open_time": 18,
      "restaurant_close_time": 6
    },
    {
      "image": "Tenth",
      "name": "Raj Hotel",
      "rating": 3,
      "foodTypes": "Thai",
      "price_for_two": 743,
      "location": "Balwant Nagar",
      "distance_from_customer": "0.0",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9
    },
    {
      "image": "Seventh",
      "name": "7 Spice",
      "rating": 1,
      "foodTypes": "Indian",
      "price_for_two": 2021,
      "location": "Balwant Nagar",
      "distance_from_customer": "4.0",
      "offers": 59,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12
    },
    {
      "image": "Seventh",
      "name": "Silver Saloon",
      "rating": 3,
      "foodTypes": "Chinese",
      "price_for_two": 1169,
      "location": "D.D. Nagar",
      "distance_from_customer": "0.0",
      "offers": 37,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17
    },
    {
      "image": "Third",
      "name": "Raj Hotel",
      "rating": 5,
      "foodTypes": "Mexican",
      "price_for_two": 2046,
      "location": "Lashkar",
      "distance_from_customer": "5.0",
      "offers": 19,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7
    },
    {
      "image": "Third",
      "name": "Raj Hotel",
      "rating": 3,
      "foodTypes": "Mexican",
      "price_for_two": 1767,
      "location": "D.D. Nagar",
      "distance_from_customer": "2.0",
      "offers": 16,
      "alcohol": true,
      "restaurant_open_time": 3,
      "restaurant_close_time": 15
    },
    {
      "image": "Ninth",
      "name": "BansiWala Restaurant",
      "rating": 2,
      "foodTypes": "Japanese",
      "price_for_two": 958,
      "location": "Lashkar",
      "distance_from_customer": "5.0",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 6,
      "restaurant_close_time": 18
    },
    {
      "image": "Fourth",
      "name": "Mahalaxmi Restaurant",
      "rating": 2,
      "foodTypes": "Thai",
      "price_for_two": 1128,
      "location": "Balwant Nagar",
      "distance_from_customer": "0.0",
      "offers": 48,
      "alcohol": true,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20
    },
    {
      "image": "Sixth",
      "name": "BansiWala Restaurant",
      "rating": 4,
      "foodTypes": "Greek",
      "price_for_two": 1904,
      "location": "Padav",
      "distance_from_customer": "0.0",
      "offers": 18,
      "alcohol": false,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22
    },
    {
      "image": "Seventh",
      "name": "Indian Coffee House & Restaurant",
      "rating": 3,
      "foodTypes": "American",
      "price_for_two": 2465,
      "location": "Padav",
      "distance_from_customer": "5.0",
      "offers": 25,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23
    },
    {
      "image": "Sixth",
      "name": "Volga Restaurant",
      "rating": 3,
      "foodTypes": "Mediterranean",
      "price_for_two": 1945,
      "location": "D.D. Nagar",
      "distance_from_customer": "0.0",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 7,
      "restaurant_close_time": 19
    },
    {
      "image": "Eighth",
      "name": "Momos Adda",
      "rating": 3,
      "foodTypes": "Mediterranean",
      "price_for_two": 1107,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "3.0",
      "offers": 37,
      "alcohol": true,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13
    },
    {
      "image": "Eighth",
      "name": "Raj Hotel",
      "rating": 2,
      "foodTypes": "Thai",
      "price_for_two": 1334,
      "location": "Shinde Ki Chhawani",
      "distance_from_customer": "0.0",
      "offers": 36,
      "alcohol": true,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16
    },
    {
      "image": "Third",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 2,
      "foodTypes": "Indian",
      "price_for_two": 1558,
      "location": "D.D. Nagar",
      "distance_from_customer": "4.0",
      "offers": 33,
      "alcohol": true,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20
    },
    {
      "image": "Sixth",
      "name": "Gullu's Food Funda",
      "rating": 4,
      "foodTypes": "Greek",
      "price_for_two": 1279,
      "location": "D.D. Nagar",
      "distance_from_customer": "4.0",
      "offers": 14,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17
    },
    {
      "image": "Sixth",
      "name": "Raj Hotel",
      "rating": 5,
      "foodTypes": "Japanese",
      "price_for_two": 1015,
      "location": "Lashkar",
      "distance_from_customer": "1.0",
      "offers": 20,
      "alcohol": false,
      "restaurant_open_time": 3,
      "restaurant_close_time": 15
    },
    {
      "image": "Eighth",
      "name": "Volga Restaurant",
      "rating": 2,
      "foodTypes": "French",
      "price_for_two": 155,
      "location": "Lashkar",
      "distance_from_customer": "0.0",
      "offers": 18,
      "alcohol": false,
      "restaurant_open_time": 6,
      "restaurant_close_time": 18
    },
    {
      "image": "Sixth",
      "name": "The Tandoori Nights",
      "rating": 2,
      "foodTypes": "Chinese",
      "price_for_two": 887,
      "location": "City Centre",
      "distance_from_customer": "1.0",
      "offers": 54,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23
    },
    {
      "image": "Ninth",
      "name": "Alfanzo Restaurant",
      "rating": 1,
      "foodTypes": "Indian",
      "price_for_two": 1083,
      "location": "Padav",
      "distance_from_customer": "0.0",
      "offers": 18,
      "alcohol": false,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20
    },
    {
      "image": "Second",
      "name": "Amrit Bhoj",
      "rating": 4,
      "foodTypes": "Mexican",
      "price_for_two": 459,
      "location": "Shinde Ki Chhawani",
      "distance_from_customer": "1.0",
      "offers": 16,
      "alcohol": false,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16
    },
    {
      "image": "Third",
      "name": "New New Burger Maxx",
      "rating": 2,
      "foodTypes": "Greek",
      "price_for_two": 1817,
      "location": "D.D. Nagar",
      "distance_from_customer": "5.0",
      "offers": 23,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17
    },
    {
      "image": "Tenth",
      "name": "Momos Adda",
      "rating": 1,
      "foodTypes": "Japanese",
      "price_for_two": 857,
      "location": "Shinde Ki Chhawani",
      "distance_from_customer": "4.0",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14
    },
    {
      "image": "Second",
      "name": "The Tandoori Nights",
      "rating": 1,
      "foodTypes": "Indian",
      "price_for_two": 297,
      "location": "Morar",
      "distance_from_customer": "5.0",
      "offers": 41,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12
    },
    {
      "image": "Seventh",
      "name": "Mahalaxmi Restaurant",
      "rating": 1,
      "foodTypes": "Mexican",
      "price_for_two": 1671,
      "location": "Morar",
      "distance_from_customer": "3.0",
      "offers": 21,
      "alcohol": true,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5
    },
    {
      "image": "First",
      "name": "Biryani By Kilo",
      "rating": 1,
      "foodTypes": "French",
      "price_for_two": 457,
      "location": "Padav",
      "distance_from_customer": "3.0",
      "offers": 49,
      "alcohol": false,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5
    },
    {
      "image": "Eighth",
      "name": "Raj Hotel",
      "rating": 1,
      "foodTypes": "Thai",
      "price_for_two": 637,
      "location": "Thatipur",
      "distance_from_customer": "5.0",
      "offers": 25,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17
    },
    {
      "image": "First",
      "name": "Indish",
      "rating": 3,
      "foodTypes": "Japanese",
      "price_for_two": 1148,
      "location": "Lashkar",
      "distance_from_customer": "5.0",
      "offers": 53,
      "alcohol": false,
      "restaurant_open_time": 16,
      "restaurant_close_time": 4
    },
    {
      "image": "Fourth",
      "name": "Momos Adda",
      "rating": 4,
      "foodTypes": "Thai",
      "price_for_two": 548,
      "location": "Gandhi Road",
      "distance_from_customer": "3.0",
      "offers": 51,
      "alcohol": true,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2
    },
    {
      "image": "Sixth",
      "name": "Raj Hotel",
      "rating": 2,
      "foodTypes": "French",
      "price_for_two": 1537,
      "location": "City Centre",
      "distance_from_customer": "2.0",
      "offers": 34,
      "alcohol": true,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Tenth",
      "name": "Momos Adda",
      "rating": 2,
      "foodTypes": "Greek",
      "price_for_two": 1882,
      "location": "Lashkar",
      "distance_from_customer": "5.0",
      "offers": 54,
      "alcohol": false,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21
    },
    {
      "image": "Tenth",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 1,
      "foodTypes": "Thai",
      "price_for_two": 2371,
      "location": "Gandhi Road",
      "distance_from_customer": "3.0",
      "offers": 20,
      "alcohol": true,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22
    },
    {
      "image": "Fourth",
      "name": "Mahalaxmi Restaurant",
      "rating": 1,
      "foodTypes": "Mexican",
      "price_for_two": 1380,
      "location": "Thatipur",
      "distance_from_customer": "2.0",
      "offers": 32,
      "alcohol": true,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12
    },
    {
      "image": "First",
      "name": "Alfanzo Restaurant",
      "rating": 3,
      "foodTypes": "Indian",
      "price_for_two": 1395,
      "location": "Padav",
      "distance_from_customer": "0.0",
      "offers": 41,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7
    },
    {
      "image": "Sixth",
      "name": "BansiWala Restaurant",
      "rating": 4,
      "foodTypes": "Indian",
      "price_for_two": 2263,
      "location": "D.D. Nagar",
      "distance_from_customer": "0.0",
      "offers": 32,
      "alcohol": false,
      "restaurant_open_time": 15,
      "restaurant_close_time": 3
    },
    {
      "image": "Third",
      "name": "Biryani By Kilo",
      "rating": 2,
      "foodTypes": "Greek",
      "price_for_two": 1057,
      "location": "City Centre",
      "distance_from_customer": "3.0",
      "offers": 20,
      "alcohol": false,
      "restaurant_open_time": 18,
      "restaurant_close_time": 6
    },
    {
      "image": "Eighth",
      "name": "Volga Restaurant",
      "rating": 2,
      "foodTypes": "Chinese",
      "price_for_two": 1238,
      "location": "Morar",
      "distance_from_customer": "3.0",
      "offers": 57,
      "alcohol": false,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11
    },
    {
      "image": "Seventh",
      "name": "Momos Adda",
      "rating": 2,
      "foodTypes": "Mediterranean",
      "price_for_two": 1394,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "4.0",
      "offers": 56,
      "alcohol": false,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13
    },
    {
      "image": "Sixth",
      "name": "Mahalaxmi Restaurant",
      "rating": 5,
      "foodTypes": "Japanese",
      "price_for_two": 1792,
      "location": "Balwant Nagar",
      "distance_from_customer": "0.0",
      "offers": 19,
      "alcohol": false,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13
    },
    {
      "image": "Seventh",
      "name": "Karchi Kadhai Hotel And Restaurant",
      "rating": 5,
      "foodTypes": "Chinese",
      "price_for_two": 244,
      "location": "Gole Ka Mandir",
      "distance_from_customer": "5.0",
      "offers": 41,
      "alcohol": false,
      "restaurant_open_time": 7,
      "restaurant_close_time": 19
    }
  ]
let i=0;
 //this function is creating card for any array we give to it
function getrestaurant(restaurants){
    restaurants.forEach((restaurant)=>{
    const root=document.getElementById('root');
        //create a card
        /* 1.image
           2.Card_content
             i.Card_header(Name and rating)
             ii.Card_footer(food_type and price)
             iii.Card_location(restaurant distance and location)
        */

        //create a card
        const card=document.createElement('div');
        if(i===0){
          card.classList.add('card');
          document.querySelector("body").style.backgroundColor="white";
        }
        else{
          card.classList.add('card-black');
          document.querySelector("body").style.backgroundColor="black";
        }
       
        

    
        //create image
        const image=document.createElement('img');
        image.src=`./Assets/Images/${restaurant.image}.avif`;


        //card content
        const Card_content=document.createElement('div');
        Card_content.classList.add('card-content');

        //card header
        const Card_header=document.createElement('div');
        Card_header.classList.add('card-header');

        const h3=document.createElement('h3');
        h3.textContent=restaurant.name;

        const rate=document.createElement('span');
        rate.textContent=`${restaurant.rating}★`;
        
        rate.classList.add('rating');
        if(restaurant.rating>=4){
            rate.classList.add('good-rating');
        }
        else if(restaurant.rating<3){
            rate.classList.add('bad-rating');
        }

        Card_header.appendChild(h3);
        Card_header.appendChild(rate);
        

        //card footer
        const Card_footer=document.createElement('div');
        Card_footer.classList.add('card-footer');

        const food=document.createElement('span');
        food.textContent=restaurant.foodTypes;
        const price=document.createElement('span');
        price.textContent="₹"+restaurant.price_for_two;

        Card_footer.appendChild(food);
        Card_footer.appendChild(price);

        //card location
        const Card_location=document.createElement('div');
        Card_location.classList.add('card-location');

        const location=document.createElement('span');
        location.textContent=restaurant.location;

        const distance=document.createElement('span');
        distance.textContent=restaurant.distance_from_customer+"km";
        
        Card_location.appendChild(location);
        Card_location.appendChild(distance);
        
        Card_content.appendChild(Card_header);
        Card_content.appendChild(Card_footer);
        Card_content.appendChild(Card_location);

        card.appendChild(image);
        card.appendChild(Card_content);

        root.appendChild(card); 
    // adjusting image color of closed restaurants
    if(new Date().getHours()>=restaurant.restaurant_close_time
    &&new Date().getHours()<=restaurant.restaurant_open_time){
        image.classList.add('close_restaurant');
    }
    
  }
)
  }


//default all restaurant display
 getrestaurant(restaurants);

//restaurants which serve alcohol
 document.getElementById('Alcohol').addEventListener('click',()=>{
    //first removed old cards
    document.getElementById('root').innerHTML="";
    //or can use document.getElementById('root').replaceChildren();
    const result=restaurants.filter((obj)=>obj.alcohol);
    getrestaurant(result);
    
 })

//restaurants with rating>4.5
document.getElementById('Rating').addEventListener('click',()=>{
    const result=restaurants.filter((obj)=>obj.rating>=4.5);
    document.getElementById('root').innerHTML="";
    getrestaurant(result);

    
})

//restaurants that are open now
document.getElementById('Open').addEventListener('click',()=>{
    const result=restaurants.filter((obj)=>{
        const time=new Date().getHours();
        return (obj.restaurant_open_time<=time&&
                obj.restaurant_close_time>=time);
    })
    document.getElementById('root').innerHTML="";
    getrestaurant(result);

})


                    //Handling Filter option popup
document.getElementById("Filters").addEventListener('click',()=>{
    document.getElementById("filterPopup").classList.remove("hidden");

})

document.getElementById('applyFilter').addEventListener('click',()=>{
//selecting element on the basis of attribute and as all have same attribute we are
//selecting one which is checked.
const element=document.querySelector('input[name="filterOption"]:checked');
const answer=element.value;
if(answer==="rating"){
    restaurants.sort((a,b)=>b.rating-a.rating);
}
else if(answer==="highLow"){
    restaurants.sort((a,b)=>b.price_for_two-a.price_for_two);
}
else if(answer==="costLowHigh"){
    restaurants.sort((a,b)=>a.price_for_two-b.price_for_two);
}
else if(answer==="distance"){
    restaurants.sort((a,b)=>a.distance_from_customer-b.distance_from_customer);
}
document.getElementById('root').replaceChildren();
getrestaurant(restaurants);
document.getElementById("filterPopup").classList.add("hidden");
})
document.getElementById('closeFilter').addEventListener('click',()=>{
    document.getElementById("filterPopup").classList.add("hidden");
})

//Dark Mode

document.getElementById("darkswitch").addEventListener('click',()=>{
if(i===0){
  document.querySelector("body").style.backgroundColor="black";
  document.querySelectorAll(".card").forEach((value)=>{
    value.classList.remove("card")
    value.classList.add("card-black")
  })
  i=1;
}
else{
  document.querySelector("body").style.backgroundColor="white";
  document.querySelectorAll(".card-black").forEach((value)=>{
    value.classList.remove("card-black");
   value.classList.add("card")
   })
  i=0;
}
})