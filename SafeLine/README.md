🚑 SafeLine: Yapay Zeka Destekli Dinamik İlk Yardım Asistanı
📌 Vizyon
Acil durumlarda en büyük düşman panik ve zaman kaybıdır. SafeLine, kriz anındaki "bilgiye erişim süresini" sıfıra indirmeyi amaçlayan, kullanıcıyla konuşan ve tüm odağını hastaya vermesini sağlayan dinamik bir acil durum yol arkadaşıdır.

🚨 Problem: Neyi Çözüyoruz?
Panik Etkisi: Acil durumlarda insanlar rasyonel düşünme yetisini kaybeder ve panik yaşarlar.

Hantal Uygulamalar: Mevcut ilk yardım uygulamaları durağan birer ansiklopedi gibidir; menülerde gezinmek ve uzun metinler okumak kriz anında vakit kaybettirir.

Erişim Bariyeri: Profesyonel eğitimi olmayan kişiler, ambulans gelene kadar geçen o kritik ilk dakikalarda ne yapacağını bilemez.

✅ Çözüm: SafeLine Yaklaşımı
SafeLine, "Eller Serbest (Hands-Free)" felsefesiyle çalışır:

Doğal Dil Analizi: Kullanıcı durumunu ister yazarak ister mikrofona konuşarak anlatır.

Anlık Strateji Üretimi: Llama 3.3 (Groq) modeli, saniyeler içinde sadece hayati, kısa ve numaralandırılmış talimatlar üretir.

Sesli Yönlendirme: Talimatlar cihaz tarafından sesli okunur, böylece kullanıcı ekrana bakmadan hastaya müdahale edebilir.

🛠️ Teknoloji Yığını (Tech Stack)
Proje, maksimum hız ve sıfır gecikme (low-latency) için "Serverless/Client-Side" mimari ile geliştirilmiştir:

Zeka (LLM): Groq API üzerinden Llama 3.3 70B modeli (Piyasadaki en hızlı inference süresi için tercih edildi).

Önyüz: HTML5, Vanilla JavaScript (Hız için framework kullanılmadı), Tailwind CSS.

Native Web API'leri: * SpeechRecognition: Sesten metne (STT) dönüşüm.

SpeechSynthesis: Metinden sese (TTS) dönüşüm.

Geolocation: Anlık konum tespiti ve koordinat bildirimi.