<?php include 'layout/contact_head.php' ?>
<body class="w-screen overflow-x-hidden">
  <div class="full relative">
    <div id="cover" class="absolute h-full z-30 hidden bg-black/50 w-screen"></div>
      <div class="relative">
        <div class="h-[45vh] lg:h-[40vh] bg-cover bg-bottom bg-about-hero">
					<?php include 'layout/header.php' ?>

					<?php include 'layout/side_navigation.php' ?>
					<div class="container mx-auto">
            <div class="flex justify-center">
              <h1 id="banner-heading" class="mt-56 font-Special 
                text-5xl lg:text-6xl text-biscuit drop-shadow-xl font-outline-2 animate-fade-in-text">
                  About me
              </h1>
            </div>
					</div>
				</div>
			<div class="container mx-auto">
				<div>
					<div class="flex flex-row justify-around mt-4 mb-8">
						<div class="max-w-2/5">
							<?php include 'content/about-me.php' ?>
						</div>	
						<div class="max-w-2/5 mt-12">
							<img src="../assets/images/stock.jpeg" alt="placeholder">
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php include 'layout/footer.php' ?>
	</div>
</body>

<script src="/src/js/contact.js" defer></script>