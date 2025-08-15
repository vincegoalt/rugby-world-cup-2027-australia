import { City } from '../types';

export const cities: City[] = [
  {
    id: 'sydney',
    name: 'Sydney',
    slug: 'sydney',
    description: 'Australia\'s largest city and global harbor metropolis, home to iconic landmarks like the Sydney Opera House and Harbour Bridge.',
    detailed_description: 'Sydney is Australia\'s most populous city and the country\'s economic powerhouse, built around one of the world\'s most beautiful harbors. The city seamlessly blends its rich colonial heritage with modern cosmopolitan life, offering world-class dining, shopping, and cultural experiences. From the iconic Opera House and Harbour Bridge to pristine beaches and hidden harbor coves, Sydney provides an unparalleled backdrop for the Rugby World Cup 2027. The city\'s passionate sports culture and world-class venues make it the perfect stage for rugby\'s greatest tournament.',
    attractions: [
      {
        name: 'Sydney Opera House',
        description: 'Iconic architectural masterpiece and UNESCO World Heritage site hosting world-class performances',
        category: 'landmark'
      },
      {
        name: 'Sydney Harbour Bridge',
        description: 'Famous steel arch bridge offering spectacular harbor views and bridge climb experiences',
        category: 'landmark'
      },
      {
        name: 'Bondi Beach',
        description: 'World-famous surf beach with golden sand, coastal walks, and vibrant beach culture',
        category: 'beach'
      },
      {
        name: 'Royal Botanic Gardens',
        description: 'Historic 30-hectare gardens showcasing native and exotic plants with harbor views',
        category: 'nature'
      },
      {
        name: 'Darling Harbour',
        description: 'Entertainment precinct with restaurants, shops, museums, and Sydney\'s main convention center',
        category: 'entertainment'
      },
      {
        name: 'The Rocks',
        description: 'Historic area with cobblestone streets, weekend markets, pubs, and colonial architecture',
        category: 'cultural'
      },
      {
        name: 'Circular Quay',
        description: 'Transport hub and tourist precinct with ferries, restaurants, and harbor views',
        category: 'landmark'
      },
      {
        name: 'Manly Beach',
        description: 'Northern beaches paradise accessible by scenic ferry with great surf and pine-lined promenade',
        category: 'beach'
      },
      {
        name: 'Taronga Zoo',
        description: 'World-class zoo with native Australian animals and spectacular harbor views',
        category: 'entertainment'
      },
      {
        name: 'Blue Mountains',
        description: 'UNESCO World Heritage national park with dramatic cliffs, bushwalking, and scenic railways',
        category: 'nature'
      },
      {
        name: 'Chinatown',
        description: 'Vibrant precinct with authentic Asian cuisine, markets, and cultural experiences',
        category: 'cultural'
      },
      {
        name: 'Sydney Fish Market',
        description: 'Southern Hemisphere\'s largest fish market with fresh seafood and cooking schools',
        category: 'food'
      }
    ],
    climate: {
      season: 'Spring (October-November)',
      temperature: {
        avg_high: 23,
        avg_low: 16
      },
      rainfall: 'Moderate (65mm average)',
      description: 'Perfect spring weather with mild temperatures, low humidity, and minimal rainfall. Ideal conditions for outdoor activities and rugby matches with comfortable temperatures for both players and spectators.'
    },
    transport: {
      airport: {
        name: 'Sydney Kingsford Smith Airport',
        code: 'SYD',
        distance: '8km from CBD',
        transport_to_city: 'Airport Link train (13 minutes), taxi (20-30 minutes), or bus services'
      },
      public_transport: ['Trains', 'Buses', 'Ferries', 'Light Rail', 'Metro'],
      getting_around: ['Opal Card for all public transport', 'Uber and taxi services', 'Bike share schemes', 'Walking - compact city center', 'Harbor ferries for scenic transport']
    },
    accommodation_areas: ['Circular Quay/The Rocks - harbor views and attractions', 'Darling Harbour - convention center proximity', 'Bondi Beach - beachside lifestyle', 'Surry Hills - trendy dining and nightlife', 'Paddington - boutique shopping and heritage architecture', 'Newtown - alternative culture and music venues'],
    local_cuisine: {
      specialties: ['Fresh Sydney Rock Oysters', 'Barramundi', 'Meat pies', 'Tim Tams', 'Flat white coffee', 'Pavlova'],
      dining_districts: ['Circular Quay - harbor dining', 'Surry Hills - trendy restaurants', 'Chinatown - authentic Asian cuisine', 'Barangaroo - upscale waterfront dining', 'Newtown - multicultural food scene'],
      description: 'Sydney\'s dining scene reflects its multicultural population with everything from harbourside fine dining to authentic street food. The city is famous for its fresh seafood, particularly Sydney Rock Oysters, and has embraced coffee culture with world-class baristas throughout the city.'
    },
    rugby_culture: {
      history: 'Sydney is the heartland of Australian rugby, home to the first rugby match in Australia in 1864. The city has hosted numerous international matches and is headquarters for Rugby Australia.',
      venues: ['Allianz Stadium - 42,500 capacity', 'Stadium Australia - 83,500 capacity for finals', 'Leichhardt Oval - historic suburban venue'],
      fan_culture: 'Passionate rugby league and union supporters with strong pub culture around match days. The city comes alive during major tournaments with fan zones and outdoor screenings.'
    },
    fan_zones: ['Darling Harbour Fan Zone', 'The Rocks outdoor screenings', 'Hyde Park Barracks precinct', 'Circular Quay waterfront'],
    entertainment_districts: ['The Rocks - historic pubs and live music', 'Darling Harbour - family entertainment', 'Kings Cross - nightlife', 'Oxford Street - bars and clubs', 'Circular Quay - harbor-side dining']
  },
  {
    id: 'melbourne',
    name: 'Melbourne',
    slug: 'melbourne',
    description: 'Australia\'s cultural capital known for its coffee culture, street art, and vibrant sports scene.',
    detailed_description: 'Melbourne is Australia\'s cultural and sporting capital, renowned for its vibrant arts scene, world-class coffee culture, and passionate sports fans. The city\'s famous laneways are filled with street art, boutique bars, and hidden restaurants, while its extensive tram network makes exploration easy. Known as the host of major sporting events including the Australian Open and Melbourne Cup, the city has an infectious energy that makes every event feel special. Melbourne\'s sophisticated food and wine culture, combined with its unpredictable weather that adds character, creates an atmosphere unlike anywhere else in Australia.',
    attractions: [
      {
        name: 'Federation Square',
        description: 'Cultural precinct with museums, galleries, restaurants, and events in the heart of Melbourne',
        category: 'cultural'
      },
      {
        name: 'Royal Botanic Gardens Melbourne',
        description: '38-hectare oasis showcasing diverse plant collections and scenic landscapes',
        category: 'nature'
      },
      {
        name: 'Queen Victoria Market',
        description: 'Historic market with fresh produce, gourmet foods, and unique souvenirs since 1878',
        category: 'shopping'
      },
      {
        name: 'St. Kilda Beach',
        description: 'Popular bayside suburb with beach, pier, penguins, and vibrant nightlife',
        category: 'beach'
      },
      {
        name: 'Eureka Skydeck',
        description: 'Southern Hemisphere\'s highest public observation deck with 360-degree city views',
        category: 'landmark'
      },
      {
        name: 'Melbourne Cricket Ground (MCG)',
        description: 'Iconic stadium and sports museum, home of Australian Rules Football',
        category: 'landmark'
      },
      {
        name: 'Yarra River',
        description: 'Scenic river with walking paths, boat cruises, and riverside dining precincts',
        category: 'nature'
      },
      {
        name: 'Brighton Beach Boxes',
        description: 'Colorful Victorian bathing boxes, iconic Melbourne beach landmark',
        category: 'landmark'
      },
      {
        name: 'Laneways',
        description: 'Hidden streets filled with street art, boutique bars, and coffee shops',
        category: 'cultural'
      },
      {
        name: 'Flinders Street Station',
        description: 'Historic railway station and Melbourne\'s most recognizable landmark',
        category: 'landmark'
      },
      {
        name: 'Great Ocean Road',
        description: 'Scenic coastal drive starting from Melbourne featuring the Twelve Apostles',
        category: 'nature'
      },
      {
        name: 'Crown Casino',
        description: 'Entertainment complex with gaming, dining, shopping, and accommodation',
        category: 'entertainment'
      }
    ],
    climate: {
      season: 'Spring (October-November)',
      temperature: {
        avg_high: 20,
        avg_low: 11
      },
      rainfall: 'Variable (58mm average)',
      description: 'Melbourne\'s famous "four seasons in one day" weather brings mild spring temperatures with occasional showers. Pack layers as temperatures can fluctuate throughout the day. Generally pleasant conditions for rugby with cool mornings warming to comfortable afternoons.'
    },
    transport: {
      airport: {
        name: 'Melbourne Airport (Tullamarine)',
        code: 'MEL',
        distance: '23km from CBD',
        transport_to_city: 'SkyBus (20 minutes), taxi (30-45 minutes), or ride-share services'
      },
      public_transport: ['Trams', 'Trains', 'Buses', 'V/Line regional services'],
      getting_around: ['Myki Card for all public transport', 'Free City Circle Tram (Route 35)', 'Extensive tram network covering inner city', 'Melbourne Bike Share', 'Walking - compact CBD with grid layout']
    },
    accommodation_areas: ['CBD - central location near venues', 'Southbank - arts precinct and Crown Casino', 'St. Kilda - beachside with nightlife', 'Fitzroy - trendy inner north area', 'South Yarra - upscale shopping and dining', 'Docklands - modern waterfront development'],
    local_cuisine: {
      specialties: ['World-class coffee', 'Modern Australian cuisine', 'Dim sum in Little Bourke Street', 'Greek food in Oakleigh', 'Italian in Carlton', 'Vietnamese in Richmond'],
      dining_districts: ['Laneways - hidden bars and cafes', 'Southbank - riverside fine dining', 'Little Bourke Street - Chinatown', 'Chapel Street - trendy restaurants', 'Carlton - Italian quarter'],
      description: 'Melbourne is Australia\'s undisputed food capital with a sophisticated dining scene that rivals any global city. The city\'s multicultural population has created distinct food precincts, while the laneway culture has spawned countless hidden bars and cafes.'
    },
    rugby_culture: {
      history: 'While traditionally an AFL city, Melbourne has a growing rugby presence with the Melbourne Rebels in Super Rugby. The city has hosted major rugby events and has passionate supporters.',
      venues: ['AAMI Park - 30,050 capacity rectangular stadium', 'Marvel Stadium - 53,359 capacity with roof', 'MCG - available for major finals'],
      fan_culture: 'Sports-mad city with knowledgeable fans who appreciate quality rugby. Strong pub culture with numerous sports bars throughout the city, particularly in the CBD and inner suburbs.'
    },
    fan_zones: ['Federation Square public screens', 'Birrarung Marr riverside area', 'Southbank entertainment precinct', 'Crown Casino outdoor areas'],
    entertainment_districts: ['Laneways - boutique bars and live music', 'Southbank - riverside dining and entertainment', 'Chapel Street - nightlife strip', 'King Street - club precinct', 'Fitzroy - alternative venues']
  },
  {
    id: 'brisbane',
    name: 'Brisbane',
    slug: 'brisbane',
    description: 'Queensland\'s capital known for its subtropical climate, river lifestyle, and proximity to world-class beaches.',
    detailed_description: 'Brisbane is Queensland\'s sunny capital, a modern riverside city that perfectly balances urban sophistication with outdoor living. The city\'s subtropical climate makes it ideal for year-round outdoor activities, while the Brisbane River winds through the heart of the city, creating scenic parklands and entertainment precincts. Brisbane\'s relaxed atmosphere and friendly locals embody the quintessential Australian lifestyle. With world-class beaches just an hour away and the hinterland\'s rainforests equally accessible, Brisbane offers visitors the perfect base to experience both urban culture and natural beauty.',
    attractions: [
      {
        name: 'South Bank Parklands',
        description: '17-hectare cultural and recreational precinct with man-made beach, gardens, and entertainment',
        category: 'nature'
      },
      {
        name: 'Story Bridge',
        description: 'Heritage-listed cantilever bridge offering adventure climbs and spectacular city views',
        category: 'landmark'
      },
      {
        name: 'Queensland Museum & Science Centre',
        description: 'Natural history museum with dinosaur exhibits, planetarium, and interactive displays',
        category: 'museum'
      },
      {
        name: 'City Botanic Gardens',
        description: 'Historic 20-hectare gardens along Brisbane River featuring exotic and native plants',
        category: 'nature'
      },
      {
        name: 'Kangaroo Point Cliffs',
        description: 'Rock climbing destination with panoramic city views and riverside parklands',
        category: 'nature'
      },
      {
        name: 'Mount Coot-tha',
        description: 'Lookout point with panoramic city and mountain views, plus botanical gardens',
        category: 'nature'
      },
      {
        name: 'Fortitude Valley',
        description: 'Entertainment district with live music venues, nightclubs, and diverse dining',
        category: 'entertainment'
      },
      {
        name: 'Brisbane River',
        description: 'Scenic river perfect for cruises, kayaking, and riverside walks and cycling',
        category: 'nature'
      },
      {
        name: 'Lone Pine Koala Sanctuary',
        description: 'World\'s first and largest koala sanctuary with native Australian wildlife',
        category: 'entertainment'
      },
      {
        name: 'Streets Beach',
        description: 'Man-made lagoon and beach in South Bank with swimming and picnic areas',
        category: 'beach'
      },
      {
        name: 'Brisbane Powerhouse',
        description: 'Arts center in converted power station featuring contemporary performances',
        category: 'cultural'
      },
      {
        name: 'Moreton Island',
        description: 'Sand island paradise 75 minutes from city with world-class sand dunes and snorkeling',
        category: 'nature'
      }
    ],
    climate: {
      season: 'Spring (October-November)',
      temperature: {
        avg_high: 26,
        avg_low: 16
      },
      rainfall: 'Low (72mm average)',
      description: 'Ideal subtropical spring weather with warm, sunny days and mild nights. Low humidity and minimal rainfall create perfect conditions for outdoor rugby viewing. Expect clear skies and comfortable temperatures for both day and evening matches.'
    },
    transport: {
      airport: {
        name: 'Brisbane Airport',
        code: 'BNE',
        distance: '15km from CBD',
        transport_to_city: 'Airtrain (22 minutes), taxi (25-30 minutes), or bus services'
      },
      public_transport: ['Buses', 'Trains', 'Ferries', 'Light Rail (Gold Coast connection)'],
      getting_around: ['Go Card for all public transport', 'CityCycle bike share', 'River ferries for scenic travel', 'Free Loop bus in CBD', 'Walking-friendly city center with extensive riverfront paths']
    },
    accommodation_areas: ['CBD - central to venues and attractions', 'South Bank - cultural precinct', 'Kangaroo Point - river views', 'Fortitude Valley - nightlife district', 'New Farm - trendy riverside suburb', 'Spring Hill - heritage area near CBD'],
    local_cuisine: {
      specialties: ['Moreton Bay Bugs', 'Mud crab', 'Tropical fruits', 'XXXX beer', 'Lamingtons', 'Queensland prawns'],
      dining_districts: ['South Bank - riverside dining', 'Fortitude Valley - diverse cuisines', 'West End - multicultural food scene', 'Eagle Street Pier - upscale restaurants', 'James Street - boutique dining'],
      description: 'Brisbane\'s dining scene celebrates Queensland\'s abundant seafood and tropical produce. The city\'s outdoor dining culture thrives year-round, with riverside restaurants and al fresco cafes taking advantage of the subtropical climate.'
    },
    rugby_culture: {
      history: 'Rugby league heartland and home to the Brisbane Broncos. The city has a strong rugby union presence with Queensland Reds and hosts major State of Origin matches at Suncorp Stadium.',
      venues: ['Suncorp Stadium - 52,500 capacity, premier rectangular venue', 'Ballymore Stadium - historic rugby union ground'],
      fan_culture: 'Passionate rugby fans with strong State of Origin culture. The city embraces outdoor viewing with numerous beer gardens and sports bars. Suncorp Stadium creates an electric atmosphere for major matches.'
    },
    fan_zones: ['South Bank cultural forecourt', 'Queen Street Mall public areas', 'King George Square', 'New Farm Powerhouse precinct'],
    entertainment_districts: ['Fortitude Valley - live music and nightclubs', 'South Bank - family-friendly entertainment', 'Eagle Street Pier - upscale bars', 'West End - alternative culture', 'Caxton Street - sports bars and pubs']
  },
  {
    id: 'perth',
    name: 'Perth',
    slug: 'perth',
    description: 'Western Australia\'s capital city, famous for its beautiful beaches, Swan River, and proximity to unique wildlife.',
    detailed_description: 'Perth is one of the world\'s most isolated major cities, yet this remoteness has created a unique and vibrant culture. Set on the banks of the Swan River with the Indian Ocean to the west, Perth offers pristine beaches, extensive parklands, and a relaxed outdoor lifestyle. The city punches above its weight in terms of food and wine, with nearby regions producing world-class wines. Perth\'s friendly locals, known for their laid-back attitude, combined with over 300 days of sunshine annually, create an atmosphere that\'s both sophisticated and relaxed. The nearby Rottnest Island and its famous quokkas add to the city\'s unique charm.',
    attractions: [
      {
        name: 'Kings Park and Botanic Garden',
        description: 'One of the world\'s largest inner-city parks with native gardens and city views',
        category: 'nature'
      },
      {
        name: 'Cottesloe Beach',
        description: 'Iconic white sand beach perfect for swimming, surfing, and sunset viewing',
        category: 'beach'
      },
      {
        name: 'Swan River',
        description: 'Scenic river perfect for boating, swimming, and riverside picnics',
        category: 'nature'
      },
      {
        name: 'Fremantle',
        description: 'Historic port city with markets, street art, craft beer, and maritime heritage',
        category: 'cultural'
      },
      {
        name: 'Rottnest Island',
        description: 'Paradise island home to quokkas, pristine beaches, and crystal-clear waters',
        category: 'nature'
      },
      {
        name: 'Perth Mint',
        description: 'Historic mint with gold exhibitions, coin production, and precious metal displays',
        category: 'museum'
      },
      {
        name: 'Elizabeth Quay',
        description: 'Waterfront precinct with restaurants, bars, public art, and swan river access',
        category: 'entertainment'
      },
      {
        name: 'Scarborough Beach',
        description: 'Popular beach with surf breaks, beachfront dining, and recreational facilities',
        category: 'beach'
      },
      {
        name: 'Perth Zoo',
        description: 'Conservation-focused zoo featuring Australian and exotic animals in natural settings',
        category: 'entertainment'
      },
      {
        name: 'Caversham Wildlife Park',
        description: 'Interactive wildlife park specializing in native Australian animals',
        category: 'entertainment'
      },
      {
        name: 'Pinnacles Desert',
        description: 'Unique limestone formations in Nambung National Park, 2 hours from Perth',
        category: 'nature'
      },
      {
        name: 'Swan Valley',
        description: 'Wine region with boutique wineries, breweries, and gourmet food producers',
        category: 'food'
      }
    ],
    climate: {
      season: 'Spring (October-November)',
      temperature: {
        avg_high: 23,
        avg_low: 12
      },
      rainfall: 'Low (20mm average)',
      description: 'Perfect spring weather with warm, sunny days and cool nights. Minimal rainfall and low humidity create ideal conditions for outdoor activities. The famous "Fremantle Doctor" afternoon sea breeze provides natural cooling on warmer days.'
    },
    transport: {
      airport: {
        name: 'Perth Airport',
        code: 'PER',
        distance: '12km from CBD',
        transport_to_city: 'Airport Connect bus, taxi (20-25 minutes), or ride-share services'
      },
      public_transport: ['Buses', 'Trains', 'Free CAT buses in city zones'],
      getting_around: ['SmartRider card for public transport', 'Free CAT bus routes in CBD and Fremantle', 'Extensive bike paths along Swan River', 'Ferry services to Rottnest Island', 'Compact walkable city center']
    },
    accommodation_areas: ['Perth CBD - central location', 'Northbridge - nightlife and cultural district', 'Cottesloe - beachside luxury', 'Fremantle - historic port atmosphere', 'Subiaco - trendy inner suburb', 'Kings Park area - parkland proximity'],
    local_cuisine: {
      specialties: ['Western Australian wines', 'Fresh seafood including Western Rock Lobster', 'Marron (freshwater crayfish)', 'Local craft beer', 'Kangaroo Island lamb', 'Native Australian bush foods'],
      dining_districts: ['Northbridge - diverse international cuisine', 'Fremantle - waterfront dining', 'Leederville - trendy cafes and restaurants', 'Mount Lawley - boutique dining', 'Swan Valley - winery restaurants'],
      description: 'Perth\'s isolation has fostered creativity in its food scene, with chefs utilizing exceptional local produce including pristine seafood, premium wines from nearby regions, and innovative use of native ingredients.'
    },
    rugby_culture: {
      history: 'Growing rugby presence with the Western Force in Super Rugby. Perth has hosted Wallabies matches and is building a strong rugby union following in traditionally AFL-dominated Western Australia.',
      venues: ['HBF Park - 20,500 capacity, home of Western Force', 'Optus Stadium - 60,000 capacity for major matches'],
      fan_culture: 'Developing rugby culture with passionate supporters. The city\'s sports fans are known for their loyalty and enthusiasm. Strong pub culture with numerous venues showing rugby matches.'
    },
    fan_zones: ['Elizabeth Quay waterfront', 'Kings Park outdoor areas', 'Northbridge Piazza', 'Fremantle Esplanade'],
    entertainment_districts: ['Northbridge - nightlife hub with bars and clubs', 'Fremantle - historic pubs and live music', 'Leederville - alternative music venues', 'Mount Lawley - boutique bars', 'Elizabeth Quay - waterfront dining']
  },
  {
    id: 'adelaide',
    name: 'Adelaide',
    slug: 'adelaide',
    description: 'South Australia\'s capital, renowned for its wine regions, festivals, and well-planned city layout.',
    detailed_description: 'Adelaide is Australia\'s festival city and the heart of the country\'s wine industry, surrounded by some of the world\'s most famous wine regions including the Barossa Valley and Adelaide Hills. The city\'s unique planned layout features wide boulevards and extensive parklands that circle the CBD, creating a green belt that sets it apart from other Australian capitals. Adelaide\'s sophisticated food and wine culture, combined with its manageable size and friendly atmosphere, creates an intimate yet cosmopolitan experience. The city\'s strong arts scene and numerous festivals throughout the year contribute to its reputation as Australia\'s cultural hub.',
    attractions: [
      {
        name: 'Adelaide Central Market',
        description: 'Vibrant market with fresh produce, gourmet foods, and multicultural specialties since 1869',
        category: 'food'
      },
      {
        name: 'Adelaide Botanic Garden',
        description: 'Historic 51-hectare garden with rare plants, conservatories, and peaceful walking paths',
        category: 'nature'
      },
      {
        name: 'North Terrace',
        description: 'Cultural boulevard with museums, galleries, university, and historic architecture',
        category: 'cultural'
      },
      {
        name: 'Glenelg Beach',
        description: 'Popular seaside suburb with historic jetty, beach activities, and dining options',
        category: 'beach'
      },
      {
        name: 'Adelaide Hills',
        description: 'Scenic region with wineries, historic towns, and cool climate attractions',
        category: 'nature'
      },
      {
        name: 'Barossa Valley',
        description: 'World-renowned wine region with historic cellar doors and gourmet experiences',
        category: 'food'
      },
      {
        name: 'Rundle Mall',
        description: 'Premier shopping precinct with retail stores, cafes, and street entertainment',
        category: 'shopping'
      },
      {
        name: 'Adelaide Zoo',
        description: 'Conservation-focused zoo home to giant pandas and diverse wildlife',
        category: 'entertainment'
      },
      {
        name: 'Haigh\'s Chocolates',
        description: 'Australia\'s oldest chocolate manufacturer with factory tours and tastings',
        category: 'food'
      },
      {
        name: 'Mount Lofty Summit',
        description: 'Highest peak in Adelaide Hills offering panoramic city and coastal views',
        category: 'nature'
      },
      {
        name: 'Art Gallery of South Australia',
        description: 'Premier art gallery with extensive Australian and international collections',
        category: 'cultural'
      },
      {
        name: 'Kangaroo Island',
        description: 'Wildlife sanctuary island with pristine wilderness, native animals, and artisan producers',
        category: 'nature'
      }
    ],
    climate: {
      season: 'Spring (October-November)',
      temperature: {
        avg_high: 22,
        avg_low: 11
      },
      rainfall: 'Low (26mm average)',
      description: 'Pleasant Mediterranean spring climate with mild temperatures and minimal rainfall. Comfortable conditions for outdoor rugby viewing with cool mornings warming to perfect afternoon temperatures. Light clothing recommended with layers for temperature variation.'
    },
    transport: {
      airport: {
        name: 'Adelaide Airport',
        code: 'ADL',
        distance: '7km from CBD',
        transport_to_city: 'JetBus (15 minutes), taxi (15-20 minutes), or ride-share services'
      },
      public_transport: ['Buses', 'Trams', 'Trains', 'O-Bahn guided busway'],
      getting_around: ['MetroCard for all public transport', 'Free City Connector buses', 'Glenelg Tram to beach', 'Extensive bike paths and free city bikes', 'Compact walkable city center surrounded by parklands']
    },
    accommodation_areas: ['Adelaide CBD - central location with parkland views', 'North Adelaide - heritage charm and proximity to venues', 'Glenelg - beachside accommodation', 'Adelaide Hills - boutique retreats among wineries', 'Norwood - trendy inner suburb', 'Port Adelaide - waterfront area with character'],
    local_cuisine: {
      specialties: ['World-class wines from Barossa, Clare Valley, McLaren Vale', 'Haigh\'s chocolates', 'Coopers beer', 'Fresh seafood from Gulf St Vincent', 'Kangaroo Island produce', 'Pie floater (unique Adelaide dish)'],
      dining_districts: ['Adelaide Central Market precinct', 'Rundle Street East - trendy restaurants', 'Gouger Street - multicultural dining', 'King William Road - upscale dining', 'Peel Street - small bars and eateries'],
      description: 'Adelaide\'s proximity to world-class wine regions and fresh produce creates exceptional dining experiences. The city\'s small bar scene and Central Market provide diverse culinary adventures from fine dining to casual eats.'
    },
    rugby_culture: {
      history: 'Traditional rugby union state with strong schools rugby programs. Adelaide has hosted Wallabies matches and has passionate rugby supporters despite being in AFL heartland.',
      venues: ['Adelaide Oval - 53,500 capacity, historic ground with modern facilities', 'Hindmarsh Stadium - 16,500 capacity for smaller matches'],
      fan_culture: 'Knowledgeable rugby supporters with strong club traditions. The city\'s intimate size creates close connections between fans and players. Adelaide Oval provides one of the world\'s most picturesque rugby venues.'
    },
    fan_zones: ['Adelaide Oval precinct', 'Rundle Mall public spaces', 'Elder Park by Adelaide Oval', 'Victoria Square central plaza'],
    entertainment_districts: ['Rundle Street - bars and live music', 'Hindley Street - nightclub strip', 'Peel Street - small bars', 'King William Road - upscale venues', 'Port Adelaide - waterfront entertainment']
  },
  {
    id: 'newcastle',
    name: 'Newcastle',
    slug: 'newcastle',
    description: 'NSW\'s second-largest city, known for its beautiful beaches, industrial heritage, and emerging cultural scene.',
    detailed_description: 'Newcastle is a city in transformation, evolving from its industrial past as a steel and coal center into a vibrant cultural destination. Located just two hours north of Sydney, Newcastle offers pristine beaches, a thriving arts scene, and an increasingly sophisticated food and beverage culture. The city\'s compact size and beachfront location create an intimate yet cosmopolitan atmosphere. Newcastle\'s strong working-class heritage has fostered a genuine, unpretentious culture where locals are exceptionally welcoming to visitors. The nearby Hunter Valley wine region and stunning coastline add to the city\'s appeal as a tourism destination.',
    attractions: [
      {
        name: 'Newcastle Beach',
        description: 'Pristine city beach with excellent surf, ocean baths, and beachfront promenade',
        category: 'beach'
      },
      {
        name: 'Nobbys Head',
        description: 'Historic headland with lighthouse, fort, and spectacular ocean and harbor views',
        category: 'landmark'
      },
      {
        name: 'Fort Scratchley',
        description: 'Historic coastal defense fort with tunnels, museum, and panoramic harbor views',
        category: 'museum'
      },
      {
        name: 'Newcastle Memorial Walk',
        description: 'Clifftop walking track with stunning ocean views and historical significance',
        category: 'nature'
      },
      {
        name: 'Blackbutt Reserve',
        description: '182-hectare nature reserve with native wildlife, walking trails, and picnic areas',
        category: 'nature'
      },
      {
        name: 'King Edward Park',
        description: 'Historic park with formal gardens, ocean views, and recreational facilities',
        category: 'nature'
      },
      {
        name: 'Hunter Valley',
        description: 'Australia\'s oldest wine region with over 120 wineries and gourmet experiences',
        category: 'food'
      },
      {
        name: 'Newcastle Museum',
        description: 'Social history museum showcasing the city\'s industrial heritage and culture',
        category: 'museum'
      },
      {
        name: 'Christ Church Cathedral',
        description: 'Gothic Revival cathedral with stunning architecture and historical significance',
        category: 'cultural'
      },
      {
        name: 'Merewether Beach',
        description: 'Popular surf beach with ocean baths and beachfront dining options',
        category: 'beach'
      },
      {
        name: 'Newcastle Art Gallery',
        description: 'Regional art gallery with contemporary and historical Australian artworks',
        category: 'cultural'
      },
      {
        name: 'Stockton Sand Dunes',
        description: 'Largest moving sand dunes in Southern Hemisphere, perfect for sandboarding',
        category: 'nature'
      }
    ],
    climate: {
      season: 'Spring (October-November)',
      temperature: {
        avg_high: 23,
        avg_low: 14
      },
      rainfall: 'Moderate (67mm average)',
      description: 'Pleasant spring climate with mild temperatures and sea breezes. Perfect conditions for beach activities and outdoor rugby viewing. The coastal location moderates temperatures, creating comfortable conditions for both players and spectators.'
    },
    transport: {
      airport: {
        name: 'Newcastle Airport (Williamtown)',
        code: 'NTL',
        distance: '25km from city center',
        transport_to_city: 'Shuttle bus, taxi (25-30 minutes), or rental car services'
      },
      public_transport: ['Buses', 'Light Rail', 'Ferry services'],
      getting_around: ['MyMulti card for public transport', 'Light Rail connecting city to beach', 'NBN Co Bike Share', 'Compact walkable city center', 'Ferry across Hunter River']
    },
    accommodation_areas: ['Newcastle CBD - central to venues and attractions', 'Newcastle Beach - beachfront location', 'The Hill - historic area with harbor views', 'Merewether - popular beach suburb', 'Hunter Valley - wine region retreats', 'Stockton - across harbor with beach access'],
    local_cuisine: {
      specialties: ['Fresh seafood from local waters', 'Hunter Valley wines', 'Local craft beer', 'Coal River Coffee', 'Yellowtail kingfish', 'Regional produce'],
      dining_districts: ['Darby Street - trendy cafes and restaurants', 'Honeysuckle - waterfront dining', 'Newcastle Beach - beachfront eateries', 'Hunter Street Mall - city dining', 'The Junction - local favorite dining strip'],
      description: 'Newcastle\'s food scene has flourished with innovative chefs utilizing fresh local seafood and Hunter Valley produce. The city\'s coffee culture is strong, and proximity to wine regions ensures excellent beverage pairings.'
    },
    rugby_culture: {
      history: 'Strong rugby league tradition as home of the Newcastle Knights. Growing rugby union presence with junior development programs and hosting representative matches.',
      venues: ['McDonald Jones Stadium - 33,000 capacity, home of Newcastle Knights', 'No.2 Sportsground - traditional rugby venue'],
      fan_culture: 'Passionate sports supporters with working-class rugby league heritage. Strong community support and local pub culture around match days. The city rallies behind major sporting events.'
    },
    fan_zones: ['Civic Park city center', 'Honeysuckle waterfront precinct', 'Newcastle Beach foreshore', 'King Edward Park'],
    entertainment_districts: ['Darby Street - bars and live music', 'Hunter Street - nightlife strip', 'King Street - alternative venues', 'Honeysuckle - waterfront entertainment', 'The Junction - local bars and eateries']
  },
  {
    id: 'townsville',
    name: 'Townsville',
    slug: 'townsville',
    description: 'North Queensland\'s largest city, gateway to the Great Barrier Reef and Magnetic Island.',
    detailed_description: 'Townsville is tropical North Queensland\'s capital, a vibrant coastal city that serves as the gateway to some of Australia\'s most spectacular natural attractions. With the Great Barrier Reef offshore, Magnetic Island just a short ferry ride away, and the stunning Paluma Range nearby, Townsville offers access to World Heritage-listed natural wonders. The city enjoys 320 days of sunshine annually and embodies the relaxed tropical lifestyle that North Queensland is famous for. Townsville\'s multicultural population, influenced by its proximity to Asia and the Pacific, creates a unique cultural blend reflected in its food, festivals, and friendly atmosphere.',
    attractions: [
      {
        name: 'The Strand',
        description: '2.2km beachfront promenade with swimming lagoon, parks, and recreational facilities',
        category: 'beach'
      },
      {
        name: 'Magnetic Island',
        description: 'Tropical island paradise with koalas, secluded beaches, and hiking trails',
        category: 'nature'
      },
      {
        name: 'Museum of Tropical Queensland',
        description: 'Maritime archaeology museum featuring shipwrecks and tropical history',
        category: 'museum'
      },
      {
        name: 'Castle Hill',
        description: 'Iconic pink granite monolith offering panoramic city and coastal views',
        category: 'nature'
      },
      {
        name: 'Riverway',
        description: 'Entertainment precinct with lagoons, parklands, and recreational activities',
        category: 'entertainment'
      },
      {
        name: 'Pallarenda Beach',
        description: 'Local beach perfect for fishing, swimming, and enjoying tropical sunsets',
        category: 'beach'
      },
      {
        name: 'Townsville Botanic Gardens',
        description: 'Tropical gardens showcasing rainforest plants and native wildlife',
        category: 'nature'
      },
      {
        name: 'Reef HQ Great Barrier Reef Aquarium',
        description: 'World\'s largest living coral reef aquarium and marine research center',
        category: 'entertainment'
      },
      {
        name: 'Billabong Sanctuary',
        description: 'Wildlife park featuring crocodiles, koalas, and interactive animal experiences',
        category: 'entertainment'
      },
      {
        name: 'Jezzine Barracks',
        description: 'Heritage-listed military site with memorials, art installations, and harbor views',
        category: 'cultural'
      },
      {
        name: 'Great Barrier Reef',
        description: 'World Heritage coral reef system accessible by boat tours and diving expeditions',
        category: 'nature'
      },
      {
        name: 'Paluma Range',
        description: 'Tropical highland region with rainforest walks and cooler mountain climate',
        category: 'nature'
      }
    ],
    climate: {
      season: 'Dry Season (October-November)',
      temperature: {
        avg_high: 29,
        avg_low: 20
      },
      rainfall: 'Low (32mm average)',
      description: 'Perfect tropical dry season weather with warm days, comfortable nights, and minimal rainfall. Low humidity and cooling sea breezes create ideal conditions for outdoor rugby viewing. Expect clear skies and consistent weather patterns.'
    },
    transport: {
      airport: {
        name: 'Townsville Airport',
        code: 'TSV',
        distance: '5km from CBD',
        transport_to_city: 'Bus services, taxi (10-15 minutes), or ride-share options'
      },
      public_transport: ['Buses', 'Ferry to Magnetic Island'],
      getting_around: ['Sunbus for local transport', 'Magnetic Island ferry services', 'Bike hire for waterfront areas', 'Compact city center for walking', 'Great Barrier Reef tour boats']
    },
    accommodation_areas: ['Townsville CBD - central location', 'The Strand - beachfront accommodation', 'South Townsville - quiet residential area', 'Magnetic Island - tropical island getaway', 'Castle Hill area - elevated city views', 'Palmer Street - heritage precinct'],
    local_cuisine: {
      specialties: ['Fresh tropical seafood including barramundi and mud crab', 'Tropical fruits like mango and lychee', 'Asian-influenced cuisine', 'Locally brewed beer', 'Coconut-based dishes', 'Indigenous bush tucker'],
      dining_districts: ['Palmer Street - heritage dining precinct', 'The Strand - beachfront restaurants', 'Flinders Street - city dining', 'Gregory Street - local favorites', 'Magnetic Island - island dining'],
      description: 'Townsville\'s tropical location and multicultural population create a unique dining scene featuring fresh seafood, tropical produce, and Asian influences. The city\'s relaxed atmosphere extends to its casual outdoor dining culture.'
    },
    rugby_culture: {
      history: 'Home of the North Queensland Cowboys rugby league team. Growing rugby union presence with junior development and hosting of representative matches in tropical North Queensland.',
      venues: ['Queensland Country Bank Stadium - 25,000 capacity, state-of-the-art venue', '1300SMILES Stadium - former Cowboys home ground'],
      fan_culture: 'Passionate sports supporters with strong community spirit. The tropical lifestyle creates a relaxed approach to rugby viewing with outdoor venues and casual atmosphere. Strong support for visiting teams and players.'
    },
    fan_zones: ['The Strand waterfront area', 'Castle Hill base outdoor spaces', 'Riverway entertainment precinct', 'Palmer Street heritage area'],
    entertainment_districts: ['Palmer Street - heritage pubs and restaurants', 'Flinders Street East - nightlife area', 'The Strand - beachfront bars', 'Gregory Street - local entertainment', 'Magnetic Island - island nightlife']
  }
];

export const getCityById = (id: string): City | undefined => {
  return cities.find(city => city.id === id);
};

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};