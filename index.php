<?php include 'templates/layout/head.php' ?>

<body id="body" class="w-screen overflow-x-hidden">
  <div class="full relative">
    <div id="cover" class="absolute h-full z-30 hidden bg-black/50 w-screen"></div>
      <div class="relative">
        <div class="h-screen bg-cover bg-bottom bg-hero-banner !w-screen">
          <?php include 'templates/layout/banner.php' ?>
        </div>
      </div>
      <section>
        <div class="text-center py-10 bg-off-white">
          <div class="container sm:mx-auto">
            <div class="md:border-b-4 md:border-dark-grey/50 md:border-solid"> 
              <h1 id="latest-videos" class="font-Special mb-7 text-white font-outline-2 text-4xl lg:text-5xl">Latest Videos</h1>
              <div class="youtube-container flex flex-col md:flex-row gap-6 items-center justify-center mt-4 mb-8"></div>
            </div>
            
          </div>
        </div>
      </section>
      <?php include 'templates/layout/footer.php' ?>
    </div>
</body> 