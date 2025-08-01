# 🚀 إعداد سريع للباك إند مع MongoDB الجديد

## ✅ تم إعداد قاعدة البيانات
- **المستخدم**: elhadad3593
- **Cluster**: cluster0.3vqlnfg.mongodb.net
- **قاعدة البيانات**: paypass

## 📋 خطوات التشغيل:

### 1. اختبار الاتصال
```bash
npm run test-db
```

### 2. تشغيل الباك إند للتطوير
```bash
npm run dev
```

### 3. تشغيل الباك إند للإنتاج
```bash
npm start
```

## 🔧 الإعدادات المطبقة:

### قاعدة البيانات:
- ✅ تم إعداد الاتصال بـ MongoDB Atlas
- ✅ تم إنشاء قاعدة بيانات `paypass`
- ✅ تم إعداد JWT Secret

### الخادم:
- ✅ Port: 5000
- ✅ CORS enabled
- ✅ JSON parsing enabled
- ✅ Error handling

## 🌐 الوصول للخادم:
- **Local**: http://localhost:5000
- **API Base**: http://localhost:5000/api

## 📝 ملاحظات:
- الباك إند جاهز للعمل مع قاعدة البيانات الجديدة
- يمكنك الآن تشغيل الفرونت إند للاتصال بالباك إند
- تأكد من أن MongoDB Atlas يسمح بالاتصال من IP الخاص بك 