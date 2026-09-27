/**
 * Centro Clínico de la Dra. Belisa Medina
 * Main Client Script
 * Features: Modalities ScrollTrigger,
 * Clinical Tools Switcher, Patient App Routine Toggle, Splide Carousel,
 * Modals & WhatsApp Booking Flow.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroEntrance();

  // 1. Initialize Before-and-After Comparison
  initBeforeAfterCarousel();

  // 2. Initialize Modalities Sticky ScrollTrigger
  initModalitiesScroll();

  // 3. Initialize Interactive Clinical Tools Switcher
  initClinicalToolsSwitcher();

  // 4. Initialize Workflow-to-App Mode Toggle
  initWorkflowToggle();

  // 5. Initialize Splide Protocol Carousel
  initProtocolsSlider();

  // 6. Initialize Dynamic Nav Shrink on Scroll
  initNavScrollEffect();

  // 7. Set Min Date for Booking to Today
  initBookingDatePicker();
});

function initHeroEntrance() {
  const hero = document.querySelector('.section-hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  try {
    if (sessionStorage.getItem('belisaHeroEntrancePlayed')) return;
    sessionStorage.setItem('belisaHeroEntrancePlayed', 'true');
  } catch {}

  hero.classList.add('is-entering');
}

function initBeforeAfterCarousel() {
  const frame = document.getElementById('comparisonFrame');
  const range = document.getElementById('comparisonRange');
  const caseLabel = document.getElementById('comparisonCase');
  const caseCount = document.getElementById('comparisonCount');
  const previousButton = document.getElementById('comparisonPrev');
  const nextButton = document.getElementById('comparisonNext');
  if (!frame || !range || !caseLabel || !caseCount || !previousButton || !nextButton) return;

  const cases = ['results_case_1', 'results_case_2', 'results_case_3'];
  let activeCase = 0;

  function updateComparison() {
    frame.style.setProperty('--comparison-position', `${range.value}%`);
  }

  function updateCase(direction) {
    activeCase = (activeCase + direction + cases.length) % cases.length;
    frame.dataset.case = String(activeCase + 1);
    range.value = '50';
    caseLabel.setAttribute('data-i18n', cases[activeCase]);
    caseLabel.textContent = window.i18n ? window.i18n.t(cases[activeCase]) : `Case ${String(activeCase + 1).padStart(2, '0')}`;
    caseCount.textContent = `${String(activeCase + 1).padStart(2, '0')} / ${String(cases.length).padStart(2, '0')}`;
    updateComparison();
  }

  range.addEventListener('input', updateComparison);
  previousButton.addEventListener('click', () => updateCase(-1));
  nextButton.addEventListener('click', () => updateCase(1));
  updateComparison();
}

/* ==========================================================================
   1. HERO DRAGGABLE CLINICAL NODES & LEADERLINE CABLES
   ========================================================================== */
let activeLines = [];

function initDraggableNodes() {
  const container = document.getElementById('heroCanvas');
  if (!container) return;

  const isDesktop = window.innerWidth > 991;

  function clearLines() {
    activeLines.forEach((l) => {
      try { l.remove(); } catch (e) {}
    });
    activeLines = [];
  }

  function createConnections() {
    if (typeof LeaderLine === 'undefined' || !isDesktop) return;
    clearLines();

    const connections = [
      { from: 'node1', to: 'node3' },
      { from: 'node2', to: 'node3' },
      { from: 'node3', to: 'node4' },
      { from: 'node3', to: 'node5' },
      { from: 'node4', to: 'node6' },
      { from: 'node5', to: 'node6' }
    ];

    connections.forEach((conn) => {
      const sourceEl = document.getElementById(conn.from);
      const targetEl = document.getElementById(conn.to);
      if (!sourceEl || !targetEl) return;

      const startAnchor = sourceEl.querySelector('.line-anchor.start') || sourceEl;
      const endAnchor = targetEl.querySelector('.line-anchor.end') || targetEl;

      try {
        const line = new LeaderLine(startAnchor, endAnchor, {
          color: '#9c6b63',
          size: 2,
          path: 'fluid',
          startPlug: 'disc',
          endPlug: 'disc',
          startPlugColor: '#7e544d',
          startPlugSize: 3,
          startPlugOutline: true,
          startPlugOutlineColor: '#ffffff',
          endPlugColor: '#8a9a80',
          endPlugSize: 3,
          endPlugOutline: true,
          endPlugOutlineColor: '#ffffff'
        });
        activeLines.push(line);
      } catch (err) {
        console.warn('LeaderLine connection notice:', err);
      }
    });
  }

  if (isDesktop && window.Draggable && window.gsap) {
    const nodes = document.querySelectorAll('.node-connect');
    nodes.forEach((node) => {
      Draggable.create(node, {
        type: 'x,y',
        bounds: container,
        edgeResistance: 0.65,
        onDragStart() {
          node.style.cursor = 'grabbing';
          node.style.zIndex = '30';
        },
        onDrag() {
          activeLines.forEach((l) => {
            try { l.position(); } catch (e) {}
          });
        },
        onDragEnd() {
          node.style.cursor = 'grab';
          node.style.zIndex = '10';
          activeLines.forEach((l) => {
            try { l.position(); } catch (e) {}
          });
        }
      });
    });

    createConnections();

    window.addEventListener('scroll', () => {
      activeLines.forEach((l) => {
        try { l.position(); } catch (e) {}
      });
    }, { passive: true });

    window.addEventListener('resize', () => {
      createConnections();
    });
  }
}

/* ==========================================================================
   2. MODALITIES STICKY SCROLLTRIGGER & BACKGROUND TRANSITION
   ========================================================================== */
function initModalitiesScroll() {
  const items = document.querySelectorAll('.models_item');
  const bgs = document.querySelectorAll('.models_bg-image');
  if (!items.length || !bgs.length) return;

  function activateModality(idx) {
    if (idx < 0 || idx >= items.length) return;

    items.forEach((item, i) => {
      if (i === idx) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });

    bgs.forEach((bg, i) => {
      if (i === idx) {
        bg.classList.add('active');
        if (window.gsap) {
          gsap.to(bg, { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' });
        } else {
          bg.style.opacity = '1';
        }
      } else {
        bg.classList.remove('active');
        if (window.gsap) {
          gsap.to(bg, { opacity: 0, scale: 1.04, duration: 0.35, ease: 'power2.in' });
        } else {
          bg.style.opacity = '0';
        }
      }
    });
  }

  items.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => activateModality(idx));
    item.addEventListener('click', () => activateModality(idx));
  });

  if (window.gsap && window.ScrollTrigger) {
    items.forEach((item, idx) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 55%',
        end: 'bottom 45%',
        onEnter: () => activateModality(idx),
        onEnterBack: () => activateModality(idx)
      });
    });
  }
}

/* ==========================================================================
   3. CLINICAL TOOLS IMAGE SWITCHER (HOVER & CLICK ON CHIPS)
   ========================================================================== */
let activeToolKey = null;

function initClinicalToolsSwitcher() {
  const chips = document.querySelectorAll('.prof-tools-chips-comp .tool_chip');
  const images = document.querySelectorAll('.prof_center-image-wrapp .image-tools-inner');
  const labelEl = document.getElementById('activeToolLabel');
  const defaultImage = document.querySelector('.prof_center-image-wrapp .is-default');

  if (!chips.length || !images.length) return;

  function getDefaultLabel() {
    return window.i18n ? window.i18n.t('tools_default_label') : 'Evaluación dermatológica integral en consulta';
  }

  function showImage(matchClass, labelText, toolKey) {
    activeToolKey = toolKey;
    images.forEach((img) => {
      if (img.classList.contains(matchClass)) {
        if (window.gsap) {
          gsap.killTweensOf(img);
          gsap.to(img, { opacity: 1, duration: 0.25, ease: 'power2.out' });
        } else {
          img.style.opacity = '1';
        }
      } else {
        if (window.gsap) {
          gsap.killTweensOf(img);
          gsap.to(img, { opacity: 0, duration: 0.15, ease: 'power2.in' });
        } else {
          img.style.opacity = '0';
        }
      }
    });

    if (labelEl) {
      labelEl.textContent = labelText;
    }
  }

  function resetDefault() {
    activeToolKey = null;
    images.forEach((img) => {
      const isDef = img === defaultImage;
      if (window.gsap) {
        gsap.to(img, { opacity: isDef ? 1 : 0, duration: 0.25 });
      } else {
        img.style.opacity = isDef ? '1' : '0';
      }
    });

    chips.forEach((c) => {
      c.style.opacity = '1';
      c.classList.remove('is-active-chip');
    });

    if (labelEl) {
      labelEl.textContent = getDefaultLabel();
    }
  }

  chips.forEach((chip) => {
    const matchClass = Array.from(chip.classList).find((cls) => cls.startsWith('is-'));
    const i18nKey = chip.getAttribute('data-i18n-label');

    function getChipLabel() {
      if (window.i18n && i18nKey) {
        return window.i18n.t(i18nKey);
      }
      return chip.textContent.trim();
    }

    chip.addEventListener('mouseenter', () => {
      chips.forEach((other) => {
        if (other !== chip) {
          other.style.opacity = '0.55';
          other.classList.remove('is-active-chip');
        } else {
          other.style.opacity = '1';
          other.classList.add('is-active-chip');
        }
      });

      if (matchClass) {
        showImage(matchClass, getChipLabel(), i18nKey);
      }
    });

    chip.addEventListener('click', () => {
      if (matchClass) {
        showImage(matchClass, getChipLabel(), i18nKey);
      }
    });
  });

  const toolsContainer = document.querySelector('.prof-tools-interactionable-wrapper');
  if (toolsContainer) {
    toolsContainer.addEventListener('mouseleave', resetDefault);
  }
}

/* ==========================================================================
   4. WORKFLOW-TO-APP MODE TOGGLE (IN-CLINIC VS. AT-HOME APP)
   ========================================================================== */
let isAppModeActive = false;

const dataWorkflow = {
  es: {
    c1Title: 'Evaluación y Diagnóstico Clínico',
    c1Desc: 'Análisis visual y dermatoscópico detallado para identificar las prioridades y necesidades de su piel.',
    c1Image: ':imagenes/evaluacionydiagnostico.png',
    c2Title: 'Procedimiento Médico en Cabina',
    c2Desc: 'Tratamiento con aparatología o técnica dermatológica seleccionada con criterio médico.',
    c2Image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    c3Title: 'Plan Magistral y Rutina Personalizada',
    c3Desc: 'Prescripción médica personalizada y formulación de activos específicos para su piel.',
    c3Image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80'
  },
  en: {
    c1Title: 'Comprehensive Skin Evaluation',
    c1Desc: 'Detailed visual and dermoscopic examination to identify your skin priorities.',
    c1Image: ':imagenes/evaluacionydiagnostico.png',
    c2Title: 'Personalized Medical Treatment',
    c2Desc: 'Procedure with medical device or clinical technique tailored with medical judgment.',
    c2Image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    c3Title: 'Prescription & Routine Guidance',
    c3Desc: 'Tailored medical prescription and specific topical active ingredients for your skin.',
    c3Image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80'
  }
};

const dataAppMode = {
  es: {
    c1Title: 'Su Rutina en la Palma de Su Mano',
    c1Desc: 'Al terminar su consulta, recibe un enlace exclusivo por WhatsApp con su rutina matutina y nocturna paso a paso.',
    c1Image: ':imagenes/paul-hanaoka-HbyYFFokvm0-unsplash.jpg',
    c2Title: 'Fotos, Dosis y Notas Médicas',
    c2Desc: 'Visualice sus productos con foto, notas de la doctora y el conteo de días restantes de cada tratamiento prescrito.',
    c2Image: ':imagenes/Fotos, Dosis y Notas.png',
    c3Title: 'Marque Cada Paso Realizado',
    c3Desc: 'Marque sus pasos diarios completados y mantenga la disciplina necesaria para ver resultados duraderos.',
    c3Image: ':imagenes/Marque Cada Paso.png'
  },
  en: {
    c1Title: 'Your Routine in Your Pocket',
    c1Desc: 'After your consultation, you receive a personal link on WhatsApp with your step-by-step morning and evening routine.',
    c1Image: ':imagenes/paul-hanaoka-HbyYFFokvm0-unsplash.jpg',
    c2Title: 'Photos, Doses & Doctor\'s Notes',
    c2Desc: 'See your prescribed products with photos, doctor\'s notes, and remaining days for each treatment.',
    c2Image: ':imagenes/Fotos, Dosis y Notas.png',
    c3Title: 'Check Off Every Step',
    c3Desc: 'Check off your daily skincare steps to build the consistency required for lasting skin health.',
    c3Image: ':imagenes/Marque Cada Paso.png'
  }
};

function renderWorkflowCards() {
  const lang = window.i18n ? window.i18n.getLanguage() : 'es';
  const current = isAppModeActive ? (dataAppMode[lang] || dataAppMode.es) : (dataWorkflow[lang] || dataWorkflow.es);

  const card1Title = document.getElementById('card1Title');
  const card1Desc = document.getElementById('card1Desc');
  const card1Image = document.getElementById('card1Img');
  const card2Title = document.getElementById('card2Title');
  const card2Desc = document.getElementById('card2Desc');
  const card2Image = document.getElementById('card2Img');
  const card3Title = document.getElementById('card3Title');
  const card3Desc = document.getElementById('card3Desc');
  const card3Image = document.getElementById('card3Img');

  if (!card1Title || !card2Title || !card3Title) return;

  if (window.gsap) {
    gsap.to(['#card1Title', '#card1Desc', '#card2Title', '#card2Desc', '#card3Title', '#card3Desc'], {
      opacity: 0,
      y: -4,
      duration: 0.15,
      onComplete: () => {
        card1Title.textContent = current.c1Title;
        card1Desc.textContent = current.c1Desc;
        card1Image.src = current.c1Image;
        card1Image.alt = current.c1Title;
        card2Title.textContent = current.c2Title;
        card2Desc.textContent = current.c2Desc;
        card2Image.src = current.c2Image;
        card2Image.alt = current.c2Title;
        card3Title.textContent = current.c3Title;
        card3Desc.textContent = current.c3Desc;
        card3Image.src = current.c3Image;
        card3Image.alt = current.c3Title;

        gsap.to(['#card1Title', '#card1Desc', '#card2Title', '#card2Desc', '#card3Title', '#card3Desc'], {
          opacity: 1,
          y: 0,
          duration: 0.25
        });
      }
    });
  } else {
    card1Title.textContent = current.c1Title;
    card1Desc.textContent = current.c1Desc;
    card1Image.src = current.c1Image;
    card1Image.alt = current.c1Title;
    card2Title.textContent = current.c2Title;
    card2Desc.textContent = current.c2Desc;
    card2Image.src = current.c2Image;
    card2Image.alt = current.c2Title;
    card3Title.textContent = current.c3Title;
    card3Desc.textContent = current.c3Desc;
    card3Image.src = current.c3Image;
    card3Image.alt = current.c3Title;
  }
}

function initWorkflowToggle() {
  const toggleBtn = document.getElementById('w2aToggle');
  const labelLeft = document.getElementById('w2aLabelLeft');
  const labelRight = document.getElementById('w2aLabelRight');

  if (!toggleBtn) return;

  function updateView() {
    isAppModeActive = !isAppModeActive;
    toggleBtn.classList.toggle('active-app', isAppModeActive);

    if (labelLeft && labelRight) {
      if (isAppModeActive) {
        labelLeft.style.opacity = '0.4';
        labelRight.style.opacity = '1';
        labelRight.style.color = '#7e544d';
      } else {
        labelLeft.style.opacity = '1';
        labelRight.style.opacity = '0.4';
        labelLeft.style.color = '#2e2220';
      }
    }

    renderWorkflowCards();
  }

  toggleBtn.addEventListener('click', updateView);
}

/* ==========================================================================
   5. SPLIDE PROTOCOLS CAROUSEL
   ========================================================================== */
function initProtocolsSlider() {
  const sliderEl = document.getElementById('protocolsSplide');
  if (!sliderEl || typeof Splide === 'undefined') return;

  try {
    const splide = new Splide('#protocolsSplide', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '2.5rem',
      speed: 700,
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      arrows: true,
      pagination: false,
      breakpoints: {
        1024: { perPage: 2, gap: '1.5rem' },
        640: { perPage: 1, gap: '1rem' }
      }
    });

    splide.mount();
  } catch (err) {
    console.warn('Splide mount notice:', err);
  }
}

/* ==========================================================================
   6. DYNAMIC NAV BUTTON SCROLL EFFECT
   ========================================================================== */
function initNavScrollEffect() {
  const navBtn = document.getElementById('try_now_top');
  if (!navBtn || !window.gsap || !window.ScrollTrigger) return;

  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: '150px top',
    scrub: 0.5,
    onUpdate: (self) => {
      if (self.progress > 0.5) {
        navBtn.style.padding = '0.65rem 1.4rem';
        navBtn.style.fontSize = '0.78rem';
      } else {
        navBtn.style.padding = '0.85rem 1.85rem';
        navBtn.style.fontSize = '0.85rem';
      }
    }
  });
}

/* ==========================================================================
   7. HOOK FOR LANGUAGE CHANGE
   ========================================================================== */
window.onAppLanguageChange = function(lang) {
  // Update clinical tool label if default
  const labelEl = document.getElementById('activeToolLabel');
  if (labelEl) {
    if (!activeToolKey) {
      labelEl.textContent = window.i18n.t('tools_default_label');
    } else {
      labelEl.textContent = window.i18n.t(activeToolKey);
    }
  }

  // Update in-clinic / at-home cards text
  renderWorkflowCards();

  // Reset confirmation box if visible
  const confirmBox = document.getElementById('bookingConfirmation');
  if (confirmBox) {
    confirmBox.classList.remove('is-visible');
    confirmBox.textContent = window.i18n.t('form_confirmation_msg');
  }
};

/* ==========================================================================
   8. MODALS (BOOKING, DOCTOR CREDENTIALS, ROUTINE APP)
   ========================================================================== */

// 8.1 Consultation Booking Modal
window.openBookingModal = function(treatment) {
  const modal = document.getElementById('bookingModal');
  const select = document.getElementById('treatmentSelect');
  const confirmBox = document.getElementById('bookingConfirmation');

  if (confirmBox) {
    confirmBox.classList.remove('is-visible');
  }

  if (treatment && select) {
    const options = Array.from(select.options);
    const match = options.find((opt) => opt.value.toLowerCase().includes(treatment.toLowerCase()));
    if (match) {
      select.value = match.value;
    }
  }

  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeBookingModal = function() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
};

// 8.2 About Dr. Medina Modal
window.openDoctorModal = function() {
  const modal = document.getElementById('doctorModal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeDoctorModal = function() {
  const modal = document.getElementById('doctorModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
};

// 8.3 Patient Routine Modal
window.openRoutineModal = function() {
  const modal = document.getElementById('routineModal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeRoutineModal = function() {
  const modal = document.getElementById('routineModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
};

// 8.4 Form Submission & WhatsApp Redirect
window.handleBookingSubmit = function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('bookingName');
  const phoneInput = document.getElementById('bookingPhone');
  const emailInput = document.getElementById('bookingEmail');
  const select = document.getElementById('treatmentSelect');
  const dateInput = document.getElementById('bookingDate');
  const formatSelect = document.getElementById('bookingFormat');
  const confirmBox = document.getElementById('bookingConfirmation');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const treatment = select ? select.value : 'Consulta Dermatológica';
  const date = dateInput ? dateInput.value : '';
  const format = formatSelect ? formatSelect.options[formatSelect.selectedIndex].text : 'Presencial';

  if (!name || !phone) {
    alert(window.i18n && window.i18n.getLanguage() === 'en'
      ? 'Please fill in your name and phone number.'
      : 'Por favor, ingrese su nombre y número de teléfono.');
    return;
  }

  const lang = window.i18n ? window.i18n.getLanguage() : 'es';
  let message = '';

  if (lang === 'en') {
    message = `Hello, I would like to request an appointment with Dr. Belisa Medina.\n\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email || 'Not specified'}\n` +
      `• Concern / Treatment: ${treatment}\n` +
      `• Preferred Date: ${date}\n` +
      `• Format: ${format}`;
  } else {
    message = `Hola, deseo solicitar una cita con la Dra. Belisa Medina.\n\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `• Correo: ${email || 'No especificado'}\n` +
      `• Motivo / Tratamiento: ${treatment}\n` +
      `• Fecha preferida: ${date}\n` +
      `• Modalidad: ${format}`;
  }

  const whatsappUrl = `https://wa.me/18498754464?text=${encodeURIComponent(message)}`;

  if (confirmBox) {
    confirmBox.textContent = window.i18n ? window.i18n.t('form_confirmation_msg') : 'Le abrimos WhatsApp para confirmar su cita. Horario de atención: 8:00 a. m. – 6:00 p. m.';
    confirmBox.classList.add('is-visible');
  }

  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
};

function initBookingDatePicker() {
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}
