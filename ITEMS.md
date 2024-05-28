# Items

In this document we list all **items** (or _elements_) and **recipes** that can be found in the game. We also provide some explanation of the most important game mechanics revolving around items and recipes.

## Buying

**Buying an item**: Players may at any time call the game contract, transfer some value in the call, and receive items equal to the value transferred. The price of an item is calculated as follows:

For starters, each **item** has a **tier**. The item tier is a **positive integer number**. The game always has a **buy offer**, which is a tuple of (**native token price**, **received tier points**). When the player **buys**, they indirectly buy tier points, and may receive `floor(received_tier_points / tier)` items. The game only considers `floor(transfered_value / native_token_price)` amount of money transfered in, and the remainder is lost (or donated to the contract, however you want to see it).

## Items

* **Monkey** (`1`): This banana-loving acrobat is like if Tarzan had a caffeine addiction!
* **Giraffe** (`1`): The long-necked, leafy buffet enthusiast that would make even a stepladder feel short.
* **Bee** (`1`): The buzzing little cousin of Buzzie Lightyear, Defender of the Flora and Champion of Sweetness!
* **Coin** (`1`): More valuable than a chest full of dragon's gold, this shiny round thing makes NPCs do your bidding.
* **Swarm** (`2`): Unleash a tiny, buzzing army that makes you feel like the villain in a superhero movie.
* **Hydra** (`2`): When one head isn't enough to argue with you, this multi-headed reptilian nightmare is ready to rumble!
* **Monkey Branch** (`2`): Swing through the jungle like Tarzan with this monkey-approved vine, perfect for dramatic escapes and awkward landings.
* **Bridge** (`2`): The majestic road-over-nothing, perfect for trolls and billy goats alike.
* **Golden Gate** (`2`): The mystical bridge that Gandalf would totally approve of, connecting realms and charging tolls in riddles.
* **Gold** (`1`): Shinier than a disco ball at Studio 54, this glistening treasure will make Scrooge McDuck jealous!
* **Silver** (`1`): Shinier than a vampire at a disco party, it's what werewolves dread and jewelry lovers adore.
* **Rhodium** (`1`): The bling-bling metal of the periodic table: shinier than your future, harder than your math homework.
* **Hive** (`1`): Welcome to the buzzfeed mansion, where every room has a bee-convincing argument!
* **Transaction** (`1`): The magical moment when your gold coins vanish and you're left wondering if you've been pickpocketed by a ninja or just bought a shiny new sword.
* **Block** (`1`): Like adult Legos, but less fun and more about stopping that lava from ruining your day!
* **Blockchain** (`1`): The magical internet ledger of destiny that Satoshi dreamt up, where everything is transparent, immutable, and forever entwined like the plot of a Christopher Nolan movie.
* **Polkadot** (`1`): Think Bitcoin's eccentric cousin who shows up at parties in a spotted suit and shocks everyone with their dazzlingly efficient dancing.
* **Peer Review** (`1`): A scroll that makes your friends question their life choices and your enemies spit out their coffee in disbelief.
* **Cardano** (`2`): Time to unleash the blockchain beast that's more confusing than an IKEA assembly manual!
* **Bear** (`1`): This fuzzy giant decided to move out of the forest and into your nightmares on the advice of its therapist, Yogi.
* **Beer** (`2`): The golden elixir of the gods, best enjoyed when your quest log is empty and your dance moves are questionable.
* **Lock** (`2`): Who needs a dragon when you've got this security boss blocking your treasure chest?
* **Marmalade** (`1`): The sticky, fruity concoction that Paddington Bear would trade his hat for.
* **Super Marmalade** (`2`): As if Spider-Man and your grandma's secret jam recipe had a citrusy baby that swings through breakfast toast saving your taste buds one bite at a time!
* **Hyper Marmalade** (`2`): Like regular marmalade, but it makes you feel like you've had a double shot of espresso and a lightning bolt to the brain!
* **Water** (`1`): H2-Oh no, you spilled it again!
* **Fire** (`1`): Summon a flickering tongue of destruction that makes dragons envious and marshmallows tremble in awe!
* **Steam** (`1`): It's water's sassy teen phase before it cools down and becomes boring again.
* **Earth** (`1`): Because who doesn't want a handful of dirt from Mother Nature's handbag?
* **Mud** (`1`): Mother Nature's messy smoothie, perfect for impromptu spa days or sabotaging the hero's clean shoes!
* **Lava** (`1`): Spicy earth salsa that guarantees an insta-tan and some crispy new shoes!
* **Wind** (`1`): The invisible ninja that gives trees a good hair day.
* **Dust** (`1`): The forgotten remains of battles long past, or your enemy when you forget to clean under the sofa.
* **Rain** (`1`): Sky's attempt at a group shower: brings hydration and dramatic window views!
* **Smoke** (`1`): As elusive as your New Year's resolutions, it vanishes faster than free Wi-Fi at a coffee shop.
* **Geyser** (`1`): Mother Nature's boiling hot water cannon, now available as a decorative backyard feature!
* **Clay** (`1`): Mold this earthy Play-Doh into something magical, or just make yourself a new best friend, Wilson style!
* **Sand** (`1`): Pocketful of tiny wizards' teeth, creating beaches and cat litter archeology!
* **Plant** (`1`): The botanical equivalent of Wi-Fi for oxygen, providing full bars since prehistoric times.
* **Rainbow** (`1`): The sky's post-rain refurbishment job, brought to you by Mother Nature's favorite highlighter pack.
* **Storm** (`1`): Angry sky kittens throwing tantrums and lightning bolts like Thor after a double espresso.
* **Obsidian** (`1`): Crafted by the earth's angriest volcano, it's tougher than your grandma's fruitcake and twice as unforgiving.
* **Ash** (`1`): The remains of your epic campfire story that burned out faster than your WiFi during a binge session.
* **Volcano** (`1`): Mount Doom's flamboyant cousin who's always ready to throw a tantrum and belch fiery salsa.
* **Sandstorm** (`1`): It's like Mother Nature's version of a blender set to 'desert' mode, without the fruity cocktail at the end.
* **Cloud** (`1`): Fluffier than marshmallows and moodier than a teenager, this sky cotton candy hides the secrets of the weather gods.
* **Fog** (`1`): It’s like someone took all the clouds, shredded them, and set them loose to play hide and seek with your vision.
* **Tree** (`1`): The original WiFi router for squirrels, providing shade and nuts with zero bars of signal!
* **Forest** (`1`): A dense collection of trees where even squirrels hire GPS, home of the mythical Wi-Fi-repellent green zone.
* **Seeds** (`1`): Nature's popcorn kernels, just add dirt and patience for a flourishing snack!
* **Pottery** (`1`): Perfect for storing all your grandma's secret cookie recipes and ancient legendary treasures, one chip at a time!
* **Brick** (`1`): As indestructible as your WiFi on a good day, this brick could build a mansion or your Minecraft empire.
* **Quicksand** (`1`): The Earth's way of saying 'GOTCHA!' when you thought a leisurely stroll through the desert sounded appealing.
* **Glass** (`1`): As delicate as your ego after a bad break-up, but see-through like your best friend's terrible poker face.
* **Dune** (`1`): Get ready to channel your inner Muad'Dib and rule the sandy seas while dodging giant worms and political plots!
* **Charcoal** (`1`): The BBQ Master's secret ingredient for transforming your steaks from zero to hero faster than you can say 'Grill-Zilla!'
* **Leaves** (`1`): Green confetti for Mother Nature's never-ending party, with a hint of chlorophyll chic!
* **Wildfire** (`1`): Spicier than your ex's DMs, this blaze turns forests into toast and marshmallows into napalm.
* **Jungle** (`1`): Like Tarzan's playground but with 99% more bugs and 100% less Wi-Fi.
* **Frosted Glass** (`1`): Clearer than your intentions after a night out, but still elusive as your friend who promises to show up on time.
* **Crystal** (`1`): Shiny as Edward Cullen and twice as sparkly in the moonlight!
* **Magma** (`1`): Hotter than your ex's last text, this molten rock sauce will turn enemies into toast.
* **Rock** (`1`): It's Dwayne Johnson's stony cousin, perfect for smashing enemies or just sitting there, being all geology-like.
* **Shard** (`1`): This is the majestic piece of glitter, sharper than your ex-girlfriend's comebacks!
* **Pebble** (`1`): As insignificant as the pebble you kicked on your way to saving the world.
* **Mountain** (`1`): The colossal nature bump that's basically Earth's awkward zit.
* **Fertilizer** (`1`): Sprinkle a little of this magic dust and watch your plants grow faster than a YouTube tutorial on 'getting rich quick!'
* **Soot** (`1`): Dust bunnies' granddaddy who moonlights as a chimney sweep in a Dickens novel.
* **Lightning** (`1`): Like Thor's tantrum in a bottle, ready to zap your foes into crispy critters!
* **Mist** (`1`): Like a ghost doing the moonwalk, it slips through your fingers and cloaks the world in mystery!
* **Haze** (`1`): Like Gandalf's vape party, but a lot less fun and way more confusing.
* **Flood** (`1`): When Mother Nature throws the ultimate pool party and forgets to send the 'BYO life jacket' memo.
* **Landslide** (`1`): A geological temper tantrum that sends boulders downhill faster than a caffeine-crazed squirrel on roller skates!
* **Thunder** (`1`): Like Thor's mixtape at full volume, this electrifying zap will leave your enemies shocked and awed!
* **Tornado** (`1`): Nature's blender on steroids, mixing up cows, houses, and your afternoon picnic.
* **Garden** (`1`): Nature's sunlit Wi-Fi free zone, and the original farm-to-table restaurant!
* **Ember** (`1`): Like a tiny dragon's sneeze, this little spark packs a fiery punch!
* **Kiln** (`1`): The oven that turns your pottery dreams into reality, just like Hogwarts turns kids into wizards.
* **Pollination** (`1`): Nature's Tinder for plants, where bees are the swiping right matchmakers.
* **Sinkhole** (`1`): Suddenly feeling like you starred in a Looney Tunes cartoon, minus the anvil and roadrunner.
* **Beach** (`1`): A sun-kissed playground where sand gets everywhere, like glitter but from hell.
* **Wetstone** (`1`): Sharpen your blades while pondering life's mysteries with this slippery soapy rock, straight from the stones of Soapland!
* **Erosion** (`1`): Nature's slow-motion magic trick, turning mighty mountains into beach sand one grain at a time.
* **Basalt** (`1`): Forged in the depths of the earth, harder than your ex's heart and cooler than the underside of your pillow.
* **Magma Chamber** (`1`): Hotter than a dragon's sneeze, this is the spicy jacuzzi of the underworld.
* **Breeze** (`1`): Like Gandalf's whisper, this gentle wind will casually rearrange your bad hair day.
* **Warm Breeze** (`1`): It's like Mother Nature left the hairdryer on; embrace the cozy winds of summer hugs!
* **Soil** (`1`): Dirt-napped cousin of terra-firma, perfect for your eco-friendly carpet installations!
* **Canyon** (`1`): Nature's gigantic frown; perfect for epic echoes and bottomless pratfalls.
* **Windmill** (`1`): Spinning like your favorite DJ, this eco-friendly giant turns breezes into electrical symphonies.
* **Adobe** (`1`): The ancient Minecraft enchantment that grants you the power to build desert dream homes with just a handful of dirt and some water!
* **Wall** (`1`): The Gentleman Bouncer of your castle, politely informing intruders that the party's over.
* **Pumice** (`1`): Floats like a butterfly, scrubs like Mr. Clean - the Swiss cheese of rocks!
* **Barbecue** (`1`): Unleash your inner pitmaster with this meat sizzle maker, as seen on grill-enthusiast reality shows!
* **Farm** (`1`): The ultimate pre-industrial protein shake factory, where plants and animals live in suspenseful harmony waiting to be useful.
* **Shards** (`1`): Fragments of a broken heart? Or just pieces of yesterday's piñata—either way, they're sharp!
* **Molten Glass** (`1`): Hotter than a dragon's breath after Taco Tuesday, this molten glass can melt through your problems... literally.
* **Prism** (`1`): Divide light like a 70's disco ball at a Saturday night fever party.
* **Sparkle** (`1`): Glitter brighter than a unicorn's tears at a K-pop concert.
* **Desert** (`1`): A vast sandbox of banishment where even cacti consider sunblock.
* **Oasis** (`1`): The desert's VIP lounge, complete with complimentary palm trees and mirage-resistant seating!
* **Mirage** (`1`): As elusive as your mom's Wi-Fi password and twice as frustrating to catch!
* **Sand Dune** (`1`): As majestic as a stack of pancakes, but far more abrasive and less syrupy.
* **Dam** (`1`): The Dwayne 'The Rock' Johnson of water barriers, holding back the wet with sheer muscle.
* **Firewall** (`1`): The Gandalf of cybersecurity: 'You shall not pass!'
* **Barricade** (`1`): Like Gandalf facing a Balrog, it's the 'You shall not pass!' of fortifications.
* **Plateau** (`1`): A flat piece of land that got tired of climbing mountains and decided to chill forever.
* **Pond** (`1`): Where ducks hold their secret aquatic raves and lily pads plot world domination.
* **Aromas** (`1`): Sprinkle a bit of Hogwarts' magic under your nose and breathe in the essence of enchanted forests and dragon's breath!
* **Flower** (`1`): The colorful Wi-Fi signal for bees; smells better than your ex's perfume!
* **Spore** (`1`): Tiny, invisible disco balls of doom, ready to throw a rave in your sinuses!
* **Spread** (`1`): As versatile as a Swiss army knife, it's the social butterfly of condiments!
* **Fertile Land** (`1`): As luxurious and bountiful as Bob Ross’s paint palette, it's the MVP of Mother Nature's garden party.
* **Wetland** (`1`): As if Mother Nature decided to recreate the set of Jumanji with extra humidity and a smorgasbord of mosquitoes!
* **Peat** (`1`): It's like the cozy blanket of soil—excellent for plants, terrible for couch potatoes.
* **Reeds** (`1`): The nature-made cocktail straws that just might call Gandalf from Middle-earth; beware of hobbits sneaking around!
* **Valley** (`1`): The place where hills take a break and gossip about mountains.
* **River** (`1`): The highway for fish and the misplaced bathtubs of nature, flowing with more twists than a soap opera plotline.
* **Scorched Earth** (`1`): More devastating than an expired hot sauce binge, it turns fertile land into a Mad Max wasteland!
* **Delta** (`1`): The river’s final boss battle, where water splits like an indecisive rom-com character in the season finale.
* **Estuary** (`1`): Where the river meets the sea, like the ultimate mashup album nobody asked for but everyone loves.
* **Fire Swamp** (`1`): Enter at your own risk and remember, the trees have a fiery personality akin to dragons after a spicy taco night!
* **Riverbank** (`1`): Where Gandalf would come for a picnic with his hobbit homies if Middle-earth had longer vacations.
* **Ravine** (`1`): The Grand Canyon's emo teenager cousin, endless depths of angsty chasms.
* **Gorge** (`1`): When wandering through this natural wonder, remember: it's like Mother Earth's really dramatic cleavage.
* **Charred Ravine** (`1`): A spicy hot potato chip of doom, hotter than a dragon's sneeze in a volcano.
* **Echo** (`1`): It's like shouting into a canyon, but the canyon actually cares about what you said and keeps repeating it back.
* **Cave** (`1`): A dark, damp Airbnb for bats and trolls, with zero Wi-Fi signal but plenty of natural 'rockitecture'.
* **Underground Lake** (`1`): The Batcave of aquatic hideaways, home to timid fish and overly ambitious spelunkers alike.
* **Lava Cave** (`1`): A fiery Airbnb for fire-breathing dragons and grilled marshmallows.
* **Whispering Cave** (`1`): A cave so chatty it makes high school gossip sound like monk's meditation.
* **Subterranean Pool** (`1`): Where the Teenage Mutant Ninja Turtles learned to swim and rediscover lost rubber duckies!
* **Spring** (`1`): Jump higher than your dreams, or at least higher than your disappointments, with this bouncy boing-boing.
* **Hot Spring** (`1`): Like soaking in a jacuzzi made by Mother Nature, but without the awkward vacation photos!
* **Grotto** (`1`): The ultimate bachelor pad for goblins—think of it as a man cave, but with actual caves.
* **Fountain** (`1`): Where wishes and coins go on a wild water slide together.
* **Steam Vent** (`1`): When regular air conditioning just won't cut it, unleash this spicy hot air geyser and channel your inner Old Faithful!
* **Cool Breeze** (`1`): As refreshing as a surprise pizza party in summer, but with zero calories!
* **Monument** (`1`): A stone tribute that's so towering, it could give the Statue of Liberty vertigo!
* **Waterfall** (`1`): Niagara's younger, slightly less impressive cousin that still turns heads like a supermodel on a catwalk.
* **Eternal Flame** (`1`): Hotter than a dragon's sneeze, this flame burns with the angst of a thousand rejected pop stars!
* **Pillar Of Wind** (`1`): A swirling cyclone of air that even the Weather Channel fears to forecast.
* **Stream** (`1`): Like Netflix for fish, this babbling brook is constantly streaming new episodes of nature’s playlist!
* **Zephyr** (`1`): A breeze so gentle, it could whisper lullabies to butterflies while moonwalking through daisies.
* **Creek** (`1`): Tiny river, think of it as a baby Amazon just learning to meme.
* **Brook** (`1`): Where baby rivers are born and sent to Hogwarts.
* **Whisper** (`1`): The secret handshake of the wind and your ear, as if a gossiping fairy had a megaphone.
* **Rivulet** (`1`): A tiny stream so small that even ants use it as their personal slip-n-slide.
* **Tributary** (`1`): A glorified water delivery service, bringing aqua goodness to bigger, bossier rivers.
* **Murmur** (`1`): Like the whisper of a ninja, Murmur is the sound your enemies will never hear until it’s too late.
* **Watershed** (`1`): A pivotal plot twist in the landscape where water decides which way it wants to go for the grand finale!
* **Aquifer** (`1`): Nature's secret underground swimming pool, perfect for when groundwater wants to chill out.
* **Parched Earth** (`1`): More thirst-quenching than a backstage pass at a Beyoncé concert!
* **Fresh Breeze** (`1`): A zephyr so crisp it could convince even Darth Vader to join a yoga retreat!
* **Groundwater** (`1`): Mother Earth's secret stash, hidden beneath her rocky garments like a hip flask at a dry wedding.
* **Reservoir** (`1`): Hoarder of H2O: Where all the local water droplets hang out and gossip about breaking dams and making waves!
* **Geothermal Spring** (`1`): Mother Nature's jacuzzi, hotter than the coffee your soul relies on.
* **Artesian Well** (`1`): The bottomless mimosa bar of water sources, constantly refilling without you lifting a finger - cheers!
* **Basin** (`1`): The Holy Grail of your bathroom, where soap bubbles dream of escape and rubber duckies rule!
* **Lake** (`1`): Nature's giant puddle, perfect for lazy fish, and where mythical creatures might just throw tea parties.
* **Dry Basin** (`1`): A bowl so devoid of moisture, even SpongeBob would dry up in here.
* **Depression** (`1`): Feeling like Eeyore in a world full of Tiggers.
* **Island** (`1`): A chunk of land adrift in the ocean, like a slice of pizza floating in tomato soup.
* **Lagoon** (`1`): A lazy lake who's too cool to hang with the ocean, featuring more zen than a yoga retreat for dolphins.
* **Wave** (`1`): Surf's up, dude–ride this aquatic rollercoaster like a water wizard!
* **Reef** (`1`): The underwater rock concert where fish party harder than rockstars!
* **Coral** (`1`): Nature's underwater apartment complex—complete with quirky neighbors!
* **Whirl** (`1`): Like a blender on steroids, this mini-maelstrom promises to mix up your enemies' day!
* **Limestone** (`1`): The rock Dwayne Johnson wished he was named after - capable of building empires and perfect for caveman graffiti.
* **Karst** (`1`): The Swiss cheese of landscapes—full of holes, surprises, and probably a hidden treasure if you look close enough!
* **Quicklime** (`1`): Just add water and watch this rock go all 'Hulk Smash' on your hydration dreams!
* **Blowhole** (`1`): The marine mammal's N64 controller button for an epic H2O power-up!

## Recipes

* **Make Swarm** (`1 + 1 -> 2`) - **Bee** + **Bee** -> **Swarm**: 
* **Make Hydra** (`1 + 1 -> 2`) - **Giraffe** + **Giraffe** -> **Hydra**: 
* **Make Monkeybranch** (`1 + 2 -> 2`) - **Monkey** + **Hydra** -> **Monkey Branch**: 
* **Make Bridge** (`2 + 2 -> 2`) - **Monkey Branch** + **Monkey Branch** -> **Bridge**: 
* **Make Goldengate** (`1 + 2 -> 2`) - **Coin** + **Bridge** -> **Golden Gate**: 
* **Make Cardano** (`1 + 1 -> 2`) - **Blockchain** + **Peer Review** -> **Cardano**: 
* **Make Beer** (`1 + 1 -> 2`) - **Bee** + **Bear** -> **Beer**: 
* **Make Lock** (`1 + 1 -> 2`) - **Silver** + **Silver** -> **Lock**: 
* **Make Supermarmalade** (`1 + 1 -> 2`) - **Marmalade** + **Marmalade** -> **Super Marmalade**: 
* **Make Hypermarmalade** (`2 + 2 -> 2`) - **Super Marmalade** + **Super Marmalade** -> **Hyper Marmalade**: 
* **Make Steam** (`1 + 1 -> 1`) - **Water** + **Fire** -> **Steam**: We need a description here
* **Make Mud** (`1 + 1 -> 1`) - **Water** + **Earth** -> **Mud**: We need a description here
* **Make Lava** (`1 + 1 -> 1`) - **Fire** + **Earth** -> **Lava**: We need a description here
* **Make Dust** (`1 + 1 -> 1`) - **Wind** + **Earth** -> **Dust**: We need a description here
* **Make Rain** (`1 + 1 -> 1`) - **Water** + **Wind** -> **Rain**: We need a description here
* **Make Smoke** (`1 + 1 -> 1`) - **Fire** + **Wind** -> **Smoke**: We need a description here
* **Make Geyser** (`1 + 1 -> 1`) - **Steam** + **Earth** -> **Geyser**: We need a description here
* **Make Clay** (`1 + 1 -> 1`) - **Mud** + **Fire** -> **Clay**: We need a description here
* **Make Sand** (`1 + 1 -> 1`) - **Mud** + **Wind** -> **Sand**: We need a description here
* **Make Plant** (`1 + 1 -> 1`) - **Rain** + **Earth** -> **Plant**: We need a description here
* **Make Rainbow** (`1 + 1 -> 1`) - **Rain** + **Fire** -> **Rainbow**: We need a description here
* **Make Storm** (`1 + 1 -> 1`) - **Rain** + **Wind** -> **Storm**: We need a description here
* **Make Obsidian** (`1 + 1 -> 1`) - **Lava** + **Water** -> **Obsidian**: We need a description here
* **Make Ash** (`1 + 1 -> 1`) - **Lava** + **Wind** -> **Ash**: We need a description here
* **Make Volcano** (`1 + 1 -> 1`) - **Lava** + **Earth** -> **Volcano**: We need a description here
* **Make Sandstorm** (`1 + 1 -> 1`) - **Dust** + **Wind** -> **Sandstorm**: We need a description here
* **Make Cloud** (`1 + 1 -> 1`) - **Smoke** + **Water** -> **Cloud**: We need a description here
* **Make Fog** (`1 + 1 -> 1`) - **Smoke** + **Wind** -> **Fog**: We need a description here
* **Make Tree** (`1 + 1 -> 1`) - **Plant** + **Water** -> **Tree**: We need a description here
* **Make Forest** (`1 + 1 -> 1`) - **Plant** + **Earth** -> **Forest**: We need a description here
* **Make Seeds** (`1 + 1 -> 1`) - **Plant** + **Wind** -> **Seeds**: We need a description here
* **Make Pottery** (`1 + 1 -> 1`) - **Clay** + **Fire** -> **Pottery**: We need a description here
* **Make Brick** (`1 + 1 -> 1`) - **Clay** + **Earth** -> **Brick**: We need a description here
* **Make Quicksand** (`1 + 1 -> 1`) - **Sand** + **Water** -> **Quicksand**: We need a description here
* **Make Glass** (`1 + 1 -> 1`) - **Sand** + **Fire** -> **Glass**: We need a description here
* **Make Dune** (`1 + 1 -> 1`) - **Sand** + **Wind** -> **Dune**: We need a description here
* **Make Charcoal** (`1 + 1 -> 1`) - **Tree** + **Fire** -> **Charcoal**: We need a description here
* **Make Leaves** (`1 + 1 -> 1`) - **Tree** + **Wind** -> **Leaves**: We need a description here
* **Make Wildfire** (`1 + 1 -> 1`) - **Forest** + **Fire** -> **Wildfire**: We need a description here
* **Make Jungle** (`1 + 1 -> 1`) - **Forest** + **Earth** -> **Jungle**: We need a description here
* **Make Frosted Glass** (`1 + 1 -> 1`) - **Glass** + **Water** -> **Frosted Glass**: We need a description here
* **Make Crystal** (`1 + 1 -> 1`) - **Glass** + **Earth** -> **Crystal**: We need a description here
* **Make Magma** (`1 + 1 -> 1`) - **Obsidian** + **Fire** -> **Magma**: We need a description here
* **Make Rock** (`1 + 1 -> 1`) - **Obsidian** + **Earth** -> **Rock**: We need a description here
* **Make Shard** (`1 + 1 -> 1`) - **Obsidian** + **Wind** -> **Shard**: We need a description here
* **Make Pebble** (`1 + 1 -> 1`) - **Rock** + **Water** -> **Pebble**: We need a description here
* **Make Mountain** (`1 + 1 -> 1`) - **Rock** + **Earth** -> **Mountain**: We need a description here
* **Make Fertilizer** (`1 + 1 -> 1`) - **Ash** + **Earth** -> **Fertilizer**: We need a description here
* **Make Soot** (`1 + 1 -> 1`) - **Ash** + **Wind** -> **Soot**: We need a description here
* **Make Lightning** (`1 + 1 -> 1`) - **Cloud** + **Fire** -> **Lightning**: We need a description here
* **Make Mist** (`1 + 1 -> 1`) - **Fog** + **Earth** -> **Mist**: We need a description here
* **Make Haze** (`1 + 1 -> 1`) - **Fog** + **Wind** -> **Haze**: We need a description here
* **Make Flood** (`1 + 1 -> 1`) - **Storm** + **Water** -> **Flood**: We need a description here
* **Make Landslide** (`1 + 1 -> 1`) - **Storm** + **Earth** -> **Landslide**: We need a description here
* **Make Thunder** (`1 + 1 -> 1`) - **Storm** + **Fire** -> **Thunder**: We need a description here
* **Make Tornado** (`1 + 1 -> 1`) - **Storm** + **Wind** -> **Tornado**: We need a description here
* **Make Garden** (`1 + 1 -> 1`) - **Earth** + **Plant** -> **Garden**: We need a description here
* **Make Ember** (`1 + 1 -> 1`) - **Fire** + **Ash** -> **Ember**: We need a description here
* **Make Kiln** (`1 + 1 -> 1`) - **Fire** + **Pottery** -> **Kiln**: We need a description here
* **Make Pollination** (`1 + 1 -> 1`) - **Wind** + **Plant** -> **Pollination**: We need a description here
* **Make Sinkhole** (`1 + 1 -> 1`) - **Earth** + **Quicksand** -> **Sinkhole**: We need a description here
* **Make Beach** (`1 + 1 -> 1`) - **Water** + **Sand** -> **Beach**: We need a description here
* **Make Wetstone** (`1 + 1 -> 1`) - **Water** + **Obsidian** -> **Wetstone**: We need a description here
* **Make Erosion** (`1 + 1 -> 1`) - **Wind** + **Rock** -> **Erosion**: We need a description here
* **Make Basalt** (`1 + 1 -> 1`) - **Water** + **Lava** -> **Basalt**: We need a description here
* **Make Magma Chamber** (`1 + 1 -> 1`) - **Earth** + **Lava** -> **Magma Chamber**: We need a description here
* **Make Breeze** (`1 + 1 -> 1`) - **Wind** + **Dust** -> **Breeze**: We need a description here
* **Make Warm Breeze** (`1 + 1 -> 1`) - **Fire** + **Breeze** -> **Warm Breeze**: We need a description here
* **Make Soil** (`1 + 1 -> 1`) - **Earth** + **Plant** -> **Soil**: We need a description here
* **Make Canyon** (`1 + 1 -> 1`) - **Water** + **Erosion** -> **Canyon**: We need a description here
* **Make Windmill** (`1 + 1 -> 1`) - **Wind** + **Plant** -> **Windmill**: We need a description here
* **Make Adobe** (`1 + 1 -> 1`) - **Earth** + **Clay** -> **Adobe**: We need a description here
* **Make Wall** (`1 + 1 -> 1`) - **Earth** + **Brick** -> **Wall**: We need a description here
* **Make Pumice** (`1 + 1 -> 1`) - **Water** + **Ash** -> **Pumice**: We need a description here
* **Make Barbecue** (`1 + 1 -> 1`) - **Fire** + **Charcoal** -> **Barbecue**: We need a description here
* **Make Farm** (`1 + 1 -> 1`) - **Earth** + **Seeds** -> **Farm**: We need a description here
* **Make Shards** (`1 + 1 -> 1`) - **Wind** + **Obsidian** -> **Shards**: We need a description here
* **Make Molten Glass** (`1 + 1 -> 1`) - **Fire** + **Crystal** -> **Molten Glass**: We need a description here
* **Make Prism** (`1 + 1 -> 1`) - **Water** + **Crystal** -> **Prism**: We need a description here
* **Make Sparkle** (`1 + 1 -> 1`) - **Wind** + **Crystal** -> **Sparkle**: We need a description here
* **Make Desert** (`1 + 1 -> 1`) - **Earth** + **Beach** -> **Desert**: We need a description here
* **Make Oasis** (`1 + 1 -> 1`) - **Water** + **Desert** -> **Oasis**: We need a description here
* **Make Mirage** (`1 + 1 -> 1`) - **Fire** + **Desert** -> **Mirage**: We need a description here
* **Make Sand Dune** (`1 + 1 -> 1`) - **Wind** + **Desert** -> **Sand Dune**: We need a description here
* **Make Dam** (`1 + 1 -> 1`) - **Water** + **Wall** -> **Dam**: We need a description here
* **Make Firewall** (`1 + 1 -> 1`) - **Fire** + **Wall** -> **Firewall**: We need a description here
* **Make Barricade** (`1 + 1 -> 1`) - **Wind** + **Wall** -> **Barricade**: We need a description here
* **Make Plateau** (`1 + 1 -> 1`) - **Earth** + **Canyon** -> **Plateau**: We need a description here
* **Make Pond** (`1 + 1 -> 1`) - **Water** + **Garden** -> **Pond**: We need a description here
* **Make Aromas** (`1 + 1 -> 1`) - **Wind** + **Garden** -> **Aromas**: We need a description here
* **Make Flower** (`1 + 1 -> 1`) - **Water** + **Pollination** -> **Flower**: We need a description here
* **Make Spore** (`1 + 1 -> 1`) - **Fire** + **Pollination** -> **Spore**: We need a description here
* **Make Spread** (`1 + 1 -> 1`) - **Wind** + **Pollination** -> **Spread**: We need a description here
* **Make Fertile Land** (`1 + 1 -> 1`) - **Earth** + **Soil** -> **Fertile Land**: We need a description here
* **Make Wetland** (`1 + 1 -> 1`) - **Water** + **Fertile Land** -> **Wetland**: We need a description here
* **Make Peat** (`1 + 1 -> 1`) - **Fire** + **Wetland** -> **Peat**: We need a description here
* **Make Reeds** (`1 + 1 -> 1`) - **Wind** + **Wetland** -> **Reeds**: We need a description here
* **Make Valley** (`1 + 1 -> 1`) - **Earth** + **Canyon** -> **Valley**: We need a description here
* **Make River** (`1 + 1 -> 1`) - **Water** + **Valley** -> **River**: We need a description here
* **Make Scorched Earth** (`1 + 1 -> 1`) - **Fire** + **Valley** -> **Scorched Earth**: We need a description here
* **Make Delta** (`1 + 1 -> 1`) - **Earth** + **River** -> **Delta**: We need a description here
* **Make Estuary** (`1 + 1 -> 1`) - **Water** + **Delta** -> **Estuary**: We need a description here
* **Make Fire Swamp** (`1 + 1 -> 1`) - **Fire** + **Delta** -> **Fire Swamp**: We need a description here
* **Make Riverbank** (`1 + 1 -> 1`) - **Wind** + **Delta** -> **Riverbank**: We need a description here
* **Make Ravine** (`1 + 1 -> 1`) - **Earth** + **Erosion** -> **Ravine**: We need a description here
* **Make Gorge** (`1 + 1 -> 1`) - **Water** + **Ravine** -> **Gorge**: We need a description here
* **Make Charred Ravine** (`1 + 1 -> 1`) - **Fire** + **Ravine** -> **Charred Ravine**: We need a description here
* **Make Echo** (`1 + 1 -> 1`) - **Wind** + **Ravine** -> **Echo**: We need a description here
* **Make Cave** (`1 + 1 -> 1`) - **Earth** + **Echo** -> **Cave**: We need a description here
* **Make Underground Lake** (`1 + 1 -> 1`) - **Water** + **Cave** -> **Underground Lake**: We need a description here
* **Make Lava Cave** (`1 + 1 -> 1`) - **Fire** + **Cave** -> **Lava Cave**: We need a description here
* **Make Whispering Cave** (`1 + 1 -> 1`) - **Wind** + **Cave** -> **Whispering Cave**: We need a description here
* **Make Subterranean Pool** (`1 + 1 -> 1`) - **Earth** + **Underground Lake** -> **Subterranean Pool**: We need a description here
* **Make Spring** (`1 + 1 -> 1`) - **Water** + **Subterranean Pool** -> **Spring**: We need a description here
* **Make Hot Spring** (`1 + 1 -> 1`) - **Fire** + **Subterranean Pool** -> **Hot Spring**: We need a description here
* **Make Grotto** (`1 + 1 -> 1`) - **Wind** + **Subterranean Pool** -> **Grotto**: We need a description here
* **Make Fountain** (`1 + 1 -> 1`) - **Water** + **Spring** -> **Fountain**: We need a description here
* **Make Steam Vent** (`1 + 1 -> 1`) - **Fire** + **Spring** -> **Steam Vent**: We need a description here
* **Make Cool Breeze** (`1 + 1 -> 1`) - **Wind** + **Spring** -> **Cool Breeze**: We need a description here
* **Make Monument** (`1 + 1 -> 1`) - **Earth** + **Fountain** -> **Monument**: We need a description here
* **Make Waterfall** (`1 + 1 -> 1`) - **Water** + **Monument** -> **Waterfall**: We need a description here
* **Make Eternal Flame** (`1 + 1 -> 1`) - **Fire** + **Monument** -> **Eternal Flame**: We need a description here
* **Make Pillar Of Wind** (`1 + 1 -> 1`) - **Wind** + **Monument** -> **Pillar Of Wind**: We need a description here
* **Make Stream** (`1 + 1 -> 1`) - **Water** + **River** -> **Stream**: We need a description here
* **Make Zephyr** (`1 + 1 -> 1`) - **Wind** + **River** -> **Zephyr**: We need a description here
* **Make Creek** (`1 + 1 -> 1`) - **Earth** + **Stream** -> **Creek**: We need a description here
* **Make Brook** (`1 + 1 -> 1`) - **Water** + **Creek** -> **Brook**: We need a description here
* **Make Whisper** (`1 + 1 -> 1`) - **Wind** + **Creek** -> **Whisper**: We need a description here
* **Make Rivulet** (`1 + 1 -> 1`) - **Earth** + **Brook** -> **Rivulet**: We need a description here
* **Make Tributary** (`1 + 1 -> 1`) - **Water** + **Rivulet** -> **Tributary**: We need a description here
* **Make Murmur** (`1 + 1 -> 1`) - **Wind** + **Rivulet** -> **Murmur**: We need a description here
* **Make Watershed** (`1 + 1 -> 1`) - **Earth** + **Tributary** -> **Watershed**: We need a description here
* **Make Aquifer** (`1 + 1 -> 1`) - **Water** + **Watershed** -> **Aquifer**: We need a description here
* **Make Parched Earth** (`1 + 1 -> 1`) - **Fire** + **Watershed** -> **Parched Earth**: We need a description here
* **Make Fresh Breeze** (`1 + 1 -> 1`) - **Wind** + **Watershed** -> **Fresh Breeze**: We need a description here
* **Make Groundwater** (`1 + 1 -> 1`) - **Earth** + **Aquifer** -> **Groundwater**: We need a description here
* **Make Reservoir** (`1 + 1 -> 1`) - **Water** + **Groundwater** -> **Reservoir**: We need a description here
* **Make Geothermal Spring** (`1 + 1 -> 1`) - **Fire** + **Groundwater** -> **Geothermal Spring**: We need a description here
* **Make Artesian Well** (`1 + 1 -> 1`) - **Wind** + **Groundwater** -> **Artesian Well**: We need a description here
* **Make Basin** (`1 + 1 -> 1`) - **Earth** + **Reservoir** -> **Basin**: We need a description here
* **Make Lake** (`1 + 1 -> 1`) - **Water** + **Basin** -> **Lake**: We need a description here
* **Make Dry Basin** (`1 + 1 -> 1`) - **Fire** + **Basin** -> **Dry Basin**: We need a description here
* **Make Depression** (`1 + 1 -> 1`) - **Wind** + **Basin** -> **Depression**: We need a description here
* **Make Island** (`1 + 1 -> 1`) - **Earth** + **Lake** -> **Island**: We need a description here
* **Make Lagoon** (`1 + 1 -> 1`) - **Water** + **Lake** -> **Lagoon**: We need a description here
* **Make Wave** (`1 + 1 -> 1`) - **Wind** + **Lake** -> **Wave**: We need a description here
* **Make Reef** (`1 + 1 -> 1`) - **Earth** + **Lagoon** -> **Reef**: We need a description here
* **Make Coral** (`1 + 1 -> 1`) - **Water** + **Reef** -> **Coral**: We need a description here
* **Make Whirl** (`1 + 1 -> 1`) - **Wind** + **Reef** -> **Whirl**: We need a description here
* **Make Limestone** (`1 + 1 -> 1`) - **Earth** + **Coral** -> **Limestone**: We need a description here
* **Make Karst** (`1 + 1 -> 1`) - **Water** + **Limestone** -> **Karst**: We need a description here
* **Make Quicklime** (`1 + 1 -> 1`) - **Fire** + **Limestone** -> **Quicklime**: We need a description here
* **Make Blowhole** (`1 + 1 -> 1`) - **Wind** + **Karst** -> **Blowhole**: We need a description here
