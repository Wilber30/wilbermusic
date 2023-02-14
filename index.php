<?php include 'templates/layout/ce_head.php' ?>

<body>
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
                  Listen Now 
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <section>
      <div class="text-center my-10">
        <div class="container mx-auto">
          <h1 class="font-Line text-3xl">Latest Videos</h1>

          <?php include 'templates/components/video-player.php' ?>
        </div>
    </div>
</section>
</body> 