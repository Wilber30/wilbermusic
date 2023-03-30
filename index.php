<?php include 'templates/layout/head.php' ?>

<body id="body" class="w-screen">
  <div class="full relative">
    <div id="cover" class="absolute h-full z-30 hidden bg-black/50 w-screen"></div>
      <div class="relative">
        <div class="h-screen bg-cover bg-bottom bg-hero-banner">
          <?php include 'templates/layout/header.php' ?>

          <?php include 'templates/layout/side_navigation.php' ?>
          <div class="container mx-auto">
            <div class="flex justify-center">
              <h1 id="banner-heading" class="mt-44 lg:mt-36 xl:mt-32 font-Special 
                text-5xl lg:text-6xl text-biscuit drop-shadow-xl font-outline-2 animate-fade-in-text">
                  Wilber Sears
              </h1>
            </div>

            <div class="container mx-auto absolute bottom-6">
              <div class="flex justify-center">
                <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white 
                  py-2 px-8 border border-gray-500 hover:border-transparent rounded">
                  <a href="index.php#latest-videos">Listen Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="text-center py-10 bg-whitesmoke">
          <div class="container sm:mx-auto">
            <div class="md:border-b-4 md:border-dark-grey/50 md:border-solid"> 
              <h1 id="latest-videos" class="font-Special mb-7 text-white font-outline-2 text-4xl lg:text-5xl">Latest Videos</h1>

              <div class="youtube-container flex flex-col md:flex-row gap-6 items-center justify-center mt-4 mb-8"></div>
            </div>
            <p class="mt-8">Follow me on 
                <a class="text-purple hover:text-purple/50 cursor-pointer" href="https://www.instagram.com/bellybones_records/?hl=en-gb">Instagram</a> 
                for more video content
            </p>
          </div>
        </div>
      </section>
      <?php include 'templates/layout/footer.php' ?>
    </div>
</body> 