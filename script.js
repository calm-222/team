// بيانات الزوار التجريبية
const visitors = [
    { device: 'جهاز 1', mac: '00:1A:2B:3C:4D:5E' },
    { device: 'جهاز 2', mac: '00:1A:2B:3C:4D:5F' }
];

// عرض الزوار داخل القائمة
function displayVisitors() {
    const visitorList = document.getElementById('visitor-list');
    visitors.forEach(visitor => {
        const visitorItem = document.createElement('div');
        visitorItem.textContent = `${visitor.device} - ${visitor.mac}`;
        visitorList.appendChild(visitorItem);
    });
}

// عند الضغط على زر "افتح الكاميرا"
document.getElementById('open-camera-btn').addEventListener('click', () => {
    document.getElementById('camera-input').click();
});

// تشغيل البث من الملف الذي تم التقاطه بالكاميرا
document.getElementById('camera-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const video = document.getElementById('live-video');
        video.src = URL.createObjectURL(file);
        video.play();
    }
});

// عرض الزوار عند تحميل الصفحة
window.onload = displayVisitors;
