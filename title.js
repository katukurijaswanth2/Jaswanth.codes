const originalTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "📨you still have more here.";
  });
  window.addEventListener("focus", () => {
    document.title = originalTitle;
  });

  

