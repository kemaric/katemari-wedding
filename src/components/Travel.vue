<template>
  <div class="view-header hello">
    <h1 class="component-head container-text-font">{{ msg }}</h1>
    <div class="hotel">
      <p>Double Tree by Hilton Hotel Annapolis</p>
      <div class="container-text-font">
        <a href="https://goo.gl/maps/7JvQTWDenTt7Npq16">
          <p>210 Holiday Court, Annapolis, Maryland, 21401</p>
        </a>
        <br />
        <p>
          We reserved a block of rooms under
          <em>Campanile & Legg</em> at the DoubleTree by Hilton Annapolis.
        </p>
        <p>
          Make a reservation by calling
          <a href="tel:410-224-3150">410-224-3150</a> to get the special rate.
        </p>
        <br />
        <a href="tel:240-393-9517">
          <button class="button">Book a Room</button>
        </a>
      </div>
    </div>
    <div id="toc_container container-text-font">
      <p class="toc_title container-text-font">Directions</p>
      <ul class="toc_list container-text-font">
        <li>
          <a href="#Directions_To_Hotel">Directions to DoubleTree</a>
          <ul>
            <li>
              <a href="#Directions_To_Hotel_De">1.1 Directions from Deleware </a>
            </li>
            <li>
              <a href="#Directions_To_Hotel_BWI">1.2 Directions from BWI</a>
            </li>
             <li>
              <a href="#Directions_To_Hotel_Dullas">1.3 Directions from Dulles</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#Directions_To_Park">Directions to Quiet Water Park</a>
          <ul>
            <li>
              <a href="#Directions_To_Park_Hotel">2.1 Directions from DoubleTree </a>
            </li>
            <li>
              <a href="#Directions_To_Park_BWI">2.2 Directions from BWI</a>
            </li>
             <li>
              <a href="#Directions_To_Park_Dulles">2.3 Directions from Dulles</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="container-text-font">
          <h2 id="Directions_To_Hotel"></h2>
          <h2 id="Directions_To_Hotel_De">Directions from Deleware to Double Tree Hotel:</h2>
           <p>
             Via 95: <br>
              Get on I-95 S from N King St and M.L.K. Jr. Blvd
              6 min (1.5 mi)<br>
              
              Continue on I-95 S. Take I-97 S to MD-665 E in Parole. Take the exit toward US-50 E/US-301 N/Annapolis/Bay Bridge from I-97 S
              1 h 25 min (91.8 mi)<br>
              
              Continue on MD-665 E. Take Riva Rd to Holiday Ct
              3 min (0.8 mi)<br>
          </p>
          <p>
            Via 301:<br>
            Get on I-95 S from N King St and M.L.K. Jr. Blvd
            6 min (1.5 mi) <br>
            
            Take US-301 S to MD-450 E/West St in Parole. Take exit 23B from US-301 S
            1 h 26 min (91.2 mi) <br>
            
            Take Riva Rd to Holiday Ct
            2 min (0.6 mi)  <br>

          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d789809.6103148216!2d-76.6571875!3d39.3518479!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c70f185c46af6f%3A0x8516da5077308c00!2sWilmington%2C%20DE!3m2!1d39.744655!2d-75.5483909!4m5!1s0x89b7f6cd41e159d3%3A0x5b33629a78e5a7d5!2s210%20Holiday%20Ct%2C%20Annapolis%2C%20MD%2021401!3m2!1d38.982556699999996!2d-76.5473353!5e0!3m2!1sen!2sus!4v1568076490819!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="container-text-font">
          <h2 id="Directions_To_Hotel_BWI">Directions from BWI to Double Tree Hotel:</h2>
          <p>
            By I-97:
            Get on I-97 S in Ferndale from Service Rd Lower Level, MD-170 N and MD-162 E/Aviation Blvd
            11 min (4.4 mi)<br>
            
            Follow I-97 S to MD-665 E in Parole. Take the exit toward US-50 E/US-301 N/Annapolis/Bay Bridge from I-97 S
            14 min (15.7 mi)<br>
            
            Continue on MD-665 E. Take Riva Rd to Holiday Ct
            3 min (0.8 mi)<br>
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d198186.61804083618!2d-76.80266961730038!3d39.09130708690323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b7e2fcbbc2e00b%3A0x150cfa971740!2sBaltimore%2FWashington%20International%20Thurgood%20Marshall%20Airport%2C%20Baltimore%2C%20MD%2021240!3m2!1d39.1774042!2d-76.6683922!4m5!1s0x89b7f6cd41e159d3%3A0x5b33629a78e5a7d5!2s210%20Holiday%20Ct%2C%20Annapolis%2C%20MD%2021401!3m2!1d38.982556699999996!2d-76.5473353!5e0!3m2!1sen!2sus!4v1568076997018!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="container-text-font">
          <h2 id="Directions_To_Hotel_Dullas">Directions from Dulles to Double Tree Hotel:</h2>
          <p> 
            Via I-495 N and US-50 E <br>
            Get on VA-267 E in Hunter Mill from Aviation Dr
            5 min (2.5 mi) <br>
            
            Follow VA-267 E, I-495 N and US-50 E to MD-665 E in Parole. Take exit 22 from US-50 E
            55 min (55.3 mi) <br>
            
            Continue on MD-665 E. Take Riva Rd to Holiday Ct
            3 min (0.8 mi) <br>
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d794843.0078921109!2d-77.56119230226145!3d38.90441960856887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64740174eb057%3A0x8e01cb201080601d!2sDulles%20International%20Airport%2C%20Saarinen%20Circle%2C%20Dulles%2C%20VA!3m2!1d38.9531162!2d-77.45653879999999!4m5!1s0x89b7f6cd41e159d3%3A0x5b33629a78e5a7d5!2s210%20Holiday%20Ct%2C%20Annapolis%2C%20MD%2021401!3m2!1d38.982556699999996!2d-76.5473353!5e0!3m2!1sen!2sus!4v1568077151102!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="container-text-font">
          <h2 id="Directions_To_Park"></h2>
          <h2 id="Directions_To_Park_Hotel">Directions from Double Tree Hotel to Quiet Water Park:</h2>
          <p>
            Follow Holiday Ct to Riva Rd
              2 min (0.1 mi)<br>
              
              Take MD-665 E and Forest Dr to Quiet Waters Park Rd in Annapolis
              9 min (4.4 mi)<br>
              
              Drive to Quiet Waters Park Rd in Hillsmere Shores
              4 min (1.0 mi)
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d24819.141362404058!2d-76.5383225!3d38.9607009!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b7f6cd4124fbd9%3A0x3eb5473804687f66!2sDoubleTree%20by%20Hilton%20Hotel%20Annapolis%2C%20Holiday%20Court%2C%20Annapolis%2C%20MD!3m2!1d38.982391799999995!2d-76.5474097!4m5!1s0x89b7f5d2a8006901%3A0x7a494eca962c6e96!2sQuiet%20Waters%20Park%2C%20600%20Quiet%20Waters%20Park%20Rd%2C%20Annapolis%2C%20MD%2021403!3m2!1d38.937669799999995!2d-76.5008994!5e0!3m2!1sen!2sus!4v1568075687298!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="container-text-font">
          <h2 id="Directions_To_Park_BWI">Directions from BWI to Quiet Water Park:</h2>
          <p>
            Get on I-97 S in Ferndale from MD-170 N and MD-162 E/Aviation Blvd
            7 min (3.7 mi)<br>
            
            Follow I-97 S to MD-665 E in Parole. Take the exit toward US-50 E/US-301 N/Annapolis/Bay Bridge from I-97 S
            14 min (15.7 mi)<br>
            
            Follow MD-665 E and Forest Dr to Quiet Waters Park Rd in Hillsmere Shores
            12 min (5.6 mi)<br>
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d198244.97120369005!2d-76.7764958!3d39.0705376!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b7e2e6233a86c9%3A0x450cced8491184a8!2sBWI%20Airport%2C%20Baltimore%2C%20MD!3m2!1d39.1828527!2d-76.6698617!4m5!1s0x89b7f5d2a8006901%3A0x7a494eca962c6e96!2sQuiet%20Waters%20Park%2C%20600%20Quiet%20Waters%20Park%20Rd%2C%20Annapolis%2C%20MD%2021403!3m2!1d38.937669799999995!2d-76.5008994!5e0!3m2!1sen!2sus!4v1568077429762!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="container-text-font">
          <h2 id="Directions_To_Park_Dulles">Directions from Dulles to Quiet Water Park:</h2>
          <p>
            Get on VA-267 E in Hunter Mill from Aviation Dr
            5 min (2.5 mi)<br>
            
            Follow VA-267 E, I-495 N and US-50 E to MD-665 E in Parole. Take exit 22 from US-50 E
            55 min (55.3 mi)<br>
            
            Follow MD-665 E and Forest Dr to Quiet Waters Park Rd in Hillsmere Shores
            12 min (5.6 mi)<br>
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d794843.005221367!2d-77.53497155417062!3d38.90441984712258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64740174eb057%3A0x8e01cb201080601d!2sDulles%20International%20Airport%20(IAD)%2C%201%20Saarinen%20Cir%2C%20Dulles%2C%20VA%2020166!3m2!1d38.9531162!2d-77.45653879999999!4m5!1s0x89b7f5d2a8006901%3A0x7a494eca962c6e96!2sQuiet%20Waters%20Park%2C%20600%20Quiet%20Waters%20Park%20Rd%2C%20Annapolis%2C%20MD%2021403!3m2!1d38.937669799999995!2d-76.5008994!5e0!3m2!1sen!2sus!4v1568077517339!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>

  </div>
</template>

<script>
export default {
  name: 'travel',
  data() {
    return {
      msg: 'Guest Accommodations',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
.responsive {
  max-width: 100%;
  height: auto;
}

.toc_list {
  list-style: none;
  ul {
    list-style: none;
  }
}

.button {
  border: none;
  border-radius: 2px;
  color: #fff !important;
  background-color: #616161 !important;
  cursor: pointer;
}
.component-head {
  font-weight: normal;
  font-family: "Avenir";
}
</style>
