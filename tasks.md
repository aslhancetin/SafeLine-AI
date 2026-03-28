SafeLine - Geliştirme Görev Listesi (Tasks)
Bu doküman, SafeLine MVP sürümünün sıfırdan canlıya alınmasına kadar geçecek tüm teknik adımları içerir.

🎨 Faz 1: Proje Kurulumu ve Arayüz (UI/UX)
Kullanıcının göreceği ekranların ve temel iskeletin oluşturulması.

[+] index.html dosyasının oluşturulması ve HTML5 standartlarına (semantic tags) uygun iskeletin kurulması.

[+] Tailwind CSS CDN bağlantısının projeye dahil edilmesi.

[+] Tipografi için okunaklı ve sakinleştirici bir font (ör. Inter) eklenmesi.

[+] "Yardım İstiyorum" ana butonunun ve metin/ses giriş alanının tasarlanması.

[+] 4 Temel Hızlı Durum Kartının (Panik, Kanama, Bayılma, Yanık) arayüze eklenmesi.

[+] Ekranın en altında sabit duracak (sticky) kırmızı "112'yi Ara" barının kodlanması.

[+] Yapay zeka yanıtının gösterileceği "Müdahale Paneli"nin tasarlanması.

[+] Hastaya müdahale sırasında stresi azaltmak için tasarlanan "Ritmik Nefes Animasyonu"nun (CSS Keyframes ile) yazılması.

🔌 Faz 2: Tarayıcı API'leri (Native Özellikler)
Kullanıcının cihaz donanımlarıyla (Mikrofon, Hoparlör, GPS) iletişime geçilmesi.

[+] Web Speech API (STT): Kullanıcının mikrofona konuştuğu sesi algılayıp metne dökecek JavaScript fonksiyonunun yazılması.

[+] Web Speech API (TTS): Yapay zekadan dönen metni cihazın hoparlöründen Türkçe (tr-TR) dilinde sesli okuyacak fonksiyonun yazılması.

[+] Geolocation API: Tarayıcıdan konum izni isteyip, enlem ve boylam verilerini "Müdahale Paneli"ne yansıtacak kodun yazılması.

[+] 112 butonuna tıklandığında telefonun arama ekranını tetikleyecek <a href="tel:112"> yönlendirmesinin yapılması.

🧠 Faz 3: Yapay Zeka (Groq API) Entegrasyonu
SafeLine'ın beyni olan mantık katmanının kurulması.

[+] JavaScript içerisinden Groq API'ye (Llama 3.3 70b modeli) bağlanacak fetch isteğinin yazılması.

[+] Acil durumlar için özel olarak tasarlanmış Sistem İsteminin (System Prompt) yapılandırılması (Örn: "Sadece kısa, numaralandırılmış, hayat kurtarıcı adımlar ver...").

[+] Gelen API yanıtının ekrandaki ai-response div'ine (tercihen bekletmeden, streaming ile) yazdırılması.

[+] Hızlı Durum Kartlarına tıklandığında, o kartın metninin otomatik olarak AI'a gönderilmesini sağlayacak Event Listener'ların (Tıklama dinleyicilerinin) eklenmesi.

🛡️ Faz 4: Hata Yönetimi (Edge Cases) ve Optimizasyon
İşlerin ters gittiği senaryolara karşı önlem alınması.

[+] Tarayıcı veya cihaz mikrofonu desteklemiyorsa, kullanıcıya "Sesli komut desteklenmiyor, lütfen metin girin" uyarısının gösterilmesi.

[+] Kullanıcı konum izni vermezse uygulamanın çökmemesi, ekranda "Konum alınamadı, yine de talimatları uygula" mesajının belirmesi.

[+] Groq API'ye bağlanırken internet koparsa veya hata dönerse, ekrana otomatik olarak "Bağlantı koptu. Lütfen doğrudan 112'yi arayın!" yazdırılması.

🚀 Faz 5: Canlıya Alma (Deployment)
Projenin herkes tarafından erişilebilir hale getirilmesi.

[+] Kodların derlenip gereksiz boşlukların temizlenmesi.

[+] Projenin GitHub reposuna (deposu) yüklenmesi.

