(function () {
  var WA_NUMBER = "33753192622";

  var T = {
    fr: {
      nav_services: "Services", nav_destinations: "Destinations", nav_pourquoi: "Pourquoi nous", nav_contact: "Contact",
      hero_eyebrow: "Chauffeur privé — Caen & Normandie",
      hero_title: 'Votre trajet,<br><span class="gold-text">notre priorité.</span>',
      hero_sub: "Aéroports, gares, longues distances et excursions. Une berline noire, un chauffeur professionnel, un trajet pensé pour vous.",
      hero_cta_form: "Demande en ligne",
      badge_1: "Aéroports", badge_2: "Gares", badge_3: "Toutes distances",
      strip_1: "Sur réservation", strip_2: "& ses environs", strip_3_num: "Partout", strip_3: "en France, toutes distances",
      services_eyebrow: "Nos services", services_title: "Un chauffeur pour chaque trajet",
      service1_title: "Transferts aéroport",
      service1_text: "Caen-Carpiquet, Deauville, Paris CDG et Orly, Beauvais. Suivi de vol et attente incluse à l'arrivée.",
      service2_title: "Transferts gare",
      service2_text: "Gare de Caen, Bayeux, Lisieux et gares parisiennes. Prise en charge à l'heure, aide aux bagages.",
      service3_title: "Toutes distances",
      service3_text: "Trajets courts en ville comme longues distances partout en France. Tarif annoncé avant le départ.",
      service4_title: "Excursions & événements",
      service4_text: "Plages du Débarquement, Mont Saint-Michel, Honfleur, mariages et soirées. À la demi-journée ou à la journée.",
      dest_eyebrow: "Au départ de Caen", dest_title: "La Normandie, vue depuis votre siège",
      dest1_text: "L'îlot mythique, à la lumière du soir",
      dest2_text: "Les falaises emblématiques de la côte d'Albâtre",
      dest3_text: "Le vieux bassin et ses maisons de caractère",
      pourquoi_eyebrow: "Pourquoi 2MC VTC", pourquoi_title: "La rigueur d'un professionnel, le confort d'un ami",
      pourquoi_1: "Chauffeur VTC agréé, assurance professionnelle à jour",
      pourquoi_2: "Berline récente, propre et climatisée",
      pourquoi_3: "Tarifs clairs, communiqués avant la course",
      pourquoi_4: "Réservation simple par téléphone, WhatsApp ou formulaire",
      pourquoi_quote: "« Votre trajet est notre priorité : ponctualité, discrétion et attention, du départ à l'arrivée. »",
      pourquoi_quote_by: "— 2MC VTC",
      contact_eyebrow: "Réservation", contact_title: "Organisons votre trajet",
      contact_sub: "Le plus simple : un appel ou un message. Sinon, remplissez le formulaire, il ouvre WhatsApp avec votre demande prête à envoyer.",
      contact_zone_value: "Caen & ses environs — toutes distances",
      contact_call: "Appeler",
      form_name: "Nom", form_name_ph: "Votre nom", form_phone: "Téléphone", form_date: "Date", form_time: "Heure",
      form_from: "Départ", form_from_ph: "Adresse ou lieu de départ", form_to: "Arrivée", form_to_ph: "Adresse ou destination",
      form_message: "Message (optionnel)", form_message_ph: "Nombre de passagers, bagages, numéro de vol...",
      form_submit: "Envoyer la demande",
      form_sent: "WhatsApp s'ouvre avec votre demande. Il ne reste qu'à l'envoyer.",
      wa_intro: "Bonjour 2MC VTC, je souhaite réserver une course :",
      wa_name: "Nom", wa_phone: "Téléphone", wa_date: "Date", wa_time: "Heure", wa_from: "Départ", wa_to: "Arrivée", wa_msg: "Message",
      footer_copy: "Chauffeur privé à Caen. Tous droits réservés."
    },
    en: {
      nav_services: "Services", nav_destinations: "Destinations", nav_pourquoi: "Why us", nav_contact: "Contact",
      hero_eyebrow: "Private driver — Caen & Normandy",
      hero_title: 'Your journey,<br><span class="gold-text">our priority.</span>',
      hero_sub: "Airports, train stations, long distance and day trips. A black sedan, a professional driver, a ride designed around you.",
      hero_cta_form: "Online request",
      badge_1: "Airports", badge_2: "Stations", badge_3: "Any distance",
      strip_1: "By reservation", strip_2: "& surrounding area", strip_3_num: "Anywhere", strip_3: "in France, any distance",
      services_eyebrow: "Our services", services_title: "A driver for every journey",
      service1_title: "Airport transfers",
      service1_text: "Caen-Carpiquet, Deauville, Paris CDG and Orly, Beauvais. Flight tracking and waiting time included on arrival.",
      service2_title: "Station transfers",
      service2_text: "Caen, Bayeux, Lisieux and Paris stations. On-time pickup and help with your luggage.",
      service3_title: "Any distance",
      service3_text: "Short city rides as well as long-distance trips anywhere in France. Price confirmed before departure.",
      service4_title: "Tours & events",
      service4_text: "D-Day beaches, Mont Saint-Michel, Honfleur, weddings and evenings out. Half-day or full-day.",
      dest_eyebrow: "From Caen", dest_title: "Normandy, seen from your seat",
      dest1_text: "The legendary island, in the evening light",
      dest2_text: "The iconic cliffs of the Alabaster Coast",
      dest3_text: "The old harbour and its characterful houses",
      pourquoi_eyebrow: "Why 2MC VTC", pourquoi_title: "A professional's rigour, a friend's comfort",
      pourquoi_1: "Licensed VTC driver, up-to-date professional insurance",
      pourquoi_2: "Recent, clean, air-conditioned sedan",
      pourquoi_3: "Clear prices, confirmed before the ride",
      pourquoi_4: "Easy booking by phone, WhatsApp or form",
      pourquoi_quote: "“Your journey is our priority: punctuality, discretion and care, from pickup to drop-off.”",
      pourquoi_quote_by: "— 2MC VTC",
      contact_eyebrow: "Booking", contact_title: "Let's plan your ride",
      contact_sub: "The easiest way is a call or a message. Or fill in the form: it opens WhatsApp with your request ready to send.",
      contact_zone_value: "Caen & surrounding area — any distance",
      contact_call: "Call",
      form_name: "Name", form_name_ph: "Your name", form_phone: "Phone", form_date: "Date", form_time: "Time",
      form_from: "Pickup", form_from_ph: "Pickup address or place", form_to: "Drop-off", form_to_ph: "Address or destination",
      form_message: "Message (optional)", form_message_ph: "Passengers, luggage, flight number...",
      form_submit: "Send request",
      form_sent: "WhatsApp is opening with your request. Just hit send.",
      wa_intro: "Hello 2MC VTC, I would like to book a ride:",
      wa_name: "Name", wa_phone: "Phone", wa_date: "Date", wa_time: "Time", wa_from: "Pickup", wa_to: "Drop-off", wa_msg: "Message",
      footer_copy: "Private driver in Caen. All rights reserved."
    }
  };

  var lang = "fr";
  try { lang = localStorage.getItem("2mc_lang") || "fr"; } catch (e) {}

  function applyLang(l) {
    lang = T[l] ? l : "fr";
    var d = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html"); if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-placeholder"); if (d[k] != null) el.placeholder = d[k];
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    try { localStorage.setItem("2mc_lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.dataset.lang); });
  });
  applyLang(lang);

  // Nav
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  document.getElementById("navBurger").addEventListener("click", function () { nav.classList.toggle("open"); });
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); });
  });

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Min date = today
  var dateInput = document.getElementById("date");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

  // Form -> WhatsApp
  var form = document.getElementById("bookingForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = T[lang], f = form.elements;
    var lines = [
      d.wa_intro, "",
      d.wa_name + " : " + f.name.value,
      d.wa_phone + " : " + f.phone.value,
      d.wa_date + " : " + f.date.value,
      d.wa_time + " : " + f.time.value,
      d.wa_from + " : " + f.from.value,
      d.wa_to + " : " + f.to.value
    ];
    if (f.message.value.trim()) lines.push(d.wa_msg + " : " + f.message.value.trim());
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    document.getElementById("formNote").textContent = d.form_sent;
  });

  // Reveal on scroll
  var targets = document.querySelectorAll(".section-head, .service-card, .dest-card, .pourquoi-text, .pourquoi-quote, .contact-left, .contact-form");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { t.classList.add("reveal"); io.observe(t); });
  }
})();
