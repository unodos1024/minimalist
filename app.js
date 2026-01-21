const translations = {
    ko: {
        title: "단순함", splash_start: "시작하려면 터치하세요", home_question: "오늘의 질문", home_timer: "공간 비우기", home_pause: "의도적 멈춤", home_archive: "기록 보관소", nav_close: "← 닫기", toggle_mode: "자정 모드", noon_mode: "정오 모드", label_reflection: "성찰의 시간", input_placeholder: "마음의 답을 입력하세요", next_question: "다른 질문 보기", label_timer: "비우는 시간", timer_prompt: "시작 버튼을 눌러 비움을 준비하세요.", timer_running: "비움이 진행 중입니다. 호흡에 집중하세요.", timer_start: "시작하기", timer_pause: "일시 정지", ambient_none: "침묵", ambient_wind: "바람", ambient_rain: "빗소리", label_success: "비움 완료", timer_done: "공간이 한결 가벼워졌습니다.", timer_placeholder: "무엇을 비웠나요?", save_archive: "기록 보관소에 저장", label_pause: "의도적 멈춤", pause_placeholder: "무엇을 사고 싶나요?", pause_start: "24시간 유예하기", inner_calm: "내면의 고요", pause_done: "충동이 가라앉을 때까지<br>24시간의 유예 시간을 가집니다.", back_home: "홈으로 돌아가기", weight_prefix: "약 ", weight_suffix: " KG의 무게를 덜어냈습니다", toast_saved: "성찰이 보관되었습니다", empty_archive: "아직 보관된 기록이 없습니다.", btn_backup: "백업", btn_restore: "복원", msg_restored: "데이터가 복원되었습니다.", home_journey: "30일 비움 여정", btn_complete: "완료하기", journey_done: "오늘의 비움 완료", journey_wait: "내일의 여정을 기다리세요", pause_cost: "예상 가격은 얼마인가요? (선택)", pause_saved: "의 낭비를 막았습니다.", pause_waiting: "24시간 유예 중...",
        type_reflection: "성찰", type_pause: "멈춤", type_journey: "여정", type_clearance: "비움",
        q: ["오늘 당신의 삶에서 가장 덜어내고 싶은 생각은?", "지금 당신을 복잡하게 만드는 물건 하나는?", "내일을 더 가볍게 살기 위해 무엇을 할 수 있을까요?", "꼭 남겨야 할 단 하나의 가치 있는 물건은?", "비어있는 공간이 주는 평온함을 느끼고 있나요?"],
        wisdom: ["행복은 소유가 아니라 존재의 풍요로움이다.", "단순함은 궁극의 정교함이다.", "적게 소유할수록 비로소 선명해진다.", "비어있는 곳에 새로운 에너지가 깃든다.", "가진 물건이 당신을 소유하게 하지 마세요."]
    },
    en: {
        title: "Simplicity", splash_start: "Touch to Begin", home_question: "Daily Question", home_timer: "Clear Space", home_pause: "Mindful Pause", home_archive: "Archive", nav_close: "← Close", toggle_mode: "Midnight Mode", noon_mode: "Noon Mode", label_reflection: "Reflection", input_placeholder: "Listen to your soul...", next_question: "Next Question", label_timer: "Emptying Time", timer_prompt: "Press start to prepare your space.", timer_running: "Clearing in progress. Focus on your breath.", timer_start: "Start Ritual", timer_pause: "Pause", ambient_none: "Silence", ambient_wind: "Wind", ambient_rain: "Rain", label_success: "Cleared", timer_done: "Your space feels lighter now.", timer_placeholder: "What did you release?", save_archive: "Save to Archive", label_pause: "Intentional Pause", pause_placeholder: "What do you desire?", pause_start: "Postpone for 24h", inner_calm: "Inner Calm", pause_done: "Let the desire fade away<br>during this 24-hour pause.", back_home: "Back Home", weight_prefix: "Released approx. ", weight_suffix: " KG", toast_saved: "Reflection Archived", empty_archive: "No records archived yet.", btn_backup: "Backup", btn_restore: "Restore", msg_restored: "Data restored successfully.", home_journey: "30-Day Journey", btn_complete: "Complete", journey_done: "Completed Today", journey_wait: "Wait for tomorrow", pause_cost: "Estimated Cost (Optional)", pause_saved: " saved.", pause_waiting: "24h Pending...",
        type_reflection: "Reflection", type_pause: "Pause", type_journey: "Journey", type_clearance: "Clearance",
        q: ["What thought would you like to release today?", "Is there an object cluttering your mind?", "One small step towards a simpler tomorrow?", "If you could keep only one thing, what is it?", "Do you feel the peace of empty space?"],
        wisdom: ["Happiness is not in having, but in being.", "Simplicity is the ultimate sophistication.", "The less you own, the more you have.", "Energy enters where there is space.", "Don't let your possessions own you."]
    },
    fr: {
        title: "Simplicité", splash_start: "Toucher pour commencer", home_question: "Question du jour", home_timer: "Vider l'espace", home_pause: "Pause consciente", home_archive: "Archives", nav_close: "← Fermer", toggle_mode: "Mode Minuit", noon_mode: "Mode Midi", label_reflection: "Réflexion", input_placeholder: "Écoutez votre âme...", next_question: "Autre question", label_timer: "Temps de vide", timer_prompt: "Appuyez sur démarrer pour préparer l'espace.", timer_running: "Vide en cours. Concentrez-vous sur votre respiration.", timer_start: "Commencer", timer_pause: "Pause", ambient_none: "Silence", ambient_wind: "Vent", ambient_rain: "Pluie", label_success: "Libéré", timer_done: "Votre espace est plus léger.", timer_placeholder: "Qu'avez-vous vidé ?", save_archive: "Enregistrer", label_pause: "Pause intentionnelle", pause_placeholder: "Quel est votre désir ?", pause_start: "Reporter de 24h", inner_calm: "Calme intérieur", pause_done: "Laissez l'impulsion s'apaiser<br>pendant cette pause de 24h.", back_home: "Retour", weight_prefix: "Allégé d'environ ", weight_suffix: " KG", toast_saved: "Réflexion archivée", empty_archive: "Aucune archive pour le moment.", btn_backup: "Sauvegarder", btn_restore: "Restaurer", msg_restored: "Données restaurées.", home_journey: "Voyage 30 Jours", btn_complete: "Terminer", journey_done: "Terminé aujourd'hui", journey_wait: "Attendez demain", pause_cost: "Coût estimé (optionnel)", pause_saved: " économisé.", pause_waiting: "En attente...",
        type_reflection: "Réflexion", type_pause: "Pause", type_journey: "Voyage", type_clearance: "Vide",
        q: ["Quelle pensée aimeriez-vous libérer ?", "Un objet qui encombre votre esprit ?", "Un petit pas pour un demain plus simple ?", "Si vous ne gardiez qu'une chose ?", "Ressentez-vous la paix du vide ?"],
        wisdom: ["Le bonheur est dans l'être, pas l'avoir.", "La simplicité est la sophistication suprême.", "Moins on possède, plus on est riche.", "L'énergie entre là où il y a de la place.", "Ne laissez pas vos biens vous posséder."]
    },
    es: {
        title: "Simplicidad", splash_start: "Toca para comenzar", home_question: "Pregunta diaria", home_timer: "Limpiar espacio", home_pause: "Pausa consciente", home_archive: "Archivo", nav_close: "← Cerrar", toggle_mode: "Modo Medianoche", noon_mode: "Modo Mediodía", label_reflection: "Reflexión", input_placeholder: "Escucha a tu alma...", next_question: "Siguiente pregunta", label_timer: "Tiempo de vacío", timer_prompt: "Pulsa inicio para preparar el espacio.", timer_running: "Vaciado en curso. Concéntrate en tu respiración.", timer_start: "Empezar", timer_pause: "Pausa", ambient_none: "Silencio", ambient_wind: "Viento", ambient_rain: "Lluvia", label_success: "Liberado", timer_done: "Tu espacio se siente más ligero.", timer_placeholder: "¿Qué has liberado?", save_archive: "Guardar en archivo", label_pause: "Pausa intencional", pause_placeholder: "¿Qué deseas comprar?", pause_start: "Posponer 24h", inner_calm: "Calma interior", pause_done: "Deja que el impulso se calme<br>during this 24-hour pause.", back_home: "Volver al inicio", weight_prefix: "Aproximadamente ", weight_suffix: " KG liberados", toast_saved: "Reflexión archivada", empty_archive: "Aún no hay registros.", btn_backup: "Copia de seguridad", btn_restore: "Restaurar", msg_restored: "Datos restaurados.", home_journey: "Viaje de 30 días", btn_complete: "Completar", journey_done: "Completado hoy", journey_wait: "Espera a mañana", pause_cost: "Costo estimado (opcional)", pause_saved: " guardado.", pause_waiting: "Pendiente 24h...",
        type_reflection: "Reflexión", type_pause: "Pausa", type_journey: "Viaje", type_clearance: "Limpieza",
        q: ["¿Qué pensamiento quieres liberar hoy?", "¿Un objeto que nubla tu mente?", "¿Un paso para un mañana más simple?", "Si solo pudieras quedarte con algo...", "¿Sientes la paz del espacio vacío?"],
        wisdom: ["La felicidad está en el ser, no en tener.", "La simplicidad es la máxima sofisticación.", "Cuanto menos posees, más tienes.", "La energía entra donde hay espacio.", "No dejes que tus cosas te posean."]
    },
    ja: {
        title: "単純", splash_start: "画面に触れてください", home_question: "今日の問い", home_timer: "空間を整える", home_pause: "意図的な休息", home_archive: "記録の保管庫", nav_close: "← 閉じる", toggle_mode: "夜更けモード", noon_mode: "真昼モード", label_reflection: "内省の時間", input_placeholder: "心の声を聴く...", next_question: "別の問い", label_timer: "手放す時間", timer_prompt: "開始ボタンを押して、手放す準備をしましょう。", timer_running: "手放しの時間です。呼吸に集中してください。", timer_start: "始める", timer_pause: "一時停止", ambient_none: "静寂", ambient_wind: "風", ambient_rain: "雨音", label_success: "完了", timer_done: "空間が軽やかになりました。", timer_placeholder: "何を手放しましたか？", save_archive: "保管庫に記録する", label_pause: "意図的な休息", pause_placeholder: "何が欲しいですか？", pause_start: "24시간待つ", inner_calm: "内なる静寂", pause_done: "24時間の休息を経て、<br>衝動が静まるのを待ちます。", back_home: "ホームへ戻る", weight_prefix: "約 ", weight_suffix: " KG 手放しました", toast_saved: "内省が記録されました", empty_archive: "まだ記録はありません。", btn_backup: "バックアップ", btn_restore: "復元", msg_restored: "データを復元しました。", home_journey: "30日の旅", btn_complete: "完了する", journey_done: "今日の分は完了しました", journey_wait: "明日を待ってください", pause_cost: "予想価格（オプション）", pause_saved: " 節約しました。", pause_waiting: "24時間保留中...",
        type_reflection: "内省", type_pause: "休息", type_journey: "旅", type_clearance: "手放し",
        q: ["今日、手放したい思考は何ですか？", "心を乱す持ち物はありませんか？", "より単純な明日のための小さな一歩は？", "たった一つ残すとしたら何ですか？", "空白がもたらす平穏を感じますか？"],
        wisdom: ["幸福は所有ではなく存在にある。", "単純さは究極の洗練である。", "少なく持つほど、多くを得る。", "余白にこそ新しい気が流れる。", "物に所有されてはいけません. "]
    }
};
const state = {
    lang: localStorage.getItem('minimalist_lang') || (translations[navigator.language.replace('_', '-').split('-')[0]] ? navigator.language.replace('_', '-').split('-')[0] : 'en'),
    archive: JSON.parse(localStorage.getItem('minimalist_archive') || '[]'),
    journey: JSON.parse(localStorage.getItem('minimalist_journey') || '{"startDate": null, "completed": []}'),
    savings: JSON.parse(localStorage.getItem('minimalist_savings') || '{"total": 0, "count": 0}'),
    timer: { interval: null, seconds: 600, isRunning: false, ambient: 'none' },
    audio: { context: null, ambientSource: null }
};

function applyLanguage(l) {
    state.lang = l;
    localStorage.setItem('minimalist_lang', l);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[l][key]) el.innerHTML = translations[l][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[l][key]) el.placeholder = translations[l][key];
    });
    document.querySelectorAll('.lang-item').forEach(item => {
        item.classList.toggle('active', item.textContent.toLowerCase() === l);
    });
    triggerHaptic(10); refreshWisdom(); updateLightness(); updateThemeToggleButton();
}

// Apply language immediately to avoid flicker
applyLanguage(state.lang);

function triggerHaptic(duration = 20) {
    if (window.AndroidInterface && window.AndroidInterface.vibrate) window.AndroidInterface.vibrate(duration);
    else if (navigator.vibrate) navigator.vibrate(duration);
    playClickSound();
}

function playClickSound() {
    try {
        if (!state.audio.context) initAudio();
        const ctx = state.audio.context;
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        // Minimalist "Tick" sound
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
        // Ignore audio errors
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('minimalist_theme', isDark ? 'dark' : 'light');

    if (window.AndroidInterface && window.AndroidInterface.setSystemBarsTheme) {
        window.AndroidInterface.setSystemBarsTheme(isDark);
    }
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#000000' : '#FFFFFF');

    updateThemeToggleButton();
    triggerHaptic(30);
    updateLightness();
}

function updateThemeToggleButton() {
    const isDark = document.body.classList.contains('dark-mode');
    const t = translations[state.lang];
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = isDark ? t.noon_mode : t.toggle_mode;
}

function updateLightness() {
    const count = state.archive.length;
    const total = state.archive.reduce((acc, item) => acc + (parseFloat(item.weight) || 0), 0);
    const weightValue = total.toFixed(1);
    const t = translations[state.lang];
    const weightEl = document.getElementById('weight-stat');
    const widgetWeightEl = document.getElementById('widget-stat-summary');
    if (weightEl) weightEl.textContent = `${t.weight_prefix}${weightValue}${t.weight_suffix}`;
    if (widgetWeightEl) widgetWeightEl.textContent = `${weightValue}${t.weight_suffix}`.toUpperCase();

    // Update Savings
    const savingsEl = document.getElementById('savings-stat');
    if (savingsEl) {
        if (state.savings.total > 0) {
            savingsEl.textContent = `TOTAL SAVED: ${state.savings.total.toLocaleString()} (${state.savings.count} ITEMS)`;
        } else {
            savingsEl.textContent = '';
        }
    }

    const screens = document.querySelectorAll('.screen');
    if (document.body.classList.contains('dark-mode')) {
        screens.forEach(s => s.style.background = '');
    } else {
        const lightness = Math.min(count * 0.8, 15);
        screens.forEach(s => {
            s.style.background = `radial-gradient(circle at center, #ffffff 0%, #fafafa ${100 - lightness}%)`;
        });
    }
    updateClutter(total);
}

function initClutter() {
    const layer = document.getElementById('clutter-layer');
    if (!layer || layer.children.length > 0) return;

    // Create 30-50 random particles representing "Mental Clutter"
    const particleCount = 40;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
        const div = document.createElement('div');
        div.classList.add('clutter-particle');

        // Random Properties
        const size = Math.random() * 60 + 20; // 20px - 80px
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.left = `${posX}%`;
        div.style.top = `${posY}%`;

        // Random movement duration
        div.style.transitionDuration = `${Math.random() * 20 + 10}s`;

        fragment.appendChild(div);
    }
    layer.appendChild(fragment);

    // Start subtle drift
    setInterval(() => {
        document.querySelectorAll('.clutter-particle').forEach(p => {
            p.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)`;
        });
    }, 5000);
}

function updateClutter(totalWeight) {
    const layer = document.getElementById('clutter-layer');
    if (!layer) return;

    // Goal: 15kg to fully clear the screen
    const maxWeight = 15;
    const current = Math.min(totalWeight, maxWeight);

    // Opacity: Starts at 1.0 (0kg) -> Ends at 0.0 (15kg)
    const opacity = 1 - (current / maxWeight);

    // Non-linear fade for better effect (squaring keeps it visible longer initially)
    layer.style.opacity = Math.max(0, opacity * opacity);
}

function goToScreen(id) {
    triggerHaptic(15);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + id).classList.add('active');

    // Show/Hide global header elements
    const themeBtn = document.getElementById('theme-btn');
    const langBtn = document.getElementById('lang-btn');
    const backBtn = document.getElementById('global-back-btn');

    const isHome = (id === 'home');
    const isSplash = (id === 'splash');

    if (themeBtn) themeBtn.style.display = isHome ? 'block' : 'none';
    if (langBtn) langBtn.style.display = isHome ? 'flex' : 'none';
    if (backBtn) backBtn.style.display = (!isHome && !isSplash) ? 'flex' : 'none';

    if (id === 'home') refreshWisdom();
    if (id === 'archive') loadArchive();
    if (id === 'question') refreshQuestion();
    if (id === 'journey') loadJourney();
}

function loadJourney() {
    // 1. Initialize Start Date if first time
    if (!state.journey.startDate) {
        // Find if we already have a 'Journey' type archive to infer start date?
        // Or just start today.
        // Let's ensure start date is midnight of today to act as Day 1
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        state.journey.startDate = now.getTime();
        localStorage.setItem('minimalist_journey', JSON.stringify(state.journey));
    }

    // 2. Calculate Current Day
    const now = new Date().getTime();
    const diff = now - state.journey.startDate;
    // 1 day = 86400000 ms. 
    // If diff is 0 ~ 86400 -> Day 1.
    const currentDay = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    // Clamp to 30
    const displayDay = Math.min(Math.max(currentDay, 1), 30);
    const completed = state.journey.completed.includes(displayDay);

    // 3. UI Update
    const t = translations[state.lang];
    const challenge = challengeData.find(c => c.day === displayDay);

    document.getElementById('journey-day-label').textContent = `DAY ${displayDay}`;

    const card = document.getElementById('journey-card');
    const text = document.getElementById('journey-text');

    if (challenge) {
        text.textContent = (state.lang === 'ko' ? challenge.ko : challenge.en);
    } else {
        text.textContent = "...";
    }

    const btn = document.getElementById('btn-complete-journey');
    const status = document.getElementById('journey-status');

    if (completed) {
        btn.style.display = 'none';
        card.style.opacity = '0.5';
        card.style.borderColor = 'var(--border-color)';
        status.textContent = t.journey_done;
    } else if (currentDay > 30) {
        // Journey Finished completely?
        btn.style.display = 'none';
        status.textContent = "All 30 Days Completed!";
    } else {
        // Active today
        btn.style.display = 'inline-block';
        card.style.opacity = '1';
        card.style.borderColor = 'var(--text-color)';
        status.textContent = "";
    }

    // 4. Render Map (Dots)
    const map = document.getElementById('journey-map');
    map.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
        const dot = document.createElement('div');
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.borderRadius = '50%';
        dot.style.background = 'var(--border-color)';

        if (state.journey.completed.includes(i)) {
            dot.style.background = 'var(--text-color)';
        } else if (i === displayDay && !completed) {
            dot.style.background = 'var(--accent-color)';
            dot.style.transform = 'scale(1.5)';
        }

        map.appendChild(dot);
    }
}

function completeJourney() {
    const now = new Date().getTime();
    const diff = now - state.journey.startDate;
    const currentDay = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    if (state.journey.completed.includes(currentDay)) return;

    // Save state
    state.journey.completed.push(currentDay);
    localStorage.setItem('minimalist_journey', JSON.stringify(state.journey));

    // Archive it
    const challenge = challengeData.find(c => c.day === currentDay);
    const content = state.lang === 'ko' ? challenge.ko : challenge.en;

    // Custom save for Journey (Day X: Content)
    const date = new Date().toLocaleDateString(state.lang === 'ko' ? 'ko-KR' : 'en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const journeyEntry = {
        type: 'Journey',
        content: `Day ${currentDay}: ${content}`,
        date: date,
        weight: 0.5 // Journey steps are heavy!
    };
    state.archive.unshift(journeyEntry);
    localStorage.setItem('minimalist_archive', JSON.stringify(state.archive));

    triggerHaptic(50);
    loadJourney(); // refresh UI
    updateLightness();
    showToast(translations[state.lang].journey_done);
}

function refreshWisdom() {
    const el = document.getElementById('wisdom-quote');
    const list = translations[state.lang].wisdom;
    if (el) el.textContent = `"${list[Math.floor(Math.random() * list.length)]}"`;
    updateLightness();
}

function refreshQuestion() {
    const el = document.getElementById('q-text');
    const list = translations[state.lang].q;
    if (el) el.textContent = `"${list[Math.floor(Math.random() * list.length)]}"`;
}

function handleQuestion(e) {
    if (e.key === 'Enter') {
        const val = e.target.value.trim();
        const question = document.getElementById('q-text').textContent;
        if (val) {
            saveToArchive('Reflection', val, question);
            e.target.value = '';
            const overlay = document.getElementById('deep-fade-overlay');
            overlay.style.opacity = '1';
            setTimeout(() => {
                showToast(translations[state.lang].toast_saved);
                goToScreen('home');
                setTimeout(() => { overlay.style.opacity = '0'; }, 600);
            }, 2000);
        }
    }
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = msg;
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 3000);
    }
}

function toggleTimer() {
    triggerHaptic(25);
    const btn = document.getElementById('timer-btn');
    const prompt = document.getElementById('timer-prompt');
    const breather = document.getElementById('breathing-circle');
    const t = translations[state.lang];

    if (state.timer.isRunning) {
        clearInterval(state.timer.interval);
        state.timer.isRunning = false;
        btn.textContent = t.timer_start;
        prompt.textContent = t.timer_prompt;
        if (breather) breather.classList.remove('active');
        stopAmbient();
    } else {
        state.timer.isRunning = true;
        btn.textContent = t.timer_pause;
        prompt.textContent = t.timer_running || "Focus on your breath.";
        if (breather) breather.classList.add('active');
        startAmbient();
        state.timer.interval = setInterval(() => {
            state.timer.seconds--;
            updateTimerUI();
            if (state.timer.seconds <= 0) {
                clearInterval(state.timer.interval);
                stopAmbient();
                if (breather) breather.classList.remove('active');
                document.getElementById('timer-ritual').style.display = 'none';
                document.getElementById('timer-success').style.display = 'flex';
            }
        }, 1000);
    }
}

function updateTimerUI() {
    const m = Math.floor(state.timer.seconds / 60);
    const s = state.timer.seconds % 60;
    document.getElementById('timer-val').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function finishTimerRitual() {
    const val = document.getElementById('t-input').value.trim() || 'Declutter';
    saveToArchive('Clearance', val);
    goToScreen('home');
    document.getElementById('timer-ritual').style.display = 'flex';
    document.getElementById('timer-success').style.display = 'none';
    state.timer.seconds = 600;
    updateTimerUI();
}

function savePurchase() {
    const val = document.getElementById('p-input').value.trim();
    const price = parseInt(document.getElementById('p-price').value.replace(/,/g, '')) || 0;

    if (val) {
        triggerHaptic(50);
        // Save price in local currency format if possible, but here just raw number
        saveToArchive('Pause', val, null, price);

        document.getElementById('p-input').value = '';
        document.getElementById('p-price').value = '';

        document.getElementById('pause-content').style.display = 'none';
        document.getElementById('pause-success').style.display = 'flex';
    }
}

function saveToArchive(type, content, question = null, price = 0) {
    const date = new Date().toLocaleDateString(state.lang === 'ko' ? 'ko-KR' : 'en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    let weight = 0;
    if (type === 'Clearance') weight = (Math.random() * 0.2 + 0.1);
    else if (type === 'Journey') weight = 0.5;
    else weight = 0.05; // Thoughts also have weight

    state.archive.unshift({ type, content, question, date, weight, price });
    localStorage.setItem('minimalist_archive', JSON.stringify(state.archive));
    updateLightness();
}

function loadArchive() {
    const cont = document.getElementById('archive-content');
    updateLightness();
    if (state.archive.length === 0) {
        cont.innerHTML = `<div style="margin-top:100px;color:var(--text-dim);font-weight:200;">${translations[state.lang].empty_archive}</div>`;
        return;
    }
    cont.innerHTML = state.archive.map((item, idx) => {
        let displayHtml = '';

        // Translate Type
        const typeKey = 'type_' + item.type.toLowerCase();
        const typeLabel = translations[state.lang][typeKey] || item.type;

        if (item.type === 'Journey') {
            const challengeText = item.question || item.content;
            const isLegacy = !item.question;
            displayHtml = `<div style="font-size:0.9rem; color:var(--text-muted); font-family:var(--font-serif); margin-bottom:6px;">${challengeText}</div>`;
            if (!isLegacy) displayHtml += `<div class="content" style="font-size: 0.8rem; color:var(--accent-color); margin-top:0;">✓ ${item.content}</div>`;
        } else if (item.type === 'Pause') {
            // Show price if exists
            const priceDisplay = item.price ? ` <span style="font-size:0.75rem; color:var(--text-dim);">(${item.price.toLocaleString()})</span>` : '';
            displayHtml = `<div class="content">${item.content}${priceDisplay}</div>
                            <div style="font-size:0.7rem; color:var(--accent-color); margin-top:5px; opacity:0.8;">${translations[state.lang].pause_waiting}</div>`;
        } else {
            displayHtml = `${item.question ? `<div style="font-size:0.8rem; color:var(--text-muted); font-style:italic; margin-top:8px; margin-bottom:4px;">Q: ${item.question}</div>` : ''}
                            <div class="content">${item.content}</div>`;
        }

        return `<div class="archive-item">
                    <div class="delete-btn" onclick="deleteFromArchive(${idx})">×</div>
                    <div class="date">${item.date} · ${typeLabel}</div>
                    ${displayHtml}
                </div>`;
    }).join('');
}

function deleteFromArchive(idx) {
    // If it was a 'Pause' item, we assume the user successfully "let go" of the desire.
    // So we add its price to savings.
    // (Or we could ask "Did you buy it?" but let's keep it minimal: Delete = Let Go)
    const item = state.archive[idx];
    if (item.type === 'Pause' && item.price > 0) {
        state.savings.total += item.price;
        state.savings.count++;
        localStorage.setItem('minimalist_savings', JSON.stringify(state.savings));
        showToast(`${item.price.toLocaleString()}${translations[state.lang].pause_saved}`);
    }

    state.archive.splice(idx, 1);
    localStorage.setItem('minimalist_archive', JSON.stringify(state.archive));
    loadArchive();
    triggerHaptic(30);
}

function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.archive));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "minimalist_archive_" + new Date().toISOString().split('T')[0] + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            if (Array.isArray(data)) {
                state.archive = data;
                localStorage.setItem('minimalist_archive', JSON.stringify(state.archive));
                loadArchive();
                showToast(translations[state.lang].msg_restored);
            }
        } catch (err) {
            console.error("Import failed", err);
        }
    };
    reader.readAsText(file);
}

async function initAudio() { if (!state.audio.context) state.audio.context = new (window.AudioContext || window.webkitAudioContext)(); }

function setAmbient(t, el) {
    state.timer.ambient = t;
    if (el) {
        document.querySelectorAll('.ambient-btn').forEach(b => b.classList.remove('active'));
        el.classList.add('active');
    }
    triggerHaptic(10);
    if (state.timer.isRunning) startAmbient();
}

function startAmbient() {
    stopAmbient();
    if (state.timer.ambient === 'none') return;
    initAudio();
    const ctx = state.audio.context;
    if (ctx.state === 'suspended') ctx.resume();

    // Create Noise Buffer
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    if (state.timer.ambient === 'wind') {
        filter.type = 'lowpass';
        filter.frequency.value = 600;
        filter.Q.value = 5;

        // LFO for "gusty" breathing effect
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.15; // Slow cycle
        lfoGain.gain.value = 250;
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();
        state.audio.lfo = lfo;

        gain.gain.value = 0.15;
    } else if (state.timer.ambient === 'rain') {
        filter.type = 'highpass';
        filter.frequency.value = 1800; // Crisp rain sound
        gain.gain.value = 0.08;
    }

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
    state.audio.ambientSource = noise;
}

function stopAmbient() {
    if (state.audio.ambientSource) {
        state.audio.ambientSource.stop();
        state.audio.ambientSource = null;
    }
    if (state.audio.lfo) {
        state.audio.lfo.stop();
        state.audio.lfo = null;
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem('minimalist_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    applyLanguage(state.lang);
    const isDark = document.body.classList.contains('dark-mode');
    if (window.AndroidInterface && window.AndroidInterface.setSystemBarsTheme) {
        window.AndroidInterface.setSystemBarsTheme(isDark);
    }
    initClutter();
    updateLightness();
};
