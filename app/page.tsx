<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pì Noọng - Premium Restaurant</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    .title { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-black text-white">

<!-- Navbar -->
<header class="fixed w-full z-50 bg-black/70 backdrop-blur flex justify-between items-center px-8 py-4">
  <h1 class="title text-2xl">Pì Noọng</h1>
  <nav class="space-x-6 text-sm">
    <a href="#menu" class="hover:text-red-400">Menu</a>
    <a href="#about" class="hover:text-red-400">Story</a>
    <a href="#review" class="hover:text-red-400">Review</a>
    <a href="#contact" class="hover:text-red-400">Contact</a>
  </nav>
</header>

<!-- Hero -->
<section class="h-screen flex items-center justify-center text-center" style="background:url('anh1.pngpng') center/cover no-repeat">
  <div class="bg-black/60 p-10 rounded-2xl" data-aos="fade-up">
    <h2 class="title text-5xl mb-4">Bánh cuốn Cao Bằng</h2>
    <p class="text-gray-300">Phở vịt quay chuẩn vị truyền thống</p>
    <a href="#menu" class="inline-block mt-6 px-6 py-3 bg-red-500 rounded-full hover:bg-red-600">Xem menu</a>
  </div>
</section>

<!-- Gallery -->
<section class="grid md:grid-cols-3 gap-4 p-6">
  <img sranh1.pngpng" class="rounded-2xl hover:scale-105 transition" data-aos="zoom-in">
  <img sranh2.pngplass="rounded-2xl hover:scale-105 transition" data-aos="zoom-in">
  <img src="3.anh3.pngclass="rounded-2xl hover:scale-105 transition" data-aos="zoom-in">
</  <img src="anh4.png" class="hidden" />
</section>

<!-- Menu -->section id="menu" class="p-12">
  <h2 class="title text-4xl mb-10 text-center" data-aos="fade-up">Menu</h2>

  <div class="grid md:grid-cols-2 gap-10">

    <!-- Bánh cuốn -->
    <div data-aos="fade-right">
      <h3 class="text-xl mb-4 text-red-400">Bánh cuốn Cao Bằng</h3>
      <ul class="space-y-3 text-gray-300">
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Bánh cuốn không trứng</span><span>30k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Bánh cuốn 1 trứng</span><span>35k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Bánh cuốn 2 trứng</span><span>40k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Bánh cuốn đầy đủ</span><span>50k</span></li>
      </ul>
    </div>

    <!-- Phở -->
    <div data-aos="fade-left">
      <h3 class="text-xl mb-4 text-red-400">Phở</h3>
      <ul class="space-y-3 text-gray-300">
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Phở vịt quay</span><span>50k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Phở trộn vịt quay</span><span>50k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Phở trộn</span><span>45k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Miến vịt</span><span>50k</span></li>
      </ul>
    </div>

    <!-- Đồ ăn kèm -->
    <div data-aos="fade-right">
      <h3 class="text-xl mb-4 text-red-400">Đồ ăn kèm</h3>
      <ul class="space-y-3 text-gray-300">
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Vịt quay thêm</span><span>30k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Lòng mề</span><span>30k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Trứng</span><span>10k</span></li>
      </ul>
    </div>

    <!-- Nước uống -->
    <div data-aos="fade-left">
      <h3 class="text-xl mb-4 text-red-400">Nước uống</h3>
      <ul class="space-y-3 text-gray-300">
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Trà đá</span><span>5k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Nước suối</span><span>10k</span></li>
        <li class="flex justify-between border-b border-gray-700 pb-2"><span>Nước ngọt</span><span>15k</span></li>
      </ul>
    </div>

  </div>
</section>

<!-- About -->
<section id="about" class="p-12 bg-white text-black text-center">
  <h2 class="title text-4xl mb-6" data-aos="fade-up">Câu chuyện</h2>
  <p class="max-w-2xl mx-auto" data-aos="fade-up">Pì Noọng mang đến trải nghiệm ẩm thực Cao Bằng chân thật với công thức gia truyền, giữ trọn hương vị vùng cao.</p>
</section>

<!-- Reviews -->
<section id="review" class="p-12 text-center">
  <h2 class="title text-4xl mb-10" data-aos="fade-up">Khách hàng nói gì</h2>
  <div class="grid md:grid-cols-3 gap-6">
    <div class="bg-white/10 p-6 rounded-2xl" data-aos="fade-up">Ngon xuất sắc ⭐⭐⭐⭐⭐</div>
    <div class="bg-white/10 p-6 rounded-2xl" data-aos="fade-up">Vịt quay rất đậm vị ⭐⭐⭐⭐⭐</div>
    <div class="bg-white/10 p-6 rounded-2xl" data-aos="fade-up">Sẽ quay lại lần nữa ⭐⭐⭐⭐⭐</div>
  </div>
</section>

<!-- Contact -->
<section id="contact" class="p-12 text-center">
  <h2 class="title text-4xl mb-6">Liên hệ</h2>
  <p>📞 0929 913 408</p>
  <p>📍 Cao Bằng</p>
  <iframe class="w-full h-64 mt-6 rounded-2xl" src="https://maps.google.com/maps?q=Cao%20Bang&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
</section>

<!-- Floating Button -->
<a href="tel:0929913408" class="fixed bottom-6 right-6 bg-red-500 p-4 rounded-full shadow-lg hover:scale-110">📞</a>

<!-- Footer -->
<footer class="text-center text-gray-500 p-6">
  © 2026 Pì Noọng
</footer>

<script>
  AOS.init();
</script>

</body>
</html>
