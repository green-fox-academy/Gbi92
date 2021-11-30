'use strict';

function validateInput(input) {
  if (input === undefined || input === null || !Number(input)) {
    return false;
  } else {
    return true;
  }
}

module.exports = { validateInput };