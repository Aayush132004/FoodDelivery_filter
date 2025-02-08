                                        // Dummy Data Creation using code
const Restaurant=[];

const images=["First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth"]
const rest_name=[
    "Mahalaxmi Restaurant",
    "Indian Coffee House & Restaurant",
    "Kwality Restaurant",
    "Silver Saloon",
    "Alfanzo Restaurant",
    "Raj Hotel",
    "Siddhi Vinayak Restaurant and Lodge",
    "Icy Spicy Restaurant",
    "Karchi Kadhai Hotel And Restaurant",
    "Amrit Bhoj",
    "House of K",
    "BansiWala Restaurant",
    "Volga Restaurant",
    "New New Burger Maxx",
    "7 Spice",
    "Gullu's Food Funda",
    "Momos Adda",
    "Biryani By Kilo",
    "Indish",
    "The Tandoori Nights"
  ];
const foodTypes=[
    "Italian",
    "Chinese",
    "Indian",
    "Mexican",
    "Japanese",
    "Mediterranean",
    "Thai",
    "French",
    "Greek",
    "American"
  ];
const locations=[
    "Morar",
    "Lashkar",
    "City Centre",
    "Thatipur",
    "Balwant Nagar",
    "D.D. Nagar",
    "Shinde Ki Chhawani",
    "Gandhi Road",
    "Padav",
    "Gole Ka Mandir"
  ];

for(let i=0;i<100;i++){
const obj={}
obj["image"]=images[Math.floor(Math.random()*10)];
obj["name"]=rest_name[Math.floor(Math.random()*20)];
obj["rating"]=Math.floor(Math.random()*5+1);
obj["foodTypes"]=foodTypes[Math.floor(Math.random()*10)];
obj["price_for_two"]=Math.floor(Math.random()*2401+100)//anything b/w 100 to 2500 2401 diff no starting from 100
obj["location"]=locations[Math.floor(Math.random()*10)];
obj["distance_from_customer"]=Math.floor(Math.random()*6).toFixed(1);//0 to 5km
obj["offers"]=Math.floor((Math.random()*5+1)*10)//10 to 60%
obj["alcohol"]=Math.random()>0.7//assuming in 70% dont serve so true for only 30%;
obj["restaurant_open_time"]=Math.floor(Math.random()*24);
obj["restaurant_close_time"]=(obj["restaurant_open_time"]+12)%24;//12 hrs from opening;

Restaurant.push(obj)
  }
// console.log(Restaurant);


 /*   created 100 dummy data console.log(Restaurant); 
 dont generate data again and again once generated use in project 
 for using req to convert to json format here array so array to json
 */

 const json_data=JSON.stringify(Restaurant,null,2);
//  console.log(json_data);


/*  This JSON string can be sent over the network or stored in a file for
  later use. If you need to convert it back to an array, you can use the JSON.parse() method. */
 
 const filepath='./JS MAIN PROJECT(DAY-32)/data.json'
  const fs=require('fs');
  fs.writeFile(filepath,json_data,(err)=>{
    if(err)
    console.log("Problem creating file");
  else
  console.log("Successfully created file");
  })