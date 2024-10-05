// Get the current year
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

// Find the footer's first paragraph
const copyrightParagraph = document.getElementById("currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");

// Set the copyright year text
copyrightParagraph.textContent = `${new Date().getFullYear()}`;
lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;