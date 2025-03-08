// Sağ tıklamayı engelle
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Kopyalamayı engelle
document.addEventListener('copy', function(e) {
  e.preventDefault();
});

// Geri sayım fonksiyonu
const countdownDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000); // 30 gün sonra başlama tarihi
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Zaman hesaplaması
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Sayacı güncelleme
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Eğer geri sayım biterse, "Site Açıldı!" mesajı göster
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Site Açıldı!";
  }
}, 1000);
