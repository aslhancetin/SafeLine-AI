Ürün Gereksinimleri Belgesi (PRD): SafeLine
1. Proje Kimliği (Meta Bilgiler)
Proje Adı: SafeLine

Proje Sloganı: Yapay Zeka Destekli Dinamik İlk Yardım Asistanı

Proje Durumu: MVP (Minimum Viable Product - Çıkarılabilecek En Temel/Çalışır Sürüm)

Hedef Platform: Mobil Öncelikli Web Uygulaması (Tarayıcı üzerinden, kurulumsuz)

Geliştirme Modeli: İstemci Taraflı (Client-Side) & API Tabanlı (Serverless)

2. Problem ve Amaç (Neden Bu Projeyi Yapıyoruz?)
Problem: Kaza veya acil tıbbi durumlarda (yanık, kanama, boğulma, panik atak vb.) insanlar büyük bir panik yaşarlar. Mevcut ilk yardım uygulamalarında menüler arasında gezinmek, doğru kategoriyi bulmak ve uzun, sıkıcı metinleri okumak kriz anında imkansıza yakındır. Bu durum hayati saniyelerin kaybedilmesine neden olur.

Amaç: SafeLine, panik halindeki kişilerin bilgiye erişim süresini sıfıra indirmeyi amaçlar. Kullanıcının uzun metinler okumak yerine asistanla konuşarak, eller serbest (hands-free) bir şekilde hastaya müdahale edebilmesini ve saniyeler içinde doğru yönlendirmeyi almasını hedefler.

3. Hedef Kullanıcı Kitlesi
Profesyonel ilk yardım veya tıp eğitimi olmayan, aniden gelişen acil bir durumla karşılaşmış, o an ne yapacağını bilmeyen ve panik halindeki her yaştan sıradan insanlar (öğrenciler, ebeveynler, yoldan geçen bir vatandaş vb.).

4. Kullanıcı Hikayeleri (Kullanıcının Yapacağı 3 Temel Eylem)
Bu projenin kalbini oluşturan ve kullanıcının sistemle kuracağı 3 ana etkileşim senaryosu şunlardır:

Senaryo 1 (Sesli ve Hızlı Müdahale):
"Panik halindeki bir kullanıcı olarak, acil durumu telefona yazmakla vakit kaybetmeden doğrudan mikrofona söylemek ve saniyeler içinde ne yapmam gerektiğini yapay zekadan sesli olarak duymak istiyorum. Böylece ellerimi hastaya müdahale etmek için kullanabilirim."

Senaryo 2 (Sessiz veya Gürültülü Ortamda Hızlı Seçim):
"Sesimi kullanamadığım veya konuşamayacak kadar panik olduğum bir durumda, ekrandaki hazır acil durum kartlarına (Yanık, Kanama, Bayılma vb.) tek tıkla basarak anında doğru yönlendirmeyi almak istiyorum."

Senaryo 3 (Metin Girişi ve Profesyonel Yardım Çağırma):
"Kendi spesifik durumumu kısaca metin kutusuna yazıp (örneğin 'Göğsüm sıkışıyor ve sol kolum uyuşuyor') anında özel ilk yardım adımlarını görmek ve ekranın altındaki sabit butona tıklayarak kaybolmadan doğrudan 112'yi arayabilmek istiyorum."

5. Temel Özellikler ve Gereksinimler (Requirements)
Uygulamanın çalışması için kesinlikle kodlanacak özellikler öncelik sırasına göre listelenmiştir.

P1 (Kritik) - Sesli Girdi ve NLP Analizi: Kullanıcı mikrofona konuşabilmeli (Web Speech API) ve bu metin Groq API'ye (Llama 3.3) gönderilip anında kısa/numaralandırılmış talimatlara dönüştürülmeli.

P1 (Kritik) - Dinamik Sesli Yanıt (TTS): Yapay zekadan gelen metinsel talimatlar, kullanıcıya otomatik olarak cihazın kendi hoparlöründen sesli okunmalı.

P1 (Kritik) - Eller Serbest (Hands-Free) Döngüsü: Sesli okuma bittiğinde mikrofon tekrar aktif hale gelebilmeli (veya kolayca tetiklenebilmeli).

P2 (Önemli) - Hızlı Durum Kartları: Arayüzde en sık karşılaşılan 4 temel durum (Panik, Kanama, Bayılma, Yanık) için hazır butonlar bulunmalı.

P2 (Önemli) - Acil 112 Entegrasyonu: Ekranın en altında her koşulda sabit duran ve tıklanınca telefonun arama ekranına 112'yi düşüren bir buton (sticky footer) olmalı.

P3 (Ekstra) - Konum Tespiti: Geolocation API kullanılarak kullanıcının anlık koordinatları ekrana yansıtılmalı.

6. Kullanıcı Akışı (User Flow)
Karşılama: Kullanıcı uygulamayı açar (index.html). Ekranda büyük "YARDIM İSTİYORUM" butonunu görür.

Durum İletimi: Kullanıcı sesle, metinle veya hızlı butonlarla acil durumu sisteme bildirir.

Arka Plan İşlemi: Tarayıcı, alınan metni Groq API'ye iletir ve eşzamanlı olarak konum izni ister.

Müdahale Paneli: Ana arayüz yerini "Müdahale Paneli"ne bırakır. Ekranın bir tarafında adım adım yazılı talimatlar belirir, diğer tarafında stresi azaltıcı ritmik bir "nefes alma" animasyonu döner.

Sesli Yönlendirme: Asistan talimatları okur. Kullanıcı bu esnada ekrandaki 112 butonunu kullanarak profesyonel yardım çağırır.

7. Teknik Çerçeve (Tech Stack)
Uygulama, sıfır gecikme ve yüksek erişilebilirlik prensibiyle tasarlanmıştır.

Önyüz (Frontend): HTML5, Vanilla JavaScript, CSS (Tailwind via CDN).

Yapay Zeka (AI): Groq API (Llama 3.3 70b modeli) - Düşük gecikmeli (low-latency) yanıt üretimi için.

Yerel Tarayıcı API'leri:

SpeechRecognition API: Sesten metne (STT).

SpeechSynthesis API: Metinden sese (TTS).

Geolocation API: Anlık konum tespiti.

8. Başarı Kriterleri (Success Metrics)
Sistemin kullanıcı girdisine (ses/metin) yapay zeka ile yanıt verme süresinin 2 saniyenin altında olması (Groq API hızı).

Uygulamanın menülerinde kaybolmadan en fazla 1 tıklama veya 1 sesli komut ile müdahale adımlarına ulaşılabilmesi.