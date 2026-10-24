/**
 * DiákÉletkerék - Application Logic
 * Manages state, navigation, form inputs, dynamic SVG wheel rendering,
 * mode toggling (Életterületek / Összefüggések), and detail views.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    scores: {
      E01: 5,
      E02: 5,
      E03: 5,
      E04: 5,
      E05: 5,
      E06: 5,
      E07: 5,
      E08: 5,
      E09: 5,
      E10: 5,
      E11: 5,
      E12: 5
    },
    activeScreen: 'screen-start',
    activeWheelMode: 'areas', // 'areas' or 'pairs'
    selectedDetail: null // { type: 'area'|'pair', item: Object }
  };

  // Interconnection Pair Mappings
  const PAIR_MAPPINGS = [
    { id: 'P01', area1: 'E01', area2: 'E07' },
    { id: 'P02', area1: 'E02', area2: 'E08' },
    { id: 'P03', area1: 'E03', area2: 'E09' },
    { id: 'P04', area1: 'E04', area2: 'E10' },
    { id: 'P05', area1: 'E05', area2: 'E11' },
    { id: 'P06', area1: 'E06', area2: 'E12' }
  ];

  // Color Palette for 12 Life Areas
  const areaColors = [
    '#2196F3', // E01 Blue
    '#00BCD4', // E02 Cyan
    '#009688', // E03 Teal
    '#4CAF50', // E04 Green
    '#8BC34A', // E05 Light Green
    '#CDDC39', // E06 Lime
    '#FFEB3B', // E07 Yellow
    '#FFC107', // E08 Amber
    '#FF9800', // E09 Orange
    '#FF5722', // E10 Deep Orange
    '#9C27B0', // E11 Purple
    '#3F51B5'  // E12 Indigo
  ];

  // DOM Elements
  const screens = {
    start: document.getElementById('screen-start'),
    assessment: document.getElementById('screen-assessment'),
    wheel: document.getElementById('screen-wheel'),
    detail: document.getElementById('screen-detail')
  };

  const btnStartTask = document.getElementById('btn-start-task');
  const btnGenerateWheel = document.getElementById('btn-generate-wheel');
  const btnRecalculate = document.getElementById('btn-recalculate');
  const btnBackToWheel = document.getElementById('btn-back-to-wheel');
  const btnBackBottom = document.getElementById('btn-back-bottom');
  const headerLogoBtn = document.getElementById('header-logo-btn');

  const toggleModeAreas = document.getElementById('toggle-mode-areas');
  const toggleModePairs = document.getElementById('toggle-mode-pairs');

  const assessmentCardsContainer = document.getElementById('assessment-cards-container');
  const wheelSvgContainer = document.getElementById('wheel-svg-container');
  const areasListContainer = document.getElementById('areas-list-container');
  const pairsListContainer = document.getElementById('pairs-list-container');
  const viewAreasList = document.getElementById('view-areas-list');
  const viewPairsList = document.getElementById('view-pairs-list');

  // Modal Elements
  const helpModal = document.getElementById('help-modal');
  const modalAreaTitle = document.getElementById('modal-area-title');
  const modalHelpText = document.getElementById('modal-help-text');
  const modalCloseX = document.getElementById('modal-close-x');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let lastTriggerElement = null;

  // Detail View Elements
  const detailTypeBadge = document.getElementById('detail-type-badge');
  const detailTitle = document.getElementById('detail-title');
  const detailScoreBox = document.getElementById('detail-score-box');
  const detailScoreVal = document.getElementById('detail-score-val');
  const detailVerseText = document.getElementById('detail-verse-text');
  const detailGuidanceText = document.getElementById('detail-guidance-text');
  const detailReflectionText = document.getElementById('detail-reflection-text');

  // Initialization
  function init() {
    renderAssessmentForm();
    setupEventListeners();
  }

  // Navigation Function
  function showScreen(screenId) {
    Object.keys(screens).forEach(id => {
      if (id === screenId) {
        screens[id].classList.add('active');
      } else {
        screens[id].classList.remove('active');
      }
    });
    state.activeScreen = screenId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 1. Render Assessment Cards
  function renderAssessmentForm() {
    assessmentCardsContainer.innerHTML = '';

    LIFE_AREAS.forEach((area, index) => {
      const card = document.createElement('div');
      card.className = 'assessment-card';
      card.id = `assessment-card-${area.id}`;

      const currentVal = state.scores[area.id] || 5;

      card.innerHTML = `
        <div class="card-header-area">
          <div class="card-number">${index + 1} / 12 életterület</div>
          <h3 class="card-title">${area.title}</h3>
        </div>

        <p class="card-question">${area.shortDescription}</p>

        <div class="evaluation-tip-box">
          <strong class="evaluation-tip-title">Mire figyelj a pontszámnál?</strong>
          <p class="evaluation-tip-text">${area.evaluationTip}</p>
        </div>

        <div class="score-control">
          <div class="score-header-row">
            <span class="score-text-label">Elégedettség:</span>
            <span class="score-value-badge" id="val-badge-${area.id}">${currentVal} / 10</span>
          </div>
          <input
            type="range"
            class="slider-input"
            id="input-${area.id}"
            min="1"
            max="10"
            value="${currentVal}"
            aria-label="${area.title} pontszám"
          >
          <div class="slider-ticks">
            <span>1</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>

        <div class="card-actions-area">
          <button type="button" class="btn btn-help-sugo" data-area-id="${area.id}">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            Önértékelő súgó
          </button>
        </div>
      `;

      assessmentCardsContainer.appendChild(card);

      // Event listener for slider
      const slider = card.querySelector(`#input-${area.id}`);
      const badge = card.querySelector(`#val-badge-${area.id}`);

      slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        state.scores[area.id] = val;
        badge.textContent = `${val} / 10`;
      });

      // Event listener for "Önértékelő súgó" button
      const helpBtn = card.querySelector(`.btn-help-sugo`);
      helpBtn.addEventListener('click', () => {
        openHelpModal(area.id, helpBtn);
      });
    });
  }

  // Helper to split life area titles into up to 2 readable lines
  function splitTitle(title) {
    const parts = title.split(' ');
    if (parts.length <= 1) return [title];
    if (parts.length === 3 && parts[1] === 'és') {
      return [parts[0] + ' ' + parts[1], parts[2]];
    }
    const mid = Math.ceil(parts.length / 2);
    return [parts.slice(0, mid).join(' '), parts.slice(mid).join(' ')];
  }

  // 2. Render Interactive SVG Wheel
  function renderWheelSVG() {
    const size = 680;
    const center = size / 2;
    const maxRadius = 180;
    const scoreCircleRadius = maxRadius + 24;
    const minRadius = 25;
    const totalSlices = 12;
    const sliceAngle = (2 * Math.PI) / totalSlices;

    let svgHtml = `<svg width="100%" height="100%" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DiákÉletkerék Diagram">`;

    // Background Concentric Circles (Grid 1 to 10)
    for (let i = 1; i <= 10; i++) {
      const r = minRadius + (i / 10) * (maxRadius - minRadius);
      const strokeWidth = i === 5 || i === 10 ? '1.5' : '0.75';
      const strokeColor = i === 10 ? '#B0BEC5' : '#E0E5E8';
      svgHtml += `<circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="${i < 10 ? '3 3' : 'none'}"/>`;
    }

    // Spokes / Axis lines
    for (let i = 0; i < totalSlices; i++) {
      const angle = i * sliceAngle - Math.PI / 2;
      const x2 = center + maxRadius * Math.cos(angle);
      const y2 = center + maxRadius * Math.sin(angle);
      svgHtml += `<line x1="${center}" y1="${center}" x2="${x2}" y2="${y2}" stroke="#CFD8DC" stroke-width="1"/>`;
    }

    // Render 12 Filled Slices based on Score
    LIFE_AREAS.forEach((area, i) => {
      const score = state.scores[area.id] || 5;
      const currentRadius = minRadius + (score / 10) * (maxRadius - minRadius);
      const startAngle = i * sliceAngle - Math.PI / 2;
      const endAngle = (i + 1) * sliceAngle - Math.PI / 2;

      // Arc coordinates
      const x1 = center + currentRadius * Math.cos(startAngle);
      const y1 = center + currentRadius * Math.sin(startAngle);
      const x2 = center + currentRadius * Math.cos(endAngle);
      const y2 = center + currentRadius * Math.sin(endAngle);

      const pathData = [
        `M ${center} ${center}`,
        `L ${x1} ${y1}`,
        `A ${currentRadius} ${currentRadius} 0 0 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');

      const fillColor = areaColors[i % areaColors.length];

      // Score Circle coordinates
      const midAngle = startAngle + sliceAngle / 2;
      const circleX = center + scoreCircleRadius * Math.cos(midAngle);
      const circleY = center + scoreCircleRadius * Math.sin(midAngle);

      // Label positioning relative to score circle
      const cos = Math.cos(midAngle);
      const sin = Math.sin(midAngle);

      let textAnchor = 'middle';
      let labelX = circleX;
      let labelY = circleY;

      if (cos > 0.3) {
        textAnchor = 'start';
        labelX = circleX + 18;
        labelY = circleY;
      } else if (cos < -0.3) {
        textAnchor = 'end';
        labelX = circleX - 18;
        labelY = circleY;
      } else if (sin < 0) {
        if (cos >= 0) {
          textAnchor = 'start';
          labelX = circleX + 16;
          labelY = circleY - 6;
        } else {
          textAnchor = 'end';
          labelX = circleX - 16;
          labelY = circleY - 6;
        }
      } else {
        if (cos >= 0) {
          textAnchor = 'start';
          labelX = circleX + 16;
          labelY = circleY + 6;
        } else {
          textAnchor = 'end';
          labelX = circleX - 16;
          labelY = circleY + 6;
        }
      }

      const lines = splitTitle(area.title);
      let textLinesHtml = '';

      if (lines.length === 1) {
        textLinesHtml = `<text x="${labelX}" y="${labelY + 4}" fill="#1C2D37" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12" text-anchor="${textAnchor}">${lines[0]}</text>`;
      } else {
        textLinesHtml = `
          <text x="${labelX}" y="${labelY - 3}" fill="#1C2D37" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12" text-anchor="${textAnchor}">
            <tspan x="${labelX}" dy="0">${lines[0]}</tspan>
            <tspan x="${labelX}" dy="14">${lines[1]}</tspan>
          </text>
        `;
      }

      const pairMap = PAIR_MAPPINGS.find(m => m.area1 === area.id || m.area2 === area.id);
      const pairId = pairMap ? pairMap.id : '';

      svgHtml += `
        <g class="wheel-slice-group" data-area-id="${area.id}" data-pair-id="${pairId}" tabIndex="0" role="button" aria-label="${area.title}: ${score} pont">
          <path d="${pathData}" fill="${fillColor}" fill-opacity="0.78" stroke="#FFFFFF" stroke-width="2"/>
          <circle cx="${circleX}" cy="${circleY}" r="14" fill="${fillColor}" />
          <text x="${circleX}" y="${circleY + 4}" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="11" text-anchor="middle">${score}</text>
          ${textLinesHtml}
        </g>
      `;
    });

    // Center decor circle
    svgHtml += `
      <circle cx="${center}" cy="${center}" r="${minRadius - 2}" fill="#052738" stroke="#FFFFFF" stroke-width="2"/>
      <text x="${center}" y="${center + 4}" fill="#31B6C7" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="12" text-anchor="middle">KERÉK</text>
    `;

    svgHtml += `</svg>`;
    wheelSvgContainer.innerHTML = svgHtml;

    // Attach click and hover events to SVG slices
    const sliceGroups = wheelSvgContainer.querySelectorAll('.wheel-slice-group');
    sliceGroups.forEach(group => {
      const areaId = group.getAttribute('data-area-id');
      const pairId = group.getAttribute('data-pair-id');

      group.addEventListener('click', () => {
        handleSliceClick(areaId);
      });

      group.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSliceClick(areaId);
        }
      });

      group.addEventListener('mouseenter', () => {
        if (state.activeWheelMode === 'pairs' && pairId) {
          highlightPairSlices(pairId, true);
        }
      });

      group.addEventListener('mouseleave', () => {
        if (pairId) {
          highlightPairSlices(pairId, false);
        }
      });

      group.addEventListener('focus', () => {
        if (state.activeWheelMode === 'pairs' && pairId) {
          highlightPairSlices(pairId, true);
        }
      });

      group.addEventListener('blur', () => {
        if (pairId) {
          highlightPairSlices(pairId, false);
        }
      });
    });
  }

  // 3. Render List Views (Areas & Pairs)
  function renderWheelLists() {
    // 3.1 Render Areas List
    areasListContainer.innerHTML = '';
    LIFE_AREAS.forEach((area, index) => {
      const score = state.scores[area.id] || 5;
      const color = areaColors[index % areaColors.length];

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'area-select-btn';
      btn.innerHTML = `
        <span class="btn-area-title">
          <span class="area-color-dot" style="background-color: ${color};"></span>
          ${index + 1}. ${area.title}
        </span>
        <span class="btn-area-score">${score} / 10</span>
      `;

      btn.addEventListener('click', () => {
        openAreaDetail(area.id);
      });

      areasListContainer.appendChild(btn);
    });

    // 3.2 Render Interconnections (Pairs) List
    pairsListContainer.innerHTML = '';

    INTERCONNECTIONS.forEach((pair, index) => {
      const map = PAIR_MAPPINGS.find(m => m.id === pair.id);
      const score1 = state.scores[map.area1] || 5;
      const score2 = state.scores[map.area2] || 5;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pair-select-btn';
      btn.innerHTML = `
        <div class="pair-btn-title">${index + 1}. ${pair.title}</div>
        <div class="pair-btn-scores">
          Pontszámaid: <strong>${score1}/10</strong> ↔ <strong>${score2}/10</strong>
        </div>
      `;

      btn.addEventListener('click', () => {
        openPairDetail(pair.id, map);
      });

      btn.addEventListener('mouseenter', () => {
        highlightPairSlices(pair.id, true);
      });

      btn.addEventListener('mouseleave', () => {
        highlightPairSlices(pair.id, false);
      });

      btn.addEventListener('focus', () => {
        highlightPairSlices(pair.id, true);
      });

      btn.addEventListener('blur', () => {
        highlightPairSlices(pair.id, false);
      });

      pairsListContainer.appendChild(btn);
    });
  }

  function handleSliceClick(areaId) {
    if (state.activeWheelMode === 'pairs') {
      const map = PAIR_MAPPINGS.find(m => m.area1 === areaId || m.area2 === areaId);
      if (map) {
        openPairDetail(map.id, map);
      }
    } else {
      openAreaDetail(areaId);
    }
  }

  function highlightPairSlices(pairId, highlight) {
    if (!pairId) return;
    const slices = wheelSvgContainer.querySelectorAll(`.wheel-slice-group[data-pair-id="${pairId}"]`);
    slices.forEach(slice => {
      if (highlight) {
        slice.classList.add('pair-highlight');
      } else {
        slice.classList.remove('pair-highlight');
      }
    });
  }

  // 4. Detail Navigation Functions
  function openAreaDetail(areaId) {
    const area = LIFE_AREAS.find(a => a.id === areaId);
    if (!area) return;

    const score = state.scores[area.id] || 5;

    detailTypeBadge.textContent = 'Életterület';
    detailTitle.textContent = area.title;
    detailScoreBox.style.display = 'inline-flex';
    detailScoreVal.textContent = `${score} / 10`;

    detailVerseText.textContent = area.verse;
    detailGuidanceText.textContent = area.guidance;
    detailReflectionText.textContent = area.reflectionQuestion;

    showScreen('detail');
  }

  function openPairDetail(pairId, map) {
    const pair = INTERCONNECTIONS.find(p => p.id === pairId);
    if (!pair) return;

    const score1 = state.scores[map.area1] || 5;
    const score2 = state.scores[map.area2] || 5;

    detailTypeBadge.textContent = 'Összefüggés';
    detailTitle.textContent = pair.title;
    detailScoreBox.style.display = 'inline-flex';
    detailScoreVal.textContent = `Pontjaid: ${score1}/10 ↔ ${score2}/10`;

    detailVerseText.textContent = pair.verse;
    detailGuidanceText.textContent = pair.guidance;
    detailReflectionText.textContent = pair.reflectionQuestion;

    showScreen('detail');
  }

  // 5. Toggle View Modes (Életterületek / Összefüggések)
  function setWheelMode(mode) {
    state.activeWheelMode = mode;

    // Clear any active pair highlights when switching modes
    const highlightedSlices = wheelSvgContainer.querySelectorAll('.pair-highlight');
    highlightedSlices.forEach(s => s.classList.remove('pair-highlight'));

    if (mode === 'areas') {
      toggleModeAreas.classList.add('active');
      toggleModeAreas.setAttribute('aria-selected', 'true');
      toggleModePairs.classList.remove('active');
      toggleModePairs.setAttribute('aria-selected', 'false');

      viewAreasList.style.display = 'block';
      viewPairsList.style.display = 'none';
    } else {
      toggleModePairs.classList.add('active');
      toggleModePairs.setAttribute('aria-selected', 'true');
      toggleModeAreas.classList.remove('active');
      toggleModeAreas.setAttribute('aria-selected', 'false');

      viewAreasList.style.display = 'none';
      viewPairsList.style.display = 'block';
    }
  }

  // Event Listeners setup
  function setupEventListeners() {
    // Header Logo navigation
    if (headerLogoBtn) {
      headerLogoBtn.addEventListener('click', () => {
        showScreen('start');
      });
    }

    // Start Task Button
    btnStartTask.addEventListener('click', () => {
      showScreen('assessment');
    });

    // Generate Wheel Button
    btnGenerateWheel.addEventListener('click', () => {
      renderWheelSVG();
      renderWheelLists();
      showScreen('wheel');
    });

    // Recalculate / Modify scores
    btnRecalculate.addEventListener('click', () => {
      renderAssessmentForm();
      showScreen('assessment');
    });

    // Back to Wheel buttons
    btnBackToWheel.addEventListener('click', () => {
      showScreen('wheel');
    });

    btnBackBottom.addEventListener('click', () => {
      showScreen('wheel');
    });

    // Toggle Modes
    toggleModeAreas.addEventListener('click', () => setWheelMode('areas'));
    toggleModePairs.addEventListener('click', () => setWheelMode('pairs'));

    // Modal Close Events
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeHelpModal);
    }
    if (modalCloseX) {
      modalCloseX.addEventListener('click', closeHelpModal);
    }
    if (helpModal) {
      helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) {
          closeHelpModal();
        }
      });
    }

    // Escape key handling for modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && helpModal && helpModal.classList.contains('active')) {
        closeHelpModal();
      }
    });
  }

  // Modal Functions
  function openHelpModal(areaId, triggerBtn) {
    const area = LIFE_AREAS.find(a => a.id === areaId);
    if (!area) return;

    lastTriggerElement = triggerBtn || document.activeElement;

    modalAreaTitle.textContent = area.title;
    modalHelpText.textContent = area.detailedHelp;

    helpModal.classList.add('active');
    helpModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 50);
  }

  function closeHelpModal() {
    if (!helpModal || !helpModal.classList.contains('active')) return;

    helpModal.classList.remove('active');
    helpModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastTriggerElement && typeof lastTriggerElement.focus === 'function') {
      lastTriggerElement.focus();
    }
  }

  // Run App Init
  init();
});
