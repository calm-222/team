// البيانات المفترضة للزوار
const visitors = [
    { device: 'جهاز 1', mac: '00:1A:2B:3C:4D:5E' },
    { device: 'جهاز 2', mac: '00:1A:2B:3C:4D:5F' }
];

// عرض الزوار
function displayVisitors() {
    const visitorList = document.getElementById('visitor-list');
    visitors.forEach(visitor => {
        const visitorItem = document.createElement('div');
        visitorItem.textContent = `${visitor.device} - ${visitor.mac}`;
        visitorList.appendChild(visitorItem);
    });
}

// معالجة QR Code
document.getElementById('generate-qr-btn').addEventListener('click', () => {
    alert('تم إنشاء QR Code!'); // هنا يمكن تغييرها إلى كود QR حقيقي
});

// إنشاء فيديو مرئي (هذا مجرد تمثيل، يجب ربطه بكاميرا حقيقية)
const video = document.getElementById('live-video');
video.src = 'video-url.mp4'; // يمكنك تغييرها إلى رابط البث المباشر الخاص بك

// استدعاء دالة عرض الزوار عند تحميل الصفحة
window.onload = displayVisitors;
