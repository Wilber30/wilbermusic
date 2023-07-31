<?php include 'layout/contact_head.php' ?>
<body id="body" class="w-screen overflow-x-hidden">
  <div class="full relative">
    <div id="about-overlay-mobile" class="absolute h-full z-30 hidden bg-black/50 w-screen"></div>
		<div id="cover" class="absolute h-full z-30 hidden bg-black/50 w-screen"></div>
      <div class="relative">
        <div class="h-[45vh] lg:h-[40vh] bg-cover bg-bottom bg-about-hero">
					<?php include 'layout/header.php' ?>

					<?php include 'layout/side_navigation.php' ?>
					<div class="container mx-auto">
            <div class="flex justify-center">
              <h1 id="banner-heading" class="mt-56 lg:mt-48 font-Special 
                text-5xl lg:text-6xl text-biscuit drop-shadow-xl font-outline-2 animate-fade-in-text">
                  About me
              </h1>
            </div>
					</div>
				</div>
				<div class="bg-dark-slate-grey full-bleed">
					<div class="container mx-auto">
						<div class="flex flex-row justify-around pt-4 lg:mb-8">
							<div class="max-w-[90%] md:max-w-2/5">
								<?php include 'content/about-me.php' ?>
							</div>	
							<div class="hidden md:block lg:flex flex-col justify-center max-w-2/5 mt-12">
								<img src="../assets/images/circular_sears.png" alt="placeholder">
							</div>
						</div>

						<div class="flex justify-center pb-8 lg:pb-4">
							<div class="max-w-[90%]">
								<?php include 'content/about-2.php' ?>
							</div>
						</div>
					</div>
				</div>
		</div>
		<?php include 'layout/footer.php' ?>
	</div>
</body>

<script src="/src/js/contact.js" defer></script>