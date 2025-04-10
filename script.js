// بيانات الزوار (مثال)
const visitors = [
    { device: 'جهاز 1', mac: '00:1A:2B:3C:4D:5E', time: new Date().toLocaleString() },
    { device: 'جهاز 2', mac: '00:1A:2B:3C:4D:5F', time: new Date().toLocaleString() }
  ];
  
  // بيانات التسجيلات (مثال)
  const registrations = [
    { name: 'تسجيل 1', date: new Date().toLocaleString() },
    { name: 'تسجيل 2', date: new Date().toLocaleString() }
  ];
  
  // واجهة تسجيل الدخول: التحقق من بيانات الدخول
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // التحقق من بيانات الدخول (user / calm810)
    if (username === 'user' && password === 'calm810') {
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('main-section').style.display = 'block';
    } else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  });
  
  // دالة عرض الزوار
  function displayVisitors() {
    const list = document.getElementById('visitor-list');
    list.innerHTML = '';
    visitors.forEach(v => {
      const li = document.createElement('li');
      li.textContent = `${v.device} - ${v.mac} - ${v.time}`;
      list.appendChild(li);
    });
  }
  
  // دالة عرض التسجيلات
  function displayRegistrations() {
    const list = document.getElementById('registration-list');
    list.innerHTML = '';
    registrations.forEach(r => {
      const li = document.createElement('li');
      li.textContent = `${r.name} - ${r.date}`;
      list.appendChild(li);
    });
  }
  
  // دالة توليد QR Code باستخدام API خارجي
  function generateQRCode() {
    const container = document.getElementById('qr-code');
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?data=https://www.example.com&size=200x200';
    img.alt = 'QR Code';
    container.appendChild(img);
  }
  
  // معالجات الأزرار على واجهة البرنامج الرئيسية
  
  // قسم الزوار
  document.getElementById('visitor-btn').addEventListener('click', function() {
    const pwd = prompt('أدخل كلمة المرور للوصول إلى الزوار');
    if (pwd === 'calm2004') {
      document.getElementById('visitor-section').style.display = 'block';
      document.getElementById('registration-section').style.display = 'none';
      document.getElementById('qr-section').style.display = 'none';
      document.getElementById('live-section').style.display = 'none';
      displayVisitors();
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  });
  
  // قسم التسجيلات
  document.getElementById('registration-btn').addEventListener('click', function() {
    const pwd = prompt('أدخل كلمة المرور للوصول إلى التسجيلات');
    if (pwd === 'calm2004') {
      document.getElementById('registration-section').style.display = 'block';
      document.getElementById('visitor-section').style.display = 'none';
      document.getElementById('qr-section').style.display = 'none';
      document.getElementById('live-section').style.display = 'none';
      displayRegistrations();
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  });
  
  // قسم QR Code
  document.getElementById('qr-btn').addEventListener('click', function() {
    document.getElementById('qr-section').style.display = 'block';
    document.getElementById('visitor-section').style.display = 'none';
    document.getElementById('registration-section').style.display = 'none';
    document.getElementById('live-section').style.display = 'none';
    generateQRCode();
  });
  
  // قسم البث المباشر
  document.getElementById('live-btn').addEventListener('click', function() {
    document.getElementById('live-section').style.display = 'block';
    document.getElementById('visitor-section').style.display = 'none';
    document.getElementById('registration-section').style.display = 'none';
    document.getElementById('qr-section').style.display = 'none';
  });
  
  // بدء البث المباشر باستخدام كاميرا الويب (WebRTC)
  document.getElementById('start-live-btn').addEventListener('click', async function() {
    const liveContainer = document.getElementById('live-stream');
    liveContainer.innerHTML = '';
    const video = document.createElement('video');
    video.autoplay = true;
    video.playsInline = true;
    liveContainer.appendChild(video);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      video.srcObject = stream;
    } catch (error) {
      alert('لم يتم الوصول إلى الكاميرا: ' + error.message);
    }
  });
  