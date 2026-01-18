<?php
/**
 * Main template file
 *
 * @package Dating_Portal
 */

get_header();
?>

<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-12 md:py-20">
        <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="relative">
                <div class="overflow-hidden border-red-600 border-2 shadow-lg shadow-red-600/20 rounded-lg">
                    <div class="relative">
                        <img
                            src="<?php echo get_template_directory_uri(); ?>/images/attractive-woman-featured-profile.jpg"
                            alt="Featured profile"
                            class="w-full h-[500px] object-cover"
                        />
                        <div class="absolute top-4 left-4">
                            <div class="h-16 w-16 border-2 border-red-600 rounded-full overflow-hidden">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/woman-featured-avatar.jpg" alt="Avatar" class="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div class="absolute top-4 right-4">
                            <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm inline-flex items-center animate-pulse">
                                <span class="w-2 h-2 bg-white rounded-full mr-2"></span>
                                Aktywna
                            </span>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 class="text-white text-2xl font-bold">Martyna, 27</h3>
                            <p class="text-white/90 flex items-center gap-2 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Warszawa, 1.3 km od Ciebie
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    Ona jest blisko <span class="text-red-600" id="userLocation">Twojej lokalizacji</span>
                </h1>
                <div class="flex flex-wrap gap-4 mb-8">
                    <span class="px-4 py-2 text-base border border-red-600 rounded-md inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Zweryfikowane profile
                    </span>
                    <span class="px-4 py-2 text-base border border-red-600 rounded-md inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Prywatne galerie
                    </span>
                    <span class="px-4 py-2 text-base border border-red-600 rounded-md inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Szybko i dyskretnie
                    </span>
                </div>
                <!-- Dodano link rejestracji do przycisku -->
                <a href="https://allgo.xyz/link/3106/57279991" target="_blank" class="inline-block bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-md font-semibold transition-colors">
                    Rozpocznij teraz
                </a>
            </div>
        </div>
    </section>

    <!-- Top Profiles Section -->
    <section class="container mx-auto px-4 py-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Top Profile w Twojej Okolicy</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <?php
            $profiles = array(
                array('name' => 'Anna', 'age' => 26, 'location' => 'Warszawa', 'rating' => 5.0, 'image' => 'elegant-woman-portrait.png', 'avatar' => 'diverse-woman-avatar.png', 'description' => 'Szukam ciekawych rozmów i wspólnych chwil', 'interests' => array('Podróże', 'Kino', 'Fitness')),
                array('name' => 'Karolina', 'age' => 24, 'location' => 'Kraków', 'rating' => 4.9, 'image' => 'beautiful-woman-portrait.png', 'avatar' => 'woman-avatar-2.png', 'description' => 'Otwarta na nowe znajomości', 'interests' => array('Muzyka', 'Taniec', 'Sztuka')),
                array('name' => 'Magdalena', 'age' => 28, 'location' => 'Poznań', 'rating' => 5.0, 'image' => 'attractive-woman-portrait.png', 'avatar' => 'woman-avatar-3.png', 'description' => 'Lubię dobrą zabawę i śmiech', 'interests' => array('Gotowanie', 'Yoga', 'Spa')),
                array('name' => 'Natalia', 'age' => 25, 'location' => 'Wrocław', 'rating' => 4.8, 'image' => 'elegant-lady-portrait.jpg', 'avatar' => 'woman-avatar-4.png', 'description' => 'Szukam prawdziwej więzi', 'interests' => array('Książki', 'Wino', 'Teatr')),
                array('name' => 'Dominika', 'age' => 27, 'location' => 'Gdańsk', 'rating' => 4.9, 'image' => 'beautiful-lady-portrait.jpg', 'avatar' => 'woman-avatar-5.png', 'description' => 'Energia i pozytywne wibracje', 'interests' => array('Surfing', 'Plaża', 'Fotografia')),
                array('name' => 'Aleksandra', 'age' => 29, 'location' => 'Łódź', 'rating' => 5.0, 'image' => 'stunning-woman-portrait.jpg', 'avatar' => 'woman-avatar-6.png', 'description' => 'Miłośniczka przygód', 'interests' => array('Wspinaczka', 'Narty', 'Camping')),
                array('name' => 'Julia', 'age' => 23, 'location' => 'Katowice', 'rating' => 4.7, 'image' => 'pretty-woman-portrait.jpg', 'avatar' => 'woman-avatar-7.jpg', 'description' => 'Spontaniczna i wesoła', 'interests' => array('Shopping', 'Moda', 'Beauty')),
                array('name' => 'Weronika', 'age' => 26, 'location' => 'Szczecin', 'rating' => 4.9, 'image' => 'charming-woman-portrait.jpg', 'avatar' => 'woman-avatar-8.jpg', 'description' => 'Szukam romantycznych chwil', 'interests' => array('Kolacje', 'Koncerty', 'Spa')),
                array('name' => 'Paulina', 'age' => 30, 'location' => 'Lublin', 'rating' => 5.0, 'image' => 'sophisticated-woman-portrait.png', 'avatar' => 'woman-avatar-9.jpg', 'description' => 'Elegancka i wyrafinowana', 'interests' => array('Opera', 'Galerie', 'Fine Dining')),
            );

            foreach ($profiles as $profile) :
            ?>
                <div class="overflow-hidden border-red-600 border-2 shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20 transition-shadow rounded-lg bg-card">
                    <div class="relative">
                        <img
                            src="<?php echo get_template_directory_uri(); ?>/images/<?php echo $profile['image']; ?>"
                            alt="<?php echo $profile['name']; ?>"
                            class="w-full h-80 object-cover"
                        />
                        <div class="absolute top-4 left-4">
                            <div class="h-14 w-14 border-2 border-red-600 rounded-full overflow-hidden">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/<?php echo $profile['avatar']; ?>" alt="<?php echo $profile['name']; ?> avatar" class="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div class="absolute top-4 right-4">
                            <span class="bg-red-600 text-white px-2 py-1 rounded text-xs inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Zweryfikowana
                            </span>
                        </div>
                        <div class="absolute top-14 right-4">
                            <span class="bg-green-500 text-white px-2 py-1 rounded text-xs inline-flex items-center">
                                <span class="w-2 h-2 bg-white rounded-full mr-1"></span>
                                Online
                            </span>
                        </div>
                    </div>

                    <div class="p-6">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-xl font-bold"><?php echo $profile['name']; ?>, <?php echo $profile['age']; ?></h3>
                            <div class="flex items-center gap-1">
                                <?php for ($i = 0; $i < 5; $i++) : ?>
                                    <svg class="w-4 h-4 <?php echo $i < floor($profile['rating']) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'; ?>" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                <?php endfor; ?>
                                <span class="ml-1 text-sm font-semibold"><?php echo $profile['rating']; ?></span>
                            </div>
                        </div>

                        <p class="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <?php echo $profile['location']; ?>, 1.3 km od Ciebie
                        </p>

                        <p class="text-sm mb-4"><?php echo $profile['description']; ?></p>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <?php foreach ($profile['interests'] as $interest) : ?>
                                <span class="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"><?php echo $interest; ?></span>
                            <?php endforeach; ?>
                        </div>

                        <div class="flex items-center gap-2 mb-4 p-3 bg-muted rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="text-sm blur-phone">+48 xxx xxx xxx</span>
                            <!-- Dodano link rejestracji do przycisku Zadzwoń -->
                            <a href="https://allgo.xyz/link/3106/57279991" target="_blank" class="ml-auto bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors">Zadzwoń</a>
                        </div>

                        <!-- Dodano link rejestracji do wszystkich przycisków akcji -->
                        <div class="grid grid-cols-3 gap-2">
                            <a href="https://allgo.xyz/link/3106/57279991" target="_blank" class="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent px-2 py-1 rounded text-sm text-center transition-colors">Wyświetl profil</a>
                            <a href="https://allgo.xyz/link/3106/57279991" target="_blank" class="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent px-2 py-1 rounded text-sm text-center transition-colors">Nowości</a>
                            <a href="https://allgo.xyz/link/3106/57279991" target="_blank" class="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent px-2 py-1 rounded text-sm text-center transition-colors">Galeria</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="text-center">
            <!-- Dodano link rejestracji do przycisku więcej profili -->
            <a href="https://allgo.xyz/link/3106/57279991" target="_blank" class="inline-block bg-red-600 hover:bg-red-700 text-white px-12 py-3 rounded-md font-semibold transition-colors">
                Wyświetl więcej profili
            </a>
        </div>
    </section>

    <!-- Footer CTA -->
    <section class="container mx-auto px-4 py-16">
        <div class="bg-red-600 text-white border-0 p-12 text-center rounded-lg">
            <h2 class="text-3xl md:text-5xl font-bold mb-6">Gotowy na nowe znajomości?</h2>
            <p class="text-xl mb-8 text-white/90">Dołącz do tysięcy zadowolonych użytkowników już dziś</p>
            <!-- Dodano link rejestracji do głównego przycisku CTA -->
            <a href="https://allgo.xyz/link/3106/57279991" target="_blank" class="inline-block bg-white text-red-600 hover:bg-gray-100 px-12 py-4 text-lg font-bold rounded-md transition-colors">
                Zacznij za darmo
            </a>
            <div class="mt-8 flex items-center justify-center gap-3 text-white/90">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <p class="text-lg font-semibold">Rejestracja jest w 100% darmowa - bez żadnych kart płatniczych</p>
            </div>
        </div>
    </section>
</div>

<script>
// Geolocation feature
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log('User location acquired:', position.coords.latitude, position.coords.longitude);
            document.getElementById('userLocation').textContent = 'Twojej lokalizacji';
        },
        function(error) {
            console.log('Location access denied or error:', error);
        }
    );
}
</script>

<?php
get_footer();
?>
