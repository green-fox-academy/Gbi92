'use strict';

function calculatePassedTime(timestamp) {
  let dateNow = Date.now();
  let difference = dateNow - timestamp;
  let daysDifference = Math.floor(difference/1000/60/60/24);

  return daysDifference;
}