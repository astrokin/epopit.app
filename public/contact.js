import { app } from "/firebase-init.js";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.querySelector("[data-contact-form]");
const statusNode = document.querySelector("[data-contact-status]");
const db = getFirestore(app);

function setStatus(message, type) {
  if (!statusNode) {
    return;
  }

  statusNode.textContent = message;
  statusNode.dataset.state = type;
}

function readValue(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const submitButton = form.querySelector("[data-contact-submit]");
    const honeypot = readValue(formData, "company");

    if (honeypot) {
      form.reset();
      setStatus("Thanks, your message was sent.", "success");
      return;
    }

    const name = readValue(formData, "name");
    const email = readValue(formData, "email");
    const message = readValue(formData, "message");

    if (!name || !email || !message) {
      setStatus("Please fill out every field.", "error");
      return;
    }

    submitButton.disabled = true;
    setStatus("Sending...", "pending");

    try {
      await addDoc(collection(db, "contactRequests"), {
        name,
        email,
        message,
        source: "epopit.app",
        page: window.location.pathname,
        userAgent: window.navigator.userAgent.slice(0, 300),
        status: "new",
        createdAt: serverTimestamp()
      });

      form.reset();
      setStatus("Thanks, your message was sent.", "success");
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("Message could not be sent. Please email epopitapp@gmail.com.", "error");
    } finally {
      submitButton.disabled = false;
    }
  });
}
