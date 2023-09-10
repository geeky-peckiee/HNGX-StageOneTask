// for slack name
const slackUserName = document.querySelector('[data-testid="slackUserName"]');
slackUserName.innerText = "Peckiee";

// for display image
const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
slackDisplayImage.src = "Snapchat-1686812679.jpg";

// for current day of the week
const dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDay = dayOfTheWeek[currentDate.getUTCDay()];
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDayOfTheWeek.innerText = `Current Day of The Week: ${currentDay}`;

//for current UTC time in milliseconds
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
currentUTCTime.innerText = `Current UTC Time: ${currentDate.getTime()} milliseconds`;