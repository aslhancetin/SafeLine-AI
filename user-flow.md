SafeLine - Kullanıcı Akışı (User Flow)
Bu doküman, acil bir durumla karşılaşan ve panik halinde olan bir kullanıcının SafeLine uygulamasına girdiği andan, profesyonel yardım (112) gelene kadar sistemle nasıl etkileşime girdiğini adım adım açıklar.

🟢 1. Karşılama (Onboarding)
Kullanıcı uygulamayı (web sitesini) açar.

Görünen Ekran: Uygulama, dikkat dağıtıcı hiçbir menü veya fazladan karşılama ekranı barındırmaz. Kullanıcı uygulamayı açar açmaz doğrudan durumunu bildirebileceği giriş alanı ve hızlı seçim kartlarıyla karşılaşır.

🔀 2. Durum Bildirimi (İlk Etkileşim)
Sistem, kullanıcının içinde bulunduğu krizin türüne ve panik seviyesine göre 3 farklı veri giriş yolu sunar:

Yol A - Sesli Komut (En Hızlı): Kullanıcı doğrudan mikrofon ikonuna basar. "Arkadaşımın parmağı kesildi" der. Web Speech API sesi metne çevirir ve sesli komut bittiğinde sistemi otomatik olarak tetikler.

Yol B - Hızlı Seçim Kartları (Sessiz Durum): Kullanıcı konuşamayacak durumdaysa; ekrandaki "Panik Atak", "Kanama", "Bayılma" veya "Yanık" kartlarından birine tek tıkla basar. Sistem durumu otomatik olarak algılar ve anında süreci başlatır.

Yol C - Metin Girişi (Spesifik Durum): Kullanıcı özel bir durumu kısaca metin kutusuna yazar ve enter tuşuna veya "Onayla" butonuna basar.

⚙️ 3. İşleme ve Yetkilendirme (Sistem Arka Planı)
Kullanıcı veriyi girdiği an (A, B veya C yoluyla), sistem saniyeler içinde şu arka plan işlemlerini eşzamanlı olarak yürütür:

TTS Kilidinin Açılması: Tarayıcıların otomatik ses çalma engeli (autoplay policy) arka planda sessiz bir tetikleyiciyle kaldırılır.

AI İsteği: Girilen acil durum verisi, Groq API'ye (Llama 3.3 modeli) özel bir sistem promptu ile gönderilir.

Konum İzni: Tarayıcı üzerinden kullanıcıdan konum izni istenir.

İzin verilirse: Koordinatlar (Enlem/Boylam) çekilir.

İzin verilmezse: Sistem çökmez, "Konum alınamadı. Yine de talimatları uygula" moduna geçer.

Arayüz Değişimi: Ana giriş ekranı gizlenir (hidden), "Müdahale Paneli" açılır.

🔴 4. Müdahale Paneli (Kritik Yönlendirme Aşaması)
Kullanıcının artık ekranla işi bitmiştir, telefonu yanına bırakıp iki eliyle hastaya müdahale edebilir.

Yapay Zeka (AI) Yanıtı: Groq API'den gelen hayat kurtarıcı, kısa ve numaralandırılmış ilk yardım adımları, kelime kelime (streaming) ekrana yazdırılmaya başlar.

Sesli Yönlendirme (TTS): Metin ekrana düşer düşmez, cihazın hoparlöründen Türkçe olarak yüksek sesle okunur.

Psikolojik Destek (UI): Ekranın sağ tarafında, panik atağı önlemek ve stresi azaltmak için tasarlanmış ritmik bir "Nefes Alma" animasyonu ve "Harika gidiyorsun, ambulans yolda" destek mesajı sürekli olarak döner.

🚑 5. Profesyonel Yardım Çağırma (Çıkış Noktası)
Kullanıcı AI'ın talimatlarını uygularken veya uyguladıktan sonra son adıma geçer.

Eylem: Ekranın en altında her koşulda sabit duran kırmızı "112'yi Ara" barına tıklar.

Onay Modalı: Yanlışlıkla basmaları önlemek için ekranda bir onay kutusu (Modal) açılır.

Arama Tetikleme: Kullanıcı "Ara" dediğinde, sistem cihazın yerel telefon uygulamasını (tel:112 protokolü ile) açar ve 112 numarasını hazır halde ekrana düşürür.