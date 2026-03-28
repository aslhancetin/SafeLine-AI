SafeLine - Teknoloji Yığını ve Mimari (Tech Stack)
Bu doküman, SafeLine MVP (Minimum Viable Product) sürümünün geliştirilmesinde kullanılan teknolojileri ve bu teknolojilerin seçilme nedenlerini (Mimari Kararlar) detaylandırmaktadır.

Projenin temel mühendislik felsefesi: "Acil durumlarda saniyeler hayati önem taşır. Sıfır kurulum, minimum gecikme (low-latency) ve maksimum erişilebilirlik."

🏗️ 1. Mimari Yaklaşım (Architecture)
SafeLine, geleneksel sunucu-istemci (client-server) modelinin getirdiği ağ gecikmelerini ortadan kaldırmak için Tamamen İstemci Taraflı (Client-Side) ve Sunucusuz (Serverless / API-Driven) bir mimari ile tasarlanmıştır. Uygulamanın tüm mantıksal işlemleri doğrudan kullanıcının tarayıcısında (Edge computing mantığıyla) çalışır.

🎨 2. Önyüz (Frontend) Katmanı
Uygulama, indirme veya uygulama mağazası onayı gerektirmeyen modern web standartları üzerine kurulmuştur.

HTML5 & Vanilla JavaScript (ES6+): * Mimari Karar: React, Vue veya Angular gibi sanal DOM (Virtual DOM) barındıran framework'lerin getirdiği ekstra dosya boyutundan (bundle size) bilinçli olarak kaçınılmıştır. Acil bir durumda sitenin zayıf internet bağlantılarında bile milisaniyeler içinde yüklenmesi gerektiğinden, en saf ve hızlı JS tercih edilmiştir.

Tailwind CSS (CDN Katmanı): * Mimari Karar: Hızlı prototipleme ve mobil öncelikli (responsive) tasarım için kullanılmıştır. Derleme (build) süreci gerektirmeden CDN üzerinden çekilerek sayfanın stil yükü hafifletilmiştir.

🧠 3. Yapay Zeka Katmanı (AI & LLM)
Projenin "karar verici beyni", statik veritabanları yerine anlık üretime dayalı (Generative AI) sistemlerle kurgulanmıştır.

Sağlayıcı: Groq API

Model: llama-3.3-70b-versatile (Meta'nın açık ağırlıklı yüksek performanslı modeli)

Mimari Karar (Neden Groq?): * Diğer LLM sağlayıcıları yerine Groq'un seçilmesinin en büyük nedeni hızdır. Groq'un özel LPU (Language Processing Unit) donanımı, saniyede yüzlerce kelime (token) üretebilir. Acil bir durumda kullanıcının yapay zekayı bekleme lüksü yoktur.

Streaming Yanıt Mimarisi: Gelen yapay zeka yanıtı tek bir büyük blok (JSON) halinde beklenmez. Yanıtlar parçalar halinde (chunk/stream) alınarak kelime kelime ekrana yazdırılır. Bu sayede İlk Bayta Ulaşma Süresi (TTFB) sıfıra yaklaştırılır ve sesli okuma hemen başlar.

🔌 4. Yerel Tarayıcı Donanım API'leri (Native Web APIs)
Uygulama, telefonu bir "ilk yardım asistanına" dönüştürmek için üçüncü parti ağır ve ücretli kütüphaneler yerine tarayıcıların yerleşik (native) özelliklerini kullanır.

Web Speech API - SpeechRecognition (STT): Kullanıcının panik halinde yazmakla uğraşmaması için mikrofondan gelen sesi anında metne çevirir.

Web Speech API - SpeechSynthesis (TTS): Yapay zekadan gelen metinsel ilk yardım adımlarını cihazın kendi hoparlöründen okur. Ekran kilidi kapansa veya kullanıcı telefonu elinden bıraksa bile yönlendirme almasını sağlar.

Geolocation API: Kullanıcının anlık konum koordinatlarını (Enlem/Boylam) cihazın GPS donanımından çekerek, 112 araması öncesi yer bildirimini hazır hale getirir.

🚀 5. Versiyon Kontrolü ve Barındırma (Deployment)
Git & GitHub: Kodların versiyonlanması ve güvenli depolanması.

GitHub Pages: Sitenin statik olarak ücretsiz ve global CDN arkasında barındırılması.

Kritik Not: Tarayıcının mikrofon (Web Speech) ve konum (Geolocation) API'lerine erişebilmesi için uygulamanın mutlaka HTTPS (Güvenli Bağlantı) üzerinden çalışması zorunludur. GitHub Pages bu SSL sertifikasını otomatik ve sorunsuz sağladığı için tercih edilmiştir.