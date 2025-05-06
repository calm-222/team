// إخفاء كل الأقسام
function hideAllSections() {
  document.getElementById('3d-section').style.display = 'none';
  document.getElementById('live-section').style.display = 'none';
}

// تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'calm810') {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
  } else {
    alert('اسم المستخدم أو كلمة المرور غير صحيحة');
  }
});

// زر الاتصال بالطوارئ
document.getElementById('emergency-btn').addEventListener('click', () => {
  hideAllSections();
  alert('سيتم الاتصال بالطوارئ خلال 10 ثوانٍ...');
  setTimeout(() => {
    alert('تم الاتصال بالرقم: 01142034998 من الرقم: 01154138882');
  }, 10000);
});

// زر الزوار
document.getElementById('visitor-btn').addEventListener('click', () => {
  hideAllSections();
  const pwd = prompt('كلمة المرور لعرض الزوار');
  if (pwd === 'calm2004') {
    alert('قائمة الزوار:\n- جهاز 1\n- جهاز 2');
  } else {
    alert('كلمة المرور غير صحيحة');
  }
});

// زر التسجيلات
document.getElementById('registration-btn').addEventListener('click', () => {
  hideAllSections();
  const pwd = prompt('كلمة المرور لعرض التسجيلات');
  if (pwd === 'calm2004') {
    alert('التسجيلات اليومية:\n- تسجيل 1\n- تسجيل 2');
  } else {
    alert('كلمة المرور غير صحيحة');
  }
});

// زر QR
document.getElementById('qr-btn').addEventListener('click', () => {
  hideAllSections();
  const section = document.getElementById('live-section');
  section.style.display = 'block';
  document.getElementById('start-live-btn').style.display = 'none';

  const qrContainer = document.getElementById('live-stream');
  qrContainer.innerHTML = '';

  const img = document.createElement('img');
  img.src = 'https://online-qr-generator.com/qr-codes/?data=https://calm-222.github.io/team/';
  img.alt = 'QR Code';
  img.style.marginTop = '20px';
  qrContainer.appendChild(img);
});

// زر البث المباشر
document.getElementById('live-btn').addEventListener('click', () => {
  hideAllSections();
  const section = document.getElementById('live-section');
  section.style.display = 'block';
  document.getElementById('live-stream').innerHTML = '';
  document.getElementById('start-live-btn').style.display = 'block';
  alert('من فضلك اسمح بالوصول إلى الكاميرا عند الضغط على "بث الآن".');
});

// زر "بث الآن"
document.getElementById('start-live-btn').addEventListener('click', async () => {
  const container = document.getElementById('live-stream');
  container.innerHTML = '';

  const video = document.createElement('video');
  video.autoplay = true;
  video.playsInline = true;
  video.style.width = '100%';
  container.appendChild(video);

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    video.srcObject = stream;
  } catch (error) {
    alert('حدث خطأ أثناء الوصول إلى الكاميرا: ' + error.message);
  }
});

// زر قفل الأقفال
document.getElementById('lock-btn').addEventListener('click', () => {
  hideAllSections();
  alert('تم قفل جميع الأبواب والنوافذ');
});

// زر فتح الأقفال
document.getElementById('unlock-btn').addEventListener('click', () => {
  hideAllSections();
  alert('تم إلغاء قفل جميع الأبواب والنوافذ');
});

// زر عرض المجسم 3D
document.getElementById('3d-btn').addEventListener('click', () => {
  hideAllSections();
  const section = document.getElementById('3d-section');
  section.style.display = 'block';
  section.innerHTML = '<h3>عرض المنزل 3D</h3><div id="3d-container"></div>';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, section.clientWidth / 500, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(section.clientWidth, 500);
  document.getElementById('3d-container').appendChild(renderer.domElement);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load('3d.glb', function (gltf) {
    const model = gltf.scene;
    model.scale.set(1, 1, 1);
    scene.add(model);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      model.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, undefined, function (error) {
    console.error('خطأ في تحميل المجسم:', error);
    alert('فشل تحميل المجسم 3D');
  });
});


