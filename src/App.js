import React, { useState } from "react";
import "./styles.css";

let l1 = "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic/landing/classic_orange_amber.jpg";
let l2 = "https://images.jawamotorcycles.com/medium/perak/perak.png?v=1";
let l3 = "https://imgd.aeplcdn.com/476x268/bw/models/honda-hornet-20-standard20200827130131.jpg";
let l4 = "https://images.carandbike.com/bike-images/large/husqvarna/svartpilen-250/husqvarna-svartpilen-250.jpg?v=2";
let l5 = "https://images.financialexpress.com/2019/05/3-63.jpg";
let l6 = "https://imgd.aeplcdn.com/1200x900/bw/models/yamaha-yzf-r15-v3-dual-channel-abs--bs-vi20200109152444.jpg";
let l7 = "https://images.carandbike.com/bike-images/large/bajaj/avenger-cruise-220/bajaj-avenger-cruise-220.jpg?v=11";
let l8 = "https://cloudfront-us-east-1.images.arcpublishing.com/octane/66EPRLOUIJGO5BHCAZ3C7J436Y.jpg";
let l9 = "https://gaadiwaadi.com/wp-content/uploads/2016/11/Suzuki-V-Strom-250-India.jpg";
let l10 = "data:image/jpeg;base64,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";
let l11 = "https://www.ktm.com/ktmgroup-storage/PHO_BIKE_PERS_LIVO_500-excf-22-streetlegal-livo_%23SALL_%23AEPI_%23V1.png";
let l12 = "https://www.advpulse.com/wp-content/uploads/2021/05/2022-FE-501s-dual-sport-7-1.jpg";

var dict = {
  "Cruiser":"A cruiser is a motorcycle in the style of American machines with riding position usually places the feet forward and the hands up, with the spine erect or leaning back slightly. Typical cruiser engines emphasize easy rideability and shifting, with plenty of low-end torque but not necessarily large amounts of horsepower, traditionally V-twins but inline engines have become more common. Their engines are tuned for low-end torque, making them less demanding to ride because it is not necessary to shift as frequently to accelerate or maintain control.",
  "Standard":"Standards, also called naked bikes or roadsters, are versatile, general-purpose street motorcycles. They are recognized primarily by their upright riding position, partway between the reclining rider posture of the cruisers and the forward leaning sport bikes. Because of their flexibility, lower costs, and moderate engine output, standards are particularly suited to motorcycle beginners.Standards usually do not come with fairings or windscreens, or if they have them, they are relatively small. Standard is often a synonym for naked, a term that was used in reference to 1950s road racing bikes.",
  "Sportsbike":"Sport bikes emphasize top speed, acceleration, braking, handling and grip on paved roads, typically at the expense of comfort and fuel economy in comparison to less specialized motorcycles. Sport bikes have comparatively high performance engines resting inside a lightweight frame. Braking systems combine higher performance brake pads and multi-piston calipers that clamp onto oversized vented rotors. Suspension systems are advanced in terms of adjustments and materials for increased stability and durability. Most sport bikes have fairings, often completely enclosing the engine, and windscreens that effectively deflect the air at very high speeds, or at least reduce overall drag.",
  "Touring":"Although any motorcycle can be equipped and used for touring, touring motorcycles are specifically designed to excel at covering long distances.They have large-displacement engines, fairings and screens that offer od weather and wind protection, large-capacity fuel tanks for long ranges between fill-ups, and a relaxed, upright seating position. Passenger accommodation is excellent and expansive luggage space is the norm for this class.",
  "Dual Sport":"Dual-sports, sometimes called dual-purpose or on/off-road motorcycles or adventure motorcycles, are street legal machines that are also designed to enter off-road situations.Typically based on a dirt bike chassis, they have added lights, mirrors, signals, and instruments that allow them to be licensed for public roads. They are higher than other street bikes, with a high center of gravity and tall seat height, allowing good suspension travel for rough ground.",
  "Dirt Bike":"There are various types of off-road motorcycles, also known as dirt bikes, specially designed for off-road events. The term off-road refers to driving surfaces that are not conventionally paved. These are rough surfaces, often created naturally, such as sand, gravel, a river, mud or snow. These types of terrain can sometimes only be travelled on with vehicles designed for off-road driving (such as SUVs, ATVs, snowmobiles and mountain bikes) or vehicles that have off-road equipment. Compared to road-going motorcycles, off-road machines are lighter and more flexible, having long suspension travel, high ground clearance, and are geared higher to provide more torque in off-road situations."
};

var img_dict = {
  "Cruiser" : [{image:l1,name:"Royal Enfield Classic 350"},{image:l2,name:"JAWA Perak"}],
   "Standard" : [{image:l3,name:"Honda Hornet 2.0"},{image:l4,name:"Husqvarna Svartpilen 250"}],
   "Sportsbike" : [{image:l5,name:"Suzuki Gixxer SF"},{image:l6,name:"Yamaha YZF R15"}],
   "Touring" : [{image:l7,name:"Bajaj Avenger Cruise 220"},{image:l8,name:"Honda Gold Wing"}],
   "Dual Sport" : [{image:l9,name:"Suzuki V-Strom 250"},{image:l10,name:"Honda CRF 250L Rally"}],
   "Dirt Bike" : [{image:l11,name:"KTM 500 EXC-F"},{image:l12,name:"Husqvarna FE 501s"}]
}


export default function App() {
  var [value, setValue] = useState(["Cruiser"]);
  var [img,setImg] = useState([{image:l1,name:"Royal Enfield Classic 350"},{image:l2,name:"JAWA Perak"}]);
  var [err,setErr] = useState("");

  function type(event) {
    var userInput = event.target.value;
    setValue(userInput);
    setImg(img_dict[userInput]);
    setErr("");
  }

  function click() {
    
    var userInput = document.getElementById("category").value
    var val = dict[userInput];
    if (val === undefined) {
      setErr("Please, Search for the right category");
    }
    else{
      setValue(userInput);
      setImg(img_dict[userInput]);
      setErr("");
    }
    console.log(userInput);
  }
  return (
    <div className="App">
      <section>
        <h1>Know your Bike</h1>
        <input id="category" type="text" />
        <button class="button_search" onClick={click}> Search </button>
      </section>

      <h3 class="error" style={{color:'goldenrod'}}>{err}</h3>
      <section>
        <button class="button_type" id="btn1" value="Cruiser" onClick={type}>Cruiser</button>
        <button class="button_type" id="btn2" value="Sportsbike" onClick={type}>Sportsbike</button>
        <button class="button_type" id="btn3" value="Touring" onClick={type}>Touring</button>
        <button class="button_type" id="btn4" value="Standard" onClick={type}>Standard</button>
        <button class="button_type" id="btn5" value="Dual Sport" onClick={type}>Dual Sport</button>
        <button class="button_type" id="btn6" value="Dirt Bike" onClick={type}>Dirt Bike</button>
        
      </section>

      <section>    
        <h2 class="type">{value}</h2>
        <p>{dict[value]}</p>
        <ul>
        {
          img.map(
            (element)=>{
            return (
            <li key={element} style={{listStyle:"none"}} ><img src={element.image} alt="bike" /> <br/> <h3>{element.name}</h3></li>
            );
          }
          )
        }
        </ul>             
      </section>

    </div>
  );
}
