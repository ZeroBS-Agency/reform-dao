function adjustDimensions() {
    const galleryColA = document.querySelector(".property-gallery_col-a");
    const menuHeight = document.querySelector(".property-gallery_panel-menu").offsetHeight;
    const additionalHeightInPx = convertRemToPixels(1.25);
    const newHeight = galleryColA.offsetHeight - (menuHeight + additionalHeightInPx);

    setElementSize("alpha-pic", galleryColA.offsetWidth, newHeight);
}

function calculateTotalLeft(additionalRem = 1.25) {
    const galleryWidth = document.querySelector(".property-gallery_col-a").offsetWidth;
    return galleryWidth + convertRemToPixels(additionalRem) + "px";
}

function setElementSize(id, width, height, additionalStyles = {}) {
    const element = document.getElementById(id);
    element.style.width = typeof width === "number" ? `${width}px` : width;
    element.style.height = typeof height === "number" ? `${height}px` : height;
    Object.keys(additionalStyles).forEach(key => {
        element.style[key] = additionalStyles[key];
    });
}

function convertRemToPixels(rem) {
    return parseFloat(getComputedStyle(document.documentElement).fontSize) * rem;
}

function adjustOtherElements(exceptId, isOpen) {
    const picIds = ["alpha-pic", "beta-pic-a", "beta-pic-b", "gamma-pic-a", "gamma-pic-b", "gamma-pic-c"].filter(id => id !== exceptId);
    const newSize = isOpen ? { width: "5rem", height: "5rem" } : calculateElementOriginalSize(id);
    picIds.forEach(id => {
        setElementSize(id, newSize.width, newSize.height);
    });
    // Further adjustments can be made here based on specific requirements
}

function calculateElementOriginalSize(id) {
    switch (id) {
        case "beta-pic-a":
        case "beta-pic-b":
            return { width: "14rem", height: "18.625rem" };
        case "gamma-pic-a":
        case "gamma-pic-b":
        case "gamma-pic-c":
            return { width: "12rem", height: "12rem" };
        default:
            // Assuming 'alpha-pic' or any other potential IDs follow this default size
            return { width: "auto", height: "auto" };
    }
}

function setupClickListener() {
    document.querySelectorAll("[id$='-open'], [id$='-close']").forEach(button => {
        button.addEventListener("click", function () {
            const isOpen = button.id.endsWith("-open");
            const baseId = button.id.replace(/-open$|-close$/, "");
            document.getElementById(`${baseId}-open`).style.display = isOpen ? "none" : "flex";
            document.getElementById(`${baseId}-close`).style.display = isOpen ? "flex" : "none";

            if (["alpha-pic", "beta-pic-a", "beta-pic-b", "gamma-pic-a", "gamma-pic-b", "gamma-pic-c"].includes(baseId)) {
                const fullSize = isOpen ? "100%" : calculateElementOriginalSize(baseId);
                setElementSize(baseId, fullSize.width, fullSize.height, isOpen ? { zIndex: "2" } : {});
                adjustOtherElements(baseId, isOpen);
            }
        });
    });
}

function initializePositions() {
    // Set initial positions for beta and gamma pictures
    document.getElementById("beta-pic-a").style.left = calculateTotalLeft();
    document.getElementById("beta-pic-b").style.left = calculateTotalLeft();
    document.getElementById("gamma-pic-a").style.left = calculateTotalLeft(16.5);
    document.getElementById("gamma-pic-b").style.left = calculateTotalLeft(16.5);
    document.getElementById("gamma-pic-c").style.left = calculateTotalLeft(16.5);
}

document.addEventListener("DOMContentLoaded", function () {
    setupClickListener();
    adjustDimensions(); // Ensure initial dimensions are set
    initializePositions(); // Apply initial positions for beta and gamma elements
});

window.addEventListener("resize", function () {
    adjustDimensions(); // Adjust dimensions on resize
    initializePositions(); // Re-apply positions as they might need adjustment based on new window size
});
