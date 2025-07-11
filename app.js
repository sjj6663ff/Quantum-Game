// ====== 应用状态管理 ======
const appState = {
    coins: 325,
    unlockedStories: [1], // 默认解锁量子情缘
    currentStoryId: null,
    currentChapterIndex: 0,
    adInterval: null,
    adSeconds: 30,
    adCount: 0,
    lastAdTime: 0,
    paymentCount: 0,
    lastPaymentDate: null,
    fontSize: 18,
    readingProgress: 0
};

// ====== 剧本数据 ======
const stories = [
    {
        id: 1,
        title: "量子情缘",
        coverColor: "#6C5CE7",
        category: "爽文类",
        duration: 10,
        price: 20,
        chapters: [
            {
                title: "第一章：神秘的相遇",
                content: `在量子实验室的走廊里，你撞上了一个抱着大量文件的女孩。文件散落一地，其中一张纸飘到了你的脚边。你弯腰捡起，发现上面画着复杂的量子纠缠示意图。女孩匆忙跑来，她的研究牌上写着"艾莉森·陈 - 量子物理学研究员"。
                
"谢谢你帮我捡起文件,"她喘息着说，"这个图表是我最新的研究，关于量子通讯的突破性进展。"她的眼睛因为激动而闪烁着光芒。
                
你注意到她有着深褐色的眼睛和齐肩的黑发，穿着实验室白大褂却掩盖不住她独特的气质。她看起来既聪明又充满活力，让你不禁对她产生了浓厚的兴趣。
                
"我是实验室新来的研究员，"你自我介绍道，"我对量子通讯很感兴趣。"
                
艾莉森的眼睛亮了起来："真的吗？我们正好在寻找志愿者参与我们的新实验。如果你有兴趣，我可以带你参观实验室。"
                
她指向走廊尽头的一扇门，门上标着"量子通讯实验室"。你犹豫了一下，但好奇心战胜了谨慎。
                
实验室里充满了各种高科技设备，中央的量子计算机发出低沉的嗡鸣声。艾莉森向你展示了她的研究成果，解释了量子纠缠如何实现瞬时通讯。
                
"但是有个问题，"她皱着眉头说，"我们的实验总是会在最后阶段失败，导致量子态坍缩。"
                
她指向一个巨大的显示屏，上面显示着复杂的波形图。"看这里，每次实验进行到87%时，系统就会崩溃。"
                
你仔细观察着波形图，突然注意到一个异常的模式。"等等，这个频率波动...是不是外部干扰？"
                
艾莉森惊讶地看着你："你怎么知道？我们确实怀疑有外部干扰，但一直找不到源头。"
                
就在这时，实验室的警报突然响起，红灯闪烁。一个冰冷的声音从扩音器中传出："警告：量子场不稳定。请所有人员立即撤离。"
                
艾莉森脸色大变："天啊，又来了！这次比以往都早！"
                
你看到量子计算机的指示灯疯狂闪烁，显示屏上的波形变得混乱不堪。实验室的温度开始急剧上升。
                
"我们必须立即关闭系统！"艾莉森冲向控制台，但被一道能量屏障挡住了。
                
"安全协议启动了！"她绝望地说，"系统锁定，我们被困住了！"
                
你环顾四周，寻找可能的解决方案。时间一分一秒地过去，实验室的温度越来越高。`,
                choices: [
                    { text: "尝试手动重置量子场稳定器", next: 1 },
                    { text: "寻找备用电源切断系统", next: 1 },
                    { text: "使用控制台绕过安全协议", next: 1 }
                ]
            },
            {
                title: "第二章：量子危机",
                content: `你迅速冲向墙角的备用电源控制箱。汗水从额头滑落，实验室的温度已经上升到令人难以忍受的程度。
                
"快点！"艾莉森喊道，"量子场即将崩溃！"
                
你打开控制箱，里面是复杂的电路系统。你需要找到主电源线切断系统。有三条颜色各异的电缆：红色、蓝色和黄色。
                
"哪一条是主电源？"你焦急地问。
                
艾莉森一边在控制台上操作一边回答："通常是红色的，但上次维护后他们可能更换了配置！"
                
时间不多了。警报声越来越急促，显示屏上的警告变成了鲜红色："临界状态：量子坍缩即将发生"
                
你必须在三条电缆中做出选择。`,
                choices: [
                    { text: "切断红色电缆", next: 2 },
                    { text: "切断蓝色电缆", next: 2 },
                    { text: "切断黄色电缆", next: 2 }
                ]
            },
            {
                title: "第三章：量子纠缠",
                content: `你果断地切断了黄色电缆。实验室的灯光闪烁了几下，然后完全熄灭。几秒钟后，应急灯亮起，警报声停止了。
                
"成功了！"艾莉森松了一口气，靠在控制台上。"你是怎么知道要切断黄色电缆的？"
                
"直觉，"你回答，"再加上一点逻辑。红色太明显，蓝色是备用系统，黄色可能是主电源。"
                
艾莉森赞赏地看着你："你的直觉救了我们的命。量子场已经稳定了。"
                
她走到量子计算机前，开始检查系统。"奇怪，干扰源还在。它似乎来自实验室内部。"
                
你们一起检查设备，最终发现干扰源是一个小型装置，巧妙地隐藏在通风口里。
                
"这是量子干扰器，"艾莉森震惊地说，"有人故意破坏我们的实验！"
                
就在这时，实验室的门突然打开，一个穿着保安制服的男人走了进来。他手里拿着一个遥控器，脸上带着诡异的笑容。
                
"做得不错，但游戏还没结束，"他说，"我是'时间守护者'组织的成员，我们不能让量子通讯技术落入错误的人手中。"
                
他按下遥控器，实验室再次响起警报。"这次，你们没有机会了。"`,
                choices: [
                    { text: "尝试说服他停止破坏", next: 3 },
                    { text: "寻找机会夺取遥控器", next: 3 },
                    { text: "分散他的注意力，让艾莉森行动", next: 3 }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "时间裂隙",
        coverColor: "#00CEC9",
        category: "剧情向",
        duration: 5,
        price: 5,
        chapters: [
            {
                title: "第一章：祖父的怀表",
                content: `在整理祖父的遗物时，你发现了一个古老的怀表。表盖内侧刻着一行小字："时间非线，可弯可折"。当你擦拭表盘时，怀表突然发出金色光芒，周围的一切瞬间静止。窗外的鸟儿悬停在空中，水滴凝固在喷泉上方，整个世界变成了静止的画面。只有你还能移动。
                
你走出房子，发现街道上的一切都静止了。人们保持着行走的姿势，汽车悬停在半空，甚至连风都停止了。你手中的怀表发出微弱的光芒，指针在逆向转动。
                
在街道尽头，你看到一个穿着复古服装的人正在向你招手。他看起来与周围静止的世界格格不入。
                
"欢迎来到时间的裂隙，"他说，"我是时间的守护者。"
                
他解释说你手中的怀表是时间控制装置，只有被选中的人才能使用它。但现在时间流出现了异常，导致整个世界停滞。
                
"你必须修复时间流，"守护者说，"否则世界将永远停滞在这一刻。"
                
他指向城市中心的钟楼："那里是时间流的中心。去吧，修复它，恢复时间的流动。"`,
                choices: [
                    { text: "立即前往钟楼", next: 0 },
                    { text: "询问更多关于时间裂隙的信息", next: 0 },
                    { text: "尝试使用怀表恢复时间", next: 0 }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "古墓密语",
        coverColor: "#FF7675",
        category: "推理",
        duration: 10,
        price: 25,
        chapters: [
            {
                title: "第一章：石碑密码",
                content: `在埃及考古现场，你发现了一个隐藏地下室。墙壁上刻着奇异的符号，在火炬的照耀下闪烁着金光。你的向导紧张地说："这是传说中的法老诅咒室，没有人能活着离开这里。"
                
你仔细观察墙壁上的符号，发现它们似乎是一种古老的密码系统。每个符号都对应着特定的象形文字。地下室的中央有一个石台，上面放着一个镶有宝石的盒子。
                
"不要碰它！"向导警告道，"那是法老的诅咒盒！"
                
但你已经注意到盒子上有与墙壁符号匹配的凹槽。显然，墙壁上的密码是打开盒子的关键。
                
突然，地下室的门轰然关闭，将你们困在里面。墙壁开始移动，天花板缓缓下降。
                
"诅咒启动了！"向导惊恐地喊道，"我们只有十分钟时间解开密码，否则这里将成为我们的坟墓！"`,
                choices: [
                    { text: "尝试破译符号密码", next: 0 },
                    { text: "寻找隐藏的机关或出口", next: 0 },
                    { text: "研究石台上的盒子", next: 0 }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "星际迷航",
        coverColor: "#FDCB6E",
        category: "爽文类",
        duration: 3,
        price: 3,
        chapters: [
            {
                title: "第一章：未知信号",
                content: `作为星际探索船"先锋号"的船长，你正带领船员穿越未知星域。突然，飞船接收到一个奇怪的信号，导航系统瞬间失灵。仪表盘上的警报灯疯狂闪烁，副船长紧张地报告："船长，我们似乎被某种引力场困住了！"
                
你迅速查看星图，发现你们偏离航线数光年，进入了一个未被标记的星系。舷窗外，一个巨大的星云缓缓旋转，发出诡异的紫色光芒。
                
"启动紧急协议！"你命令道，"所有人员进入一级戒备状态！"
                
就在这时，主屏幕上出现了一个未知的太空船影像。它呈完美的几何形状，表面闪烁着金属光泽，没有任何可见的推进系统。
                
"收到通讯请求，"通讯官报告，"但信号格式完全陌生。"
                
你面临一个关键决定：`,
                choices: [
                    { text: "尝试建立通讯", next: 0 },
                    { text: "准备防御系统", next: 0 },
                    { text: "派遣侦察小队", next: 0 }
                ]
            }
        ]
    }
];

// ====== 支付套餐配置 ======
const paymentPackages = {
    starter: { coins: 3, price: 0.29 },
    standard: { coins: 5, price: 0.49 },
    premium: { coins: 10, price: 0.99 }
};

// ====== DOM元素缓存 ======
const elements = {
    coinCount: document.getElementById('coin-count'),
    libraryGrid: document.getElementById('library-grid'),
    readerSection: document.getElementById('reader-section'),
    readerStoryTitle: document.getElementById('reader-story-title'),
    chapterTitle: document.getElementById('chapter-title'),
    storyContent: document.getElementById('story-content'),
    choicesContainer: document.getElementById('choices-container'),
    paymentModal: document.getElementById('payment-modal'),
    adModal: document.getElementById('ad-modal'),
    adProgress: document.getElementById('ad-progress'),
    adTimer: document.getElementById('ad-timer'),
    readingProgress: document.getElementById('reading-progress'),
    readerContent: document.querySelector('.reader-content'),
    prevChapter: document.getElementById('prev-chapter'),
    nextChapter: document.getElementById('next-chapter'),
    fontSmaller: document.getElementById('font-smaller'),
    fontReset: document.getElementById('font-reset'),
    fontLarger: document.getElementById('font-larger')
};

// ====== 初始化应用 ======
document.addEventListener('DOMContentLoaded', function () {
    // 加载用户数据
    loadUserData();

    // 更新阅读币显示
    updateCoinDisplay();

    // 渲染剧本库
    renderLibrary();

    // 设置事件监听器
    setupEventListeners();
});

// ====== 用户数据管理 ======
function loadUserData() {
    const savedData = localStorage.getItem('quantumNovelUser');
    if (savedData) {
        const data = JSON.parse(savedData);
        appState.coins = data.coins || 325;
        appState.unlockedStories = data.unlockedStories || [1];
        appState.fontSize = data.fontSize || 18;
        appState.adCount = data.adCount || 0;
        appState.lastAdTime = data.lastAdTime || 0;
        appState.paymentCount = data.paymentCount || 0;
        appState.lastPaymentDate = data.lastPaymentDate || null;
    }
}

function saveUserData() {
    const data = {
        coins: appState.coins,
        unlockedStories: appState.unlockedStories,
        fontSize: appState.fontSize,
        adCount: appState.adCount,
        lastAdTime: appState.lastAdTime,
        paymentCount: appState.paymentCount,
        lastPaymentDate: appState.lastPaymentDate
    };
    localStorage.setItem('quantumNovelUser', JSON.stringify(data));
}

// ====== 界面更新函数 ======
function updateCoinDisplay() {
    elements.coinCount.textContent = appState.coins;
}

function renderLibrary() {
    elements.libraryGrid.innerHTML = '';

    stories.forEach(story => {
        const isUnlocked = appState.unlockedStories.includes(story.id);

        const card = document.createElement('div');
        card.className = 'book-card';

        card.innerHTML = `
            <div class="book-cover" style="background: linear-gradient(135deg, ${story.coverColor}, ${lightenColor(story.coverColor)});">
                ${story.title}
            </div>
            <div class="book-title">${story.title}</div>
            <div class="book-meta">
                <div class="book-category">${story.category}</div>
                <div class="book-duration">⏱️ ${story.duration}分钟</div>
            </div>
            <div class="unlock-status ${isUnlocked ? 'unlocked' : 'locked'}">
                ${isUnlocked ? '已解锁' : `${story.price}阅读币解锁`}
            </div>
        `;

        const readBtn = document.createElement('button');
        readBtn.className = 'read-btn';
        readBtn.textContent = isUnlocked ? '开始阅读' : '解锁';
        readBtn.dataset.id = story.id;

        readBtn.addEventListener('click', () => {
            const storyId = parseInt(readBtn.dataset.id);
            const storyObj = stories.find(s => s.id === storyId);

            if (isUnlocked) {
                openReader(storyObj);
            } else {
                if (appState.coins >= story.price) {
                    // 解锁剧本
                    appState.coins -= story.price;
                    appState.unlockedStories.push(storyId);
                    saveUserData();
                    updateCoinDisplay();
                    renderLibrary();
                    openReader(storyObj);
                } else {
                    alert(`阅读币不足！需要${story.price}币，你当前有${appState.coins}币`);
                }
            }
        });

        card.appendChild(readBtn);
        elements.libraryGrid.appendChild(card);
    });
}

// ====== 阅读器功能 ======
function openReader(story) {
    appState.currentStoryId = story.id;
    appState.currentChapterIndex = 0;

    // 更新阅读器界面
    elements.readerStoryTitle.textContent = story.title;
    elements.readerSection.style.display = 'flex';

    // 加载第一章
    loadChapter(story.id, 0);

    // 设置滚动监听
    setupReadingProgress();

    // 应用保存的字体大小
    applyFontSize();
}

function loadChapter(storyId, chapterIndex) {
    const story = stories.find(s => s.id === storyId);
    if (!story || !story.chapters[chapterIndex]) return;

    const chapter = story.chapters[chapterIndex];

    // 更新章节信息
    elements.chapterTitle.textContent = chapter.title;
    elements.storyContent.innerHTML = chapter.content;

    // 清空选择项容器
    elements.choicesContainer.innerHTML = '';

    // 添加选择项
    chapter.choices.forEach((choice, index) => {
        const choiceBtn = document.createElement('button');
        choiceBtn.className = 'choice-btn';
        choiceBtn.textContent = choice.text;
        choiceBtn.addEventListener('click', () => {
            handleChoice(story, chapterIndex, index);
        });
        elements.choicesContainer.appendChild(choiceBtn);
    });

    // 滚动到顶部
    elements.readerContent.scrollTop = 0;
    appState.readingProgress = 0;
    elements.readingProgress.style.width = '0%';

    // 更新章节导航按钮状态
    updateChapterNav(story, chapterIndex);
}

function handleChoice(story, chapterIndex, choiceIndex) {
    const chapter = story.chapters[chapterIndex];
    const nextChapterIndex = chapter.choices[choiceIndex].next;

    if (nextChapterIndex >= 0 && nextChapterIndex < story.chapters.length) {
        // 加载下一章
        loadChapter(story.id, nextChapterIndex);
    } else {
        alert("故事结束！");
        closeReader();
    }
}

function closeReader() {
    elements.readerSection.style.display = 'none';
}

// ====== 阅读进度功能 ======
function setupReadingProgress() {
    elements.readerContent.addEventListener('scroll', updateProgressBar);
}

function updateProgressBar() {
    const scrollHeight = elements.readerContent.scrollHeight;
    const clientHeight = elements.readerContent.clientHeight;
    const scrollTop = elements.readerContent.scrollTop;

    // 计算进度百分比
    const progress = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
    appState.readingProgress = progress;
    elements.readingProgress.style.width = `${progress}%`;
}

// ====== 字体调整功能 ======
function setupFontControls() {
    elements.fontSmaller.addEventListener('click', () => adjustFontSize(-2));
    elements.fontReset.addEventListener('click', () => resetFontSize());
    elements.fontLarger.addEventListener('click', () => adjustFontSize(2));
}

function adjustFontSize(change) {
    appState.fontSize = Math.min(24, Math.max(14, appState.fontSize + change));
    applyFontSize();
    saveUserData();
}

function resetFontSize() {
    appState.fontSize = 18;
    applyFontSize();
    saveUserData();
}

function applyFontSize() {
    elements.storyContent.style.fontSize = `${appState.fontSize}px`;
}

// ====== 章节导航功能 ======
function updateChapterNav(story, chapterIndex) {
    elements.prevChapter.disabled = chapterIndex === 0;
    elements.nextChapter.disabled = chapterIndex === story.chapters.length - 1;
}

// ====== 广告系统 ======
function startAd() {
    // 广告频率限制（每小时最多3次）
    const now = Date.now();
    const oneHour = 3600000; // 1小时

    // 如果超过1小时，重置计数
    if (now - appState.lastAdTime > oneHour) {
        appState.adCount = 0;
    }

    // 检查是否达到上限
    if (appState.adCount >= 3) {
        alert('广告观看已达上限，请稍后再试');
        return;
    }

    // 显示广告弹窗
    elements.adModal.style.display = 'flex';
    elements.adProgress.style.width = '0%';
    elements.adTimer.textContent = `广告剩余: ${appState.adSeconds}秒`;

    // 启动倒计时
    startAdTimer();
}

function startAdTimer() {
    let seconds = appState.adSeconds;
    let progress = 0;

    // 清除之前的计时器
    if (appState.adInterval) clearInterval(appState.adInterval);

    appState.adInterval = setInterval(() => {
        seconds--;
        elements.adTimer.textContent = `广告剩余: ${seconds}秒`;

        // 更新进度条
        progress += 100 / appState.adSeconds;
        elements.adProgress.style.width = `${progress}%`;

        if (seconds <= 0) {
            clearInterval(appState.adInterval);
            completeAdViewing();
        }
    }, 1000);
}

function completeAdViewing() {
    // 增加阅读币
    appState.coins += 1;
    appState.adCount++;
    appState.lastAdTime = Date.now();

    // 保存数据
    saveUserData();
    updateCoinDisplay();

    // 关闭广告弹窗
    setTimeout(() => {
        elements.adModal.style.display = 'none';
        alert('广告观看完成，获得1阅读币！');
    }, 500);
}

// ====== 支付系统 ======
function processPayment(packageId) {
    const packageInfo = paymentPackages[packageId];
    if (!packageInfo) return;

    // 支付频率限制（每天最多5次）
    const today = new Date().toDateString();

    // 如果是新的一天，重置计数
    if (appState.lastPaymentDate !== today) {
        appState.paymentCount = 0;
        appState.lastPaymentDate = today;
    }

    // 检查是否达到上限
    if (appState.paymentCount >= 5) {
        alert('今日支付次数已达上限');
        return;
    }

    // 模拟支付处理
    simulatePayment(packageInfo);
}

function simulatePayment(packageInfo) {
    const payBtn = event.target;
    const originalText = payBtn.textContent;
    payBtn.textContent = "处理中...";
    payBtn.disabled = true;

    // 模拟支付处理
    setTimeout(() => {
        // 支付成功
        appState.coins += packageInfo.coins;
        appState.paymentCount++;
        saveUserData();
        updateCoinDisplay();

        // 恢复按钮状态
        payBtn.textContent = originalText;
        payBtn.disabled = false;

        // 关闭支付弹窗
        elements.paymentModal.style.display = 'none';

        alert(`支付成功！获得${packageInfo.coins}个阅读币`);
    }, 2000);
}

// ====== 事件监听器设置 ======
function setupEventListeners() {
    // 充值入口按钮
    document.getElementById('recharge-btn').addEventListener('click', () => {
        elements.paymentModal.style.display = 'flex';
    });

    // 免费获取按钮
    document.getElementById('free-coins-btn').addEventListener('click', startAd);

    // 关闭充值弹窗
    document.getElementById('close-payment').addEventListener('click', () => {
        elements.paymentModal.style.display = 'none';
    });

    // 关闭广告按钮
    document.getElementById('close-ad').addEventListener('click', () => {
        clearInterval(appState.adInterval);
        elements.adModal.style.display = 'none';
    });

    // 返回主界面按钮
    document.getElementById('reader-back').addEventListener('click', closeReader);

    // 充值按钮
    document.querySelectorAll('.pay-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const packageId = e.target.dataset.package;
            processPayment(packageId);
        });
    });

    // 章节导航
    elements.prevChapter.addEventListener('click', () => {
        if (appState.currentStoryId && appState.currentChapterIndex > 0) {
            loadChapter(appState.currentStoryId, appState.currentChapterIndex - 1);
        }
    });

    elements.nextChapter.addEventListener('click', () => {
        const story = stories.find(s => s.id === appState.currentStoryId);
        if (story && appState.currentChapterIndex < story.chapters.length - 1) {
            loadChapter(appState.currentStoryId, appState.currentChapterIndex + 1);
        }
    });

    // 字体控制
    setupFontControls();
}

// ====== 工具函数 ======
function lightenColor(color) {
    // 简单实现颜色变亮效果
    if (color.startsWith('#')) {
        // 处理十六进制颜色
        let r = parseInt(color.substr(1, 2), 16);
        let g = parseInt(color.substr(3, 2), 16);
        let b = parseInt(color.substr(5, 2), 16);

        r = Math.min(255, r + 40);
        g = Math.min(255, g + 40);
        b = Math.min(255, b + 40);

        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    return color;
}