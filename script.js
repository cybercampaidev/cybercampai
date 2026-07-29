// Replace with the actual Call for Sponsors slide deck URL.
const SPONSOR_DECK_URL =
  "mailto:hello@cybercamp.ai?subject=Call%20for%20sponsors%20%E2%80%94%20Cybercamp.ai";
// Replace with the actual ticket sales and CFP form URLs.
const TICKETS_URL =
  "mailto:hello@cybercamp.ai?subject=Tickets%20%E2%80%94%20Cybercamp.ai";
const CALL_FOR_PAPERS_URL =
  "mailto:hello@cybercamp.ai?subject=Call%20for%20papers%20%E2%80%94%20Cybercamp.ai";

const schedules = {
  conference: [
    ["08:00", "08:50", "Registration & morning coffee", "Foyer · Community", "Organising team", ["Collect your badge and explore the venue", "Community and partner zone opens", "Coffee before the opening session"]],
    ["09:00", "09:45", "When AI becomes part of the attack", "Main stage · Keynote · EN", "Alex Morgan", ["How attack preparation and scaling are changing", "Where AI genuinely helps attackers—and where it is only hype", "What defenders need to change over the next 12 months"]],
    ["10:05", "10:40", "Prompt injection without the magic", "Track A · Security of AI · CZ", "Jana Nováková", ["A basic threat model for LLM applications", "Indirect prompt injection through a practical example", "The limits of filtering and layered defence"]],
    ["10:50", "11:25", "AI in the SOC: what survived year one", "Track B · AI for Defence · CZ", "Martin Dvořák", ["Alert triage and context enrichment", "Where automation created more work", "Metrics for deciding whether to keep a solution"]],
    ["11:45", "12:20", "Red teaming autonomous agents", "Main stage · Live demo · EN", "Sarah Chen", ["The attack surface of a tool-enabled agent", "Live demonstration of permission abuse", "Practical guardrails and monitoring"]],
    ["12:30", "13:30", "Lunch & community zone", "Foyer · Networking", "Cybercamp community", ["Lunch", "Lightning talks in the community zone", "CTF and partner meet-ups"]],
    ["13:40", "14:15", "Deploying a local model securely", "Track A · Engineering · CZ", "Petr Král", ["Choosing between a local model and an API", "Protecting data, models and infrastructure", "Audit trails and operational monitoring"]],
    ["14:25", "15:00", "Deepfakes and identity verification", "Track B · Adversarial AI · EN", "Maya Patel", ["Current voice and image deepfake capabilities", "How common verification processes fail", "A practical mix of technical and procedural controls"]],
    ["15:30", "16:15", "Incident response for an AI application", "Main stage · Case study · CZ", "Lucie Horáková", ["What an incident in a generative AI application looks like", "Which logs were missing during the investigation", "Lessons for development, the SOC and service owners"]],
    ["16:35", "17:25", "Panel: who is accountable for secure AI?", "Main stage · Panel · CZ/EN", "4 guests + moderator", ["The responsibilities of vendors, developers and operators", "Regulation versus practical risk management", "Audience questions"]],
    ["19:00", "23:00", "Campfire afterparty", "Networking · Informal programme", "All attendees", ["Informal networking", "Community meet-ups", "Space to continue conversations from the programme"]]
  ],
  workshops: [
    ["09:00", "09:40", "Registration & lab check", "Workshop rooms · Setup", "Lab team", ["Check the working environment", "Connect to the lab infrastructure", "Workshop safety rules"]],
    ["10:00", "12:30", "Attacking LLM applications in practice", "Lab 1 · Advanced · CZ", "Tomáš Jelínek", ["Map inputs and data flows", "Prompt injection and data exfiltration", "Design and verify layered defences"]],
    ["10:00", "12:30", "Build an AI assistant for your SOC", "Lab 2 · Intermediate · EN", "Emma Wilson", ["Secure alert processing", "Grounding with internal sources", "Quality evaluation and sensitive data protection"]],
    ["12:30", "13:30", "Lunch", "Shared break", "—", ["Lunch for workshop attendees", "Time for consultations with instructors"]],
    ["13:30", "16:30", "Threat modelling an autonomous agent", "Lab 1 · Intermediate · CZ", "Klára Veselá", ["Model assets, trust boundaries and permissions", "Simulate an agent abusing its tools", "Controls and diagnostic scenarios"]],
    ["16:45", "17:15", "Joint debrief", "Main workshop room · Wrap-up", "Lab leads", ["What worked and what failed", "Compare different team solutions", "Recommended resources for further learning"]]
  ]
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSchedule(type) {
  const panel = document.querySelector(`#panel-${type}`);
  panel.innerHTML = schedules[type].map((item, index) => {
    const [time, end, title, meta, speaker, agenda] = item.map((value) =>
      Array.isArray(value) ? value.map(escapeHtml) : escapeHtml(value)
    );
    return `
      <details class="schedule-item">
        <summary>
          <div class="schedule-time"><time>${time}</time><span>${end}</span></div>
          <div class="schedule-title"><h3>${title}</h3><p>${meta}</p></div>
          <div class="schedule-speaker"><span>Speaker</span><strong>${speaker}</strong></div>
          <span class="schedule-toggle" aria-hidden="true">+</span>
          <span class="slot-index">${String(index + 1).padStart(2, "0")}</span>
        </summary>
        <div class="schedule-agenda">
          <span>Agenda</span>
          <ul>${agenda.map((point) => `<li>${point}</li>`).join("")}</ul>
        </div>
      </details>
    `;
  }).join("");
}

renderSchedule("conference");
renderSchedule("workshops");

document.querySelectorAll("[data-schedule]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const activeType = tab.dataset.schedule;
    document.querySelectorAll("[data-schedule]").forEach((candidate) => {
      const selected = candidate === tab;
      candidate.classList.toggle("active", selected);
      candidate.setAttribute("aria-selected", String(selected));
    });
    document.querySelector("#panel-conference").hidden = activeType !== "conference";
    document.querySelector("#panel-workshops").hidden = activeType !== "workshops";
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

menuToggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".sponsor-deck-link").forEach((link) => {
  link.href = SPONSOR_DECK_URL;
});

document.querySelectorAll(".ticket-link").forEach((link) => {
  link.href = TICKETS_URL;
});

document.querySelectorAll(".cfp-link").forEach((link) => {
  link.href = CALL_FOR_PAPERS_URL;
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
