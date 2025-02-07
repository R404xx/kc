let currentOpenRule = null; // Keep track of the currently open rule

function toggleRule(ruleId) {
    const rule = document.getElementById(ruleId);

    // Close the currently open rule if it's not the one being clicked
    if (currentOpenRule && currentOpenRule !== rule) {
        closeRule(currentOpenRule);
    }

    // Toggle the clicked rule
    if (rule.style.display === "none" || rule.style.display === "") {
        openRule(rule);
        currentOpenRule = rule; // Set the newly opened rule as the current one
    } else {
        closeRule(rule);
        currentOpenRule = null; // No rule is open now
    }
}

function openRule(rule) {
    rule.style.display = "block";
    rule.style.maxHeight = "0"; // Start collapsed
    setTimeout(() => {
        rule.style.transition = "max-height 0.5s ease";
        rule.style.maxHeight = rule.scrollHeight + "px"; // Expand
    }, 0);
}

function closeRule(rule) {
    rule.style.transition = "max-height 0.5s ease";
    rule.style.maxHeight = "0"; // Collapse
    setTimeout(() => {
        rule.style.display = "none";
    }, 500); // Wait for animation to complete
}
