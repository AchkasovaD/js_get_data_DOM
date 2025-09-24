'use strict';

// write your code here
const data = [...document.querySelectorAll('span.population')];

const sampleText = data[0]?.textContent || '';
const usesCommas = sampleText.includes(',');
const usesSpaces = sampleText.includes(' ') || sampleText.includes(' ');

const validNumbers = data
  .map((span) => Number(span.textContent.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const total = validNumbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / validNumbers.length);

function formatInSameStyle(number) {
  if (usesCommas) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else if (usesSpaces) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else {
    return number.toLocaleString();
  }
}

document.querySelectorAll('span.average-population').forEach((element) => {
  element.textContent = formatInSameStyle(average);
});

document.querySelectorAll('span.total-population').forEach((element) => {
  element.textContent = formatInSameStyle(total);
});
