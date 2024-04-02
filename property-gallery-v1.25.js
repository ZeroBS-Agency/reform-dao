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

    // Convert 7.5rem to pixels
    var remInPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    var subtractHeightPx = 7.5 * remInPixels;

    // Get the height of .property-gallery_col-a
    var galleryColA = document.querySelector(".property-gallery_col-a");
    var galleryHeightPx = galleryColA.offsetHeight;

    // Calculate the 'top' position as 'height of galleryColA - subtractHeightPx'
    var topPositionPx = galleryHeightPx - subtractHeightPx + "px";

    // Set dimensions for beta and gamma pictures
    const picIds = [
      "beta-pic-a",
      "beta-pic-b",
      "gamma-pic-a",
      "gamma-pic-b",
      "gamma-pic-c",
    ];
    picIds.forEach((id) => {
      var pic = document.getElementById(id);
      pic.style.width = "5rem";
      pic.style.height = "5rem";
    });

    // Set positions for beta and gamma pictures with dynamic 'top' calculation
    document.getElementById(
      "beta-pic-a"
    ).style.cssText += `left: 2.5rem; top: ${topPositionPx};`;
    document.getElementById(
      "beta-pic-b"
    ).style.cssText += `left: 8.75rem; bottom: 2.5rem;`; // Beta-pic-b uses bottom positioning
    document.getElementById(
      "gamma-pic-a"
    ).style.cssText += `left: 15rem; top: ${topPositionPx};`;
    document.getElementById(
      "gamma-pic-b"
    ).style.cssText += `left: 21.25rem; top: ${topPositionPx};`;
    document.getElementById(
      "gamma-pic-c"
    ).style.cssText += `left: 26.5rem; bottom: 2.5rem;`; // Assume gamma-pic-c also uses bottom positioning
  });
}

function setupCloseClickListener() {
  var alphaPicClose = document.getElementById("alpha-pic-close");
  alphaPicClose.addEventListener("click", function () {
    alphaPicClose.style.display = "none";
    var alphaPicOpen = document.getElementById("alpha-pic-open");
    alphaPicOpen.style.display = "block";
    adjustDimensions(); // Call adjustDimensions to reset the width and height of 'alpha-pic'
    var betaPicA = document.getElementById("beta-pic-a");
    betaPicA.style.width = "14rem";
    betaPicA.style.height = "18.625rem";
    betaPicA.style.left = calculateTotalLeft();
    betaPicA.style.top = "0rem";
    var betaPicB = document.getElementById("beta-pic-b");
    betaPicB.style.width = "14rem";
    betaPicB.style.height = "18.625rem";
    betaPicB.style.left = calculateTotalLeft();
    betaPicB.style.bottom = "0rem";
    var gammaPicA = document.getElementById("gamma-pic-a");
    gammaPicA.style.width = "12rem";
    gammaPicA.style.height = "12rem";
    gammaPicA.style.left = totalLeftForGamma();
    gammaPicA.style.top = "0rem";
    var gammaPicB = document.getElementById("gamma-pic-b");
    gammaPicB.style.width = "12rem";
    gammaPicB.style.height = "12rem";
    gammaPicB.style.left = totalLeftForGamma();
    gammaPicB.style.top = "13.25rem";
    gammaPicB.style.bottom = "0rem";
    var gammaPicC = document.getElementById("gamma-pic-c");
    gammaPicC.style.width = "12rem";
    gammaPicC.style.height = "12rem";
    gammaPicC.style.left = totalLeftForGamma();
    gammaPicC.style.bottom = "0rem";
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
    betaPicA.style.top = "0rem";

    // Convert 7.5rem to pixels
    var remInPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    var subtractHeightPx = 7.5 * remInPixels;

    // Get the height of .property-gallery_col-a
    var galleryColA = document.querySelector(".property-gallery_col-a");
    var galleryHeightPx = galleryColA.offsetHeight;

    // Calculate the 'top' position as 'height of galleryColA - subtractHeightPx'
    var topPositionPx = galleryHeightPx - subtractHeightPx + "px";

    // Set dimensions for beta and gamma pictures
    const picIds = [
      "alpha-pic",
      "beta-pic-b",
      "gamma-pic-a",
      "gamma-pic-b",
      "gamma-pic-c",
    ];
    picIds.forEach((id) => {
      var pic = document.getElementById(id);
      pic.style.width = "5rem";
      pic.style.height = "5rem";
    });

    // Set positions for beta and gamma pictures with dynamic 'top' calculation
    document.getElementById(
      "alpha-pic"
    ).style.cssText += `left: 2.5rem; top: ${topPositionPx};`;
    document.getElementById(
      "beta-pic-b"
    ).style.cssText += `left: 8.75rem; bottom: 2.5rem;`; // Beta-pic-b uses bottom positioning
    document.getElementById(
      "gamma-pic-a"
    ).style.cssText += `left: 15rem; top: ${topPositionPx};`;
    document.getElementById(
      "gamma-pic-b"
    ).style.cssText += `left: 21.25rem; top: ${topPositionPx};`;
    document.getElementById(
      "gamma-pic-c"
    ).style.cssText += `left: 26.5rem; bottom: 2.5rem;`; // Assume gamma-pic-c also uses bottom positioning
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
    betaPicA.style.top = "0rem";

    adjustDimensions(); // Call adjustDimensions to reset the width and height of 'alpha-pic'
    var betaPicB = document.getElementById("beta-pic-b");
    betaPicB.style.width = "14rem";
    betaPicB.style.height = "18.625rem";
    betaPicB.style.left = calculateTotalLeft();
    betaPicB.style.bottom = "0rem";
    var gammaPicA = document.getElementById("gamma-pic-a");
    gammaPicA.style.width = "12rem";
    gammaPicA.style.height = "12rem";
    gammaPicA.style.left = totalLeftForGamma();
    gammaPicA.style.top = "0rem";
    var gammaPicB = document.getElementById("gamma-pic-b");
    gammaPicB.style.width = "12rem";
    gammaPicB.style.height = "12rem";
    gammaPicB.style.left = totalLeftForGamma();
    gammaPicB.style.top = "13.25rem";
    gammaPicB.style.bottom = "0rem";
    var gammaPicC = document.getElementById("gamma-pic-c");
    gammaPicC.style.width = "12rem";
    gammaPicC.style.height = "12rem";
    gammaPicC.style.left = totalLeftForGamma();
    gammaPicC.style.bottom = "0rem";
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
    betaPicB.style.bottom = "0rem";
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
    gammaPicA.style.top = "0rem";
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
    gammaPicA.style.top = "0rem";
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
    gammaPicB.style.bottom = "0rem";
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
    gammaPicB.style.bottom = "0rem";
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
    gammaPicC.style.bottom = "0rem";
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
    gammaPicC.style.bottom = "0rem";
  });
}

function initializePositions() {
  // Set initial left positions for beta pictures
  const totalLeftBeta = calculateTotalLeft();
  document.getElementById("beta-pic-a").style.left = totalLeftBeta;
  document.getElementById("beta-pic-b").style.left = totalLeftBeta;

  // Set initial left positions for gamma pictures
  const totalLeftGamma = totalLeftForGamma();
  document.getElementById("gamma-pic-a").style.left = totalLeftGamma;
  document.getElementById("gamma-pic-b").style.left = totalLeftGamma;
  document.getElementById("gamma-pic-c").style.left = totalLeftGamma;
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
  initializePositions(); // Apply initial left positions for beta and gamma elements.
});

window.addEventListener("resize", function () {
  adjustDimensions(); // Adjust alpha-pic dimensions on resize.
  initializePositions(); // Re-apply positions as they might need to adjust based on new window size.
});
