// التعامل مع واجهة تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'calm810') {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
  } else {
    alert('اسم المستخدم أو كلمة المرور غير صحيحة');
  }
});

// دالة لإخفاء جميع الأقسام
function hideAllSections() {
  document.getElementById('visitor-section').style.display = 'none';
  document.getElementById('registration-section').style.display = 'none';
  document.getElementById('qr-section').style.display = 'none';
  document.getElementById('live-section').style.display = 'none';
  document.getElementById('3d-section').style.display = 'none';
}


// الاتصال بالطوارئ
document.getElementById('emergency-btn').addEventListener('click', function() {
  hideAllSections();
  alert("تم الاتصال بالطوارئ.");
  setTimeout(function() {
    alert("تم الاتصال بالرقم 01142034998");
  }, 10000);
});

// الزوار
document.getElementById('visitor-btn').addEventListener('click', function() {
  const pwd = prompt('أدخل كلمة المرور للوصول إلى الزوار');
  if (pwd === 'calm2004') {
    hideAllSections();
    document.getElementById('visitor-section').style.display = 'block';
    displayVisitors();
  } else {
    alert('كلمة المرور غير صحيحة');
  }
});

// التسجيلات
document.getElementById('registration-btn').addEventListener('click', function() {
  const pwd = prompt('أدخل كلمة المرور للوصول إلى التسجيلات');
  if (pwd === 'calm2004') {
    hideAllSections();
    document.getElementById('registration-section').style.display = 'block';
    displayRegistrations();
  } else {
    alert('كلمة المرور غير صحيحة');
  }
});

// QR Code
document.getElementById('qr-btn').addEventListener('click', function() {
  hideAllSections();
  document.getElementById('qr-section').style.display = 'block';
  generateQRCode();
});

// قفل الأقفال
document.getElementById('lock-btn').addEventListener('click', function() {
  alert("تم قفل جميع الأقفال");
});

// فتح الأقفال
document.getElementById('unlock-btn').addEventListener('click', function() {
  alert("تم فتح جميع الأقفال");
});

// البث المباشر
document.getElementById('live-btn').addEventListener('click', function() {
  hideAllSections();
  document.getElementById('live-section').style.display = 'block';
  alert("يرجى السماح للبث المباشر.");
  document.getElementById('start-live-btn').addEventListener('click', startLiveStream);
});

// بدء البث المباشر
async function startLiveStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const localVideo = document.createElement('video');
    localVideo.autoplay = true;
    localVideo.playsInline = true;
    localVideo.srcObject = stream;
    document.getElementById('live-stream').innerHTML = '';
    document.getElementById('live-stream').appendChild(localVideo);
  } catch (error) {
    alert("لم يتم الوصول إلى الكاميرا.");
  }
}

// عرض الزوار
function displayVisitors() {
  const list = document.getElementById('visitor-list');
  list.innerHTML = '';
  visitors.forEach(v => {
    const li = document.createElement('li');
    li.textContent = `${v.device} - ${v.mac} - ${v.time}`;
    list.appendChild(li);
  });
}

// عرض التسجيلات
function displayRegistrations() {
  const list = document.getElementById('registration-list');
  list.innerHTML = '';
  registrations.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.name} - ${r.date}`;
    list.appendChild(li);
  });
}

// توليد QR Code
function generateQRCode() {
  const container = document.getElementById('qr-code');
  container.innerHTML = '';
  const img = document.createElement('img');
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?data=https://www.example.com&size=200x200';
  img.alt = 'QR Code';
  container.appendChild(img);
}

// عرض المجسم 3D باستخدام Three.js
function display3DModel() {
  // إنشاء مشهد جديد
  const scene = new THREE.Scene();

  // إعداد الكاميرا
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // إعداد المحرك (Renderer)
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('3d-container').appendChild(renderer.domElement);

  // إضافة إضاءة قوية للمشهد
  const light = new THREE.AmbientLight(0xffffff, 1); // إضاءة محيطية بيضاء
  scene.add(light);
  
  // إضافة إضاءة موجهة لتسليط الضوء على المجسم
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  // تحميل المجسم باستخدام GLTFLoader
  const loader = new THREE.GLTFLoader();
  loader.load('3d.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.scale.set(1, 1, 1); // تحديد حجم المجسم

    camera.position.z = 5; // تعيين موقع الكاميرا

    // حلقة التحديث لتحريك المجسم
    const animate = function () {
      requestAnimationFrame(animate);
      
      // تحريك المجسم بشكل مستمر
      model.rotation.x += 0.01;
      model.rotation.y += 0.01;
      
      // إعادة رسم المشهد
      renderer.render(scene, camera);
    };

    animate(); // بدء عملية التحريك
  }, undefined, function (error) {
    console.error('خطأ في تحميل المجسم:', error);
  });
}

// عند الضغط على الزر "عرض المنزل 3D"
document.getElementById('3d-btn').addEventListener('click', function() {
  hideAllSections();
  document.getElementById('3d-section').style.display = 'block'; // إظهار قسم 3D
  display3DModel(); // عرض المجسم 3D
});
