function loadServices(){
    var services = [
        { 
            specialisation: 'Wrong Fuel in Car',
            desc: 'If you have put the wrong fuel into your vehicle, Wrong Fuel recovery are able to provide you with a 24 hour a day, 7 days-a-week mobile fuel drain service, with the ability to offer our assistance to the entirety of mainland UK. We will come out to your car, drain the contaminated fuel from your tank, flush the entire system and get you up on the road in no time.',
            img: 'img1.jpg'
        }, 
        {
            specialisation: 'Petrol in Diesel Car',
            desc: 'Have you put Petrol into your Diesel car? Do not worry! No matter if you are at the side of the road, at a petrol station or at home, Wrong Fuel recovery are able to come and perform a fuel drain which will take on average 30 minutes from our arrival. We are able to get 99.9% of vehicles back up on the road with no issues... in fact some say it runs better than before!',
            img: 'img2.jpg'

        },
        {
            specialisation: 'Diesel in Petrol Car',
            desc: 'Wrong Fuel recovery are the market leader in fuel drains. Diesel in a Petrol car is (more/less) common than Petrol in a Diesel car however the process is the same. After the initial call has been made to Wrong Fuel recovery we are able to get to you in, on average, 46 minutes to begin the drain which is one of the quickest in the industry.',
            img: 'img3.jpg'
        },
        {
            specialisation: 'AdBlue in Diesel Car',
            desc: 'Wrong Fuel recovery are proud to be one of the only fuel draining companies who are able to offer the service of removing AdBlue from your car. AdBlue is a far more complex job requiring a high level of expertise. Due to the experience required, many companies do not offer this service however all of Wrong Fuel recovery’s technicians are fully trained to handle AdBlue contaminations.',
            img: 'img4.jpg'
        },
        {
            specialisation: 'Water Contamination',
            desc: 'Having water in the fuel tank is likely to lead to idling difficulties, uneven running, abnormal smoke and, if it is not remedied correctly, in some cases broken injectors. This process is likely to take longer than a regular misfuel however we have attended thousands of these jobs every year and our engineers have been trained to handle even the hardest of fuel drains.',
            img: 'img5.jpg'
        },
        {
            specialisation: 'Biodiesel',
            desc: 'Biodiesel is an excellent idea, however, badly made biodiesel may be contaminated with water or solids that can cause major problems for the engine. This can cause the engine to break down after just a few miles of running. The process is fairly simple and we are able to get your vehicle back up and running, on the correct fuel without any lasting issues.',
            img: 'img6.jpg'

        }

    ];

for (const property in services) {
    const markup = 

    `<div class="col-sm-4 col-12 p-0 m-0">
<div class="ml-1 mr-1 borderline mb-1">


    <img
        src="img/${services[property].img}"
        class="img-responsive telephone-img mt-0 mb-1"
        alt="24-7"
        title="24-7">
<div class ="min-height-2xl">
  <h3 class="text-center mt-2 text-depressed-gray text-size-medium text-weight-bold">${services[property].specialisation}</h3>
  <p class="text-center">${services[property].desc}
  </p>
  </div>
  </div>
  </div>
</div>`;
  document.getElementById('serviced-master').innerHTML += markup;
}
  
}
loadServices();