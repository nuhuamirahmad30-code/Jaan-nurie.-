// Wait for DOM to load fully
document.addEventListener("DOMContentLoaded", function() {

    // Helper function to safely bind click & touch events
    function bindCardClick(elementId, actionCallback) {
        const card = document.getElementById(elementId);
        if (card) {
            // Support both touch for mobile and click for WebView
            card.addEventListener("click", actionCallback);
            card.addEventListener("touchstart", function(e) {
                e.preventDefault(); // prevents double-firing on tap
                actionCallback();
            }, { passive: false });
        }
    }

    // Bind event listeners to your location cards
    bindCardClick("our-duplex", function() {
        console.log("OUR DUPLEX tapped");
        // Open Duplex scene / show dialog logic
    });

    bindCardClick("date-night", function() {
        console.log("DATE NIGHT tapped");
        // Open Date Night scene / show dialog logic
    });

    bindCardClick("el19-construction", function() {
        console.log("EL.19 CONSTRUCTION tapped");
        // Open Construction scene / show dialog logic
    });

});
