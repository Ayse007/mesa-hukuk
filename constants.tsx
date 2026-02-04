
import React from 'react';
import { PracticeArea, Lawyer, AppointmentSlot, Testimonial, CaseStudy, FAQItem } from './types';

export const JUSTICE_QUOTES = [
  "Adalet mülkün temelidir.",
  "Adalet, Aklın Sessizliğidir.",
  "Hukuk her şeyin üzerindedir.",
  "Geç gelen adalet, adalet değildir.",
  "En kötü barış, en haklı savaştan daha iyidir.",
  "Adalet evrenin ruhudur.",
  "Kanunların bittiği yerde zulüm başlar.",
  "Adalet kutup yıldızı gibi yerinde durur ve geri kalan her şey onun etrafında döner.",
  "Bir saatin adaleti, yetmiş yıllık ibadetten daha harırlıdır.",
  "Eşitlik her zaman adalet demek değildir."
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Boşanma Hukuku',
    question: 'Anlaşmalı boşanma davası ne kadar sürer?',
    answer: 'Anlaşmalı boşanma davaları, tarafların her konuda (velayet, nafaka, tazminat, mal paylaşımı) mutabık kalması ve protokol imzalaması durumunda genellikle tek celsede sonuçlanır. Mahkemenin iş yoğunluğuna bağlı olarak ortalama 1 ile 3 ay arasında süreç tamamlanmaktadır.'
  },
  {
    id: 'faq-2',
    category: 'Sigorta Hukuku',
    question: 'Trafik kazası sonrası değer kaybı tazminatı kimden istenir?',
    answer: 'Araç değer kaybı tazminatı, kazada kusurlu olan tarafın Zorunlu Mali Sorumululuk Sigortası (Trafik Sigortası) şirketinden talep edilir. Başvurunun kaza tarihinden itibaren 2 yıllık zamanaşımı süresi içinde yapılması kritiktir.'
  },
  {
    id: 'faq-3',
    category: 'Ceza Hukuku',
    question: 'Soruşturma aşamasında avukat tutmak zorunlu mudur?',
    answer: 'Kanunen her aşamada avukat tutma hakkınız vardır. Bazı suç tiplerinde (alt sınırı 5 yıldan fazla hapis cezası gerektiren suçlar) avukat yardımı zorunludur. Ancak hak kaybına uğramamak adına soruşturmanın en başından itibaren profesyonel hukuki destek alınması hayati önem taşır.'
  },
  {
    id: 'faq-4',
    category: 'Gayrimenkul Hukuku',
    question: 'Kira tespit davası hangi şartlarda açılabilir?',
    answer: 'Kira tespit davası açılabilmesi için kira sözleşmesinin üzerinden en az 5 yıl geçmiş olması gerekir. Mahkeme, bölgedeki emsal kira bedellerini, ekonomik koşulları ve hakkaniyet esaslarını göz önünde bulundurarak yeni kira bedelini belirler.'
  },
  {
    id: 'faq-5',
    category: 'İş Hukuku',
    question: 'İşe iade davası açma süresi ne kadardır?',
    answer: 'İş sözleşmesi feshedilen işçi, fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurmak zorundadır. Arabuluculukta anlaşma sağlanamaması halinde ise son tutanağın düzenlendiği tarihten itibaren 2 hafta içinde iş mahkemesinde dava açılabilir.'
  },
  {
    id: 'faq-6',
    category: 'Miras Hukuku',
    question: 'Reddi miras (mirasın reddi) süresi ne kadardır?',
    answer: 'Mirasçılar, miras bırakanın ölümünü öğrendikleri tarihten itibaren 3 ay içinde mirası reddedebilirler. Bu işlem Sulh Hukuk Mahkemesi-ne yapılacak yazılı veya sözlü bir beyanla gerçekleştirilir.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Uluslararası Ticari Tahkim Süreci',
    category: 'Ticaret Hukuku',
    challenge: 'Bir enerji devinin yabancı ortaklı bir projede yaşadığı 150 milyon dolarlık sözleşme ihlali ve tazminat talebi.',
    strategy: 'Londra merkezli tahkim kuralları çerçevesinde, sözleşmedeki teknik boşlukların ve mücbir sebep maddelerinin detaylı analizi yapıldı. Yerel ve uluslararası içtihatlar birleştirilerek hibrit bir savunma hattı kuruldu.',
    outcome: 'Müvekkil şirketin tazminat ödemesi tamamen reddedildi ve karşı tarafın haksız fesih yaptığı tescillenerek proje kontrollü müvekkile devredildi.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'case-2',
    title: 'Gayrimenkul Mülkiyetinde Emsal Karar',
    category: 'Gayrimenkul Hukuku',
    challenge: 'Antalya kıyı şeridinde yer alan 40 yıllık bir arazinin mülkiyetine dair idari el koyma kararı ve imar uyuşmazlığı.',
    strategy: 'Tapu kayıtlarının 1950-lerden bu yana tarihsel kronolojisi çıkarıldı. Avrupa İnsan Hakları Mahkemesi (AİHM) mülkiyet hakkı içtihatları ile desteklenen idari dava süreci başlatıldı.',
    outcome: 'Danıştay aşamasında alınan iptal kararı ile arazinin mülkiyet hakkı korundu ve müvekkil şirkete yüksek tutarlı ecrimisil tazminatı ödendi.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'case-3',
    title: 'Büyük Ölçekli Bilişim Suçu Savunması',
    category: 'Ceza Hukuku',
    challenge: 'Bir teknoloji girişiminin verilerinin yasadışı ele geçirilmesi ve asılsız rekabet ihlali suçlamalarıyla karşı karşıya kalması.',
    strategy: 'Adli bilişim uzmanlarıyla çalışılarak dijital delillerin bütünlüğü sağlandı. Log kayıtları ve IP analizleri ile saldırının kaynağı tespit edilerek savunma "mağduriyet ispatı" üzerine kurgulandı.',
    outcome: 'Müvekkil hakkındaki tüm asılsız suçlamalar düşürüldü. Asıl failler tespit edilerek karşı dava süreci başarıyla sonuçlandırıldı.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Can Berk Tunç',
    company: 'Özel Bir Banka Bölge Müdürü',
    content: "Mesa Hukuk, banka avukatlığı ve finansal uyuşmazlıklar konusunda Antalya'daki en yetkin ofis. Özellikle kredi yapılandırmaları ve icra süreçlerindeki hızları operasyonel verimliliğimizi artırdı. Finans hukukunda gerçek bir otorite.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Muhammed Aras',
    company: 'Gayrimenkul Geliştirme Uzmanı',
    content: "Tapu iptal tescil ve karmaşık mülkiyet uyuşmazlıklarında Mesa'nın sergilediği tecrübe etkileyici. Yıllardır çözülemeyen arazi sorunumuzu, tapu sicilindeki tarihsel analizleri ve titiz takipleri sayesinde 6 ayda lehimize sonuçlandıerdılar.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Hüseyin Kaya',
    company: 'Lojistik Firması Sahibi',
    content: "Sigorta hukuku ve rücu davalarında profesyonel bir desteğe ihtiyacımız vardı. Hasar tazminat süreçlerinde ve sigorta poliçesi ihtilaflarında gösterdikleri uzmanlık sayesinde şirketimizi büyük mali yüklerden kurtardılar. Kesinlikle tavsiye ediyorum.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'aile',
    title: 'Aile Hukuku',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800',
    description: "Boşanma, velayet, mal rejimi tasfiyesi ve aile içi hukuki uyuşmazlıklarda hassas danışmanlık.",
    longDescription: "Aile hukuku medeni hukuk içerisinde yer alan bir hukuk dalıdır. Bu hukuk dalının en önemli ayağı ise konunun uzmanı olan bir boşanma avukatı ile çalışmaktır. Mesa Hukuk olarak, bu hassas süreçte hem hukuki haklarınızı koruyor hem de profesyonel bir yaklaşım sergiliyoruz.",
    subFields: ['Anlaşmalı/Çekişmeli Boşanma', 'Velayet & Nafaka', 'Mal Rejimi Tasfiyesi', 'Tanıma ve Tenfiz'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'sigorta_tahkim',
    title: 'Sigorta ve Tahkim',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
    description: 'Trafik kazaları, hasar tazminatları ve sigorta tahkim süreçlerinde uzman temsil.',
    longDescription: "Her yıl trafiğe çıkan araç sayısındaki artış ile beraber trafik kazalarında da yaklaşık ciddi oranlarda artış olmaktadır. Sigorta uyuşmazlıkları ve tahkim süreçleri, karmaşık teknik detaylar barındırır. Mesa Hukuk, tazminat haklarınızın eksiksiz tahsili için profesyonel destek sunar.",
    subFields: ['Trafik Kazası Tazminatı', 'Değer Kaybı Başvurusu', 'Sigorta Tahkim Heyeti', 'Rücu Davaları'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'ceza',
    title: 'Ceza Hukuku',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
    description: 'Soruşturma ve kovuşturma aşamalarında stratejik savunma ve hak takibi.',
    longDescription: "Ceza hukuku, suça el konulması, suçun soruşturulması ve suç faili hakkında yasal yaptırımların uygulanmasını konu alan hukuk dalıdır. Özgürlük ve hakların korunması temel prensibimizdir. Soruşturma aşamasından infaz sürecine kadar yanınızdayız.",
    subFields: ['Ağır Ceza Davaları', 'Soruşturma Takibi', 'Bilişim Suçları', 'İstinaf & Temyiz'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: 'idare',
    title: 'İdare Hukuku',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800',
    description: 'İdari işlemlerin iptali, tam yargı davaları ve idari yaptırımlara karşı koruma.',
    longDescription: "İdare Hukuku, dayanağını Anayasa’dan alan ve amacı kamu yararını gerçekleştirmek olan bir hukuk dalıdır. Kamu otoritelerinin haksız işlemlerine karşı iptal davaları ve idarenin kusurundan doğan zararların tazmini konularında hizmet veriyoruz.",
    subFields: ['İptal Davaları', 'Tam Yargı Davaları', 'İdari Sözleşmeler', 'Belediye & İmar Hukuku'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'vergi',
    title: 'Vergi Hukuku',
    image: 'https://images.unsplash.com/photo-1454165833767-02a6ed8a587a?auto=format&fit=crop&q=80&w=800',
    description: 'Vergi uyuşmazlıkları, ceza ihbarnameleri ve vergi dairesi ile uyuşmazlık çözümü.',
    longDescription: "Vergi uygulamaları sırasında mükellefler ile idare arasında ortaya çıkan görüş ve uygulama farklılıkları çoğunlukla uyuşmazlık konusu haline dönüşmektedir. Vergi cezalarına karşı dava süreçleri ve uzlaşma komisyonları nezdinde temsil sağlıyoruz.",
    subFields: ['Vergi Ceza İptali', 'Özel Esaslardan Çıkarılma', 'KDV İadesi Uyuşmazlıkları', 'Vergi Yapılandırma'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'icra',
    title: 'İcra ve İflas',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    description: 'Alacakların tahsili, iflas süreçleri ve borç yapılandırma yönetimi.',
    longDescription: "İflas hukuku, takip bakımından borçlunun bütün malvarlığına gidilmesi ve iflasın sağlanarak elde edilen maldan alacağın temin edilmesine dayanır. Mesa Hukuk, alacak tahsilatını en hızlı ve yasal yollarla gerçekleştirirken borçlu müvekkilleri için de koruyucu önlemler alır.",
    subFields: ['İlamsız/İlamlı Takip', 'İhtiyati Haciz', 'İflas Erteleme', 'Konkordato Süreçleri'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M4 10l8-7 8 7M12 14v2M12 18h.01" />
      </svg>
    ),
  },
  {
    id: 'miras',
    title: 'Miras Hukuku',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    description: 'Veraset ilamı, vasiyetname düzenleme ve miras paylaşım uyuşmazlıkları.',
    longDescription: "Miras, uzmanlık gerektiren ve teknik detaylara ve yargılama sürecinde de usul işlemlerine ve Müvekkilin talepleri bakımından ise Kanun hükümlerine hakim olmayı gerektiren bir alandır. Miras paylarının korunması ve adil bölüşüm için yanınızdayız.",
    subFields: ['Veraset İlamı Alınması', 'Vasiyetname İptali', 'Tenkis Davaları', 'Miras Taksim Sözleşmesi'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
      </svg>
    ),
  },
  {
    id: 'ticaret',
    title: 'Ticaret Hukuku',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
    description: 'Şirketler hukuku, ticari sözleşmeler ve tacirler arası uyuşmazlıklar.',
    longDescription: "İşletmeler, tacirler, bireyler arasındaki ticari ilişkileri, alışverişi ve tarafların haklarını düzenleyen bir hukuk dalıdır. En kapsamlı mevzuat hükümlerinin bulunduğu bir alandır. Şirket kuruluşu, birleşme ve devralma gibi süreçlerde stratejik ortağınızız.",
    subFields: ['Şirket Danışmanlığı', 'Ticari Sözleşmeler', 'Haksız Rekabet Davaları', 'Kıymetli Evrak Hukuku'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'gayrimenkul',
    title: 'Gayrimenkul Hukuku',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Tapu tescil, kentsel dönüşüm, kira sözleşmeleri ve mülkiyet uyuşmazlıkları.',
    longDescription: "Gayrimenkul hukuku, her türlü gayrimenkul yani taşınmaz işlemlerinde tarafların sahip olduğu hak ve yükümlülükleri ilgili mevzuat çerçevesinde ele alan hukuk dalıdır. Antalya mülkiyet yapısına hakim ekibimizle tapu uyuşmazlıklarınızı çözüyoruz.",
    subFields: ['Tapu İptal Tescil', 'Müdahalenin Men-i', 'Kira Tespit Davaları', 'Ecrimisil Talepleri'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 'tuketici',
    title: 'Tüketici Hukuku',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800',
    description: 'Ayıplı mal/hizmet uyuşmazlıkları ve Tüketici Hakem Heyeti süreçleri.',
    longDescription: "Kamu yararını korumayı ve bu kapsamda tüketiciyi korumayı amaçlayan tüketicinin korunması, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ile düzenlenmiştir. Tüketicilerin yaşadığı mağduriyetleri hızlı ve etkili yollarla çözüme kavuşturuyoruz.",
    subFields: ['Ayıplı Mal Davaları', 'Hakem Heyeti Başvurusu', 'Tüketici Mahkemesi', 'Cayma Hakkı Takibi'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 'sozlesme',
    title: 'Sözleşmeler',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    description: 'Her türlü hukuki metnin hazırlanması, denetimi ve risk analizi.',
    longDescription: "Sözleşme yapmak ve bir sözleşmenin tarafı olmak hukukun esasını oluşturur. Hak sahibi olan ve fiil ehliyeti bulunan herkes sözleşme yapma özgürlüğünü haizdir. Hak kayıplarını önlemek için sözleşmelerinizi uzman bir gözle hazırlıyor veya denetliyoruz.",
    subFields: ['Sözleşme Taslağı Hazırlama', 'Hukuki Risk Analizi', 'Cezai Şart İncelemesi', 'Fesih Süreçleri'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 'is_hukuku',
    title: 'İş Hukuku',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    description: 'İşe iade, kıdem/ihbar tazminatı ve işveren-işçi uyuşmazlıkları.',
    longDescription: "İş ve sosyal güvenlik hukuku çalışma yaşamı ve iş ve istihdam koşulları bakımından önem arz eden bir hizmet alanıdır. Hem işçi hem de işveren haklarının korunması, arabuluculuk süreçleri ve dava takiplerinde profesyonel danışmanlık sağlıyoruz.",
    subFields: ['Kıdem & İhbar Tazminatı', 'İşe İade Davaları', 'Mobbing ve Haklı Fesih', 'İş Kazası Tazminatı'],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export const TEAM: Lawyer[] = [
  {
    id: 'emrah-surun',
    name: 'Av. Emrah SÜRÜN',
    title: 'Kurucu Avukat',
    image: '/images/emrah.jpg',
    specialization: 'Banka, Gayrimenkul & Tazminat Hukuku',
    bio: "Antalya Barosu bünyesinde 3256 sicil numarası ile kayıtlı olan Av. Emrah Sürün, Mesa Hukuk'un kurucusudur. Banka hukuku, tazminat yönetimi ve karmaşık mülkiyet uyuşmazlıkları konularında geniş tecrübeye sahiptir.",
    email: 'emrahsurun@mesahukuk.com',
    phone: '+90 (242) 555 07 01'
  }
];

export const generateMockSlots = (): AppointmentSlot[] => {
  const slots: AppointmentSlot[] = [];
  const times = ['09:00', '10:00', '11:00', '13:30', '14:30', '15:30', '16:30'];
  const today = new Date();
  
  for (let i = 1; i <= 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    times.forEach(time => {
      slots.push({
        id: `${dateStr}-${time}`,
        date: dateStr,
        time: time,
        isAvailable: Math.random() > 0.3
      });
    });
  }
  return slots;
};
