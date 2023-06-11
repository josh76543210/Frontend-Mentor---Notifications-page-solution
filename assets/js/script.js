"use strict";

// Elements
const unreadNumberEl = document.querySelector(".unread-number");
const markReadBtn = document.querySelector(".mark-read");
const notificationEls = document.querySelectorAll(".notification");

// Event-listeners
markReadBtn.addEventListener("click", markAllUnread);
notificationEls.forEach((notification) => {
  notification.addEventListener("click", toggleNotification);
});

// Functions
// toggle notification
function toggleNotification(e) {
  // if clicked item is not a link
  if (e.target.tagName !== "A") {
    this.classList.toggle("unread");
    updateTopBar();
  }
}

// mark all notifications unread
function markAllUnread() {
  notificationEls.forEach((notification) => {
    notification.classList.remove("unread");
  });
  updateTopBar();
}

// update top bar
function updateTopBar() {
  const numberOfUnread = document.querySelectorAll(".unread").length;

  // if there are no unread
  if (numberOfUnread === 0) {
    unreadNumberEl.style.display = "none";
    markReadBtn.classList.remove("active");
  } else {
    unreadNumberEl.style.display = "flex";
    unreadNumberEl.innerHTML = numberOfUnread;
    markReadBtn.classList.add("active");
  }
}
