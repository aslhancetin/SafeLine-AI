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

 ## Canlı Demo
https://cerulean-dasik-e1df36.netlify.app/


https://www.loom.com/share/8e3d414065dd4d64a600fbd52ef2b6db

🛠️ Teknoloji Yığını (Tech Stack)
Proje, maksimum hız ve sıfır gecikme (low-latency) için "Serverless/Client-Side" mimari ile geliştirilmiştir:

Zeka (LLM): Groq API üzerinden Llama 3.3 70B modeli (Piyasadaki en hızlı inference süresi için tercih edildi).

Önyüz: HTML5, Vanilla JavaScript (Hız için framework kullanılmadı), Tailwind CSS.

Native Web API'leri: * SpeechRecognition: Sesten metne (STT) dönüşüm.

SpeechSynthesis: Metinden sese (TTS) dönüşüm.

Geolocation: Anlık konum tespiti ve koordinat bildirimi.

🛠 SafeLine Nasıl Çalışır?
SafeLine, kullanıcının girdiği verileri analiz ederek kişiselleştirilmiş, hayat kurtarıcı talimatlar üreten bir sistemdir. Süreç şu şekilde işler:

1. Giriş ve Tanımlama (Input)
Kullanıcılar durumlarını üç farklı yolla sisteme iletebilirler:

Sesli Komut: Web Speech API kullanılarak mikrofondan alınan ses, anlık olarak metne dönüştürülür.

Serbest Metin: Kullanıcı, yaşadığı sorunu (örneğin: "Nefesim daralıyor") metin alanına yazar.

Hızlı Seçim Kartları: Panik atak, kanama, bayılma veya yanık gibi en yaygın acil durumlar için hazır butonlar kullanılır.

2. Yapay Zeka Analizi (Processing)
Uygulama, Groq API üzerinden Llama 3.3 70B modeline bağlanır.

Sistem Komutu: Yapay zekaya sadece hayat kurtarıcı, kısa ve numaralandırılmış adımlar vermesi talimatı verilmiştir.

Dinamik Yanıt: Gönderilen metin analiz edilir ve saniyeler içinde o duruma özel müdahale adımları oluşturulur.

3. Müdahale ve Destek (Output)
Görsel Talimatlar: Adım adım yapılması gerekenler ekrana yansıtılır.

Sesli Rehberlik (TTS): Yapay zekanın ürettiği metin, SpeechSynthesis aracılığıyla sesli olarak okunur; böylece kullanıcı ekranı okuyamayacak durumdaysa bile yardım alabilir.

Sakinleştirici Arayüz: Arka planda çalışan "nefes animasyonu" ve telkin edici mesajlar, kullanıcının panik seviyesini düşürmeyi hedefler.

Konum Paylaşımı: İsteğe bağlı olarak tarayıcı üzerinden GPS koordinatları alınarak yer bildirimi kolaylaştırılır.
