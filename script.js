// بيانات افتراضية للزوار
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
  
  // تشغيل البث المباشر من الكاميرا باستخدام WebRTC
  async function startWebRTCStream() {
    const videoElement = document.getElementById('live-video');
  
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment" // الكاميرا الخلفية على الهاتف
        },
        audio: false
      });
  
      videoElement.srcObject = stream;
      videoElement.play();
    } catch (error) {
      console.error("خطأ في تشغيل الكاميرا:", error);
      alert("فشل تشغيل الكاميرا. تأكد من السماح بالوصول.");
    }
  }
  
  // عند تحميل الصفحة
  window.onload = function () {
    displayVisitors();
    startWebRTCStream();
  };
  
