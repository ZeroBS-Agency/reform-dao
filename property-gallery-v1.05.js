// Function to adjust dimensions of 'alpha-pic' based on other elements
function adjustDimensions() {
  var galleryColA = document.querySelector(".property-gallery_col-a");
  var menuHeight = document.querySelector(
    ".property-gallery_panel-menu"
  ).offsetHeight;
  var remInPixels = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  var additionalHeightInPx = 1.25 * remInPixels; // Convert 1.25rem to pixels
  var galleryHeight = galleryColA.offsetHeight;
  var newHeight = galleryHeight - (menuHeight + additionalHeightInPx);

  var alphaPic = document.getElementById("alpha-pic");
  alphaPic.style.width = galleryColA.offsetWidth + "px";
  alphaPic.style.height = newHeight + "px";
}

function calculateTotalLeft() {
  var galleryColA = document.querySelector(".property-gallery_col-a");
  var galleryWidth = galleryColA.offsetWidth; // Width in pixels
  var remInPixels = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  var additionalPixels = 1.25 * remInPixels;
  return galleryWidth + additionalPixels + "px"; // Calculate the total left position in 'px'
}

// Setup event listener for 'alpha-pic-open' click
function setupClickListener() {
  var alphaPicOpen = document.getElementById("alpha-pic-open");
  alphaPicOpen.addEventListener("click", function () {
    alphaPicOpen.style.display = "none";
    var alphaPicClose = document.getElementById("alpha-pic-close");
    alphaPicClose.style.display = "flex";
    var alphaPic = document.getElementById("alpha-pic");
    alphaPic.style.width = "100%";
    alphaPic.style.height = "100%";
  });
}

// Setup event listener for 'alpha-pic-close' click
function setupCloseClickListener() {
  var alphaPicClose = document.getElementById("alpha-pic-close");
  alphaPicClose.addEventListener("click", function () {
    alphaPicClose.style.display = "none";
    var alphaPicOpen = document.getElementById("alpha-pic-open");
    alphaPicOpen.style.display = "block";
    adjustDimensions(); // Call adjustDimensions to reset the width and height of 'alpha-pic'
  });
}

function setupBetaPicAOpenClickListener() {
  var betaPicAOpen = document.getElementById("beta-pic-a-open");
  betaPicAOpen.addEventListener("click", function () {
    betaPicAOpen.style.display = "none"; // Hide the 'open' button
    var betaPicAClose = document.getElementById("beta-pic-a-close");
    betaPicAClose.style.display = "flex"; // Show the 'close' button
    var betaPicA = document.getElementById("beta-pic-a");
    betaPicA.style.width = "100%"; // Expand 'beta-pic-a'
    betaPicA.style.height = "100%";
    betaPicA.style.left = "0rem";
  });
}

function setupBetaPicACloseClickListener() {
  var betaPicAClose = document.getElementById("beta-pic-a-close");
  betaPicAClose.addEventListener("click", function () {
    betaPicAClose.style.display = "none"; // Hide the 'close' button
    var betaPicAOpen = document.getElementById("beta-pic-a-open");
    betaPicAOpen.style.display = "block"; // Show the 'open' button
    var betaPicA = document.getElementById("beta-pic-a");
    betaPicA.style.width = "14rem"; // Reset width of 'beta-pic-a'
    betaPicA.style.height = "18.625rem"; // Reset height of 'beta-pic-a'
    betaPicA.style.left = calculateTotalLeft(); // Adjust left position based on gallery width
  });
}

function setupBetaPicBOpenClickListener() {
  var betaPicBOpen = document.getElementById("beta-pic-b-open");
  betaPicBOpen.addEventListener("click", function () {
    betaPicBOpen.style.display = "none"; // Hide the 'open' button
    var betaPicBClose = document.getElementById("beta-pic-b-close");
    betaPicBClose.style.display = "flex"; // Show the 'close' button
    var betaPicB = document.getElementById("beta-pic-b");
    betaPicB.style.width = "100%"; // Expand 'beta-pic-a'
    betaPicB.style.height = "100%";
    betaPicB.style.left = "0rem";
  });
}

function setupBetaPicBCloseClickListener() {
  var betaPicBClose = document.getElementById("beta-pic-b-close");
  betaPicBClose.addEventListener("click", function () {
    betaPicBClose.style.display = "none"; // Hide the 'close' button
    var betaPicBOpen = document.getElementById("beta-pic-b-open");
    betaPicBOpen.style.display = "block"; // Show the 'open' button
    var betaPicB = document.getElementById("beta-pic-b");
    betaPicB.style.width = "14rem"; // Reset width of 'beta-pic-a'
    betaPicB.style.height = "18.625rem"; // Reset height of 'beta-pic-a'
    betaPicB.style.left = calculateTotalLeft(); // Adjust left position based on gallery width
    betaPicB.style.bottom = "0rem";
  });
}

function setupGammaPicAOpenClickListener() {
  var gammaPicAOpen = document.getElementById("gamma-pic-a-open");
  gammaPicAOpen.addEventListener("click", function () {
    gammaPicAOpen.style.display = "none"; // Hide the 'open' button
    var gammaPicAClose = document.getElementById("gamma-pic-a-close");
    gammaPicAClose.style.display = "flex"; // Show the 'close' button
    var gammaPicA = document.getElementById("gamma-pic-a");
    gammaPicA.style.width = "100%"; // Expand 'beta-pic-a'
    gammaPicA.style.height = "100%";
    gammaPicA.style.left = "0rem";
    gammaPicA.style.top = "0rem";
  });
}

function setupGammaPicACloseClickListener() {
  var gammaPicAClose = document.getElementById("gamma-pic-a-close");
  gammaPicAClose.addEventListener("click", function () {
    gammaPicAClose.style.display = "none"; // Hide the 'close' button
    var gammaPicAOpen = document.getElementById("gamma-pic-a-open");
    gammaPicAOpen.style.display = "block"; // Show the 'open' button
    var gammaPicA = document.getElementById("gamma-pic-a");
    gammaPicA.style.width = "12rem"; // Reset width of 'beta-pic-a'
    gammaPicA.style.height = "12rem"; // Reset height of 'beta-pic-a'
    gammaPicA.style.left = totalLeftForGamma(); // Adjust left position based on gallery width
    gammaPicA.style.top = "0rem";
  });
}

function setupGammaPicBOpenClickListener() {
  var gammaPicBOpen = document.getElementById("gamma-pic-b-open");
  gammaPicBOpen.addEventListener("click", function () {
    gammaPicBOpen.style.display = "none"; // Hide the 'open' button
    var gammaPicBClose = document.getElementById("gamma-pic-b-close");
    gammaPicBClose.style.display = "flex"; // Show the 'close' button
    var gammaPicB = document.getElementById("gamma-pic-b");
    gammaPicB.style.width = "100%"; // Expand 'beta-pic-a'
    gammaPicB.style.height = "100%";
    gammaPicB.style.left = "0rem";
    gammaPicB.style.top = "0rem";
  });
}

function setupGammaPicBCloseClickListener() {
  var gammaPicBClose = document.getElementById("gamma-pic-b-close");
  gammaPicBClose.addEventListener("click", function () {
    gammaPicBClose.style.display = "none"; // Hide the 'close' button
    var gammaPicBOpen = document.getElementById("gamma-pic-b-open");
    gammaPicBOpen.style.display = "block"; // Show the 'open' button
    var gammaPicB = document.getElementById("gamma-pic-b");
    gammaPicB.style.width = "12rem"; // Reset width of 'beta-pic-a'
    gammaPicB.style.height = "12rem"; // Reset height of 'beta-pic-a'
    gammaPicB.style.left = totalLeftForGamma(); // Adjust left position based on gallery width
    gammaPicB.style.top = "13.25rem";
  });
}

function setupGammaPicCOpenClickListener() {
  var gammaPicCOpen = document.getElementById("gamma-pic-c-open");
  gammaPicCOpen.addEventListener("click", function () {
    gammaPicCOpen.style.display = "none"; // Hide the 'open' button
    var gammaPicCClose = document.getElementById("gamma-pic-c-close");
    gammaPicCClose.style.display = "flex"; // Show the 'close' button
    var gammaPicC = document.getElementById("gamma-pic-c");
    gammaPicC.style.width = "100%"; // Expand 'beta-pic-a'
    gammaPicC.style.height = "100%";
    gammaPicC.style.left = "0rem";
    gammaPicC.style.bottom = "0rem";
  });
}

function setupGammaPicCCloseClickListener() {
  var gammaPicCClose = document.getElementById("gamma-pic-c-close");
  gammaPicCClose.addEventListener("click", function () {
    gammaPicCClose.style.display = "none"; // Hide the 'close' button
    var gammaPicCOpen = document.getElementById("gamma-pic-c-open");
    gammaPicCOpen.style.display = "block"; // Show the 'open' button
    var gammaPicC = document.getElementById("gamma-pic-c");
    gammaPicC.style.width = "12rem"; // Reset width of 'beta-pic-a'
    gammaPicC.style.height = "12rem"; // Reset height of 'beta-pic-a'
    gammaPicC.style.left = totalLeftForGamma(); // Adjust left position based on gallery width
    gammaPicC.style.bottom = "0rem";
  });
}

function setLeftPositionBasedOnGalleryWidth() {
  // Calculate total left for betaPicA and betaPicB as before
  var totalLeftForBeta = calculateTotalLeft();

  // Get the width of the .property-gallery_col-a element
  var galleryColA = document.querySelector(".property-gallery_col-a");
  var galleryWidth = galleryColA.offsetWidth; // Width in pixels

  // Convert 16.5rem to pixels
  var remInPixels = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  var additionalLeftInPx = 16.5 * remInPixels; // Convert 16.5rem to pixels

  // Calculate the total left for gammaPicA, gammaPicB, and gammaPicC
  var totalLeftForGamma = galleryWidth + additionalLeftInPx + "px";

  // Apply the calculated total left positions
  var betaPicA = document.getElementById("beta-pic-a");
  var betaPicB = document.getElementById("beta-pic-b");
  betaPicA.style.left = totalLeftForBeta;
  betaPicB.style.left = totalLeftForBeta;

  var gammaPicA = document.getElementById("gamma-pic-a");
  var gammaPicB = document.getElementById("gamma-pic-b");
  var gammaPicC = document.getElementById("gamma-pic-c");
  gammaPicA.style.left = totalLeftForGamma;
  gammaPicB.style.left = totalLeftForGamma;
  gammaPicC.style.left = totalLeftForGamma;
}

// You'll also need to adjust the calculateTotalLeft function or create a new one specifically for the gamma pictures if the calculation differs from what's needed for the beta pictures.

// Ensure this updated `setLeftPositionBasedOnGalleryWidth` function is called on both DOMContentLoaded and window resize events to apply these changes after the DOM is loaded and when the window size is adjusted.

// Consolidated DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  setupClickListener();
  setupCloseClickListener();
  setupBetaPicAOpenClickListener();
  setupBetaPicACloseClickListener();
  setupBetaPicBOpenClickListener();
  setupBetaPicBCloseClickListener();
  setupGammaPicAOpenClickListener();
  setupGammaPicACloseClickListener();
  setupGammaPicBOpenClickListener();
  setupGammaPicBCloseClickListener();
  setupGammaPicCOpenClickListener();
  setupGammaPicCCloseClickListener();
  setLeftPositionBasedOnGalleryWidth();
});

// Resize event to handle dynamic window adjustments
window.addEventListener("resize", setLeftPositionBasedOnGalleryWidth);
