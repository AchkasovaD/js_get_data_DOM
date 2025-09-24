'use strict';

// write your code here
const data = [...document.querySelectorAll('span.population')];

const sampleText = data[0]?.textContent || '';
const usesCommas = sampleText.includes(',');
const usesSpaces = sampleText.includes(' ') || sampleText.includes(' ');

const validNumbers = data
  .map((span) => {
    const rawValue = span.textContent.trim().replace(/[,\s\u00A0\u202F]/g, '');

    return Number(rawValue);
  })
  .filter((num) => Number.isFinite(num));

let total = 0;
let average = 0;

if (validNumbers.length > 0) {
  total = validNumbers.reduce((sum, num) => sum + num, 0);
  average = Math.round(total / validNumbers.length);
} else {
  total = 0;
  average = 0;
}

function formatInSameStyle(number) {
  if (usesCommas) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else if (usesSpaces) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else {
    return number.toLocaleString();
  }
}

if (validNumbers.length > 0) {
  document.querySelectorAll('span.average-population').forEach((element) => {
    element.textContent = formatInSameStyle(average);
  });

  document.querySelectorAll('span.total-population').forEach((element) => {
    element.textContent = formatInSameStyle(total);
  });
} else {
  document.querySelectorAll('span.average-population').forEach((element) => {
    element.textContent = 'N/A';
  });

  document.querySelectorAll('span.total-population').forEach((element) => {
    element.textContent = 'N/A';
  });
}
