// Xử lý đăng nhập
const PASSWORD = 'VIP2025';
const loginSection = document.getElementById('login-section');
const quizSection = document.getElementById('quiz-section');
const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password-input');
const loginError = document.getElementById('login-error');

loginBtn.onclick = function() {
    if (passwordInput.value === PASSWORD) {
        loginSection.style.display = 'none';
        quizSection.style.display = 'block';
        showReadyScreen();
    } else {
        loginError.style.display = 'block';
    }
};

// Đảo mảng (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let quizQuestions = [];
let shuffled = false;

function showReadyScreen() {
    // Copy câu hỏi và đáp án gốc
    quizQuestions = questions.map(q => ({
        ...q,
        shuffledOptions: q.options.slice(),
        shuffledAnswer: q.correctAnswer
    }));
    shuffled = false;
    quizSection.innerHTML = `
        <div class="quiz-container" style="max-width:600px;margin:auto;">
            <h2>Chuẩn bị làm bài</h2>
            <p>Bạn có thể đảo cả thứ tự câu hỏi và đáp án trước khi bắt đầu.</p>
            <div style="display:flex;gap:10px;justify-content:center;margin:20px 0;">
                <button id="shuffle-all-btn">Đảo câu hỏi & đáp án</button>
                <button id="start-quiz-btn">Bắt đầu</button>
            </div>
        </div>
    `;
    document.getElementById('shuffle-all-btn').onclick = () => {
        shuffle(quizQuestions); // Đảo thứ tự câu hỏi
        quizQuestions.forEach(q => {
            let opts = q.options.map((opt, idx) => ({opt, idx}));
            shuffle(opts);
            q.shuffledOptions = opts.map(o => o.opt);
            q.shuffledAnswer = opts.findIndex(o => o.idx === q.correctAnswer);
        });
        shuffled = true;
        alert('Đã đảo cả câu hỏi và đáp án!');
    };
    document.getElementById('start-quiz-btn').onclick = () => {
        renderQuiz(quizQuestions);
    };
}

function renderQuiz(quizQuestions, onlyWrong = false) {
    let current = 0;
    let userAnswers = Array(quizQuestions.length).fill(null);
    let locked = Array(quizQuestions.length).fill(false);
    quizSection.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-info">
                <span class="quiz-progress">Câu <span id="current-q">1</span> / ${quizQuestions.length}</span>
            </div>
            <div id="question-box"></div>
            <div class="controls">
                <button id="prev-btn" disabled>Trước</button>
                <button id="next-btn">Sau</button>
                <button id="submit-btn">Nộp bài</button>
            </div>
        </div>
        <div class="question-navigation">
            <h3>Chọn câu hỏi</h3>
            <div class="question-grid">
                ${quizQuestions.map((_, i) => `<button class="question-number" id="qnav-${i}">${i+1}</button>`).join('')}
            </div>
        </div>
    `;
    const questionBox = document.getElementById('question-box');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const currentQ = document.getElementById('current-q');
    let autoNextTimeout = null;

    function showQuestion(idx) {
        currentQ.textContent = idx + 1;
        const q = quizQuestions[idx];
        let optsHtml = q.shuffledOptions.map((opt, i) => {
            let cls = '';
            if (locked[idx]) {
                if (i === userAnswers[idx]) {
                    cls = (i === q.shuffledAnswer) ? 'correct' : 'incorrect';
                }
                if (i === q.shuffledAnswer && userAnswers[idx] !== q.shuffledAnswer) {
                    cls = 'correct';
                }
            } else if (userAnswers[idx] === i) {
                cls = 'user-selected';
            }
            return `<li class="option${cls ? ' ' + cls : ''}" data-idx="${i}">
                <input type="radio" name="option" id="opt${i}" ${userAnswers[idx] === i ? 'checked' : ''} ${locked[idx] ? 'disabled' : ''}>
                <label for="opt${i}">${opt}</label>
            </li>`;
        }).join('');
        questionBox.innerHTML = `
            <div class="question">
                <div class="question-text">${q.question}</div>
                ${q.image ? `<div class="question-image"><img src="${q.image}" alt="Hình minh họa" style="max-width:100%;margin:10px 0;"></div>` : ''}
                <ul class="options">${optsHtml}</ul>
            </div>
        `;
        // Bắt sự kiện chọn đáp án
        if (!locked[idx]) {
            document.querySelectorAll('.option').forEach(opt => {
                opt.onclick = function() {
                    if (locked[idx]) return;
                    const selected = parseInt(opt.getAttribute('data-idx'));
                    userAnswers[idx] = selected;
                    locked[idx] = true;
                    showQuestion(idx);
                    // Tự động chuyển câu sau 2 giây
                    if (autoNextTimeout) clearTimeout(autoNextTimeout);
                    autoNextTimeout = setTimeout(() => {
                        if (current < quizQuestions.length - 1) {
                            current++;
                            showQuestion(current);
                        }
                    }, 2000);
                };
            });
        }
        prevBtn.disabled = idx === 0;
        nextBtn.disabled = idx === quizQuestions.length - 1;
        // Highlight câu hiện tại trong navigation
        quizQuestions.forEach((_, i) => {
            const btn = document.getElementById(`qnav-${i}`);
            if (btn) {
                btn.classList.toggle('active', i === idx);
                btn.disabled = false;
            }
        });
    }

    // Navigation buttons
    quizQuestions.forEach((_, i) => {
        const btn = document.getElementById(`qnav-${i}`);
        if (btn) {
            btn.onclick = () => {
                current = i;
                showQuestion(current);
            };
        }
    });

    prevBtn.onclick = () => { if (current > 0) { current--; showQuestion(current); } };
    nextBtn.onclick = () => { if (current < quizQuestions.length - 1) { current++; showQuestion(current); } };
    submitBtn.onclick = () => {
        let correct = 0;
        let wrong = [];
        quizQuestions.forEach((q, i) => {
            if (userAnswers[i] === q.shuffledAnswer) correct++;
            else wrong.push(i);
        });
        quizSection.innerHTML = `
            <div class="final-result-container">
                <h2>Kết quả</h2>
                <p>Bạn đúng ${correct} / ${quizQuestions.length} câu.</p>
                ${wrong.length ? `<p>Câu sai: ${wrong.map(i=>i+1).join(', ')}</p>` : '<p>Xuất sắc! Bạn làm đúng hết!</p>'}
                <button onclick="location.reload()">Làm lại tất cả</button>
                ${wrong.length ? '<button id="retakeWrongBtn">Làm lại câu sai</button>' : ''}
            </div>
        `;
        if (wrong.length) {
            document.getElementById('retakeWrongBtn').onclick = () => {
                // Chỉ lấy lại các câu sai
                const wrongQuestions = wrong.map(i => quizQuestions[i]);
                renderQuiz(wrongQuestions, true);
            };
        }
    };
    showQuestion(current);
}

window.questions = questions; 