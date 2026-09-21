/**
 * TECHNOVANZA 2026 - Main Application Logic
 * Department of Computer Science and Applications
 *
 * Features:
 * - Dynamic data injection from data.js
 * - Live countdown timer
 * - Interactive 3D tilt physics on cards
 * - Event detail modals & Registration pass generator
 * - Web Audio API cyber sound engine (toggleable)
 * - ScrollSpy navigation & mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- AUDIO SYNTHESIZER (Web Audio API) ---
  const CyberAudio = (function () {
    let audioCtx = null;
    let isEnabled = false;

    function initCtx() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          audioCtx = new AudioContext();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    function playTone(freq, type, duration, startVol = 0.05) {
      if (!isEnabled || !audioCtx) return;
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(startVol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) {
        console.warn('Audio play error:', e);
      }
    }

    return {
      toggle: function () {
        initCtx();
        isEnabled = !isEnabled;
        if (isEnabled) {
          playTone(880, 'sine', 0.12, 0.08);
          setTimeout(() => playTone(1200, 'sine', 0.18, 0.06), 80);
        }
        return isEnabled;
      },
      click: function () {
        if (!isEnabled) return;
        playTone(950, 'triangle', 0.08, 0.04);
      },
      hover: function () {
        if (!isEnabled) return;
        playTone(520, 'sine', 0.06, 0.02);
      },
      beepSuccess: function () {
        if (!isEnabled) return;
        playTone(600, 'sine', 0.1, 0.06);
        setTimeout(() => playTone(900, 'sine', 0.15, 0.08), 90);
        setTimeout(() => playTone(1200, 'sine', 0.25, 0.07), 180);
      },
      isEnabled: () => isEnabled
    };
  })();

  // --- AUDIO TOGGLE BUTTON ---
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const iconUnmuted = document.getElementById('audio-icon-unmuted');
  const iconMuted = document.getElementById('audio-icon-muted');

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const active = CyberAudio.toggle();
      audioToggleBtn.classList.toggle('active', active);
      if (active) {
        iconUnmuted.style.display = 'block';
        iconMuted.style.display = 'none';
        audioToggleBtn.setAttribute('title', 'Cyber Sound Effects: Active');
      } else {
        iconUnmuted.style.display = 'none';
        iconMuted.style.display = 'block';
        audioToggleBtn.setAttribute('title', 'Cyber Sound Effects: Muted');
      }
    });

    // Default to muted icon visually on start
    iconUnmuted.style.display = 'none';
    iconMuted.style.display = 'block';
  }

  // Add subtle sound effects to buttons and cards
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, .btn, .nav-link, .event-card, .highlight-card')) {
      CyberAudio.click();
    }
  });

  // --- NAVBAR SCROLL & MOBILE DRAWER ---
  const navbar = document.getElementById('main-navbar');
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateScrollSpy();
  }, { passive: true });

  // Helper to smoothly scroll to any target element taking navbar height into account
  function scrollToSection(targetId) {
    if (!targetId || targetId === '#' || targetId === '#!') return;
    
    const selector = targetId.startsWith('#') ? targetId : `#${targetId}`;
    const targetEl = document.querySelector(selector);
    if (!targetEl) return;

    // Close mobile drawer if open
    if (navMenu && mobileNavToggle) {
      navMenu.classList.remove('open');
      mobileNavToggle.classList.remove('open');
      mobileNavToggle.setAttribute('aria-expanded', 'false');
    }

    const navHeight = navbar ? navbar.offsetHeight : 70;
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight + 2;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });

    // Update active state
    navLinks.forEach(link => {
      if (link.getAttribute('href') === selector) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (history.pushState) {
      history.pushState(null, null, selector);
    }
  }

  // Mobile drawer toggle
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileNavToggle.classList.toggle('open', isOpen);
      mobileNavToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Bind smooth scrolling to all header navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });

  // Bind smooth scrolling to other in-page hash links (brand logo, hero button, footer links)
  document.querySelectorAll('a[href^="#"]:not(.open-register-modal-btn)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });

  // --- SCROLLSPY ---
  const sections = document.querySelectorAll('section[id]');
  function updateScrollSpy() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (navItem && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        navItem.classList.add('active');
      }
    });
  }

  // --- POPULATE DATA FROM data.js ---
  function populateData() {
    if (typeof FEST_CONFIG === 'undefined') return;

    // 1. Stats Counter Strip
    const statsContainer = document.getElementById('stats-strip');
    if (statsContainer && FEST_CONFIG.stats) {
      statsContainer.innerHTML = FEST_CONFIG.stats.map(s => `
        <div class="glass-panel stat-item">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('');
    }

    // 2. Highlights (8 Cards)
    const highlightsContainer = document.getElementById('highlights-grid');
    if (highlightsContainer && FEST_CONFIG.highlights) {
      highlightsContainer.innerHTML = FEST_CONFIG.highlights.map(h => `
        <div class="glass-panel highlight-card" data-tilt>
          <div class="highlight-icon-box" aria-hidden="true">${h.icon}</div>
          <div class="highlight-category">${h.category}</div>
          <h3 class="highlight-title">${h.title}</h3>
          <p class="highlight-desc">${h.description}</p>
        </div>
      `).join('');
    }

    // 3. Events Grid (Interactive Flagship Events)
    const eventsContainer = document.getElementById('events-grid');
    if (eventsContainer && FEST_CONFIG.events) {
      const onlineEventIds = new Set(['posterpunk', 'paper-presentation']);
      const onlineEventOrder = ['posterpunk', 'paper-presentation'];
      const onlineEvents = onlineEventOrder
        .map(eventId => FEST_CONFIG.events.find(ev => ev.id === eventId))
        .filter(Boolean);
      const offlineEvents = FEST_CONFIG.events.filter(ev => !onlineEventIds.has(ev.id));

      const renderEventCard = (ev, displayNumber) => `
        <div class="glass-panel event-card" data-event-id="${ev.id}" data-tilt>
          <div>
            <div class="event-card-header">
              <span class="event-num-badge">EVENT ${String(displayNumber).padStart(2, '0')}</span>
              <span class="event-tag-pill">${ev.badge}</span>
            </div>
            <div class="event-icon-wrapper" aria-hidden="true">
              ${ev.iconSvg}
            </div>
            <h3 class="event-title">${ev.title}</h3>
            <p class="event-tagline">${ev.tagline}</p>
          </div>

          <div class="event-card-footer">
            <div class="event-prize-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
              <span>${ev.prize}</span>
            </div>
            <span class="event-details-btn">
              DETAILS <span>→</span>
            </span>
          </div>
        </div>
      `;

      const renderEventGroup = (title, date, events, className, startingNumber) => `
        <div class="event-group ${className}">
          <div class="event-group-heading">
            <span class="event-group-index">${className === 'event-group-online' ? '01' : '02'}</span>
            <h3>${title} <span class="event-group-date">${date}</span></h3>
          </div>
          <div class="event-group-grid">${events.map((event, index) => renderEventCard(event, startingNumber + index)).join('')}</div>
        </div>
      `;

      eventsContainer.innerHTML = [
        renderEventGroup('ONLINE EVENTS', '27 October 2026', onlineEvents, 'event-group-online', 1),
        renderEventGroup('OFFLINE EVENTS', '28 October 2026', offlineEvents, 'event-group-offline', onlineEvents.length + 1)
      ].join('');

      // Add click listeners to event cards for modal opening
      document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
          const eventId = card.getAttribute('data-event-id');
          openEventModal(eventId);
        });
      });
    }

    // 4. Logistics Info
    const infoDates = document.getElementById('info-dates');
    if (infoDates && FEST_CONFIG.eventDates) {
      infoDates.textContent = FEST_CONFIG.eventDates.displayDate;
    }
    const infoDays = document.getElementById('info-days');
    if (infoDays && FEST_CONFIG.eventDates) {
      infoDays.textContent = FEST_CONFIG.eventDates.displayDays;
    }
    const infoTime = document.getElementById('info-time');
    if (infoTime && FEST_CONFIG.eventDates) {
      infoTime.textContent = FEST_CONFIG.eventDates.displayTime;
    }
    const infoDeadline = document.getElementById('info-deadline');
    if (infoDeadline && FEST_CONFIG.eventDates) {
      infoDeadline.innerHTML = `Online Events Deadline: <strong>${FEST_CONFIG.eventDates.onlineRegistrationDeadline}</strong><br>Offline Events: <strong>On-spot registration available on ${FEST_CONFIG.eventDates.displayDate}</strong>`;
    }
    // 5. Contact Coordinators
    const studentList = document.getElementById('student-coords-list');
    if (studentList && FEST_CONFIG.coordinators && FEST_CONFIG.coordinators.student) {
      studentList.innerHTML = FEST_CONFIG.coordinators.student.map(sc => `
        <div class="coord-item">
          <div>
            <div class="coord-name">${sc.name}</div>
          </div>
          <a href="tel:${sc.phone.replace(/[^0-9+]/g, '')}" class="coord-phone">${sc.phone}</a>
        </div>
      `).join('');
    }

    const facultyList = document.getElementById('faculty-coords-list');
    if (facultyList && FEST_CONFIG.coordinators && FEST_CONFIG.coordinators.faculty) {
      facultyList.innerHTML = FEST_CONFIG.coordinators.faculty.map(fc => `
        <div class="coord-item">
          <div>
            <div class="coord-name">${fc.name}</div>
          </div>
          ${fc.email ? `<a href="mailto:${fc.email}" class="coord-phone" style="font-size: 0.85rem;">${fc.email}</a>` : ''}
        </div>
      `).join('');
    }
  }

  // --- 3D TILT EFFECT ON CARDS ---
  function init3DTilt() {
    // Only on pointer devices that support hover
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const tiltCards = document.querySelectorAll('[data-tilt]');
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -7;
          const rotateY = ((x - centerX) / centerX) * 7;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
      });
    }
  }

  // --- LIVE COUNTDOWN TIMER ---
  function initCountdown() {
    if (typeof FEST_CONFIG === 'undefined' || !FEST_CONFIG.eventDates) return;
    const targetDate = new Date(FEST_CONFIG.eventDates.startDate).getTime();

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    function update() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // --- EVENT SCOREBOARD ---
  function initEventScoreboard() {
    const scoreboard = document.querySelector('.event-scoreboard');
    const resultsModal = document.getElementById('results-modal');
    if (!scoreboard || typeof EVENT_CONFIG === 'undefined') return;

    const startDate = new Date(EVENT_CONFIG.startDate).getTime();
    const releaseDate = new Date(EVENT_CONFIG.resultsReleaseDate).getTime();
    const statusEl = document.getElementById('scoreboard-status');
    const messageEl = document.getElementById('scoreboard-message');
    const progressEl = document.getElementById('scoreboard-progress');
    const percentEl = document.getElementById('scoreboard-percent');
    const progressLabelEl = document.getElementById('scoreboard-progress-label');
    const countdownLabelEl = document.getElementById('scoreboard-countdown-label');
    const viewResultsBtn = document.getElementById('view-results-btn');
    const countdownEls = ['days', 'hours', 'minutes', 'seconds'].map(unit => document.getElementById(`scoreboard-${unit}`));
    const modalCountdownEl = document.getElementById('modal-scoreboard-countdown');

    function getProgress(now) {
      if (releaseDate <= startDate) return 100;
      const progress = ((now - startDate) / (releaseDate - startDate)) * 100;
      return Math.min(100, Math.max(0, progress));
    }

    function getTimeParts(now) {
      const remaining = Math.max(0, releaseDate - now);
      const totalSeconds = Math.floor(remaining / 1000);
      return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60
      };
    }

    function formatCountdown(parts) {
      return Object.entries(parts).map(([unit, value]) => `<span><strong>${String(value).padStart(2, '0')}</strong><small>${unit.toUpperCase()}</small></span>`).join('');
    }

    function renderLeaderboard() {
      const leaderboard = document.getElementById('leaderboard');
      if (!leaderboard || !Array.isArray(EVENT_RESULTS)) return;
      leaderboard.innerHTML = EVENT_RESULTS.map(result => `
        <div class="leaderboard-row">
          <strong>${String(result.position).padStart(2, '0')}</strong>
          <span>${result.name}</span>
          <b>${result.score}</b>
        </div>
      `).join('');
    }

    function updateScoreboard() {
      const now = Date.now();
      const isReleased = now >= releaseDate;
      const progress = isReleased ? 100 : getProgress(now);
      const roundedProgress = Math.round(progress);
      const parts = getTimeParts(now);

      progressEl.style.setProperty('--scoreboard-progress', `${progress}%`);
      percentEl.textContent = `${roundedProgress}%`;
      statusEl.textContent = isReleased ? 'RESULTS AVAILABLE' : 'RESULTS PENDING';
      messageEl.textContent = isReleased ? 'FINAL EVENT RESULTS ARE NOW AVAILABLE' : 'FINAL RESULTS ARE BEING PREPARED';
      progressLabelEl.innerHTML = isReleased ? 'RESULTS<br>AVAILABLE' : 'RESULTS<br>PENDING';
      scoreboard.classList.toggle('results-released', isReleased);
      if (isReleased) {
        countdownLabelEl.textContent = 'RESULTS AVAILABLE';
        countdownEls.forEach(element => { element.textContent = '00'; });
      } else {
        countdownLabelEl.textContent = 'RESULTS AVAILABLE IN';
        countdownEls.forEach((element, index) => { element.textContent = String(Object.values(parts)[index]).padStart(2, '0'); });
      }
      if (modalCountdownEl && !isReleased) modalCountdownEl.innerHTML = formatCountdown(parts);
      if (resultsModal?.classList.contains('active') && isReleased) renderFinalResults();
      return isReleased;
    }

    function renderFinalResults() {
      const title = document.getElementById('results-modal-title');
      const pendingView = document.getElementById('pending-results-view');
      const finalView = document.getElementById('final-results-view');
      if (!title || !pendingView || !finalView) return;
      title.textContent = 'FINAL SCOREBOARD';
      pendingView.hidden = true;
      finalView.hidden = false;
      renderLeaderboard();
    }

    function renderPendingResults() {
      const title = document.getElementById('results-modal-title');
      const pendingView = document.getElementById('pending-results-view');
      const finalView = document.getElementById('final-results-view');
      const modalProgress = document.getElementById('modal-scoreboard-progress');
      const modalPercent = document.getElementById('modal-scoreboard-percent');
      if (!title || !pendingView || !finalView || !modalProgress || !modalPercent) return;
      const progress = getProgress(Date.now());
      title.textContent = 'RESULTS NOT AVAILABLE YET';
      pendingView.hidden = false;
      finalView.hidden = true;
      modalProgress.style.setProperty('--scoreboard-progress', `${progress}%`);
      modalPercent.textContent = `${Math.round(progress)}%`;
    }

    function openResults() {
      if (!resultsModal) return;
      if (updateScoreboard()) renderFinalResults();
      else renderPendingResults();
      resultsModal.classList.add('active');
      resultsModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeResults() {
      if (!resultsModal) return;
      resultsModal.classList.remove('active');
      resultsModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    viewResultsBtn?.addEventListener('click', openResults);
    document.getElementById('close-results-modal')?.addEventListener('click', closeResults);
    document.getElementById('close-results-action')?.addEventListener('click', closeResults);
    resultsModal?.addEventListener('click', event => {
      if (event.target === resultsModal) closeResults();
    });
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape' && resultsModal?.classList.contains('active')) closeResults();
    });

    updateScoreboard();
    const timer = window.setInterval(() => {
      const released = updateScoreboard();
      if (released) window.clearInterval(timer);
    }, 1000);
  }

  // --- MODAL CONTROLLER (Event Detail Modal Only) ---
  const eventModal = document.getElementById('event-detail-modal');
  const closeEventModalBtn = document.getElementById('close-event-modal');

  function openEventModal(eventId) {
    if (!FEST_CONFIG || !FEST_CONFIG.events) return;
    const ev = FEST_CONFIG.events.find(e => e.id === eventId);
    if (!ev) return;

    const onlineEventOrder = ['posterpunk', 'paper-presentation'];
    const displayOrder = [
      ...onlineEventOrder.map(onlineEventId => FEST_CONFIG.events.find(event => event.id === onlineEventId)).filter(Boolean),
      ...FEST_CONFIG.events.filter(event => !onlineEventOrder.includes(event.id))
    ];
    const displayNumber = displayOrder.findIndex(event => event.id === ev.id) + 1;

    document.getElementById('modal-event-num').textContent = `EVENT ${String(displayNumber).padStart(2, '0')} • ${ev.category.toUpperCase()}`;
    document.getElementById('modal-event-title').textContent = ev.title;
    document.getElementById('modal-event-tagline').textContent = ev.tagline;
    document.getElementById('modal-event-team').textContent = ev.teamSize;
    document.getElementById('modal-event-duration').textContent = ev.duration;
    document.getElementById('modal-event-prize').textContent = ev.prize;
    document.getElementById('modal-event-desc').textContent = ev.description;

    const headsList = document.getElementById('modal-event-heads');
    if (headsList) {
      const eventHeads = Array.isArray(ev.eventHeads) && ev.eventHeads.length
        ? ev.eventHeads
        : [{ name: 'Event Coordinator', phone: 'Contact venue desk' }];

      headsList.innerHTML = eventHeads.map(head => `
        <li>
          <span>${head.name}</span>
          <a href="tel:${String(head.phone).replace(/[^0-9+]/g, '')}" class="coord-phone">${head.phone}</a>
        </li>
      `).join('');
    }

    // Rounds
    const roundsList = document.getElementById('modal-event-rounds');
    roundsList.innerHTML = ev.rounds.map(r => `
      <li><strong>${r.name}:</strong> ${r.desc}</li>
    `).join('');

    // Rules
    const rulesList = document.getElementById('modal-event-rules');
    rulesList.innerHTML = ev.rules.map(r => `
      <li>${r}</li>
    `).join('');

    // Register button in event modal opens the shared registration form.
    const regBtn = document.getElementById('modal-register-this-event-btn');
    if (regBtn) {
      regBtn.href = FEST_CONFIG.registrationLink;
      regBtn.target = '_blank';
      regBtn.rel = 'noopener noreferrer';
      regBtn.onclick = () => closeAllModals();
    }

    eventModal.classList.add('active');
    eventModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    if (eventModal) {
      eventModal.classList.remove('active');
      eventModal.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  if (closeEventModalBtn) closeEventModalBtn.addEventListener('click', closeAllModals);

  // Close when clicking modal backdrop
  if (eventModal) {
    eventModal.addEventListener('click', (e) => {
      if (e.target === eventModal) closeAllModals();
    });
  }

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  // --- ALL "REGISTER" LINKS → Smooth scroll to QR section ---
  document.querySelectorAll('.scroll-to-qr').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Close event modal if open
      closeAllModals();
      setTimeout(() => scrollToSection('#qr-registration'), 100);
    });
  });

  // --- INITIALIZE ALL SUBSYSTEMS ---
  populateData();
  init3DTilt();
  initCountdown();
  initEventScoreboard();
});
