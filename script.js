// ===================== TVMAZE API INTEGRATION =====================

// Map of show/movie names to their TVMaze search queries
const TVMAZE_SHOWS = {
    // Music-related shows/contents
    'Bob Marley': 'Bob Marley',
    'Legend': 'Bob Marley',
    'Louis': 'Hugh Masekela',
    'Louis Armstrong': 'Louis Armstrong',
    'Miriam': 'Miriam Makeba',
    'Miriam Makeba': 'Miriam Makeba',
    'Angelique': 'Angelique Kidjo',
    'Angelique Kidjo': 'Angelique Kidjo',
    'Salif': 'Salif Keita',
    'Salif Keita': 'Salif Keita',
    'Yousou': 'Youssou NDour',
    'Yousseu': 'Youssou NDour',
    'Reggae': 'Reggae',
    'Jazz': 'Jazz',
    'Blues': 'Blues',
    'Soul': 'Soul Music',
    'Funk': 'Funk Music',
    'HipHop': 'Hip Hop',
    'Gospel': 'Gospel Music',
    'Afrobeat': 'Afrobeat',
    'Drums': 'Drumming',
    'Guitar': 'Guitar',
    'Kora': 'Kora Music',
    'Marimba': 'Marimba',
    'Piano': 'Piano',
    'Flute': 'Flute',
    'Harp': 'Harp',
    'Violin': 'Violin',
    'Banjo': 'Banjo',

    // Entertainment/Film contents
    'Nollywood': 'Nollywood',
    'Lagos': 'Lagos',
    'African Cinema': 'African Film',
    'Film': 'Movie',
    'Actor': 'Actor',
    'Drama': 'Drama',
    'Soccer': 'Football',
    'Football': 'Football',
    'Rugby': 'Rugby',
    'Sports': 'Sports',
    'Festival': 'Festival',
    'Durbar': 'Durbar',
    'Dance': 'Dance',
    'Music': 'Music',
    'Poetry': 'Poetry',
    'Literature': 'Literature',
    'Art': 'Art',
    'Culture': 'Culture',
    'Safari': 'Safari',
    'Sahara': 'Sahara',
    'Egypt': 'Egypt',
    'Pharaoh': 'Pharaoh',
    'Pyramid': 'Pyramid',
    'Mandela': 'Mandela',
    'Peace': 'Peace',
    'Freedom': 'Freedom',
    'Justice': 'Justice',
    'Nature': 'Nature',
    'Science': 'Science',
    'Space': 'Space',
    'Stars': 'Stars',
    
    // History/Culture
    'Mandela': 'Nelson Mandela',
    'Lumumba': 'Patrice Lumumba',
    'Nkrumah': 'Kwame Nkrumah',
    'Selassie': 'Haile Selassie',
    'Kenyatta': 'Jomo Kenyatta',
    'Cleopatra': 'Cleopatra',
    'Pharaoh': 'Ancient Egypt',
    'Pyramid': 'Pyramids',
    'Sphinx': 'Sphinx',
    'Memphis': 'Memphis Egypt',
    'Mali': 'Mali Empire',
    'Ashanti': 'Ashanti Empire',
    'Zimbabwe': 'Great Zimbabwe',
    'Songhai': 'Songhai Empire',
    'Benin': 'Benin Kingdom',
    'Aksum': 'Aksumite Empire',
    'Apartheid': 'Apartheid',
    'Berlin': 'Berlin Conference Africa',
    'Tuskegee': 'Tuskegee',
    'March': 'Civil Rights March',
    'Boycott': 'Boycott Civil Rights',
    'Wangari': 'Wangari Maathai',
    
    // Geography/Nature
    'Sahara': 'Sahara Desert',
    'Congo': 'Congo Rainforest',
    'Victoria': 'Lake Victoria',
    'Kilimanjaro': 'Mount Kilimanjaro',
    'Medina': 'Medina',
    'Nile': 'Nile River',
    'Safari': 'African Safari',
    
    // African Culture
    'Ubuntu': 'Ubuntu Philosophy',
    'Kente': 'Kente Cloth',
    'Djembe': 'Djembe Drum',
    'Zulu': 'Zulu Nation',
    'Griot': 'Griot',
    'Adinkra': 'Adinkra Symbols',
    'Jollof': 'Jollof Rice',
    'Fufu': 'Fufu',
    'Fufou': 'Fufu',
    'Couscous': 'Couscous',
    'Tagine': 'Tagine',
    'Injera': 'Injera',
    'Yam': 'Yam Africa',
    'Kola': 'Kola Nut',
    'Totem': 'Totem Africa',
    'Mask': 'African Mask',
    'Elder': 'African Elder',
    'Highlife': 'Highlife Music',
    'Juju': 'Juju Music',
    'Mbaqanga': 'Mbaqanga',
    'Talking': 'Talking Drum',
    'Panaf': 'Panaf Festival',
    'Timkit': 'Timkat',
    'Durbar': 'Durbar Festival',
    'Parade': 'Parade Festival',
    'Feast': 'African Feast',
    'Color': 'Festival Colors',
    
    // Science
    'Astro': 'Astronomy',
    'Galaxy': 'Galaxy',
    'Orbit': 'Space Orbit',
    'Comet': 'Comet',
    'Meteor': 'Meteor',
    'Lunar': 'Moon Lunar',
    'Rocket': 'Rocket Space',
    'Solar': 'Solar System',
    'Brain': 'Human Brain',
    'Blood': 'Human Blood',
    'Heart': 'Human Heart',
    'Lungs': 'Human Lungs',
    'Skeleton': 'Human Skeleton',
    'Muscle': 'Muscle',
    'Ecosys': 'Ecosystem',
    'Climate': 'Climate',
    'Drought': 'Drought',
    'Plains': 'African Plains',
    'Stream': 'Stream',
    'Tropic': 'Tropics',
    'Atom': 'Atom',
    'Genome': 'Genome',
    'Cells': 'Cells',
    'Energy': 'Energy',
    'Ion': 'Ion',
    'Bond': 'Chemical Bond',
    'Acid': 'Acid',
    'Botany': 'Botany',
    'Geolog': 'Geology',
    'Ecolog': 'Ecology',
    
    // Literature/Arts
    'Novel': 'Novel',
    'Poetry': 'Poetry',
    'Canvas': 'Canvas Art',
    'Mural': 'Mural',
    'Fable': 'Fable',
    'Myth': 'Mythology',
    
    // Sports
    'Soccer': 'Soccer Africa',
    'Rugby': 'Rugby Africa',
    'Medal': 'Olympic Medal',
    'Relay': 'Relay Race',
    'Trophy': 'Trophy',
    'Arena': 'Sports Arena',
    
    // Film/Entertainment
    'Scene': 'Movie Scene',
    'Plot': 'Movie Plot',
    'Award': 'Film Award',
    'Film': 'African Cinema',
    'Drama': 'African Drama'
};

// Cache for fetched images
const imageCache = {};

async function fetchTVMazeImage(searchQuery) {
    // Return cached image if available
    if (imageCache[searchQuery]) {
        return imageCache[searchQuery];
    }

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();

        if (data && data.length > 0) {
            // Try to find a show with an image
            for (const item of data) {
                const show = item.show;
                const imageUrl = show.image?.medium || show.image?.original || null;
                if (imageUrl) {
                    imageCache[searchQuery] = imageUrl;
                    return imageUrl;
                }
            }
            // If no image found in first few results, return null
            imageCache[searchQuery] = null;
            return null;
        }
    } catch (error) {
        console.log('TVMaze API error:', error);
    }

    imageCache[searchQuery] = null;
    return null;
}

// Preload images for current category
async function preloadCategoryImages(category) {
    const puzzles = gameData.categories[category];
    if (!puzzles) return;

    // Collect all unique search queries
    const searchQueries = new Set();
    
    for (const puzzle of puzzles) {
        for (const word of puzzle.words) {
            // Check if we have a mapping
            for (const [key, searchQuery] of Object.entries(TVMAZE_SHOWS)) {
                if (word.answer.toUpperCase().includes(key.toUpperCase()) ||
                    word.clue.toUpperCase().includes(key.toUpperCase())) {
                    searchQueries.add(searchQuery);
                    break;
                }
            }
        }
    }

    // Fetch all images in parallel
    const promises = Array.from(searchQueries).map(query => fetchTVMazeImage(query));
    await Promise.all(promises);
}

// Extract keywords from clue for better search
function extractKeywords(clue, answer) {
    // Remove common words and get meaningful keywords
    const stopWords = new Set(['a', 'an', 'the', 'is', 'are', 'was', 'were', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'and', 'or', 'that', 'this', 'it', 'be', 'as', 'into', 'like', 'through', 'after', 'over', 'between', 'out', 'against', 'during', 'without', 'before', 'under', 'around', 'among']);
    
    const words = clue.split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w.toLowerCase()));
    const keywords = [answer, ...words.slice(0, 3)]; // Use answer + first 3 meaningful words
    
    return keywords;
}

// Get image for a word/answer
async function getWordImage(word, clue) {
    // Strategy 1: Check TVMAZE_SHOWS mapping
    for (const [key, searchQuery] of Object.entries(TVMAZE_SHOWS)) {
        if (word.toUpperCase().includes(key.toUpperCase()) ||
            clue.toUpperCase().includes(key.toUpperCase())) {
            const image = await fetchTVMazeImage(searchQuery);
            if (image) return image;
        }
    }
    
    // Strategy 2: Dynamic search using clue keywords
    const keywords = extractKeywords(clue, word);
    
    // Try different keyword combinations
    const searchQueries = [
        keywords.join(' '),                    // All keywords
        keywords[0] + ' Africa',              // Answer + Africa
        keywords[0] + ' African',             // Answer + African
        keywords.slice(0, 2).join(' '),       // First two keywords
        keywords[0]                            // Just the answer
    ];
    
    for (const query of searchQueries) {
        if (query.length < 3) continue;
        const image = await fetchTVMazeImage(query);
        if (image) return image;
    }
    
    return null;
}

// ===================== SOUND MANAGER =====================

const SoundManager = {
    audio: null,
    
    init() {
        this.audio = new Audio('Sound/energysound-stomp-drum-percussion-513744 (1).mp3');
        this.audio.volume = 0.3; // Set default volume to 30%
    },
    
    play(type = 'click') {
        if (!this.audio) this.init();
        
        // Reset audio to allow rapid replays
        this.audio.currentTime = 0;
        
        // Adjust playback based on type
        switch(type) {
            case 'click':
                this.audio.volume = 0.2;
                break;
            case 'correct':
                this.audio.volume = 0.4;
                this.audio.playbackRate = 1.2;
                break;
            case 'complete':
                this.audio.volume = 0.6;
                this.audio.playbackRate = 1.0;
                break;
            case 'error':
                this.audio.volume = 0.3;
                this.audio.playbackRate = 0.8;
                break;
            default:
                this.audio.volume = 0.3;
        }
        
        this.audio.play().catch(err => console.log('Sound playback failed:', err));
    }
};

// Initialize sound on first user interaction
let soundInitialized = false;
function initSoundOnFirstInteraction() {
    if (!soundInitialized) {
        SoundManager.init();
        soundInitialized = true;
        // Remove listeners after first interaction
        document.removeEventListener('click', initSoundOnFirstInteraction);
        document.removeEventListener('touchstart', initSoundOnFirstInteraction);
    }
}
document.addEventListener('click', initSoundOnFirstInteraction);
document.addEventListener('touchstart', initSoundOnFirstInteraction);

// ===================== EMBEDDED CSV DATA =====================
const CSV_DATA = `category,puzzle_title,puzzle_phrase,word,clue
African Culture,African Culture Basics,AFRICA IS RICH IN CULTURE,SAFARI,Journey to observe wildlife in East Africa
African Culture,African Culture Basics,AFRICA IS RICH IN CULTURE,DJEMBE,Traditional West African drum
African Culture,African Culture Basics,AFRICA IS RICH IN CULTURE,KENTE,Colorful woven cloth from Ghana
African Culture,African Culture Basics,AFRICA IS RICH IN CULTURE,UBUNTU,"African philosophy meaning I am because we are"
African Culture,African Culture Basics,AFRICA IS RICH IN CULTURE,SAHARA,Worlds largest hot desert in Africa
African Culture,African Culture Basics,AFRICA IS RICH IN CULTURE,ZULU,Largest ethnic group in South Africa
African Culture,African Leaders,PEACE FREEDOM JUSTICE NOW,MANDELA,Anti-apartheid leader who became president of South Africa
African Culture,African Leaders,PEACE FREEDOM JUSTICE NOW,LUMUMBA,"First prime minister of the Democratic Republic of Congo"
African Culture,African Leaders,PEACE FREEDOM JUSTICE NOW,NKRUMAH,First president of Ghana who led independence
African Culture,African Leaders,PEACE FREEDOM JUSTICE NOW,SELASSIE,Former emperor of Ethiopia
African Culture,African Leaders,PEACE FREEDOM JUSTICE NOW,KENYATTA,First president of Kenya
African Culture,African Geography,NILE RIVER FLOWS NORTH,CONGO,Largest rainforest in Africa
African Culture,African Geography,NILE RIVER FLOWS NORTH,VICTORIA,Largest lake in Africa
African Culture,African Geography,NILE RIVER FLOWS NORTH,KILIMANJARO,Highest mountain peak in Africa
African Culture,African Geography,NILE RIVER FLOWS NORTH,MEDINA,Old quarter of a North African city
African Culture,African Traditions,GRIOT TELLS ANCIENT STORIES,GRIOT,West African storyteller and musician
African Culture,African Traditions,GRIOT TELLS ANCIENT STORIES,MASK,Face covering used in African rituals
African Culture,African Traditions,GRIOT TELLS ANCIENT STORIES,TOTEM,Animal symbol representing a clan
African Culture,African Traditions,GRIOT TELLS ANCIENT STORIES,KOLA,Nut used in traditional African ceremonies
African Culture,African Traditions,GRIOT TELLS ANCIENT STORIES,ELDER,Respected senior community member
African Culture,African Food,JOLLOF RICE TASTES GREAT,FUFOU,Starchy staple food made from cassava or yams
African Culture,African Food,JOLLOF RICE TASTES GREAT,COUSCOUS,Steamed grain dish popular in North Africa
African Culture,African Food,JOLLOF RICE TASTES GREAT,TAGINE,Slow-cooked Moroccan stew
African Culture,African Food,JOLLOF RICE TASTES GREAT,INJERA,Spongy Ethiopian flatbread
African Culture,African Food,JOLLOF RICE TASTES GREAT,JOLLOF,Popular West African rice dish
African Culture,African Food,JOLLOF RICE TASTES GREAT,YAM,Edible tuber widely cultivated in West Africa
African Culture,African Art,BRONZE MASKS ARE BEAUTIFUL,ADINKRA,Symbols from Ghana that represent concepts
African Culture,African Art,BRONZE MASKS ARE BEAUTIFUL,BRONZE,Metal used for famous Benin sculptures
African Culture,African Art,BRONZE MASKS ARE BEAUTIFUL,BEADS,Small decorated items used in African jewelry
African Culture,African Art,BRONZE MASKS ARE BEAUTIFUL,WEAVE,Technique used to make baskets and cloth
African Culture,African Art,BRONZE MASKS ARE BEAUTIFUL,POTTERY,Art of making clay containers
History,Ancient Egypt,PHARAOHS RULED ANCIENT EGYPT,PHARAOH,Ruler of ancient Egypt
History,Ancient Egypt,PHARAOHS RULED ANCIENT EGYPT,PYRAMID,Massive tomb built for Egyptian kings
History,Ancient Egypt,PHARAOHS RULED ANCIENT EGYPT,CLEOPATRA,"Last active ruler of the Ptolemaic Kingdom of Egypt"
History,Ancient Egypt,PHARAOHS RULED ANCIENT EGYPT,SPHINX,"Mythical creature with a lions body and human head"
History,Ancient Egypt,PHARAOHS RULED ANCIENT EGYPT,PAPYRUS,Ancient Egyptian writing material
History,Ancient Egypt,PHARAOHS RULED ANCIENT EGYPT,MEMPHIS,Ancient capital of Egypt
History,African Empires,GREAT EMPIRES OF AFRICA,ASHANTI,Powerful West African kingdom in modern Ghana
History,African Empires,GREAT EMPIRES OF AFRICA,MALI,Medieval West African empire ruled by Mansa Musa
History,African Empires,GREAT EMPIRES OF AFRICA,ZIMBABWE,Southern African kingdom known for stone ruins
History,African Empires,GREAT EMPIRES OF AFRICA,SONGHAI,West African empire that succeeded the Mali Empire
History,African Empires,GREAT EMPIRES OF AFRICA,BENIN,West African kingdom known for bronze art
History,African Empires,GREAT EMPIRES OF AFRICA,AKSUM,Ancient kingdom in modern-day Ethiopia
History,Colonial Era,FREEDOM COMES AFTER STRUGGLE,APARTHEID,System of racial segregation in South Africa
History,Colonial Era,FREEDOM COMES AFTER STRUGGLE,SCRAMBLE,European rush to claim African territory
History,Colonial Era,FREEDOM COMES AFTER STRUGGLE,BERLIN,Conference that divided Africa among Europeans
History,Colonial Era,FREEDOM COMES AFTER STRUGGLE,RESIST,To fight against colonial oppression
History,Colonial Era,FREEDOM COMES AFTER STRUGGLE,HERITAGE,Cultural legacy passed down through generations
History,Colonial Era,FREEDOM COMES AFTER STRUGGLE,INDEPND,Act of a nation gaining freedom from colonial rule
History,Civil Rights,MARCH FOR EQUAL RIGHTS,TUSKEGEE,Institute where Booker T. Washington taught
History,Civil Rights,MARCH FOR EQUAL RIGHTS,MARCH,Mass demonstration for civil rights
History,Civil Rights,MARCH FOR EQUAL RIGHTS,BOYCOTT,Refusal to buy goods as protest
History,Civil Rights,MARCH FOR EQUAL RIGHTS,EQUAL,Having the same rights and status
History,Civil Rights,MARCH FOR EQUAL RIGHTS,JUSTICE,Fair treatment under the law
History,Civil Rights,MARCH FOR EQUAL RIGHTS,FREEDOM,State of being free from oppression
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,ASTRO,Branch of science studying celestial objects
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,GALAXY,Massive system of stars and dust
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,ORBIT,Path of an object around a star or planet
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,COMET,Icy body that orbits the sun with a tail
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,METEOR,Space rock that burns in the atmosphere
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,LUNAR,Related to the moon
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,ROCKET,Vessel used to travel into space
Science,Space Science,STARS SHINE BRIGHT AT NIGHT,SOLAR,Relating to the sun and its family of planets
Science,Human Body,HEART PUMPS BLOOD FAST,BRAIN,Organ that controls thought and movement
Science,Human Body,HEART PUMPS BLOOD FAST,BLOOD,Red liquid that carries oxygen through the body
Science,Human Body,HEART PUMPS BLOOD FAST,HEART,Muscle that pumps blood through the body
Science,Human Body,HEART PUMPS BLOOD FAST,LUNGS,Organs used for breathing
Science,Human Body,HEART PUMPS BLOOD FAST,SKELETON,Framework of bones in the body
Science,Human Body,HEART PUMPS BLOOD FAST,MUSCLE,Tissue that contracts to produce movement
Science,Nature,GREEN TREES GROW TALL,ECOSYS,Community of living and nonliving things
Science,Nature,GREEN TREES GROW TALL,CLIMATE,Long-term weather patterns of a region
Science,Nature,GREEN TREES GROW TALL,DROUGHT,Extended period of little or no rain
Science,Nature,GREEN TREES GROW TALL,PLAINS,Large area of flat grassy land
Science,Nature,GREEN TREES GROW TALL,STREAM,Small flowing body of water
Science,Nature,GREEN TREES GROW TALL,TROPIC,Region near the equator with warm weather
Science,Chemistry,ATOMS FORM NEW BONDS,ATOM,Smallest unit of ordinary matter
Science,Chemistry,ATOMS FORM NEW BONDS,GENOME,Complete set of genetic material
Science,Chemistry,ATOMS FORM NEW BONDS,CELLS,Basic building blocks of all living things
Science,Chemistry,ATOMS FORM NEW BONDS,ENERGY,Capacity to do work or cause change
Science,Chemistry,ATOMS FORM NEW BONDS,ION,Atom that has gained or lost electrons
Science,Chemistry,ATOMS FORM NEW BONDS,BOND,Force that holds atoms together
Science,Chemistry,ATOMS FORM NEW BONDS,ACID,Substance with a pH below seven
Science,African Scientists,WANGARI PLANTED MANY TREES,WANGARI,Nobel laureate who planted thirty million trees
Science,African Scientists,WANGARI PLANTED MANY TREES,BOTANY,Science of plant life
Science,African Scientists,WANGARI PLANTED MANY TREES,GEOLOG,Science of the Earths physical structure
Science,African Scientists,WANGARI PLANTED MANY TREES,ECOLOG,Study of organisms and their environment
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,JAZZ,Music genre born in New Orleans
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,BLUES,Music genre expressing melancholy or emotion
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,SOUL,Music genre rooted in gospel and R and B
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,FUNK,Music genre with strong rhythmic groove
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,REGGAE,Music genre originating in Jamaica
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,GOSPEL,Genre of Christian religious music
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,HIPHOP,Music genre with rhythmic spoken delivery
Music,Music Genres,JAZZ BLUES SOUL AND FUNK,AFROBEAT,Music genre blending West African and American styles
Music,Musical Instruments,DRUMS AND GUITAR PLAY,DRUMS,Percussion instrument struck with hands or sticks
Music,Musical Instruments,DRUMS AND GUITAR PLAY,GUITAR,Stringed instrument with six strings
Music,Musical Instruments,DRUMS AND GUITAR PLAY,PIANO,Keyboard instrument with black and white keys
Music,Musical Instruments,DRUMS AND GUITAR PLAY,FLUTE,Woodwind instrument blown across a hole
Music,Musical Instruments,DRUMS AND GUITAR PLAY,HARP,Stringed instrument played by plucking
Music,Musical Instruments,DRUMS AND GUITAR PLAY,VIOLIN,Stringed instrument played with a bow
Music,Musical Instruments,DRUMS AND GUITAR PLAY,BANJO,Plucked string instrument with a round body
Music,African Music,KORA SOUNDS LIKE WATER,KORA,West African string instrument with twenty-one strings
Music,African Music,KORA SOUNDS LIKE WATER,MARIMBA,African wooden xylophone
Music,African Music,KORA SOUNDS LIKE WATER,TALKING,Type of drum that mimics human speech
Music,African Music,KORA SOUNDS LIKE WATER,HIGHLIFE,Popular Ghanaian music genre
Music,African Music,KORA SOUNDS LIKE WATER,JUJU,Popular Nigerian music style
Music,African Music,KORA SOUNDS LIKE WATER,MBAQANGA,South African music style with a steady beat
Music,Famous Musicians,BOB MARLEY IS A LEGEND,LEGEND,Famous reggae singer known as Bob
Music,Famous Musicians,BOB MARLEY IS A LEGEND,LOUIS,Legendary South African trumpeter
Music,Famous Musicians,BOB MARLEY IS A LEGEND,MIRIAM,South African singer known as the Queen of African Song
Music,Famous Musicians,BOB MARLEY IS A LEGEND,ANGELIQUE,Congolese singer known as the Queen of Rumba
Music,Famous Musicians,BOB MARLEY IS A LEGEND,SALIF,Malian singer known as the Golden Voice of Africa
Music,Famous Musicians,BOB MARLEY IS A LEGEND,YOUSSEU,Cameroonian musician and songwriter
Entertainment,African Cinema,FILM MAKING IS AN ART,ACTOR,Person who performs in films
Entertainment,African Cinema,FILM MAKING IS AN ART,SCENE,Part of a movie in one location
Entertainment,African Cinema,FILM MAKING IS AN ART,PLOT,Sequence of events in a story
Entertainment,African Cinema,FILM MAKING IS AN ART,AWARD,Prize given for outstanding film
Entertainment,African Cinema,FILM MAKING IS AN ART,FILM,Another word for movie
Entertainment,African Cinema,FILM MAKING IS AN ART,DRAMA,Genre of serious storytelling
Entertainment,African Cinema,FILM MAKING IS AN ART,LAGOS,Nigerian city home to Nollywood
Entertainment,Sports Games,SOCCER IS THE BEST,SOCCER,Most popular sport in Africa
Entertainment,Sports Games,SOCCER IS THE BEST,RUGBY,Popular sport in South Africa
Entertainment,Sports Games,SOCCER IS THE BEST,MEDAL,Award given to top athletes
Entertainment,Sports Games,SOCCER IS THE BEST,RELAY,Race where runners pass a baton
Entertainment,Sports Games,SOCCER IS THE BEST,TROPHY,Cup awarded to tournament winners
Entertainment,Sports Games,SOCCER IS THE BEST,ARENA,Large venue for sports events
Entertainment,Literature Arts,POETRY TELLS OUR STORY,NOVEL,Long fictional prose narrative
Entertainment,Literature Arts,POETRY TELLS OUR STORY,POETRY,Literary work expressing emotions in verse
Entertainment,Literature Arts,POETRY TELLS OUR STORY,CANVAS,Fabric used as a surface for painting
Entertainment,Literature Arts,POETRY TELLS OUR STORY,MURAL,Painting done directly on a wall
Entertainment,Literature Arts,POETRY TELLS OUR STORY,FABLE,Short story teaching a moral lesson
Entertainment,Literature Arts,POETRY TELLS OUR STORY,MYTH,Traditional story explaining beliefs
Entertainment,Festivals,DANCE SING AND CELEBRATE,DURBAR,Traditional Nigerian festival display
Entertainment,Festivals,DANCE SING AND CELEBRATE,TIMKIT,Ethiopian celebration of Epiphany
Entertainment,Festivals,DANCE SING AND CELEBRATE,PANAF,Celebration of African arts and culture
Entertainment,Festivals,DANCE SING AND CELEBRATE,PARADE,Public procession with music
Entertainment,Festivals,DANCE SING AND CELEBRATE,FEAST,Large celebratory meal
Entertainment,Festivals,DANCE SING AND CELEBRATE,DANCE,Movement to music as celebration
Entertainment,Festivals,DANCE SING AND CELEBRATE,MUSIC,Sound organized in time and rhythm
Entertainment,Festivals,DANCE SING AND CELEBRATE,COLOR,Bright visual element of festivals`;

// ===================== CSV PARSER =====================

function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    const expectedColumns = headers.length; // Should be 5
    const rows = [];
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue; // Skip empty lines
        
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
            const ch = line[j];
            if (ch === '"') { 
                inQuotes = !inQuotes; 
            }
            else if (ch === ',' && !inQuotes) { 
                values.push(current.trim()); 
                current = ''; 
            }
            else { 
                current += ch; 
            }
        }
        values.push(current.trim());
        
        // If we have more values than expected, merge the extras into the last field
        if (values.length > expectedColumns) {
            const extraValues = values.splice(expectedColumns - 1);
            values.push(extraValues.join(','));
        }
        
        const row = {};
        headers.forEach((h, idx) => { 
            let val = values[idx] || '';
            // Remove surrounding quotes if present
            if (val.startsWith('"') && val.endsWith('"')) {
                val = val.slice(1, -1);
            }
            row[h.trim()] = val; 
        });
        rows.push(row);
    }
    return rows;
}

// ===================== BUILD GAME DATA =====================

function buildGameData(csvRows) {
    const groups = {};
    const categoryOrder = [];

    csvRows.forEach(row => {
        const cat = row.category;
        const title = row.puzzle_title;
        const phrase = row.puzzle_phrase;
        const word = row.word;
        const clue = row.clue;

        if (!groups[cat]) { groups[cat] = {}; categoryOrder.push(cat); }
        if (!groups[cat][title]) {
            groups[cat][title] = { phrase: phrase.toUpperCase(), words: [] };
        }
        groups[cat][title].words.push({ answer: word.toUpperCase(), clue });
    });

    const gameData = { categories: {}, order: [] };
    categoryOrder.forEach(cat => {
        gameData.categories[cat] = [];
        gameData.order.push(cat);
        let puzzleIdx = 0;
        for (const title in groups[cat]) {
            const data = groups[cat][title];
            const puzzle = buildCrosticPuzzle(data.phrase, data.words);
            gameData.categories[cat].push({ title, index: puzzleIdx, ...puzzle });
            puzzleIdx++;
        }
    });

    return gameData;
}

// ===================== CROSTIC PUZZLE BUILDER =====================
// Assigns a number to every grid cell. When a cell is filled correctly,
// the matching letter appears in the puzzle phrase at the top.

function buildCrosticPuzzle(phrase, words) {
    // Build grid: one word per row
    const maxLen = Math.max(...words.map(w => w.answer.length));
    const grid = [];
    let cellNum = 1;
    const wordStartNums = []; // clue number for each word

    words.forEach((word, rowIdx) => {
        const startNum = cellNum;
        wordStartNums.push(startNum);
        const letters = word.answer.split('');
        letters.forEach((letter, colIdx) => {
            grid.push({ row: rowIdx, col: colIdx, letter, num: cellNum++, clueNum: startNum });
        });
    });

    // Map phrase letters to grid cells sequentially
    // Each letter in the phrase (ignoring spaces) gets assigned the next available cell number
    const phraseWords = phrase.split(' ');
    const phraseLetters = phrase.replace(/[^A-Z]/g, '').split('');

    // We assign phrase positions by taking cells in order (row by row, col by col)
    let cellIdx = 0;
    const totalGridCells = grid.length;

    // Build phrase mapping: each phrase letter maps to a grid cell number
    const phraseMap = []; // { phrasePos, num, letter }
    for (let i = 0; i < phraseLetters.length; i++) {
        const cell = grid[i % totalGridCells];
        phraseMap.push({ phrasePos: i, num: cell.num, letter: cell.letter });
    }

    // Shuffle WORDS in the phrase (not individual letters)
    // This keeps words readable but rearranges them into a different order
    const shuffledWords = [...phraseWords];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
    }

    // Build shuffled phrase map that preserves word boundaries
    const shuffledPhraseMap = [];
    let phraseMapIdx = 0;
    
    for (let w = 0; w < shuffledWords.length; w++) {
        const word = shuffledWords[w];
        for (let i = 0; i < word.length; i++) {
            if (phraseMapIdx < phraseMap.length) {
                shuffledPhraseMap.push({
                    ...phraseMap[phraseMapIdx],
                    phrasePos: phraseMapIdx
                });
                phraseMapIdx++;
            }
        }
        // Add space marker between words (except after last word)
        if (w < shuffledWords.length - 1) {
            shuffledPhraseMap.push({ phrasePos: 'space', num: null, letter: ' ' });
        }
    }

    // Build words with their clue numbers and cell numbers
    const wordsWithNums = words.map((w, i) => ({
        ...w,
        clueNum: wordStartNums[i],
        cellNums: grid.filter(c => c.row === i).map(c => c.num)
    }));

    return { grid, words: wordsWithNums, phrase, phraseMap: shuffledPhraseMap, shuffledWords };
}

// ===================== GAME STATE =====================

const gameData = buildGameData(parseCSV(CSV_DATA));
let currentCategory = '';
let currentPuzzleIdx = 0;
let currentScreen = 'hero';

// ===================== CATEGORY META =====================

const categoryIcons = {
    'African Culture': '\u{1F30D}',
    'History': '\u{1F4DC}',
    'Science': '\u{1F52C}',
    'Music': '\u{1F3B5}',
    'Entertainment': '\u{1F3AC}'
};

const categoryColors = {
    'African Culture': { bg: '#FF6B35', accent: '#F7931E' },
    'History': { bg: '#8B4513', accent: '#D2691E' },
    'Science': { bg: '#1E90FF', accent: '#00CED1' },
    'Music': { bg: '#9B59B6', accent: '#E74C3C' },
    'Entertainment': { bg: '#E67E22', accent: '#F1C40F' }
};

// ===================== DOM REFS =====================

let gameContainer, categoryScreen, gameScreen, categoryGrid, categoryTitleEl;
let gameHeaderTitle, answersList, cluesList, puzzlePhraseEl, answersContainerEl;

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', () => {
    gameContainer = document.getElementById('gameContainer');
    categoryScreen = document.getElementById('categoryScreen');
    gameScreen = document.getElementById('gameScreen');
    categoryGrid = document.getElementById('categoryGrid');
    categoryTitleEl = document.getElementById('categoryTitle');
    gameHeaderTitle = document.getElementById('gameHeaderTitle');
    answersList = document.getElementById('answersList');
    cluesList = document.getElementById('cluesList');
    puzzlePhraseEl = document.getElementById('puzzlePhrase');
    answersContainerEl = document.getElementById('answersContainer');

    // Verify all DOM elements exist
    const missingElements = [];
    if (!gameContainer) missingElements.push('gameContainer');
    if (!categoryScreen) missingElements.push('categoryScreen');
    if (!gameScreen) missingElements.push('gameScreen');
    if (!categoryGrid) missingElements.push('categoryGrid');
    if (!answersList) missingElements.push('answersList');
    if (!cluesList) missingElements.push('cluesList');
    if (!puzzlePhraseEl) missingElements.push('puzzlePhraseEl');
    if (!answersContainerEl) missingElements.push('answersContainerEl');

    if (missingElements.length > 0) {
        console.error('Missing DOM elements:', missingElements);
        alert('Error: Missing required DOM elements: ' + missingElements.join(', '));
    } else {
        console.log('✓ All DOM elements found');
        console.log('✓ Game data loaded:', gameData.order.length, 'categories');
        console.log('✓ Categories:', gameData.order.join(', '));
    }

    document.querySelectorAll('.hero-title .letter').forEach((letter, i) => {
        letter.style.animationDelay = `${i * 0.1}s, ${1 + i * 0.2}s`;
    });

    buildCategoryCards();

    document.getElementById('playButton').addEventListener('click', () => {
        SoundManager.play('click');
        showCategoryScreen();
    });
    document.getElementById('navPlayBtn').addEventListener('click', (e) => {
        e.preventDefault();
        SoundManager.play('click');
        showCategoryScreen();
    });
    document.getElementById('howToPlayBtn').addEventListener('click', openHowToPlayModal);
    document.getElementById('howToPlayHeroBtn').addEventListener('click', openHowToPlayModal);
    document.getElementById('modalCloseBtn').addEventListener('click', closeHowToPlayModal);
    document.getElementById('modalCloseBtnBottom').addEventListener('click', closeHowToPlayModal);
    document.getElementById('howToPlayModal').addEventListener('click', (e) => {
        if (e.target.id === 'howToPlayModal') closeHowToPlayModal();
    });
    document.getElementById('backButton').addEventListener('click', () => {
        SoundManager.play('click');
        handleBack();
    });
    document.getElementById('checkBtn').addEventListener('click', checkAnswers);
    document.getElementById('resetBtn').addEventListener('click', resetPuzzle);
    document.getElementById('nextBtn').addEventListener('click', nextPuzzle);
});

// ===================== SCREEN NAVIGATION =====================

function showCategoryScreen() {
    currentScreen = 'categories';
    categoryTitleEl.textContent = 'Choose Your Category';
    rebuildCategoryCards();

    gameContainer.style.display = 'block';
    setTimeout(() => {
        gameContainer.classList.add('active');
        categoryScreen.style.display = 'block';
        gameScreen.style.display = 'none';
    }, 10);

    gameHeaderTitle.textContent = 'Choose a Category';
}

async function showGameScreen(category, puzzleIdx) {
    currentScreen = 'game';
    currentCategory = category;
    currentPuzzleIdx = puzzleIdx;

    console.log('=== SHOW GAME SCREEN ===');
    console.log('Category:', category);
    console.log('Puzzle Index:', puzzleIdx);
    console.log('gameScreen element:', gameScreen);
    console.log('gameScreen before:', gameScreen.style.display);
    
    categoryScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    
    console.log('gameScreen after:', gameScreen.style.display);
    console.log('categoryScreen:', categoryScreen.style.display);

    // Show loading indicator
    answersList.innerHTML = '<div class="clues-loading">Loading puzzle...</div>';
    cluesList.innerHTML = '<div class="clues-loading">Loading clues...</div>';

    try {
        await loadPuzzle(category, puzzleIdx);
        console.log('=== GAME SCREEN LOADED SUCCESSFULLY ===');
    } catch (error) {
        console.error('Error loading puzzle:', error);
        answersList.innerHTML = '<div class="clues-loading" style="color: #F44336;">Error loading puzzle. Please try again.</div>';
        cluesList.innerHTML = '';
        alert('Error loading puzzle. Please check the console for details.');
    }
}

function handleBack() {
    if (currentScreen === 'game') showCategoryScreen();
    else if (currentScreen === 'categories') hideGame();
}

function hideGame() {
    currentScreen = 'hero';
    gameContainer.classList.remove('active');
    setTimeout(() => {
        gameContainer.style.display = 'none';
        categoryScreen.style.display = 'none';
        gameScreen.style.display = 'none';
    }, 500);
}

// ===================== CATEGORY SCREEN =====================

function rebuildCategoryCards() {
    categoryGrid.innerHTML = '';
    gameData.order.forEach(cat => {
        const puzzles = gameData.categories[cat];
        const icon = categoryIcons[cat] || '\u{1F3AF}';
        const colors = categoryColors[cat] || { bg: '#666', accent: '#888' };

        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.background = `linear-gradient(135deg, ${colors.bg}, ${colors.accent})`;
        card.innerHTML = `
            <div class="card-icon">${icon}</div>
            <h3 class="card-title">${escapeHtml(cat)}</h3>
            <p class="card-count">${puzzles.length} Puzzle${puzzles.length !== 1 ? 's' : ''}</p>
        `;
        card.addEventListener('click', () => {
            SoundManager.play('click');
            showPuzzleSelect(cat);
        });
        categoryGrid.appendChild(card);
    });
}

function buildCategoryCards() {
    rebuildCategoryCards();
}

async function showPuzzleSelect(category) {
    const puzzles = gameData.categories[category];
    const colors = categoryColors[category] || { bg: '#666', accent: '#888' };

    categoryTitleEl.textContent = category;
    categoryGrid.innerHTML = '<div class="clues-loading">Loading puzzles...</div>';

    // Preload images for this category (but don't block UI)
    preloadCategoryImages(category).catch(err => console.log('Image preload error:', err));

    // Clear loading and show back card
    categoryGrid.innerHTML = '';

    const backCard = document.createElement('div');
    backCard.className = 'category-card back-card';
    backCard.innerHTML = `
        <div class="card-icon">\u2190</div>
        <h3 class="card-title">Back to Categories</h3>
    `;
    backCard.addEventListener('click', () => {
        SoundManager.play('click');
        categoryTitleEl.textContent = 'Choose Your Category';
        rebuildCategoryCards();
    });
    categoryGrid.appendChild(backCard);

    // Create puzzle cards synchronously (images will load in background)
    puzzles.forEach((puzzle) => {
        const card = document.createElement('div');
        card.className = 'category-card puzzle-card';
        card.style.background = `linear-gradient(135deg, ${colors.bg}, ${colors.accent})`;
        card.innerHTML = `
            <div class="card-icon">\u{1F9E9}</div>
            <h3 class="card-title">${escapeHtml(puzzle.title)}</h3>
            <p class="card-count">${puzzle.words.length} Words</p>
        `;
        card.addEventListener('click', () => {
            SoundManager.play('click');
            showGameScreen(category, puzzle.index);
        });
        categoryGrid.appendChild(card);

        // Load image in background and update card
        (async () => {
            for (const word of puzzle.words) {
                const img = await getWordImage(word.answer, word.clue);
                if (img) {
                    const icon = card.querySelector('.card-icon');
                    if (icon) {
                        const imgEl = document.createElement('img');
                        imgEl.className = 'card-image';
                        imgEl.src = img;
                        imgEl.alt = escapeHtml(puzzle.title);
                        imgEl.onerror = () => { imgEl.style.display = 'none'; };
                        icon.replaceWith(imgEl);
                    }
                    break;
                }
            }
        })();
    });
}

// ===================== LOAD PUZZLE =====================

async function loadPuzzle(category, puzzleIdx) {
    const puzzle = gameData.categories[category][puzzleIdx];

    if (!puzzle) {
        console.error('❌ Puzzle not found for category:', category, 'index:', puzzleIdx);
        alert('Error: Puzzle not found!');
        return;
    }

    console.log('✅ === LOADING PUZZLE ===');
    console.log('Category:', category);
    console.log('Puzzle Index:', puzzleIdx);
    console.log('Puzzle Title:', puzzle.title);
    console.log('Words count:', puzzle.words.length);
    console.log('Phrase:', puzzle.phrase);
    console.log('PhraseMap entries:', puzzle.phraseMap.length);

    gameHeaderTitle.textContent = `${category}: ${puzzle.title}`;

    try {
        // Build puzzle phrase display
        console.log('⏳ Building puzzle phrase...');
        buildPuzzlePhrase(puzzle);
        console.log('✅ Puzzle phrase built');

        // Build answers
        console.log('⏳ Building answers...');
        buildAnswers(puzzle);
        console.log('✅ Answers built');

        // Build clues (async for images)
        console.log('⏳ Building clues...');
        await buildClues(puzzle);
        console.log('✅ Clues built');
        
        console.log('✅ === PUZZLE LOADED SUCCESSFULLY ===');
    } catch (error) {
        console.error('❌ Error in loadPuzzle:', error);
        alert('Error loading puzzle: ' + error.message);
    }
}

function buildPuzzlePhrase(puzzle) {
    puzzlePhraseEl.innerHTML = '';

    // Display shuffled phrase with spaces between words
    puzzle.phraseMap.forEach((pm) => {
        if (pm.letter === ' ') {
            // Space between words
            const spacer = document.createElement('span');
            spacer.className = 'phrase-spacer';
            spacer.style.width = '12px';
            spacer.style.height = '38px';
            puzzlePhraseEl.appendChild(spacer);
        } else {
            // Letter slot
            const slot = document.createElement('div');
            slot.className = 'phrase-slot';
            slot.dataset.num = pm.num;
            slot.dataset.letter = pm.letter;
            slot.innerHTML = `
                <span class="phrase-slot-num">${pm.num}</span>
                <span class="phrase-slot-letter"></span>
            `;
            puzzlePhraseEl.appendChild(slot);
        }
    });
}

function buildAnswers(puzzle) {
    console.log('Building answers for puzzle:', puzzle.title);
    console.log('Puzzle object keys:', Object.keys(puzzle));
    console.log('puzzle.words exists:', 'words' in puzzle);
    console.log('puzzle.words:', puzzle.words);
    console.log('puzzle.phraseMap length:', puzzle.phraseMap.length);
    
    // Collect all unique numbers from the phrase map
    const phraseNums = new Set(puzzle.phraseMap.map(pm => pm.num));
    console.log('Phrase box numbers:', Array.from(phraseNums).sort((a,b) => a-b));
    
    try {
        if (!answersList) {
            throw new Error('answersList DOM element not found');
        }
        
        answersList.innerHTML = '';

        if (!puzzle.words || !Array.isArray(puzzle.words)) {
            throw new Error('puzzle.words is not an array: ' + typeof puzzle.words);
        }

        console.log('Words count:', puzzle.words.length);

        puzzle.words.forEach((word, wordIdx) => {
            console.log(`Creating answer row ${wordIdx + 1} for word:`, word.answer);
            console.log('Word object:', word);

            const answerRow = document.createElement('div');
            answerRow.className = 'answer-row';
            answerRow.dataset.clueNum = word.clueNum;

            // Create letter inputs for this word
            const inputsContainer = document.createElement('div');
            inputsContainer.className = 'answer-inputs';

            if (!word.answer) {
                throw new Error(`Word at index ${wordIdx} has no answer`);
            }

            for (let i = 0; i < word.answer.length; i++) {
                const wrapper = document.createElement('div');
                wrapper.className = 'answer-cell-wrapper';

                // Cell number badge
                const cellNum = word.cellNums ? word.cellNums[i] : 'N/A';
                
                // Verify this number exists in the phrase
                if (!phraseNums.has(cellNum)) {
                    console.warn(`⚠️ Answer box #${cellNum} NOT in puzzle phrase!`);
                }
                
                console.log(`  Letter ${i}: cellNum=${cellNum}, answer=${word.answer[i]}, inPhrase=${phraseNums.has(cellNum)}`);
                
                const numBadge = document.createElement('div');
                numBadge.className = 'cell-num-badge';
                numBadge.textContent = cellNum;
                wrapper.appendChild(numBadge);

                // Input
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'answer-cell';
                input.dataset.wordIdx = wordIdx;
                input.dataset.letterIdx = i;
                input.dataset.answer = word.answer[i];
                input.dataset.num = cellNum;
                input.dataset.clueNum = word.clueNum;
                input.maxLength = 1;
                input.autocapitalize = 'characters';
                input.autocomplete = 'off';
                input.inputMode = 'text';

                input.addEventListener('input', handleAnswerInput);
                input.addEventListener('keydown', handleAnswerKeydown);
                input.addEventListener('focus', handleAnswerFocus);

                wrapper.appendChild(input);
                inputsContainer.appendChild(wrapper);
            }

            // Add clue number label to the row
            const clueLabel = document.createElement('div');
            clueLabel.className = 'answer-row-label';
            clueLabel.innerHTML = `<span class="answer-row-clue-num">${word.clueNum}.</span> <span class="answer-row-clue-text">${escapeHtml(word.clue)}</span>`;
            
            // Fix: append in correct order instead of using insertBefore
            answerRow.appendChild(clueLabel);
            answerRow.appendChild(inputsContainer);
            answersList.appendChild(answerRow);
        });

        console.log('✅ Answers built successfully. Total rows:', puzzle.words.length);
    } catch (error) {
        console.error('❌ Error building answers:', error);
        console.error('Error stack:', error.stack);
        answersList.innerHTML = '<div class="clues-loading" style="color: #F44336;">Error building answers: ' + error.message + '</div>';
    }
}

async function buildClues(puzzle) {
    cluesList.innerHTML = '<div class="clues-loading">Loading images...</div>';

    try {
        // Fetch images for all words in parallel
        const imagePromises = puzzle.words.map(async (word) => {
            try {
                return await getWordImage(word.answer, word.clue);
            } catch (error) {
                console.log('Failed to load image for:', word.answer);
                return null;
            }
        });

        const images = await Promise.all(imagePromises);

        cluesList.innerHTML = '';

        puzzle.words.forEach((word, i) => {
            const li = document.createElement('li');
            const imgUrl = images[i];
            const imageSection = imgUrl ? `<img class="clue-image" src="${imgUrl}" alt="${escapeHtml(word.answer)}" onerror="this.style.display='none'">` : '';

            li.innerHTML = `
                ${imageSection}
                <span class="clue-number">${word.clueNum}.</span>
                <span class="clue-text">${escapeHtml(word.clue)}</span>
                <span class="clue-len">(${word.answer.length})</span>
            `;
            li.addEventListener('click', () => {
                SoundManager.play('click');
                highlightWord(word.clueNum);
            });
            cluesList.appendChild(li);
        });
    } catch (error) {
        console.error('Error building clues:', error);
        // Show clues without images if something fails
        cluesList.innerHTML = '';
        puzzle.words.forEach((word) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="clue-number">${word.clueNum}.</span>
                <span class="clue-text">${escapeHtml(word.clue)}</span>
                <span class="clue-len">(${word.answer.length})</span>
            `;
            li.addEventListener('click', () => {
                SoundManager.play('click');
                highlightWord(word.clueNum);
            });
            cluesList.appendChild(li);
        });
    }
}

function highlightWord(clueNum) {
    // Highlight the first cell of the word in answers
    const input = answersList.querySelector(`input[data-clue-num="${clueNum}"][data-letter-idx="0"]`);
    if (input) {
        input.focus();
        input.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ===================== ANSWER HANDLERS =====================

function handleAnswerInput(e) {
    const cell = e.target;
    cell.value = cell.value.toUpperCase().replace(/[^A-Z]/g, '');

    if (cell.value.length === 1) {
        // Play click sound
        SoundManager.play('click');

        // Check if correct and update puzzle phrase
        checkAndUpdatePhrase(cell);

        // Move to next cell in same word
        const wordIdx = cell.dataset.wordIdx;
        const letterIdx = parseInt(cell.dataset.letterIdx);
        const nextCell = answersList.querySelector(`input[data-word-idx="${wordIdx}"][data-letter-idx="${letterIdx + 1}"]`);
        if (nextCell) nextCell.focus();
    }
}

function handleAnswerKeydown(e) {
    const cell = e.target;
    const wordIdx = cell.dataset.wordIdx;
    const letterIdx = parseInt(cell.dataset.letterIdx);

    if (e.key === 'Backspace') {
        e.preventDefault();
        if (cell.value !== '') {
            cell.value = '';
            checkAndUpdatePhrase(cell); // clear phrase letter if was correct
        } else {
            // Go to previous cell in same word
            if (letterIdx > 0) {
                const prevCell = answersList.querySelector(`input[data-word-idx="${wordIdx}"][data-letter-idx="${letterIdx - 1}"]`);
                if (prevCell) {
                    prevCell.value = '';
                    checkAndUpdatePhrase(prevCell);
                    prevCell.focus();
                }
            }
        }
        return;
    }

    if (e.key === 'Delete') {
        e.preventDefault();
        cell.value = '';
        checkAndUpdatePhrase(cell);
        return;
    }

    if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
        e.preventDefault();
        cell.value = e.key.toUpperCase();
        SoundManager.play('click');
        checkAndUpdatePhrase(cell);

        const nextCell = answersList.querySelector(`input[data-word-idx="${wordIdx}"][data-letter-idx="${letterIdx + 1}"]`);
        if (nextCell) nextCell.focus();
        return;
    }

    if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (letterIdx < 20) { // max reasonable length
            const nextCell = answersList.querySelector(`input[data-word-idx="${wordIdx}"][data-letter-idx="${letterIdx + 1}"]`);
            if (nextCell) nextCell.focus();
        }
    }

    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (letterIdx > 0) {
            const prevCell = answersList.querySelector(`input[data-word-idx="${wordIdx}"][data-letter-idx="${letterIdx - 1}"]`);
            if (prevCell) prevCell.focus();
        }
    }

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        const clueNum = parseInt(cell.dataset.clueNum);
        if (clueNum > 1) {
            const prevWordCell = answersList.querySelector(`input[data-clue-num="${clueNum - 1}"][data-letter-idx="${letterIdx}"]`);
            if (prevWordCell) prevWordCell.focus();
        }
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const clueNum = parseInt(cell.dataset.clueNum);
        const nextWordCell = answersList.querySelector(`input[data-clue-num="${clueNum + 1}"][data-letter-idx="${letterIdx}"]`);
        if (nextWordCell) nextWordCell.focus();
    }

    if (e.key === 'Enter') {
        e.preventDefault();
        const nextCell = answersList.querySelector(`input[data-word-idx="${wordIdx}"][data-letter-idx="${letterIdx + 1}"]`);
        if (nextCell) nextCell.focus();
    }

    if (e.key === 'Escape') {
        e.preventDefault();
        if (letterIdx > 0) {
            const prevCell = answersList.querySelector(`input[data-word-idx="${wordIdx}"][data-letter-idx="${letterIdx - 1}"]`);
            if (prevCell) prevCell.focus();
        }
    }
}

function handleAnswerFocus(e) {
    e.target.select();
}

// ===================== PUZZLE PHRASE UPDATE =====================

function checkAndUpdatePhrase(cell) {
    const cellNum = parseInt(cell.dataset.num);
    const userAnswer = cell.value.toUpperCase();
    const correctAnswer = cell.dataset.answer;

    // Find matching phrase slots
    const slots = puzzlePhraseEl.querySelectorAll('.phrase-slot');
    slots.forEach(slot => {
        const slotNum = parseInt(slot.dataset.num);
        if (slotNum === cellNum) {
            const letterEl = slot.querySelector('.phrase-slot-letter');
            if (userAnswer === correctAnswer) {
                letterEl.textContent = correctAnswer;
                letterEl.classList.add('revealed');
                cell.classList.add('correct');
                cell.classList.remove('incorrect');
                // Play correct sound
                SoundManager.play('correct');
            } else if (userAnswer !== '') {
                letterEl.textContent = '';
                letterEl.classList.remove('revealed');
                cell.classList.remove('correct');
                cell.classList.add('incorrect');
                // Play error sound
                SoundManager.play('error');
            } else {
                letterEl.textContent = '';
                letterEl.classList.remove('revealed');
                cell.classList.remove('correct', 'incorrect');
            }
        }
    });

    // Check if phrase is fully revealed
    checkPhraseComplete();
}

function checkPhraseComplete() {
    const slots = puzzlePhraseEl.querySelectorAll('.phrase-slot');
    let allRevealed = true;
    slots.forEach(slot => {
        const letterEl = slot.querySelector('.phrase-slot-letter');
        if (!letterEl.classList.contains('revealed')) {
            allRevealed = false;
        }
    });

    if (allRevealed && slots.length > 0) {
        // Play completion sound
        SoundManager.play('complete');
        setTimeout(() => {
            alert('\u{1F389} Puzzle Complete! The phrase is revealed!');
        }, 300);
    }
}

// ===================== GAME CONTROLS =====================

function checkAnswers() {
    const inputs = answersList.querySelectorAll('input.answer-cell');
    let allCorrect = true;
    let hasAnyInput = false;

    inputs.forEach(cell => {
        const answer = cell.dataset.answer;
        const userAnswer = cell.value.toUpperCase();

        cell.classList.remove('correct', 'incorrect');

        if (userAnswer !== '') hasAnyInput = true;

        if (userAnswer === answer) {
            cell.classList.add('correct');
            checkAndUpdatePhrase(cell);
        } else if (userAnswer !== '') {
            cell.classList.add('incorrect');
            allCorrect = false;
        } else {
            allCorrect = false;
        }
    });

    if (allCorrect && hasAnyInput) {
        SoundManager.play('complete');
        alert('\u{1F389} All answers correct!');
    } else if (!hasAnyInput) {
        alert('Please fill in some answers first!');
    }
}

function resetPuzzle() {
    SoundManager.play('click');

    const inputs = answersList.querySelectorAll('input.answer-cell');
    inputs.forEach(cell => {
        cell.value = '';
        cell.classList.remove('correct', 'incorrect');
    });

    // Clear all phrase slots
    const slots = puzzlePhraseEl.querySelectorAll('.phrase-slot');
    slots.forEach(slot => {
        const letterEl = slot.querySelector('.phrase-slot-letter');
        letterEl.textContent = '';
        letterEl.classList.remove('revealed');
    });
}

async function nextPuzzle() {
    SoundManager.play('click');
    
    if (!currentCategory) return;
    const puzzles = gameData.categories[currentCategory];
    currentPuzzleIdx = (currentPuzzleIdx + 1) % puzzles.length;
    await loadPuzzle(currentCategory, currentPuzzleIdx);
}

// ===================== UTILITY =====================

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ===================== SPARKLE EFFECT =====================

const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.borderRadius = '50%';
        sparkle.style.background = 'radial-gradient(circle, #FFD23F, transparent)';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '100';
        sparkle.style.animation = 'sparkle 0.8s ease-out forwards';
        hero.appendChild(sparkle);
        setTimeout(() => { sparkle.remove(); }, 800);
    });
}

// ===================== HOW TO PLAY MODAL =====================

function openHowToPlayModal() {
    SoundManager.play('click');
    const modal = document.getElementById('howToPlayModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeHowToPlayModal() {
    SoundManager.play('click');
    const modal = document.getElementById('howToPlayModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('howToPlayModal');
        if (modal && modal.classList.contains('active')) {
            closeHowToPlayModal();
        }
    }
});
