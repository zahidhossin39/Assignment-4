let currentTab = "all";
const tabActive = ["bg-red-500", "border-red-500", "text-white"];
const tabInactive = [
  "bg-transparent",
  "text-slate-700",
  "border-slate-300",
  "text-black",
];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;

  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      // For all other tabs, remove active styles and add inactive styles
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }

  // Move the visibility logic inside the function so it can access 'tab'
  // First, hide all containers to reset the view
  allContainer.classList.add("hidden");
  interviewContainer.classList.add("hidden");
  rejectedContainer.classList.add("hidden");

  emptyState.classList.add("hidden");

  // Show the container that matches the clicked tab
  if (tab === "all") {
    allContainer.classList.remove("hidden");
    if (allContainer.querySelectorAll(".card").length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.querySelectorAll(".card").length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.querySelectorAll(".card").length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  updateState();
}

// state
const totalstate = document.getElementById("state-total");
const interviewstate = document.getElementById("state-interview");
const rejectedstate = document.getElementById("state-rejected");
const availablestate = document.getElementById("available");

switchTab(currentTab);

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const target = event.target;
    const btn = target.closest("button");

    // 1. If no button was clicked (e.g., clicked the background), do nothing
    if (!btn) return;

    const card = target.closest(".card");
    const status = card.querySelector(".status");
    const parent = card.parentNode;

    // 2. Check specifically for the "interview" class on the button
    if (btn.classList.contains("interview")) {
      interviewContainer.querySelector("p.text-center")?.remove();
      interviewContainer.appendChild(card);
      status.innerText = "Interviewed";
      status.classList.remove("bg-slate-100", "text-blue-900");
      status.classList.add("bg-green-100", "text-green-700", "px-2", "rounded");
      // updateState();
    }
    if (btn.classList.contains("rejected")) {
      rejectedContainer.querySelector("p.text-center")?.remove();
      rejectedContainer.appendChild(card);
      status.innerText = "Rejected";
      status.classList.remove("bg-slate-100", "text-blue-900");
      status.classList.add("bg-red-100", "text-red-700", "px-2", "rounded");
      // updateState();
    }
    if (btn.classList.contains("delete")) {
      parent.removeChild(card);
    }
    updateState();
  });
// updateState
function updateState() {
  totalstate.innerText = allContainer.querySelectorAll(".card").length;
  interviewstate.innerText =
    interviewContainer.querySelectorAll(".card").length;
  rejectedstate.innerText = rejectedContainer.querySelectorAll(".card").length;

  const count = {
    all: allContainer.querySelectorAll(".card").length,
    interview: interviewContainer.querySelectorAll(".card").length,
    rejected: rejectedContainer.querySelectorAll(".card").length,
  };

  totalstate.innerText = count.all + count.interview + count.rejected;
  interviewstate.innerText = count["interview"];
  rejectedstate.innerText = count["rejected"];
  availablestate.innerText = count[currentTab];

  if (count[currentTab] < 1) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}
updateState();
