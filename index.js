// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block < 42) {
        return 42 - block;
    } else {
        return block - 42;
    }
        //returns the number of blocks given a value
  }

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination)  {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264
    } 
    //returns the number of feet traveled
  }

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if ( distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400);
    } else if ( distance > 2000 && distance < 2500) {
        return 25;

    } else {
            return 'cannot travel that far'
    }
            
    //returns the fare for the customer
  }