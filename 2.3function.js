function calculateCircleArea(radius) {
  // Calculate the area
  const area = Math.PI * Math.pow(radius, 2);

  // Round the area to two decimal places
  const roundedArea = Math.round(area * 100) / 100;

  // Print the original and rounded areas
  console.log(`The area of the circle with radius ${radius} is: ${area}`);
  console.log(`Rounded to two decimal places, it is: ${roundedArea}`);
}

// Example usage:
const radius = 5;
calculateCircleArea(radius);
