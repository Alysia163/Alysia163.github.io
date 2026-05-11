// 等待页面加载完成 —— 卡片渐入动画
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card, index) {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';

        setTimeout(function () {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, index * 160);
    });
});

// ======================
// 爱心点击 + 气泡浮动效果
// ======================
function toggleLove() {
    const icon = document.getElementById('loveIcon');
    icon.style.color = '#ff5e99';
    icon.style.transform = 'scale(1.3)';

    createHearts();

    setTimeout(() => {
        alert('✅ 恭喜你！成功加入爱门神教！');
    }, 200);
}

// 核心：浮动爱心气泡动画
function createHearts() {
    const btn = document.getElementById('loveIcon');
    const rect = btn.getBoundingClientRect();
    const x = rect.left + 15;
    const y = rect.top + 10;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = Math.random() * 10 + 12 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = 9999;
        heart.style.opacity = 1;

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 60 + 40;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance - 70;

        heart.style.transition = 'all 0.7s ease';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translate(${dx}px, ${dy}px)`;
            heart.style.opacity = 0;
        }, 10);

        setTimeout(() => heart.remove(), 700);
    }
}