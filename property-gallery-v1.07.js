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

function totalLeftForGamma() {
  var galleryColA = document.querySelector(".property-gallery_col-a");
  var galleryWidth = galleryColA.offsetWidth; // Width in pixels
  var remInPixels = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  var additionalLeftInPx = 16.5 * remInPixels; // Convert 16.5rem to pixels
  return galleryWidth + additionalLeftInPx + "px"; // Return the total left for gamma elements
}

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
    betaPicAOpen.style.display = "none";
    var betaPicAClose = document.getElementById("beta-pic-a-close");
    betaPicAClose.style.display = "flex";
    var betaPicA = document.getElementById("beta-pic-a");
    betaPicA.style.width = "100%";
    betaPicA.style.height = "100%";
    betaPicA.style.left = "0rem";
  });
}

function setupBetaPicACloseClickListener() {
  var betaPicAClose = document.getElementById("beta-pic-a-close");
  betaPicAClose.addEventListener("click", function () {
    betaPicAClose.style.display = "none";
    var betaPicAOpen = document.getElementById("beta-pic-a-open");
    betaPicAOpen.style.display = "block";
    var betaPicA = document.getElementById("beta-pic-a");
    betaPicA.style.width = "14rem";
    betaPicA.style.height = "18.625rem";
    betaPicA.style.left = calculateTotalLeft();
  });
}

function setupBetaPicBOpenClickListener() {
  var betaPicBOpen = document.getElementById("beta-pic-b-open");
  betaPicBOpen.addEventListener("click", function () {
    betaPicBOpen.style.display = "none";
    var betaPicBClose = document.getElementById("beta-pic-b-close");
    betaPicBClose.style.display = "flex";
    var betaPicB = document.getElementById("beta-pic-b");
    betaPicB.style.width = "100%";
    betaPicB.style.height = "100%";
    betaPicB.style.left = "0rem";
  });
}

function setupBetaPicBCloseClickListener() {
  var betaPicBClose = document.getElementById("beta-pic-b-close");
  betaPicBClose.addEventListener("click", function () {
    betaPicBClose.style.display = "none";
    var betaPicBOpen = document.getElementById("beta-pic-b-open");
    betaPicBOpen.style.display = "block";
    var betaPicB = document.getElementById("beta-pic-b");
    betaPicB.style.width = "14rem";
    betaPicB.style.height = "18.625rem";
    betaPicB.style.left = calculateTotalLeft();
  });
}

function setupGammaPicAOpenClickListener() {
  var gammaPicAOpen = document.getElementById("gamma-pic-a-open");
  gammaPicAOpen.addEventListener("click", function () {
    gammaPicAOpen.style.display = "none";
    var gammaPicAClose = document.getElementById("gamma-pic-a-close");
    gammaPicAClose.style.display = "flex";
    var gammaPicA = document.getElementById("gamma-pic-a");
    gammaPicA.style.width = "100%";
    gammaPicA.style.height = "100%";
    gammaPicA.style.left = "0rem";
  });
}

function setupGammaPicACloseClickListener() {
  var gammaPicAClose = document.getElementById("gamma-pic-a-close");
  gammaPicAClose.addEventListener("click", function () {
    gammaPicAClose.style.display = "none";
    var gammaPicAOpen = document.getElementById("gamma-pic-a-open");
    gammaPicAOpen.style.display = "block";
    var gammaPicA = document.getElementById("gamma-pic-a");
    gammaPicA.style.width = "12rem";
    gammaPicA.style.height = "12rem";
    gammaPicA.style.left = totalLeftForGamma();
  });
}

function setupGammaPicBOpenClickListener() {
  var gammaPicBOpen = document.getElementById("gamma-pic-b-open");
  gammaPicBOpen.addEventListener("click", function () {
    gammaPicBOpen.style.display = "none";
    var gammaPicBClose = document.getElementById("gamma-pic-b-close");
    gammaPicBClose.style.display = "flex";
    var gammaPicB = document.getElementById("gamma-pic-b");
    gammaPicB.style.width = "100%";
    gammaPicB.style.height = "100%";
    gammaPicB.style.left = "0rem";
    gammaPicB.style.top = "0rem";
  });
}

function setupGammaPicBCloseClickListener() {
  var gammaPicBClose = document.getElementById("gamma-pic-b-close");
  gammaPicBClose.addEventListener("click", function () {
    gammaPicBClose.style.display = "none";
    var gammaPicBOpen = document.getElementById("gamma-pic-b-open");
    gammaPicBOpen.style.display = "block";
    var gammaPicB = document.getElementById("gamma-pic-b");
    gammaPicB.style.width = "12rem";
    gammaPicB.style.height = "12rem";
    gammaPicB.style.left = totalLeftForGamma();
    gammaPicB.style.top = "13.25rem";
  });
}

function setupGammaPicCOpenClickListener() {
  var gammaPicCOpen = document.getElementById("gamma-pic-c-open");
  gammaPicCOpen.addEventListener("click", function () {
    gammaPicCOpen.style.display = "none";
    var gammaPicCClose = document.getElementById("gamma-pic-c-close");
    gammaPicCClose.style.display = "flex";
    var gammaPicC = document.getElementById("gamma-pic-c");
    gammaPicC.style.width = "100%";
    gammaPicC.style.height = "100%";
    gammaPicC.style.left = "0rem";
  });
}

function setupGammaPicCCloseClickListener() {
  var gammaPicCClose = document.getElementById("gamma-pic-c-close");
  gammaPicCClose.addEventListener("click", function () {
    gammaPicCClose.style.display = "none";
    var gammaPicCOpen = document.getElementById("gamma-pic-c-open");
    gammaPicCOpen.style.display = "block";
    var gammaPicC = document.getElementById("gamma-pic-c");
    gammaPicC.style.width = "12rem";
    gammaPicC.style.height = "12rem";
    gammaPicC.style.left = totalLeftForGamma();
  });
}

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
  adjustDimensions(); // Ensure this is called to set initial dimensions.
});

window.addEventListener("resize", function () {
  adjustDimensions(); // Adjust alpha-pic dimensions on resize.
});
