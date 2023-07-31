<?php include 'templates/layout/head.php' ?>

<body id="body" class="w-screen">
  <div class="full overflow-x-hidden overflow-y-hidden">
    <div id="coverMobile" class="absolute h-screen z-30 hidden bg-black/50 w-screen"></div>
    <div id="cover" class="absolute h-screen z-30 hidden bg-black/50 w-screen"></div>
    
    <div class="relative">
      <div class="h-screen bg-cover bg-bottom bg-hero-banner !w-screen">
        <?php include 'templates/layout/banner.php' ?>
      </div>
    </div>

      <?php include 'templates/components/video.php' ?>
   

    <?php include 'templates/layout/footer.php' ?>
  </div>
</body> 