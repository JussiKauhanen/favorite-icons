(() => {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  const addSourceLink = () => {
    const resetSection = root.querySelector(".settings-reset");

    if (!resetSection || root.querySelector(".settings-source")) {
      return;
    }

    const sourceSection = document.createElement("div");
    const heading = document.createElement("strong");
    const copy = document.createElement("p");
    const link = document.createElement("a");

    sourceSection.className = "settings-source";
    heading.textContent = "Source code";
    copy.append("View and contribute to the project at ");
    link.href = "https://github.com/JussiKauhanen/favorite-icons";
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "JussiKauhanen/favorite-icons";
    copy.append(link, ".");
    sourceSection.append(heading, copy);
    resetSection.before(sourceSection);
  };

  const observer = new MutationObserver(addSourceLink);
  observer.observe(root, { childList: true, subtree: true });
  addSourceLink();
})();
