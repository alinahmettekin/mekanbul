const anaSayfa = function (req, res) {
  res.render('anasayfa', { "baslik": "Ana Sayfa","sayfaBaslik": {
    "siteAd":"MekanBul",
    "slogan":"Civardaki Mekanlari Kesfet!"
  },
  "mekanlar": [
    {
      "ad":"Palermo Cafe",
      "adres":"Fatih Mahallesi",
      "puan":"4",
      "imkanlar": ["Dunya Kahveleri","Kekler","Pastalar"],
      "mesafe":"10km"
    }
    ,
    {
      "ad":"Burc Firin",
      "adres":"Modernevler Mahallesi",
      "puan":"3",
      "imkanlar": ["Kahve","Cay","Pasta"],
      "mesafe":"5km"
    }
  ]
 });
}

const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi', {
     "baslik": "Mekan bilgisi",
      "mekanBaslik": "Starbucks",
      "mekanDetay": {
        "ad":"Ortak Mekan",
        "adres":"Ortak Adres",
        "puan":"4",
        "imkanlar": ["Dunya Kahveleri","Kekler","Pastalar"],
        "koordinatlar": {
           "enlem":"37.96",
           "boylam":"30.56"
        },
        "saatler": [
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"09.00",
            "kapanis":"23.00",
            "kapali": false
          },
          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"10.00",
            "kapanis":"22.00",
            "kapali": false
          }
        ],
        "yorumlar": [
          {
            "yorumYapan":"Alin Ahmet Tekin",
            "puan":"4",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"Berbaaat"

          }
        ]
      }
    });
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { 'title': 'Yorum ekle' });
};


module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle


}