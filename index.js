class Starship {
  constructor(phaserCharge_initial, numberOfPhotonTorpedos, energyPerPhotonTorpedo, 
          shieldEnergy_initial, FleetDesignation) {
              this.phaserCharge_initial = phaserCharge_initial;
              this.numberOfPhotonTorpedos = numberOfPhotonTorpedos;
              this.energyPerPhotonTorpedo = energyPerPhotonTorpedo;               
              this.shieldEnergy_initial   = shieldEnergy_initial;
              this.FleetDesignation = FleetDesignation;
          }
  reportStatus() {return this.FleetDesignation;}
  firePhasers() {
      // acquire the Object Reference for the Enemy Ship
       
      phaserAttackStrength = Math.random() * (100);
     // enemyShip.shieldStrength -= this.phaserAttackStrength;
      return 'Firing Phasers'
  }
  reportShieldStrength(){
      console.log("Shield Strength is " + this.shieldStrength);
  }
}

// Create the Arrays to hold the Starships of each Fleet
var FederationOrderOfBattle = Array(); 
var RomulanOrderOfBattle = Array(); 

// make 20 Federation Ships
for (counter = 0; counter < 20; counter++){
  FederationOrderOfBattle[counter] = new Starship(
      10000,
      25, 
      25,                
      10000, 
      "Starfleet");
  console.log(FederationOrderOfBattle[counter].reportStatus());
}

// const Enterprise = new Starship();
// Enterprise.reportShieldStrength();