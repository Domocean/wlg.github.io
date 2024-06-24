const openLinkButton = document.createElement("button");
openLinkButton.textContent = "Open Link";
openLinkButton.className = "open-link";
openLinkButton.onclick = function() {
    window.open(link, "_blank");
    openLinkButton.classList.add("clicked");
};

const copyButton = document.createElement("button");
copyButton.textContent = "Copy Link";
copyButton.onclick = function() {
    navigator.clipboard.writeText(link).then(() => {
        copyButton.textContent = "Copied!";
        copyButton.classList.add("copied");
        setTimeout(() => {
            copyButton.textContent = "Copy Link";
            copyButton.classList.remove("copied");
        }, 2000);
    });
};
