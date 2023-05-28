// Object database to store the data from the form
const database = {};

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new FormData object
  let userMessage = new FormData(form);

  userMessage.name = userMessage.get("name");
  userMessage.email = userMessage.get("email");
  userMessage.comment = userMessage.get("comment");
  userMessage.contact = userMessage.get("contact");
  userMessage.preferredTrainer = userMessage.get("trainers");

  // Assign different value of the checkbox through checked property
  const newsletter = document.getElementById("checkbox");
  const newsletterConsent = newsletter.checked ? "on" : "off";
  userMessage.newsletterConsent = newsletterConsent;

  // Create and add to the database a unique key associated to the userMessage
  const uniqueKey = generateUniqueKey();
  database[uniqueKey] = userMessage;
  console.log(userMessage);
});
// Function to generate a unique key
function generateUniqueKey() {
  return Math.random().toString(36).substring(7);
}
