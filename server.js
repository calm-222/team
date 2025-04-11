// استيراد المكتبات
const express = require('express');
const WebSocket = require('ws');
const http = require('http');

// إعداد خادم Express
const app = express();
const server = http.createServer(app);

// إعداد WebSocket
const wss = new WebSocket.Server({ server });

// التعامل مع الاتصال من العملاء عبر WebSocket
wss.on('connection', (ws) => {
    console.log('جهاز متصل');

    ws.on('message', (message) => {
        console.log('رسالة مستلمة: %s', message);
        // إرسال الرسالة لجميع الأجهزة المتصلة (Broadcast)
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('جهاز قطع الاتصال');
    });
});

// إعداد المسار لخدمة الملفات الثابتة (مثل HTML و JS)
app.use(express.static('public'));

// تشغيل الخادم على البورت 3000
server.listen(3000, () => {
    console.log('الخادم يعمل على البورت 3000');
});
