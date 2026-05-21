/**
 * js/lesson-helper.js
 * Automatically enhances lesson pages with interactive flashcards, audio pronunciation, 
 * and progress tracking without repeating HTML blocks across files.
 */

(function () {
  'use strict';

  // 1. Identify Lesson ID from URL path
  const lessonId = window.location.pathname.split(/[\/\\]/).pop().replace('.html', '');
  if (!lessonId) return;

  // 2. SVG Icons definitions to avoid Lucide dependency issues
  const SVG_SPEAKER = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  const SVG_CHECK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" style="width:14px;height:14px;"><polyline points="20 6 9 17 4 12"/></svg>`;

  // 3. Audio Pronunciation logic
  function speak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      
      // Attempt to find a high quality English voice
      const voices = window.speechSynthesis.getVoices();
      const engVoice = voices.find(voice => 
        voice.lang.startsWith('en-US') && (voice.name.includes('Google') || voice.name.includes('Natural'))
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (engVoice) {
        utterance.voice = engVoice;
      }
      
      // Speed adjustments
      utterance.rate = 0.9; 
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported in this browser.');
    }
  }

  // Ensure voices are loaded (Chrome loads them async)
  if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }

  // 4. Initialize features on DOM Load
  document.addEventListener('DOMContentLoaded', () => {
    const phrasesTable = document.querySelector('.phrases-table');
    if (!phrasesTable) return;

    const rows = phrasesTable.querySelectorAll('.phrases-table__row');
    const phrasesData = [];

    // Enhance each row with pronunciation button and parse data
    rows.forEach((row, index) => {
      const enEl = row.querySelector('.phrase-en');
      const viEl = row.querySelector('.phrase-vi');
      const useEl = row.querySelector('.phrase-use');

      if (enEl && viEl) {
        // Clean text (remove outer quotes)
        const cleanText = enEl.textContent.trim().replace(/^["“']|["”']$/g, '');
        
        // Add speaker button in grid row
        const audioBtn = document.createElement('button');
        audioBtn.className = 'audio-btn';
        audioBtn.innerHTML = SVG_SPEAKER;
        audioBtn.setAttribute('title', 'Nghe phát âm');
        audioBtn.setAttribute('aria-label', `Nghe phát âm cụm từ ${cleanText}`);
        
        audioBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          speak(cleanText);
        });
        
        // Append button next to the English text inside row
        enEl.appendChild(audioBtn);

        // Store data for flashcards
        phrasesData.push({
          en: cleanText,
          vi: viEl.textContent.trim(),
          use: useEl ? useEl.textContent.trim() : ''
        });
      }
    });

    // 5. Build and Insert Flashcards Section
    if (phrasesData.length > 0) {
      createFlashcardsSection(phrasesTable, phrasesData);
    }

    // 6. Build and Insert Completion Tracking
    initCompletionTracking();
  });

  // 5. Function to dynamically build Flashcards UI
  function createFlashcardsSection(targetElement, data) {
    const section = document.createElement('div');
    section.className = 'flashcards-section';
    section.setAttribute('data-animate', '');

    section.innerHTML = `
      <div class="flashcards-header">
        <div>
          <span class="flashcards-subtitle">Luyện tập từ vựng</span>
          <h3>Key Phrase Flashcards</h3>
        </div>
        <div class="flashcards-progress"><span id="fc-current">1</span> / ${data.length}</div>
      </div>
      
      <div class="flashcard-wrapper" id="fc-card-trigger">
        <div class="flashcard" id="fc-card">
          <!-- FRONT -->
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-en" id="fc-en-text"></div>
            <button class="btn btn-ghost btn-sm" id="fc-audio-btn" style="margin-top: var(--sp-4); gap: var(--sp-2);">
              ${SVG_SPEAKER} Phát âm
            </button>
            <div class="flashcard-hint">Click để lật xem nghĩa</div>
          </div>
          <!-- BACK -->
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-vi" id="fc-vi-text"></div>
            <div class="flashcard-use" id="fc-use-text"></div>
            <div class="flashcard-hint">Click để lật lại</div>
          </div>
        </div>
      </div>

      <div class="flashcards-controls">
        <button class="btn btn-secondary" id="fc-prev-btn" disabled>← Trước</button>
        <button class="btn btn-ghost btn-sm" id="fc-flip-btn">Lật thẻ</button>
        <button class="btn btn-secondary" id="fc-next-btn">Tiếp theo →</button>
      </div>
    `;

    // Insert right before phrases table
    targetElement.parentNode.insertBefore(section, targetElement);

    // Flashcard State
    let currentIndex = 0;
    const cardContainer = section.querySelector('#fc-card');
    const cardTrigger = section.querySelector('#fc-card-trigger');
    const enText = section.querySelector('#fc-en-text');
    const viText = section.querySelector('#fc-vi-text');
    const useText = section.querySelector('#fc-use-text');
    const prevBtn = section.querySelector('#fc-prev-btn');
    const nextBtn = section.querySelector('#fc-next-btn');
    const flipBtn = section.querySelector('#fc-flip-btn');
    const audioBtn = section.querySelector('#fc-audio-btn');
    const currentCounter = section.querySelector('#fc-current');

    function updateCard() {
      // Reset flip status first
      cardContainer.classList.remove('is-flipped');
      
      // Update texts
      const item = data[currentIndex];
      setTimeout(() => {
        enText.textContent = `"${item.en}"`;
        viText.textContent = item.vi;
        useText.textContent = item.use ? `Cách dùng: ${item.use}` : '';
      }, 150); // delay text replacement until halfway flipped back

      // Counter
      currentCounter.textContent = currentIndex + 1;

      // Disable/Enable buttons
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === data.length - 1;
    }

    // Click to flip card
    cardTrigger.addEventListener('click', () => {
      cardContainer.classList.toggle('is-flipped');
    });

    flipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cardContainer.classList.toggle('is-flipped');
    });

    // Pronunciation on card front click
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(data[currentIndex].en);
    });

    // Next/Prev navigation
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex < data.length - 1) {
        currentIndex++;
        updateCard();
      }
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex > 0) {
        currentIndex--;
        updateCard();
      }
    });

    // Populate first card
    updateCard();
  }

  // 6. Function to initialize localStorage-based Lesson Completion
  function initCompletionTracking() {
    // Find the Quick Test Section
    const sections = document.querySelectorAll('.lesson-section');
    let testSection = null;
    sections.forEach(sec => {
      const h2 = sec.querySelector('h2');
      if (h2 && (h2.textContent.includes('Kiểm tra') || h2.textContent.includes('Quick Test') || h2.textContent.includes('Test'))) {
        testSection = sec;
      }
    });

    if (!testSection) return;

    // Check completion status
    let isCompleted = localStorage.getItem('completed_' + lessonId) === 'true';

    // Create completion banner
    const banner = document.createElement('div');
    banner.className = 'completion-banner';
    
    function renderBanner() {
      banner.innerHTML = `
        <div class="completion-status">
          <div class="completion-badge" style="background: ${isCompleted ? '#10b981' : 'rgba(255,255,255,0.1)'}">
            ${isCompleted ? SVG_CHECK : '?'}
          </div>
          <div>
            <div class="completion-text" style="color: ${isCompleted ? '#10b981' : 'var(--text-secondary)'}">
              ${isCompleted ? 'Bạn đã hoàn thành bài học này!' : 'Đánh dấu bài học hoàn thành sau khi tự kiểm tra'}
            </div>
          </div>
        </div>
        <button class="btn completion-btn ${isCompleted ? 'is-completed' : 'btn-primary'}" id="completion-toggle">
          ${isCompleted ? 'Đã hoàn thành (Click để hủy)' : 'Đánh dấu hoàn thành ✓'}
        </button>
      `;

      // Event listener
      banner.querySelector('#completion-toggle').addEventListener('click', () => {
        isCompleted = !isCompleted;
        localStorage.setItem('completed_' + lessonId, isCompleted ? 'true' : 'false');
        renderBanner();
      });
    }

    renderBanner();
    
    // Insert completion banner right above answer-key or at the end of the test section
    const answerKey = testSection.querySelector('.answer-key') || testSection.querySelector('#answer-key');
    if (answerKey) {
      answerKey.parentNode.insertBefore(banner, answerKey);
    } else {
      testSection.querySelector('.container').appendChild(banner);
    }

    // Intercept "Xem đáp án" buttons to auto-mark as completed
    const answerBtns = Array.from(testSection.querySelectorAll('button')).filter(btn => 
      btn.textContent.includes('Xem đáp án') || btn.textContent.includes('đáp án')
    );
    
    answerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!isCompleted) {
          isCompleted = true;
          localStorage.setItem('completed_' + lessonId, 'true');
          renderBanner();
        }
      });
    });
  }

})();
