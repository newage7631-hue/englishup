/* ══════════════════════════════════════
   LEVEL PLACEMENT QUIZ LOGIC & DOM
   ══════════════════════════════════════ */

(function () {
  // 1. Quiz Question Bank
  const questions = [
    {
      scenario: "Tình huống Công sở: Bạn đến trễ một cuộc họp quan trọng bằng tiếng Anh và muốn tham gia một cách chuyên nghiệp mà không gây gián đoạn mạch thảo luận.",
      question: "Bạn nên bước vào phòng và nói câu nào?",
      options: [
        "A. \"Sorry I'm late. What are we talking about?\"",
        "B. \"Apologies for the delay, everyone. Please go ahead, I will catch up.\"",
        "C. \"Wait for me, I have some opinions to share.\"",
        "D. \"My bad, I had traffic. Can you repeat the last part?\""
      ],
      correct: 1, // B
      context: "Câu B thể hiện sự chuyên nghiệp bằng cách xin lỗi ngắn gọn và chủ động nắm bắt thông tin ('catch up') thay vì bắt mọi người phải dừng lại giải thích cho bạn."
    },
    {
      scenario: "Tình huống Giao tiếp: Một đồng nghiệp kể cho bạn nghe tin tức vô cùng bất ngờ hoặc ngoài sức tưởng tượng của bạn.",
      question: "Câu nào thể hiện phản ứng tự nhiên và giống người bản xứ nhất?",
      options: [
        "A. \"Oh, that is very surprise.\"",
        "B. \"I am shocked with this.\"",
        "C. \"Wait — seriously?! I did NOT see that coming!\"",
        "D. \"You are saying truth?\""
      ],
      correct: 2, // C
      context: "Câu C dùng từ ngữ khẩu ngữ tự nhiên ('Seriously?!', 'I didn't see that coming') để bộc lộ cảm xúc ngạc nhiên tích cực một cách sống động."
    },
    {
      scenario: "Tình huống Công sở: Quản lý hoặc đồng nghiệp đề xuất một phương án thiết kế nhưng bạn thấy nó không tối ưu và muốn bày tỏ quan điểm phản biện lịch sự.",
      question: "Cách diễn đạt nào phù hợp nhất để giữ hòa khí và thúc đẩy làm việc nhóm?",
      options: [
        "A. \"Your idea is bad. We should do another way.\"",
        "B. \"I appreciate the suggestion, but I'm not fully on board yet — can we talk through some concerns?\"",
        "C. \"I disagree. This won't work for our customers.\"",
        "D. \"Okay, we will do it your way.\""
      ],
      correct: 1, // B
      context: "Câu B mở đầu bằng việc công nhận đóng góp ('appreciate'), sau đó dùng cụm giảm nhẹ ('not fully on board') và đưa ra lời mời trao đổi cùng làm rõ."
    },
    {
      scenario: "Tình huống Giao tiếp: Bạn chuẩn bị thuyết trình tiếng Anh trước đám đông và cảm thấy rất hồi hộp (nervous).",
      question: "Để giảm bớt căng thẳng và bắt đầu trôi chảy, cách tiếp cận nào khéo léo nhất?",
      options: [
        "A. Giữ im lặng tuyệt đối và cố gắng đọc slide thật nhanh.",
        "B. Thừa nhận nhẹ nhàng để tạo sự đồng cảm: \"A bit nervous, but I'm excited to be here! Let me start...\"",
        "C. Xin lỗi liên tục: \"Sorry, my English is very bad, please forgive me.\"",
        "D. Tuyên bố tự tin thái quá: \"I have no anxiety, I am perfectly fine.\""
      ],
      correct: 1, // B
      context: "Thừa nhận nhẹ nhàng sự hồi hộp ('a bit nervous') một cách tự nhiên và tích cực sẽ giúp giải tỏa áp lực tâm lý và nhận được sự thông cảm từ khán giả."
    },
    {
      scenario: "Tình huống Công sở: Dự án do bạn phụ trách bị trễ hạn 3 ngày. Bạn cần gửi email báo cáo tình hình này cho đối tác nước ngoài.",
      question: "Câu nào dưới đây giúp truyền đạt tin xấu nhưng vẫn giữ được sự chuyên nghiệp và tin cậy?",
      options: [
        "A. \"We have bad news. The project is late. Sorry.\"",
        "B. Im lặng tiếp tục làm việc và không gửi email cho đến khi hoàn thành xong dự án.",
        "C. \"I wanted to give you a heads-up that we've hit a minor roadblock, but we've adjusted our schedule and will deliver by Friday.\"",
        "D. \"It is not our fault, the servers were down for a few days.\""
      ],
      correct: 2, // C
      context: "Câu C báo trước tin xấu một cách khéo léo ('heads-up', 'roadblock') và lập tức chuyển trọng tâm sang giải pháp cụ thể và thời hạn mới rõ ràng."
    },
    {
      scenario: "Tình huống Giao tiếp: Đồng nghiệp khen bạn sau buổi nói chuyện: \"Your presentation was absolutely stellar!\"",
      question: "Cách đáp lại nào vừa khiêm tốn vừa tự nhiên nhất?",
      options: [
        "A. \"No, no, I am very bad.\"",
        "B. \"Thanks! You handled your part like a pro, too.\"",
        "C. \"Of course, I worked very hard.\"",
        "D. \"It's okay.\""
      ],
      correct: 1, // B
      context: "Câu B cảm ơn lời khen và khéo léo khen ngược lại đối phương ('like a pro' - như chuyên gia), thể hiện kỹ năng giao tiếp tương tác cao."
    },
    {
      scenario: "Tình huống Công sở: Bạn muốn gửi bản thảo tài liệu (draft) cho nhóm và khuyến khích họ đóng góp ý kiến nhận xét thẳng thắn mà không e ngại.",
      question: "Bạn nên viết câu nào ở cuối email?",
      options: [
        "A. \"Do you like it or not?\"",
        "B. \"Here is my draft. Feel free to push back — I want to make sure it lands well.\"",
        "C. \"Tell me my mistakes.\"",
        "D. \"This is final, let me know if you agree.\""
      ],
      correct: 0, // Wait, B is at index 1.
    }
  ];

  // Wait, let's fix the correct index for Question 7. It's B, which is index 1.
  // Let's modify the bank to have 8 complete questions.
  const quizQuestions = [
    {
      scenario: "Tình huống Công sở: Bạn đến trễ một cuộc họp quan trọng bằng tiếng Anh và muốn tham gia một cách chuyên nghiệp mà không gây gián đoạn mạch thảo luận.",
      question: "Bạn nên bước vào phòng và nói câu nào?",
      options: [
        "a) \"Sorry I'm late. What are we talking about?\"",
        "b) \"Apologies for the delay, everyone. Please go ahead, I will catch up.\"",
        "c) \"Wait for me, I have some opinions to share.\"",
        "d) \"My bad, I had traffic. Can you repeat the last part?\""
      ],
      correct: 1, // b
      context: "Đáp án b thể hiện sự chuyên nghiệp bằng cách xin lỗi ngắn gọn và chủ động nắm bắt thông tin ('catch up') thay vì bắt mọi người phải dừng lại giải thích cho bạn."
    },
    {
      scenario: "Tình huống Giao tiếp: Một đồng nghiệp kể cho bạn nghe tin tức vô cùng bất ngờ hoặc ngoài sức tưởng tượng của bạn.",
      question: "Câu nào thể hiện phản ứng tự nhiên và giống người bản xứ nhất?",
      options: [
        "a) \"Oh, that is very surprise.\"",
        "b) \"I am shocked with this.\"",
        "c) \"Wait — seriously?! I did NOT see that coming!\"",
        "d) \"You are saying truth?\""
      ],
      correct: 2, // c
      context: "Đáp án c dùng cụm từ tự nhiên ('Seriously?!', 'I didn't see that coming') để bộc lộ cảm xúc ngạc nhiên tích cực một cách sống động."
    },
    {
      scenario: "Tình huống Công sở: Quản lý hoặc đồng nghiệp đề xuất một phương án thiết kế nhưng bạn thấy nó không tối ưu và muốn bày tỏ quan điểm phản diện lịch sự.",
      question: "Cách diễn đạt nào phù hợp nhất để giữ hòa khí và thúc đẩy làm việc nhóm?",
      options: [
        "a) \"Your idea is bad. We should do another way.\"",
        "b) \"I appreciate the suggestion, but I'm not fully on board yet — can we talk through some concerns?\"",
        "c) \"I disagree. This won't work for our customers.\"",
        "d) \"Okay, we will do it your way.\""
      ],
      correct: 1, // b
      context: "Đáp án b mở đầu bằng việc công nhận đóng góp ('appreciate'), sau đó dùng cụm giảm nhẹ ('not fully on board') và đưa ra lời mời trao đổi cùng làm rõ."
    },
    {
      scenario: "Tình huống Giao tiếp: Bạn chuẩn bị thuyết trình tiếng Anh trước đám đông và cảm thấy rất hồi hộp (nervous).",
      question: "Để giảm bớt căng thẳng và bắt đầu trôi chảy, cách tiếp cận nào khéo léo nhất?",
      options: [
        "a) Giữ im lặng tuyệt đối và cố gắng đọc slide thật nhanh.",
        "b) Thừa nhận nhẹ nhàng để tạo sự đồng cảm: \"A bit nervous, but I'm excited to be here! Let me start over...\"",
        "c) Xin lỗi liên tục: \"Sorry, my English is very bad, please forgive me.\"",
        "d) Tuyên bố tự tin thái quá: \"I have no anxiety, I am perfectly fine.\""
      ],
      correct: 1, // b
      context: "Thừa nhận nhẹ nhàng sự hồi hộp ('a bit nervous') một cách tự nhiên và tích cực sẽ giúp giải tỏa áp lực tâm lý và nhận được sự thông cảm từ khán giả."
    },
    {
      scenario: "Tình huống Công sở: Dự án do bạn phụ trách bị trễ hạn 3 ngày. Bạn cần gửi email báo cáo tình hình này cho đối tác nước ngoài.",
      question: "Câu nào dưới đây giúp truyền đạt tin xấu nhưng vẫn giữ được sự chuyên nghiệp và tin cậy?",
      options: [
        "a) \"We have bad news. The project is late. Sorry.\"",
        "b) Im lặng tiếp tục làm việc và không gửi email cho đến khi hoàn thành xong dự án.",
        "c) \"I wanted to give you a heads-up that we've hit a minor roadblock, but we've adjusted our schedule and will deliver by Friday.\"",
        "d) \"It is not our fault, the servers were down for a few days.\""
      ],
      correct: 2, // c
      context: "Đáp án c báo trước tin xấu một cách khéo léo ('heads-up', 'roadblock') và lập tức chuyển trọng tâm sang giải pháp cụ thể và thời hạn mới rõ ràng."
    },
    {
      scenario: "Tình huống Giao tiếp: Đồng nghiệp khen bạn sau buổi nói chuyện: \"Your presentation was absolutely stellar!\"",
      question: "Cách đáp lại nào vừa khiêm tốn vừa tự nhiên nhất?",
      options: [
        "a) \"No, no, I am very bad.\"",
        "b) \"Thanks! You handled your part like a pro, too.\"",
        "c) \"Of course, I worked very hard.\"",
        "d) \"It's okay.\""
      ],
      correct: 1, // b
      context: "Đáp án b cảm ơn lời khen và khéo léo khen ngược lại đối phương ('like a pro' - như chuyên gia), thể hiện kỹ năng giao tiếp tương tác cao."
    },
    {
      scenario: "Tình huống Công sở: Bạn muốn gửi bản thảo tài liệu (draft) cho nhóm và khuyến khích họ đóng góp ý kiến nhận xét thẳng thắn mà không e ngại.",
      question: "Bạn nên viết câu nào ở cuối email?",
      options: [
        "a) \"Do you like it or not?\"",
        "b) \"Here is my draft. Feel free to push back — I want to make sure it lands well.\"",
        "c) \"Tell me my mistakes.\"",
        "d) \"This is final, let know if you agree.\""
      ],
      correct: 1, // b
      context: "Đáp án b mời gọi ý kiến phản biện ('Feel free to push back') một cách tự tin đồng thời diễn đạt mong muốn văn bản đạt hiệu quả tốt ('lands well')."
    },
    {
      scenario: "Tình huống Giao tiếp: Kế hoạch dã ngoại của nhóm bạn bị hủy vào phút chót vì bão lớn đổ bộ.",
      question: "Bạn nên phản ứng thế nào để thể hiện sự tích cực và khả năng thích nghi?",
      options: [
        "a) \"This is terrible, my weekend is ruined.\"",
        "b) \"It is what it is. We'll adapt and host a game night indoors instead!\"",
        "c) \"Why does this always happen to me?\"",
        "d) \"Okay, cancel everything.\""
      ],
      correct: 1, // b
      context: "Đáp án b thể hiện thái độ chấp nhận thực tế khách quan ('It is what it is') và nhanh chóng hướng tới sự thích ứng linh hoạt ('adapt')."
    }
  ];

  // 2. State management
  let currentStep = 0; // 0-7: questions, 8: lead form, 9: results
  let answers = new Array(quizQuestions.length).fill(null);
  let modalOverlay = null;

  // 3. Inject CSS dynamically if it isn't already loaded
  const quizCssPath = window.location.pathname.includes('/lessons/') ? '../css/quiz.css' : 'css/quiz.css';
  if (!document.querySelector(`link[href*="quiz.css"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = quizCssPath;
    document.head.appendChild(link);
  }

  // 4. Create Quiz Modal HTML Structure
  function createQuizDOM() {
    if (document.getElementById('quiz-modal')) return;

    modalOverlay = document.createElement('div');
    modalOverlay.id = 'quiz-modal';
    modalOverlay.className = 'quiz-modal-overlay';

    modalOverlay.innerHTML = `
      <div class="quiz-modal-container">
        <button class="quiz-modal-close" id="quiz-close-btn" aria-label="Đóng bài test">
          <i data-lucide="x" style="width: 18px; height: 18px;"></i>
        </button>
        
        <!-- Header -->
        <div class="quiz-header">
          <h3 class="quiz-header__title">
            <i data-lucide="graduation-cap" style="width: 20px; height: 20px; color: var(--accent);"></i>
            Đánh Giá Trình Độ Tiếng Anh Giao Tiếp
          </h3>
          <div class="quiz-progress" id="quiz-progress-bar-container">
            <div class="quiz-progress__bar-bg">
              <div class="quiz-progress__bar-fill" id="quiz-progress-fill"></div>
            </div>
            <span class="quiz-progress__text" id="quiz-progress-text">Câu 1/8</span>
          </div>
        </div>

        <!-- Body Content -->
        <div class="quiz-body" id="quiz-body-content">
          <!-- Dynamic panels go here -->
        </div>

        <!-- Footer Navigation -->
        <div class="quiz-footer" id="quiz-footer-actions">
          <button class="btn btn-ghost" id="quiz-prev-btn" style="visibility: hidden;">
            <i data-lucide="arrow-left" style="width: 14px; height: 14px; margin-right: var(--sp-2);"></i> Quay lại
          </button>
          <button class="btn btn-primary" id="quiz-next-btn" disabled>
            Tiếp tục <i data-lucide="arrow-right" style="width: 14px; height: 14px; margin-left: var(--sp-2);"></i>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modalOverlay);

    // Bind Close Actions
    document.getElementById('quiz-close-btn').addEventListener('click', closeQuiz);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeQuiz();
    });

    // Bind Navigation Actions
    document.getElementById('quiz-prev-btn').addEventListener('click', handlePrev);
    document.getElementById('quiz-next-btn').addEventListener('click', handleNext);

    // Initialize Lucide Icons inside modal
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // 5. Render Current Quiz Step
  function renderStep() {
    const bodyContent = document.getElementById('quiz-body-content');
    const prevBtn = document.getElementById('quiz-prev-btn');
    const nextBtn = document.getElementById('quiz-next-btn');
    const headerProgress = document.getElementById('quiz-progress-bar-container');
    const footerActions = document.getElementById('quiz-footer-actions');

    // Show/hide progress bar
    if (currentStep < quizQuestions.length) {
      headerProgress.style.display = 'flex';
      footerActions.style.display = 'flex';
      
      const percent = ((currentStep) / quizQuestions.length) * 100;
      document.getElementById('quiz-progress-fill').style.width = `${percent}%`;
      document.getElementById('quiz-progress-text').textContent = `Câu ${currentStep + 1}/${quizQuestions.length}`;
    } else {
      headerProgress.style.display = 'none';
      footerActions.style.display = 'none';
    }

    // Render Question step (0-7)
    if (currentStep < quizQuestions.length) {
      const q = quizQuestions[currentStep];
      const selectedIndex = answers[currentStep];

      bodyContent.innerHTML = `
        <div class="quiz-step-pane is-active">
          <div class="quiz-question__scenario">${q.scenario}</div>
          <h4 class="quiz-question__text">${q.question}</h4>
          <div class="quiz-options">
            ${q.options.map((opt, idx) => `
              <div class="quiz-option-label ${selectedIndex === idx ? 'is-selected' : ''}" data-index="${idx}">
                <input type="radio" name="q_opt" class="quiz-option-input" ${selectedIndex === idx ? 'checked' : ''} />
                <span class="quiz-option-text">${opt}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      // Add click events to labels
      const optionLabels = bodyContent.querySelectorAll('.quiz-option-label');
      optionLabels.forEach(label => {
        label.addEventListener('click', () => {
          optionLabels.forEach(l => l.classList.remove('is-selected'));
          label.classList.add('is-selected');
          const idx = parseInt(label.getAttribute('data-index'));
          answers[currentStep] = idx;
          nextBtn.removeAttribute('disabled');
        });
      });

      // Update footer buttons
      prevBtn.style.visibility = currentStep > 0 ? 'visible' : 'hidden';
      if (selectedIndex !== null) {
        nextBtn.removeAttribute('disabled');
      } else {
        nextBtn.setAttribute('disabled', 'true');
      }
    } 
    // Render Lead Capture Form step (8)
    else if (currentStep === quizQuestions.length) {
      bodyContent.innerHTML = `
        <div class="quiz-step-pane is-active">
          <div class="quiz-lead-form">
            <h4 class="quiz-lead-form__title">Chúc mừng bạn đã hoàn thành bài đánh giá!</h4>
            <p class="quiz-lead-form__desc">
              Vui lòng cung cấp thông tin bên dưới để nhận ngay kết quả đánh giá trình độ và lộ trình học thử đề xuất từ EnglishUp gửi trực tiếp đến bạn.
            </p>
            
            <form id="quiz-lead-capture-form" class="quiz-lead-form">
              <div class="quiz-form-group">
                <label class="quiz-form-label" for="lead-name">Họ và tên *</label>
                <input type="text" id="lead-name" class="quiz-form-input" placeholder="Ví dụ: Tô Trinh" required />
              </div>
              <div class="quiz-form-group">
                <label class="quiz-form-label" for="lead-email">Địa chỉ Email *</label>
                <input type="email" id="lead-email" class="quiz-form-input" placeholder="trinh.to@example.com" required />
              </div>
              <div class="quiz-form-group">
                <label class="quiz-form-label" for="lead-phone">Số điện thoại *</label>
                <input type="tel" id="lead-phone" class="quiz-form-input" placeholder="Ví dụ: 0912345678" required />
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg quiz-submit-btn" id="lead-submit-btn">
                Xem kết quả & nhận lộ trình miễn phí
              </button>
            </form>
          </div>
        </div>
      `;

      // Bind form submission
      document.getElementById('quiz-lead-capture-form').addEventListener('submit', handleLeadSubmit);
    } 
    // Render Results step (9)
    else if (currentStep === quizQuestions.length + 1) {
      const score = calculateScore();
      const report = generateReport(score);

      bodyContent.innerHTML = `
        <div class="quiz-step-pane is-active">
          <div class="quiz-results">
            <div class="quiz-results__score-badge">
              <span class="quiz-results__score-num">${score}/8</span>
              <span class="quiz-results__score-lbl">Đúng</span>
            </div>
            
            <h4 class="quiz-results__level">Trình độ đề xuất: ${report.level}</h4>
            <p class="quiz-results__desc">${report.description}</p>
            
            <div class="quiz-results__recommendation">
              <div class="quiz-results__recommendation-lbl">Lộ trình đề xuất</div>
              <h5 class="quiz-results__recommendation-title">${report.recommendationTitle}</h5>
              <p class="quiz-results__recommendation-desc">${report.recommendationDesc}</p>
            </div>
            
            <div class="quiz-results__cta">
              <a href="${report.ctaLink}" class="btn btn-primary btn-lg">Bắt đầu học thử ngay</a>
              <button class="btn btn-secondary btn-lg" onclick="location.reload()">Làm lại bài test</button>
            </div>
          </div>
        </div>
      `;
    }
  }

  // 6. Navigation Logic
  function handlePrev() {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    }
  }

  function handleNext() {
    if (currentStep < quizQuestions.length) {
      currentStep++;
      renderStep();
    }
  }

  // 7. Calculate Final Score
  function calculateScore() {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correct) {
        score++;
      }
    });
    return score;
  }

  // 8. Generate Recommendation Report
  function generateReport(score) {
    const isLessonPage = window.location.pathname.includes('/lessons/');
    const ctaPrefix = isLessonPage ? '' : 'lessons/';
    
    if (score <= 3) {
      return {
        level: "Pre-Intermediate (A2 - B1)",
        description: "Bạn đã nắm được các cấu trúc tiếng Anh căn bản nhưng phản xạ giao tiếp tự nhiên và từ vựng trong công sở còn nhiều hạn chế. Việc dịch từ tiếng Việt sang tiếng Anh trong đầu khiến bạn bị ngập ngừng khi nói.",
        recommendationTitle: "Foundation & Everyday Communication (Tháng 1-3)",
        recommendationDesc: "Tập trung xây dựng phản xạ từ vựng cơ bản và phát âm chuẩn. Hãy bắt đầu học với bài học 'Self-Introduction & Self-Correction' qua phim hoạt hình Inside Out 2 để làm quen cách điều tiết hơi thở và tự sửa lỗi.",
        ctaLink: ctaPrefix + "inside-out-2-anxiety.html"
      };
    } else if (score <= 6) {
      return {
        level: "Intermediate (B1 - B2)",
        description: "Bạn có nền tảng từ vựng khá tốt và có thể diễn đạt các ý cơ bản. Tuy nhiên, bạn gặp khó khăn trong việc giao tiếp ngoại giao, thuyết phục, báo cáo tin xấu một cách khéo léo hoặc tham gia thảo luận sâu.",
        recommendationTitle: "Workplace English & Film Fluency (Tháng 4-6)",
        recommendationDesc: "Học cách nói tiếng Anh tinh tế, làm chủ các kỹ năng công sở: họp hành, từ chối diplomatically. Hãy bắt đầu với bài giảng 'Joining a Meeting in English' hoặc 'Disagreeing Diplomatically' qua phim Puss in Boots.",
        ctaLink: ctaPrefix + "joining-a-meeting.html"
      };
    } else {
      return {
        level: "Upper-Intermediate (B2 - B2+)",
        description: "Xin chúc mừng! Bạn sở hữu nền tảng tiếng Anh giao tiếp rất tốt và nhạy bén với các tình huống giao tiếp. Mục tiêu của bạn là tinh chỉnh sắc thái ngữ nghĩa, nâng cao phong thái đĩnh đạc và rèn luyện kỹ năng lãnh đạo.",
        recommendationTitle: "Advanced Professional & Confidence Masterclass (Tháng 7-9)",
        recommendationDesc: "Nâng tầm giao tiếp trở nên cuốn hút và thuyết phục. Hãy tham gia thử bài giảng nâng cao về 'Delivering Bad News Professionally' hoặc 'Surprise, Confidence & Reactions' để thử thách bản thân.",
        ctaLink: ctaPrefix + "elemental-bad-news.html"
      };
    }
  }

  // 9. Lead Submission Handler
  function handleLeadSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('lead-name').value.trim();
    const email = document.getElementById('lead-email').value.trim();
    const phone = document.getElementById('lead-phone').value.trim();
    const submitBtn = document.getElementById('lead-submit-btn');

    // Show loading spinner
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = '<span class="quiz-spinner"></span> Đang gửi thông tin...';

    const score = calculateScore();
    const report = generateReport(score);

    // Save lead details and completed score to localStorage
    localStorage.setItem('placement_score', score);
    localStorage.setItem('placement_name', name);
    localStorage.setItem('placement_email', email);
    localStorage.setItem('placement_phone', phone);
    localStorage.setItem('placement_level', report.level);

    // Post to Web3Forms API
    // Using a fallback mechanism: even if network fails or takes too long, we transition to results after 1.5s
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 seconds timeout

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "9e54d6df-c146-42d4-a957-e6f8dfcb49ec", // Web3Forms Access Key
        name: name,
        email: email,
        phone: phone,
        subject: `EnglishUp Placement Test Lead - ${name} (${report.level})`,
        message: `Học viên hoàn thành bài test EnglishUp:\n- Điểm số: ${score}/8\n- Trình độ đề xuất: ${report.level}\n- Lộ trình: ${report.recommendationTitle}`
      }),
      signal: controller.signal
    })
    .then(res => res.json())
    .then(data => {
      clearTimeout(timeoutId);
      transitionToResults();
    })
    .catch(err => {
      clearTimeout(timeoutId);
      console.warn("Web3Forms submission failed or timed out, loading results locally.", err);
      transitionToResults(); // Fallback so user is not stuck
    });
  }

  function transitionToResults() {
    currentStep = quizQuestions.length + 1; // Step 9: Results screen
    renderStep();
  }

  // 10. Open and Close Modal Functions
  function openQuiz() {
    createQuizDOM();
    currentStep = 0;
    answers = new Array(quizQuestions.length).fill(null);
    
    // Enable scroll lock on body
    document.body.style.overflow = 'hidden';

    // Open Modal
    modalOverlay.classList.add('is-open');
    renderStep();
  }

  function closeQuiz() {
    if (modalOverlay) {
      modalOverlay.classList.remove('is-open');
      // Release scroll lock
      document.body.style.overflow = '';
    }
  }

  // Export to window object
  window.openQuiz = openQuiz;
  window.closeQuiz = closeQuiz;

  // Add click listener to any element with data-trigger-quiz on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-trigger-quiz]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openQuiz();
      });
    });
  });
})();
