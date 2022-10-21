let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;

//HOME SCORE +1
function home1() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

//HOME SCORE +2
function home2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

//HOME SCORE +3
function home3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

//HOME SCORE -1
function homeNeg1() {
  homeScore -= 1;
  homeScoreEl.textContent = homeScore;
}

//HOME SCORE -2
function homeNeg2() {
  homeScore -= 2;
  homeScoreEl.textContent = homeScore;
}

//HOME SCORE -3
function homeNeg3() {
  homeScore -= 3;
  homeScoreEl.textContent = homeScore;
}

////////////////////////////////////////

let guestScore = 0;

// GUEST SCORE +1
function guest1() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

// GUEST SCORE +2
function guest2() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

// GUEST SCORE +3
function guest3() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

// GUEST SCORE -1
function guestNeg1() {
  guestScore -= 1;
  guestScoreEl.textContent = guestScore;
}

// GUEST SCORE -2
function guestNeg2() {
  guestScore -= 2;
  guestScoreEl.textContent = guestScore;
}

// GUEST SCORE -3
function guestNeg3() {
  guestScore -= 3;
  guestScoreEl.textContent = guestScore;
}

//////////////////////////////////////////////

// RESET BOTH SCORES TO 0
function reset() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
