// --- STANJE I VALUTE ---
let currentLang = 'sr';
const exchangeRate = 117.2; // Evro na RSD

// --- PREVODI I PODACI ZA MENI ---
const menuData = {
    sr: {
        "NAJPRODAVANIJE": [
            { name: "Piletina u sosu od pečuraka", weight: "", price: 1030, image: "Meni/Njprodavanije/6.png", desc: "" },
            { name: "Pohovani pileći štapići u susamu", weight: "", price: 960, image: "Meni/Njprodavanije/4.png", desc: "" },
            { name: "Svinjska Karađorđeva", weight: "", price: 1200, image: "Meni/Njprodavanije/2.png", desc: "" },
            { name: "Mešano meso", weight: "", price: 1950, image: "Meni/Njprodavanije/1.png", desc: "" },
            { name: "Paprika na kajmaku", weight: "", price: 650, image: "Meni/Njprodavanije/7.png", desc: "" },
            { name: "10 ćevapa na kajmaku", weight: "", price: 1090, image: "Meni/Njprodavanije/3.png", desc: "" },
            { name: "Bečka šnicla", weight: "", price: 950, image: "Meni/Njprodavanije/5.png", desc: "" },
            
        ],
        "DORUČAK (DO 14h)": [
            { name: "Tradicija mix", weight: "za 4 osobe", price: 1850, image: "Meni/DORUCAK/tradicijamix.png", desc: "" },
            { name: "Pohovane punjene paprike", weight: "", price: 730, image: "Meni/DORUCAK/pohovanepunjenepaprike.png", desc: "" },
            { name: "Paprika na kajmaku", weight: "", price: 650, image: "Meni/DORUCAK/paprikanakajmaku.png", desc: "" },
            { name: "Pohovane paprike", weight: "", price: 650, image: "Meni/DORUCAK/pohovanepaprike.png", desc: "" },
            { name: "Index sendvič", weight: "", price: 650, image: "Meni/DORUCAK/indexsendvic.png", desc: "" },
            { name: "Tradicija doručak", weight: "", price: 600, image: "Meni/DORUCAK/tradicijadorucak.png", desc: "" },
            { name: "Punjene prženice", weight: "", price: 600, image: "Meni/DORUCAK/punjeneprzenice.png", desc: "" },
            { name: "Sendvič sa pršutom i kajmakom", weight: "", price: 600, image: "Meni/DORUCAK/Sendvič sa pršutom i kajmakom.png", desc: "" },
            { name: "Uštipci", weight: "", price: 550, image: "Meni/DORUCAK/ustipci.png", desc: "" },
            { name: "Kačamak", weight: "", price: 550, image: "Meni/DORUCAK/kacamak.png", desc: "" },
            { name: "Prženice slane", weight: "", price: 540, image: "Meni/DORUCAK/przeniceslane.png", desc: "" },
            { name: "Prženice slatke", weight: "", price: 540, image: "Meni/DORUCAK/przeniceslatke.png", desc: "" },
            { name: "Jaja sa pršutom", weight: "", price: 530, image: "Meni/DORUCAK/jajasaprsutom.png", desc: "" },
            { name: "Omlet sa dodacima", weight: "", price: 530, image: "Meni/DORUCAK/omletsadodacima.png", desc: "" },
            { name: "Jaja sa slaninom", weight: "", price: 520, image: "Meni/DORUCAK/jajasaslaninom.png", desc: "" },
            { name: "Jaja sa kobasicom", weight: "", price: 520, image: "Meni/DORUCAK/jajasakobasicom.png", desc: "" },
            { name: "Jaja na oko", weight: "", price: 450, image: "Meni/DORUCAK/3jajanaoko.png", desc: "" },
            { name: "Omlet Classic", weight: "", price: 450, image: "Meni/DORUCAK/omletklasik.png", desc: "" }
        ],
        "SUPE I ČORBE": [
            { name: "Riblja čorba", weight: "", price: 400, image: "Meni/supe/1.png", desc: "" },
            { name: "Teleća čorba", weight: "", price: 350, image: "Meni/supe/2.png", desc: "" },
            { name: "Pileća supa", weight: "", price: 350, image: "Meni/supe/3.png", desc: "" }
        ],
        "PREDJELO": [
            { name: "Goveđa pršuta", weight: "", price: 600, image: "Meni/podjelo/1.png", desc: "" },
            { name: "Njeguška pršuta", weight: "", price: 500, image: "Meni/podjelo/2.png", desc: "" },
            { name: "Svinjska pršuta", weight: "", price: 400, image: "Meni/podjelo/3.png", desc: "" }
        ],
        "SIREVI": [
            { name: "Tradicija meze", weight: "", price: 1900, image: "Meni/sirevi/1.png", desc: "" },
            { name: "Grilovani miročki sir", weight: "", price: 950, image: "Meni/sirevi/2.png", desc: "" },
            { name: "Tanjir sireva", weight: "", price: 850, image: "Meni/sirevi/3.png", desc: "" },
            { name: "Parmezan", weight: "", price: 500, image: "Meni/sirevi/4.png", desc: "" },
            { name: "Gorgonzola sir", weight: "", price: 450, image: "Meni/sirevi/5.png", desc: "" },
            { name: "Sir sa belolučenom paprikom", weight: "", price: 400, image: "Meni/sirevi/7.png", desc: "" },
            { name: "Dimljeni sir", weight: "", price: 400, image: "Meni/sirevi/8.png", desc: "" },
            { name: "Crnogorski domaći sir", weight: "", price: 300, image: "Meni/sirevi/9.png", desc: "" },
            { name: "Kajmak", weight: "", price: 300, image: "Meni/sirevi/10.png", desc: "" },
            { name: "Feta sir", weight: "", price: 300, image: "Meni/sirevi/11.png", desc: "" }
        ],
        "JELA PO NARUDŽBINI": [
            { name: "Biftek 4 vrste sira", weight: "", price: 2550, image: "Meni/ponarudzbini/1.png", desc: "" },
            { name: "Biftek u sosu od bibera", weight: "", price: 2400, image: "Meni/ponarudzbini/2.png", desc: "" },
            { name: "Biftek u sosu od pečuraka", weight: "", price: 2400, image: "Meni/ponarudzbini/3.png", desc: "" },
            { name: "Medaljoni od bifteka u sosu od pečuraka", weight: "", price: 2200, image: "Meni/ponarudzbini/4.png", desc: "" },
            { name: "Svinjski medaljoni u sosu od pečuraka", weight: "", price: 1300, image: "Meni/ponarudzbini/5.png", desc: "" },
            { name: "Svinjska Karađorđeva", weight: "", price: 1200, image: "Meni/ponarudzbini/6.png", desc: "" },
            { name: "Natur šnicla", weight: "", price: 990, image: "Meni/ponarudzbini/7.png", desc: "" },
            { name: "Bečka šnicla", weight: "", price: 950, image: "Meni/ponarudzbini/8.png", desc: "" },
            { name: "Seljačko prženo meso", weight: "", price: 890, image: "Meni/ponarudzbini/9.png", desc: "" }
        ],
        "JELA SA ROŠTILJA": [
            { name: "Tradicija izazov", weight: "1.8 kg", price: 3250, image: "Meni/rostilj/1.png", desc: "" },
            { name: "Mešano meso", weight: "1 kg", price: 1950, image: "Meni/rostilj/2.png", desc: "" },
            { name: "Njeguški steak", weight: "350 g", price: 1600, image: "Meni/rostilj/3.png", desc: "" },
            { name: "Punjena vešalica", weight: "350 g", price: 1390, image: "Meni/rostilj/4.png", desc: "" },
            { name: "Dimljeni svinjski vrat", weight: "300 g", price: 1390, image: "Meni/rostilj/5.png", desc: "" },
            { name: "Dimljena vešalica", weight: "300 g", price: 1190, image: "Meni/rostilj/6.png", desc: "" },
            { name: "Svinjski vrat", weight: "300 g", price: 1190, image: "Meni/rostilj/7.png", desc: "" },
            { name: "10 ćevapa na kajmaku", weight: "400 g", price: 1090, image: "Meni/rostilj/8.png", desc: "" },
            { name: "Pljeskavica na kajmaku", weight: "350 g", price: 1090, image: "Meni/rostilj/9.png", desc: "" },
            { name: "Bela vešalica", weight: "300 g", price: 1090, image: "Meni/rostilj/10.png", desc: "" },
            { name: "10 ćevapa", weight: "400 g", price: 990, image: "Meni/rostilj/11.png", desc: "" },
            { name: "Punjena pljeskavica", weight: "350 g", price: 990, image: "Meni/rostilj/12.png", desc: "" },
            { name: "Gurmanska pljeskavica", weight: "350 g", price: 990, image: "Meni/rostilj/13.png", desc: "" },
            { name: "Pljeskavica", weight: "350 g", price: 890, image: "Meni/rostilj/14.png", desc: "" },
            { name: "Domaća dimljena kobasica", weight: "300 g", price: 890, image: "Meni/rostilj/15.png", desc: "" }
        ],
        "PIZZE": [
            { name: "Pizza Tradicija", weight: "", price: 1450, image: "Meni/pice/1.png", desc: "" },
            { name: "Pizza Mexicana", weight: "", price: 1450, image: "Meni/pice/2.png", desc: "" },
            { name: "Pizza Tuna", weight: "", price: 1290, image: "Meni/pice/3.png", desc: "" },
            { name: "Pizza Capricciosa", weight: "", price: 1150, image: "Meni/pice/4.png", desc: "" },
            { name: "Pizza Margherita", weight: "", price: 1050, image: "Meni/pice/5.png", desc: "" }
        ],
        "RIŽOTO": [
            { name: "Rižoto sa morskim plodovima", weight: "", price: 1190, image: "Meni/rizoto/1.png", desc: "" },
            { name: "Rižoto sa piletinom i paradajzom", weight: "", price: 990, image: "Meni/rizoto/1.png", desc: "" },
            { name: "Vegetarijanski rižoto", weight: "", price: 990, image: "Meni/rizoto/2.png", desc: "" }
        ],
        "PASTE": [
            { name: "Pasta sa morskim plodovima", weight: "", price: 1150, image: "Meni/paste/1.png", desc: "" },
            { name: "Pasta sa pršutom i pečurkama", weight: "", price: 900, image: "Meni/paste/2.png", desc: "" },
            { name: "Pasta Bolognese", weight: "", price: 850, image: "Meni/paste/3.png", desc: "" },
            { name: "Pasta Carbonara", weight: "", price: 850, image: "Meni/paste/4.png", desc: "" },
            { name: "Pasta sa piletinom i spanaćem", weight: "", price: 850, image: "Meni/paste/5.png", desc: "" },
            { name: "Pasta sa piletinom i broccoli", weight: "", price: 850, image: "Meni/paste/6.png", desc: "" },
            { name: "Pasta sa piletinom i pečurkama", weight: "", price: 850, image: "Meni/paste/7.png", desc: "" },
            { name: "Pasta sa piletinom i paradajzom", weight: "", price: 850, image: "Meni/paste/8.png", desc: "" }
        ],
        "PILETINA": [
            { name: "Pileća Karađorđeva", weight: "", price: 1150, image: "Meni/piletina/1.png", desc: "" },
            { name: "Piletina sa 4 vrste sira", weight: "", price: 1140, image: "Meni/piletina/2.png", desc: "" },
            { name: "Piletina sa kikiriki sosom", weight: "", price: 1140, image: "Meni/piletina/3.png", desc: "" },
            { name: "Piletina punjena gorgonzolom", weight: "", price: 1090, image: "Meni/piletina/4.png", desc: "" },
            { name: "Punjeni pileći file", weight: "", price: 1050, image: "Meni/piletina/5.png", desc: "" },
            { name: "Piletina u sosu od pečuraka", weight: "", price: 1030, image: "Meni/piletina/6.png", desc: "" },
            { name: "Pileći rolovani ražnjić", weight: "", price: 1030, image: "Meni/piletina/7.png", desc: "" },
            { name: "Pohovani pileći štapići u susamu", weight: "", price: 960, image: "Meni/piletina/8.png", desc: "" },
            { name: "Pileći file na roštilju", weight: "", price: 880, image: "Meni/piletina/9.png", desc: "" },
            { name: "Pohovani pileći file", weight: "", price: 880, image: "Meni/piletina/10.png", desc: "" }
        ],
        "RIBA": [
            { name: "Losos na žaru", weight: "300 g", price: 1950, image: "Meni/losos/1.png", desc: "" },
            { name: "Lignje na žaru", weight: "300 g", price: 1550, image: "Meni/losos/2.png", desc: "" },
            { name: "Orada", weight: "300 g", price: 1250, image: "Meni/losos/3.png", desc: "prilog rižoto" },
            { name: "Brancin", weight: "", price: 1250, image: "Meni/losos/4.png", desc: "" },
            { name: "Pastrmka na žaru", weight: "", price: 1150, image: "Meni/losos/5.png", desc: "" }
        ],
        "OBROK SALATE": [
            { name: "Caesar salata", weight: "", price: 990, image: "Meni/salate/1.png", desc: "" },
            { name: "Tuna salata", weight: "", price: 950, image: "Meni/salate/2.png", desc: "" }
        ],
        "DEČIJI MENI": [
            { name: "Susam piletina sa pomfritom", weight: "", price: 600, image: "Meni/deciji/1.png", desc: "" },
            { name: "Pljeskavica sa pomfritom", weight: "", price: 550, image: "Meni/deciji/2.png", desc: "" },
            { name: "5 ćevapa sa pomfritom", weight: "", price: 540, image: "Meni/deciji/3.png", desc: "" }
        ],
        "SALATE": [
            { name: "Mix salata", weight: "", price: 500, image: "Meni/salatee/1.png", desc: "" },
            { name: "Šopska salata", weight: "", price: 450, image: "Meni/salatee/2.png", desc: "" },
            { name: "Grčka salata", weight: "", price: 450, image: "Meni/salatee/3.png", desc: "" },
            { name: "Paradajz sa sirom", weight: "", price: 400, image: "Meni/salatee/4.png", desc: "" },
            { name: "Kupus salata", weight: "", price: 350, image: "Meni/salatee/5.png", desc: "" },
            { name: "Zelena salata", weight: "", price: 350, image: "Meni/salatee/6.png", desc: "" },
            { name: "Paradajz salata", weight: "", price: 350, image: "Meni/salatee/7.png", desc: "" },
            { name: "Vitaminska salata", weight: "", price: 350, image: "Meni/salatee/8.png", desc: "" },
            { name: "Krastavac salata", weight: "", price: 350, image: "Meni/salatee/9.png", desc: "" },
            { name: "Belolučena paprika", weight: "", price: 330, image: "Meni/salatee/10.png", desc: "" },
            { name: "Slatka belolučena paprika", weight: "", price: 330, image: "Meni/salatee/11.png", desc: "" }
        ],
        "PRILOZI": [
            { name: "Pekarski krompir", weight: "", price: 400, image: "Meni/prilozi/1.png", desc: "" },
            { name: "Pomfrit", weight: "", price: 350, image: "Meni/prilozi/2.png", desc: "" },
            { name: "Pečurke na žaru", weight: "", price: 350, image: "Meni/prilozi/3.png", desc: "" },
            { name: "Riža", weight: "", price: 350, image: "Meni/prilozi/4.png", desc: "" },
            { name: "Grilovano povrće", weight: "", price: 350, image: "Meni/prilozi/5.png", desc: "" },
            { name: "Bareno povrće", weight: "", price: 350, image: "Meni/prilozi/6.png", desc: "" }
        ],
        "HLEB": [
            { name: "Mix hlebova", weight: "", price: 300, image: "Meni/hleb/1.png", desc: "" },
            { name: "Fokačo pizza hleb", weight: "", price: 220, image: "Meni/hleb/2.png", desc: "" },
            { name: "Ciganska lepinja", weight: "", price: 120, image: "Meni/hleb/3.png", desc: "" },
            { name: "Vrući hlebići", weight: "", price: 100, image: "Meni/hleb4/.png", desc: "" },
            { name: "Projice", weight: "", price: 80, image: "Meni/hleb/5.png", desc: "" }
        ],
        "DEZERTI": [
            { name: "Trileće", weight: "", price: 350, image: "Meni/dezert/1.png", desc: "" },
            { name: "Palačinke sa džemom", weight: "", price: 350, image: "Meni/dezert/2.png", desc: "" },
            { name: "Palačinke sa kremom", weight: "", price: 350, image: "Meni/dezert/3.png", desc: "" },
            { name: "Palačinke sa Nutellom", weight: "", price: 350, image: "Meni/dezert/4.png", desc: "" }
        ]
    },
    en: {
        "BESTSELLERS": [
            { name: "Chicken in mushroom sauce", weight: "", price: 1030, image: "Meni/Njprodavanije/6.png", desc: "" },
            { name: "Breaded chicken sticks in sesame", weight: "", price: 960, image: "Meni/Njprodavanije/4.png", desc: "" },
            { name: "Pork Karadjordje's schnitzel", weight: "", price: 1200, image: "Meni/Njprodavanije/2.png", desc: "" },
            { name: "Mixed meat", weight: "", price: 1950, image: "Meni/Njprodavanije/1.png", desc: "" },
            { name: "Peppers on kajmak", weight: "", price: 650, image: "Meni/Njprodavanije/7.png", desc: "" },
            { name: "10 kebabs on kajmak", weight: "", price: 1090, image: "Meni/Njprodavanije/3.png", desc: "" },
            { name: "Viennese schnitzel", weight: "", price: 950, image: "Meni/Njprodavanije/5.png", desc: "" }
        ],
        "BREAKFAST (UNTIL 14h)": [
            { name: "Tradition mix", weight: "for 4 people", price: 1850, image: "Meni/DORUCAK/tradicijamix.png", desc: "" },
            { name: "Breaded stuffed peppers", weight: "", price: 730, image: "Meni/DORUCAK/pohovanepunjenepaprike.png", desc: "" },
            { name: "Peppers on kajmak", weight: "", price: 650, image: "Meni/DORUCAK/paprikanakajmaku.png", desc: "" },
            { name: "Breaded peppers", weight: "", price: 650, image: "Meni/DORUCAK/pohovanepaprike.png", desc: "" },
            { name: "Index sandwich", weight: "", price: 650, image: "Meni/DORUCAK/indexsendvic.png", desc: "" },
            { name: "Tradition breakfast", weight: "", price: 600, image: "Meni/DORUCAK/tradicijadorucak.png", desc: "" },
            { name: "Stuffed french toast", weight: "", price: 600, image: "Meni/DORUCAK/punjeneprzenice.png", desc: "" },
            { name: "Sandwich with prosciutto and kajmak", weight: "", price: 600, image: "Meni/DORUCAK/Sendvič sa pršutom i kajmakom.png", desc: "" },
            { name: "Uštipci (Fried dough)", weight: "", price: 550, image: "Meni/DORUCAK/ustipci.png", desc: "" },
            { name: "Kačamak (Polenta)", weight: "", price: 550, image: "Meni/DORUCAK/kacamak.png", desc: "" },
            { name: "Salty french toast", weight: "", price: 540, image: "Meni/DORUCAK/przeniceslane.png", desc: "" },
            { name: "Sweet french toast", weight: "", price: 540, image: "Meni/DORUCAK/przeniceslatke.png", desc: "" },
            { name: "Eggs with prosciutto", weight: "", price: 530, image: "Meni/DORUCAK/jajasaprsutom.png", desc: "" },
            { name: "Omelet with add-ons", weight: "", price: 530, image: "Meni/DORUCAK/omletsadodacima.png", desc: "" },
            { name: "Eggs with bacon", weight: "", price: 520, image: "Meni/DORUCAK/jajasaslaninom.png", desc: "" },
            { name: "Eggs with sausage", weight: "", price: 520, image: "Meni/DORUCAK/jajasakobasicom.png", desc: "" },
            { name: "Sunny side up eggs", weight: "", price: 450, image: "Meni/DORUCAK/3jajanaoko.png", desc: "" },
            { name: "Classic Omelet", weight: "", price: 450, image: "Meni/DORUCAK/omletklasik.png", desc: "" }
        ],
        "SOUPS": [
            { name: "Fish soup", weight: "", price: 400, image: "Meni/supe/1.png", desc: "" },
            { name: "Veal soup", weight: "", price: 350, image: "Meni/supe/2.png", desc: "" },
            { name: "Chicken soup", weight: "", price: 350, image: "Meni/supe/3.png", desc: "" }
        ],
        "APPETIZERS": [
            { name: "Beef prosciutto", weight: "", price: 600, image: "Meni/podjelo/1.png", desc: "" },
            { name: "Njeguski prosciutto", weight: "", price: 500, image: "Meni/podjelo/2.png", desc: "" },
            { name: "Pork prosciutto", weight: "", price: 400, image: "Meni/podjelo/3.png", desc: "" }
        ],
        "CHEESES": [
            { name: "Tradition meze", weight: "", price: 1900, image: "Meni/sirevi/1.png", desc: "" },
            { name: "Grilled miroc cheese", weight: "", price: 950, image: "Meni/sirevi/2.png", desc: "" },
            { name: "Cheese platter", weight: "", price: 850, image: "Meni/sirevi/3.png", desc: "" },
            { name: "Parmesan", weight: "", price: 500, image: "Meni/sirevi/4.png", desc: "" },
            { name: "Gorgonzola cheese", weight: "", price: 450, image: "Meni/sirevi/5.png", desc: "" },
            { name: "Cheese with garlic peppers", weight: "", price: 400, image: "Meni/sirevi/7.png", desc: "" },
            { name: "Smoked cheese", weight: "", price: 400, image: "Meni/sirevi/8.png", desc: "" },
            { name: "Montenegrin homemade cheese", weight: "", price: 300, image: "Meni/sirevi/9.png", desc: "" },
            { name: "Kajmak", weight: "", price: 300, image: "Meni/sirevi/10.png", desc: "" },
            { name: "Feta cheese", weight: "", price: 300, image: "Meni/sirevi/11.png", desc: "" }
        ],
        "MADE TO ORDER": [
            { name: "Beefsteak 4 cheeses", weight: "", price: 2550, image: "Meni/ponarudzbini/1.png", desc: "" },
            { name: "Beefsteak in pepper sauce", weight: "", price: 2400, image: "Meni/ponarudzbini/2.png", desc: "" },
            { name: "Beefsteak in mushroom sauce", weight: "", price: 2400, image: "Meni/ponarudzbini/3.png", desc: "" },
            { name: "Beefsteak medallions in mushroom sauce", weight: "", price: 2200, image: "Meni/ponarudzbini/4.png", desc: "" },
            { name: "Pork medallions in mushroom sauce", weight: "", price: 1300, image: "Meni/ponarudzbini/5.png", desc: "" },
            { name: "Pork Karadjordje's schnitzel", weight: "", price: 1200, image: "Meni/ponarudzbini/6.png", desc: "" },
            { name: "Natur schnitzel", weight: "", price: 990, image: "Meni/ponarudzbini/7.png", desc: "" },
            { name: "Viennese schnitzel", weight: "", price: 950, image: "Meni/ponarudzbini/8.png", desc: "" },
            { name: "Peasant fried meat", weight: "", price: 890, image: "Meni/ponarudzbini/9.png", desc: "" }
        ],
        "GRILLED DISHES": [
            { name: "Tradition challenge", weight: "1.8 kg", price: 3250, image: "Meni/rostilj/1.png", desc: "" },
            { name: "Mixed meat", weight: "1 kg", price: 1950, image: "Meni/rostilj/2.png", desc: "" },
            { name: "Njeguski steak", weight: "350 g", price: 1600, image: "Meni/rostilj/3.png", desc: "" },
            { name: "Stuffed pork loin", weight: "350 g", price: 1390, image: "Meni/rostilj/4.png", desc: "" },
            { name: "Smoked pork neck", weight: "300 g", price: 1390, image: "Meni/rostilj/5.png", desc: "" },
            { name: "Smoked pork loin", weight: "300 g", price: 1190, image: "Meni/rostilj/6.png", desc: "" },
            { name: "Pork neck", weight: "300 g", price: 1190, image: "Meni/rostilj/7.png", desc: "" },
            { name: "10 kebabs on kajmak", weight: "400 g", price: 1090, image: "Meni/rostilj/8.png", desc: "" },
            { name: "Burger on kajmak", weight: "350 g", price: 1090, image: "Meni/rostilj/9.png", desc: "" },
            { name: "White pork loin", weight: "300 g", price: 1090, image: "Meni/rostilj/10.png", desc: "" },
            { name: "10 kebabs", weight: "400 g", price: 990, image: "Meni/rostilj/11.png", desc: "" },
            { name: "Stuffed burger", weight: "350 g", price: 990, image: "Meni/rostilj/12.png", desc: "" },
            { name: "Gourmet burger", weight: "350 g", price: 990, image: "Meni/rostilj/13.png", desc: "" },
            { name: "Burger", weight: "350 g", price: 890, image: "Meni/rostilj/14.png", desc: "" },
            { name: "Homemade smoked sausage", weight: "300 g", price: 890, image: "Meni/rostilj/15.png", desc: "" }
        ],
        "PIZZAS": [
            { name: "Pizza Tradition", weight: "", price: 1450, image: "Meni/pice/1.png", desc: "" },
            { name: "Pizza Mexicana", weight: "", price: 1450, image: "Meni/pice/2.png", desc: "" },
            { name: "Pizza Tuna", weight: "", price: 1290, image: "Meni/pice/3.png", desc: "" },
            { name: "Pizza Capricciosa", weight: "", price: 1150, image: "Meni/pice/4.png", desc: "" },
            { name: "Pizza Margherita", weight: "", price: 1050, image: "Meni/pice/5.png", desc: "" }
        ],
        "RISOTTO": [
            { name: "Seafood risotto", weight: "", price: 1190, image: "Meni/rizoto/1.png", desc: "" },
            { name: "Risotto with chicken and tomato", weight: "", price: 990, image: "Meni/rizoto/1.png", desc: "" },
            { name: "Vegetarian risotto", weight: "", price: 990, image: "Meni/rizoto/2.png", desc: "" }
        ],
        "PASTAS": [
            { name: "Seafood pasta", weight: "", price: 1150, image: "Meni/paste/1.png", desc: "" },
            { name: "Pasta with prosciutto and mushrooms", weight: "", price: 900, image: "Meni/paste/2.png", desc: "" },
            { name: "Pasta Bolognese", weight: "", price: 850, image: "Meni/paste/3.png", desc: "" },
            { name: "Pasta Carbonara", weight: "", price: 850, image: "Meni/paste/4.png", desc: "" },
            { name: "Pasta with chicken and spinach", weight: "", price: 850, image: "Meni/paste/5.png", desc: "" },
            { name: "Pasta with chicken and broccoli", weight: "", price: 850, image: "Meni/paste/6.png", desc: "" },
            { name: "Pasta with chicken and mushrooms", weight: "", price: 850, image: "Meni/paste/7.png", desc: "" },
            { name: "Pasta with chicken and tomato", weight: "", price: 850, image: "Meni/paste/8.png", desc: "" }
        ],
        "CHICKEN": [
            { name: "Chicken Karadjordje's schnitzel", weight: "", price: 1150, image: "Meni/piletina/1.png", desc: "" },
            { name: "Chicken with 4 kinds of cheese", weight: "", price: 1140, image: "Meni/piletina/2.png", desc: "" },
            { name: "Chicken with peanut sauce", weight: "", price: 1140, image: "Meni/piletina/3.png", desc: "" },
            { name: "Chicken stuffed with gorgonzola", weight: "", price: 1090, image: "Meni/piletina/4.png", desc: "" },
            { name: "Stuffed chicken fillet", weight: "", price: 1050, image: "Meni/piletina/5.png", desc: "" },
            { name: "Chicken in mushroom sauce", weight: "", price: 1030, image: "Meni/piletina/6.png", desc: "" },
            { name: "Rolled chicken skewer", weight: "", price: 1030, image: "Meni/piletina/7.png", desc: "" },
            { name: "Breaded chicken sticks in sesame", weight: "", price: 960, image: "Meni/piletina/8.png", desc: "" },
            { name: "Grilled chicken fillet", weight: "", price: 880, image: "Meni/piletina/9.png", desc: "" },
            { name: "Breaded chicken fillet", weight: "", price: 880, image: "Meni/piletina/10.png", desc: "" }
        ],
        "FISH": [
            { name: "Grilled salmon", weight: "300 g", price: 1950, image: "Meni/losos/1.png", desc: "" },
            { name: "Grilled squid", weight: "300 g", price: 1550, image: "Meni/losos/2.png", desc: "" },
            { name: "Sea bream (Orada)", weight: "300 g", price: 1250, image: "Meni/losos/3.png", desc: "side dish risotto" },
            { name: "Sea bass (Brancin)", weight: "", price: 1250, image: "Meni/losos/4.png", desc: "" },
            { name: "Grilled trout", weight: "", price: 1150, image: "Meni/losos/5.png", desc: "" }
        ],
        "MEAL SALADS": [
            { name: "Caesar salad", weight: "", price: 990, image: "Meni/salate/1.png", desc: "" },
            { name: "Tuna salad", weight: "", price: 950, image: "Meni/salate/2.png", desc: "" }
        ],
        "KIDS MENU": [
            { name: "Sesame chicken with fries", weight: "", price: 600, image: "Meni/deciji/1.png", desc: "" },
            { name: "Burger with fries", weight: "", price: 550, image: "Meni/deciji/2.png", desc: "" },
            { name: "5 kebabs with fries", weight: "", price: 540, image: "Meni/deciji/3.png", desc: "" }
        ],
        "SALADS": [
            { name: "Mix salad", weight: "", price: 500, image: "Meni/salatee/1.png", desc: "" },
            { name: "Shopska salad", weight: "", price: 450, image: "Meni/salatee/2.png", desc: "" },
            { name: "Greek salad", weight: "", price: 450, image: "Meni/salatee/3.png", desc: "" },
            { name: "Tomato with cheese", weight: "", price: 400, image: "Meni/salatee/4.png", desc: "" },
            { name: "Cabbage salad", weight: "", price: 350, image: "Meni/salatee/5.png", desc: "" },
            { name: "Green salad", weight: "", price: 350, image: "Meni/salatee/6.png", desc: "" },
            { name: "Tomato salad", weight: "", price: 350, image: "Meni/salatee/7.png", desc: "" },
            { name: "Vitamin salad", weight: "", price: 350, image: "Meni/salatee/8.png", desc: "" },
            { name: "Cucumber salad", weight: "", price: 350, image: "Meni/salatee/9.png", desc: "" },
            { name: "Garlic peppers", weight: "", price: 330, image: "Meni/salatee/10.png", desc: "" },
            { name: "Sweet garlic peppers", weight: "", price: 330, image: "Meni/salatee/11.png", desc: "" }
        ],
        "SIDE DISHES": [
            { name: "Baked potato", weight: "", price: 400, image: "Meni/prilozi/1.png", desc: "" },
            { name: "French fries", weight: "", price: 350, image: "Meni/prilozi/2.png", desc: "" },
            { name: "Grilled mushrooms", weight: "", price: 350, image: "Meni/prilozi/3.png", desc: "" },
            { name: "Rice", weight: "", price: 350, image: "Meni/prilozi/4.png", desc: "" },
            { name: "Grilled vegetables", weight: "", price: 350, image: "Meni/prilozi/5.png", desc: "" },
            { name: "Boiled vegetables", weight: "", price: 350, image: "Meni/prilozi/6.png", desc: "" }
        ],
        "BREAD": [
            { name: "Mix of breads", weight: "", price: 300, image: "Meni/hleb/1.png", desc: "" },
            { name: "Focaccia pizza bread", weight: "", price: 220, image: "Meni/hleb/2.png", desc: "" },
            { name: "Gypsy flatbread", weight: "", price: 120, image: "Meni/hleb/3.png", desc: "" },
            { name: "Hot buns", weight: "", price: 100, image: "Meni/hleb4/.png", desc: "" },
            { name: "Cornbread (Projice)", weight: "", price: 80, image: "Meni/hleb/5.png", desc: "" }
        ],
        "DESSERTS": [
            { name: "Tres leches", weight: "", price: 350, image: "Meni/dezert/1.png", desc: "" },
            { name: "Crepes with jam", weight: "", price: 350, image: "Meni/dezert/2.png", desc: "" },
            { name: "Crepes with cream", weight: "", price: 350, image: "Meni/dezert/3.png", desc: "" },
            { name: "Crepes with Nutella", weight: "", price: 350, image: "Meni/dezert/4.png", desc: "" }
        ]
    }
};

const galleryImages = [
    "images/gallery/gallery-1.jpg",
    "images/gallery/gallery-2.jpg",
    "images/gallery/gallery-3.jpg",
    "images/gallery/gallery-4.jpg",
    "images/gallery/gallery-5.jpg",
    "images/gallery/gallery-6.jpg"
];

const galleryVideos = [
    "videos/video-1.mp4",
    "videos/video-2.mp4",
    "videos/video-3.mp4",
    "videos/video-4.mp4"
];

const fallbackImage = "https://images.unsplash.com/photo-1544025162-835032549d47?w=600&q=80";

// --- LOADER LOGIKA ---
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.classList.add('fade-out');
            setTimeout(() => { loader.style.display = 'none'; }, 800);
        }
    }, 2800); 
});

// --- MOBILE HAMBURGER LOGIKA ---
const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('nav-overlay');
const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-btn');

function toggleMenu() {
    const isActive = navOverlay.classList.contains('active');
    hamburger.classList.toggle('active');
    navOverlay.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !isActive);
    document.body.style.overflow = !isActive ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navOverlay.classList.contains('active')) toggleMenu();
    });
});

// --- MENI RENDER LOGIKA ---
const menuTabsContainer = document.getElementById('menu-tabs');
const menuContainer = document.getElementById('menu-container');

function createMenuCardElement(item, categoryLabel = null) {
    const weightHtml = item.weight ? `<span class="menu-card-weight">${item.weight}</span>` : '';
    const descHtml = item.desc ? `<p class="menu-card-desc">${item.desc}</p>` : '<p class="menu-card-desc"></p>';
    const categoryTagHtml = categoryLabel ? `<span class="menu-card-category-tag">${categoryLabel}</span>` : '';

    let displayPrice = item.price + ",00";
    let currencySymbol = "RSD";

    if (currentLang === 'en') {
        displayPrice = (item.price / exchangeRate).toFixed(2);
        currencySymbol = "€";
    }

    const card = document.createElement('div');
    card.className = 'menu-card reveal';

    card.innerHTML = `
        <div class="menu-card-img-wrapper">
            <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy" onerror="this.src='${fallbackImage}'">
        </div>
        <div class="menu-card-body">
            ${categoryTagHtml}
            <div class="menu-card-header">
                <h3 class="menu-card-title">${item.name}</h3>
                ${weightHtml}
            </div>
            ${descHtml}
            <div class="menu-card-line"></div>
            <div class="menu-card-price">${displayPrice} <span>${currencySymbol}</span></div>
        </div>
    `;

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });

    return card;
}

function renderMenu(categoryIndex) {
    menuContainer.classList.remove('menu-fade-in');
    menuContainer.classList.add('menu-fade-out');

    setTimeout(() => {
        menuContainer.innerHTML = '';
        const categories = Object.keys(menuData[currentLang]);
        const categoryName = categories[categoryIndex];
        const items = menuData[currentLang][categoryName];

        items.forEach((item) => {
            menuContainer.appendChild(createMenuCardElement(item));
        });

        menuContainer.classList.remove('menu-fade-out');
        menuContainer.classList.add('menu-fade-in');

        setTimeout(revealElements, 50);

    }, 400);
}

function initMenu(activeIndex = 0) {
    buildFlatMenu();
    menuTabsContainer.innerHTML = '';
    const categories = Object.keys(menuData[currentLang]);
    
    categories.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.className = `menu-tab ${index === activeIndex ? 'active' : ''}`;
        btn.textContent = category;
        btn.dataset.index = index;
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            renderMenu(index);
        });
        
        menuTabsContainer.appendChild(btn);
    });

    renderMenu(activeIndex);
}

// --- PRETRAGA JELOVNIKA (SEARCH) LOGIKA ---
function normalizeText(str) {
    return str
        .toLowerCase()
        .replace(/đ/g, 'dj')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

let flatMenuCache = [];
function buildFlatMenu() {
    flatMenuCache = [];
    const categories = menuData[currentLang];
    Object.keys(categories).forEach(categoryName => {
        categories[categoryName].forEach(item => {
            flatMenuCache.push({ category: categoryName, item });
        });
    });
}

function updateSearchMeta(count, query) {
    if (!menuSearchMeta) return;
    if (count === 0) {
        menuSearchMeta.classList.add('no-results');
        menuSearchMeta.textContent = currentLang === 'sr'
            ? `Nema jela za "${query}". Pokušajte drugačiji pojam.`
            : `No dishes found for "${query}". Try a different term.`;
    } else {
        menuSearchMeta.classList.remove('no-results');
        if (currentLang === 'sr') {
            menuSearchMeta.textContent = count === 1 ? `Pronađeno 1 jelo` : `Pronađeno ${count} jela`;
        } else {
            menuSearchMeta.textContent = count === 1 ? `1 dish found` : `${count} dishes found`;
        }
    }
}

function renderSearchResults(query) {
    const normalizedQuery = normalizeText(query);
    const results = flatMenuCache.filter(entry => normalizeText(entry.item.name).includes(normalizedQuery));

    menuContainer.classList.remove('menu-fade-in');
    menuContainer.classList.add('menu-fade-out');

    setTimeout(() => {
        menuContainer.innerHTML = '';
        results.forEach(entry => {
            menuContainer.appendChild(createMenuCardElement(entry.item, entry.category));
        });

        menuContainer.classList.remove('menu-fade-out');
        menuContainer.classList.add('menu-fade-in');

        updateSearchMeta(results.length, query);
        setTimeout(revealElements, 50);
    }, 250);
}

const menuSearchInput = document.getElementById('menu-search');
const menuSearchClear = document.getElementById('menu-search-clear');
const menuSearchMeta = document.getElementById('menu-search-meta');
const menuTabsWrapperEl = document.querySelector('.menu-tabs-wrapper');
let searchDebounceTimer = null;

function handleSearchInput() {
    const query = menuSearchInput.value.trim();
    menuSearchClear.style.display = query ? 'flex' : 'none';

    if (menuTabsWrapperEl) menuTabsWrapperEl.classList.toggle('search-active', !!query);

    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
        if (query.length === 0) {
            menuSearchMeta.textContent = '';
            menuSearchMeta.classList.remove('no-results');
            const activeTab = document.querySelector('.menu-tab.active');
            renderMenu(activeTab ? parseInt(activeTab.dataset.index) : 0);
        } else {
            renderSearchResults(query);
        }
    }, 150);
}

if (menuSearchInput) {
    menuSearchInput.addEventListener('input', handleSearchInput);
    menuSearchClear.addEventListener('click', () => {
        menuSearchInput.value = '';
        handleSearchInput();
        menuSearchInput.focus();
    });
}

// --- LANGUAGE TOGGLE LOGIKA ---
const langToggles = document.querySelectorAll('.lang-btn');
langToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentLang = currentLang === 'sr' ? 'en' : 'sr';
        const newText = currentLang === 'sr' ? 'ENG' : 'SRB';
        langToggles.forEach(b => b.textContent = newText);

        document.querySelectorAll('[data-sr]').forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });

        if (menuSearchInput) {
            menuSearchInput.value = '';
            const placeholder = menuSearchInput.getAttribute(`data-${currentLang}-placeholder`);
            if (placeholder) menuSearchInput.placeholder = placeholder;
            menuSearchClear.style.display = 'none';
            menuSearchMeta.textContent = '';
            menuSearchMeta.classList.remove('no-results');
            if (menuTabsWrapperEl) menuTabsWrapperEl.classList.remove('search-active');
        }

        let activeIndex = 0;
        const currentActiveTab = document.querySelector('.menu-tab.active');
        if(currentActiveTab) {
            activeIndex = parseInt(currentActiveTab.dataset.index);
        }
        initMenu(activeIndex);
        checkWorkingHours();
        
        if(navOverlay.classList.contains('active')) toggleMenu();
    });
});

// --- GALERIJA & VIDEO LOGIKA ---
function initGallery() {
    const photoContainer = document.getElementById('photo-gallery');
    const videoContainer = document.getElementById('video-gallery');

    galleryImages.forEach((imgSrc, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item reveal';
        item.innerHTML = `
            <img src="${imgSrc}" class="gallery-img" loading="lazy" alt="Atmosfera ${index + 1}" onerror="this.src='${fallbackImage}'">
            <div class="gallery-overlay">
                <div class="gallery-icon">&#x26F6;</div>
            </div>`;
        item.addEventListener('click', () => openLightbox(index));
        photoContainer.appendChild(item);
    });

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (!entry.isIntersecting && video && !video.paused) {
                video.pause();
            }
        });
    }, { threshold: 0.1 });

    galleryVideos.forEach((vidSrc, index) => {
        const item = document.createElement('div');
        item.className = 'video-item reveal';
        item.innerHTML = `
            <video src="${vidSrc}" class="video-element" muted loop playsinline preload="metadata"></video>
            <div class="play-indicator"></div>`;
        
        item.addEventListener('mouseenter', () => {
            if(window.innerWidth > 768) {
                const vid = item.querySelector('video');
                vid.play().catch(() => {});
            }
        });
        item.addEventListener('mouseleave', () => {
            if(window.innerWidth > 768) {
                const vid = item.querySelector('video');
                vid.pause();
            }
        });

        item.addEventListener('click', () => openVideoModal(vidSrc));
        videoContainer.appendChild(item);
        videoObserver.observe(item);
    });
}

// --- LIGHTBOX I VIDEO MODAL LOGIKA ---
let currentLightboxIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const videoModal = document.getElementById('video-modal');
const modalVideoPlayer = document.getElementById('modal-video');

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}
function updateLightboxImage() { lightboxImg.src = galleryImages[currentLightboxIndex]; }

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
});
document.querySelector('.lightbox-next').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    updateLightboxImage();
});
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });

let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
lightbox.addEventListener('touchend', e => {
    let touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) document.querySelector('.lightbox-next').click();
    if (touchEndX > touchStartX + 50) document.querySelector('.lightbox-prev').click(); 
}, {passive: true});

function openVideoModal(vidSrc) {
    modalVideoPlayer.src = vidSrc;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalVideoPlayer.play().catch(() => {});
}
function closeVideoModal() {
    modalVideoPlayer.pause();
    modalVideoPlayer.src = "";
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
}
document.getElementById('video-close').addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => { if(e.target === videoModal) closeVideoModal(); });

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        if(navOverlay.classList.contains('active')) toggleMenu();
        if(lightbox.classList.contains('active')) closeLightbox();
        if(videoModal.classList.contains('active')) closeVideoModal();
    }
});

// --- RADNO VREME LOGIKA ---
function checkWorkingHours() {
    const todayDate = new Date();
    const dayOfWeek = todayDate.getDay(); 
    const currentHour = todayDate.getHours();

    const days = document.querySelectorAll('.working-hours .day');
    days.forEach(day => {
        if (parseInt(day.getAttribute('data-day')) === dayOfWeek) {
            day.classList.add('today');
        } else {
            day.classList.remove('today');
        }
    });

    const statusBadge = document.getElementById('status-badge');
    if (currentHour >= 8 && currentHour < 24) {
        statusBadge.textContent = currentLang === 'sr' ? "OTVORENO • DO 00:00" : "OPEN • UNTIL 00:00";
        statusBadge.className = "status-badge open";
    } else {
        statusBadge.textContent = currentLang === 'sr' ? "TRENUTNO ZATVORENO" : "CURRENTLY CLOSED";
        statusBadge.className = "status-badge closed";
    }
}

// --- NAVBAR SCROLL LOGIKA ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
}, {passive: true});

// --- SCROLL REVEAL LOGIKA ---
function revealElements() {
    const reveals = document.querySelectorAll('.reveal:not(.active)');
    if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('active'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(reveal => observer.observe(reveal));
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initGallery();
    checkWorkingHours();
    revealElements();
});