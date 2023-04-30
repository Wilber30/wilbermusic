<?php include 'layout/contact_head.php' ?>

<body id="body" class="w-screen overflow-x-hidden">
  <div class="h-screen">
    <div id="cover" class="absolute h-full z-30 hidden bg-black/50 w-screen"></div>
      <div class="flex flex-col justify-between h-screen bg-off-white">
        <div class="[&_.button-inner]:before:bg-black [&_.button-inner]:bg-black [&_.button-inner]:after:bg-black">
          <?php include 'layout/header.php' ?> 

          <?php include 'layout/side_navigation.php' ?> 
        </div>
        <div class="container mx-auto">
          <div class="mt-8 flex flex-col justify-evenly text-center">
            <h1 class="my-6 text-center font-Special text-5xl text-white drop-shadow-xl font-outline-2">
                Contact
            </h1>

            <p class="mb-8 text-sm text-red">Please note this contact form is a work-in-progress; submitted messages will not receive a response.</p>

            <?php include 'components/contact.php' ?>
          </div>
        </div>
      <?php include 'layout/footer.php' ?>
    </div>
  </div>
</body>

<script src="/src/js/contact.js" defer></script>