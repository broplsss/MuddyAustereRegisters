'use strict';(function(){var a=window.mpConfig.game,f=window.mpHelper;console.log("------------------- GameDistribution ("+a+") -------------------");f.sendStat("start",11);r=5E3;var x=0;try{document.onkeydown=function(b){b=b||window.event;b=b.keyCode;if(37<=b&&40>=b&&"4e263000c9f447d8a322a26fb4f40016"!=a&&"Pou"!=document.title)return!1}}catch(b){console.log(b)}if("html5games"==a||"html5"==a||null==a||""==a)a=document.location.pathname.split("/")[1];"7beb594936bd4e65b3e20c81b299fe68"==a&&(a="ninja-ranmaru");
"e0def4be85be486cb4c8b576b7c969fa"==a&&(a="three-pandas");"70f9fcac98f44c84b9d7e7a09c0834a5"==a&&(a="super-sticky-stacker");"015bbadfcafb4374813f8803b1737222"==a&&(a="jelly-madness-2");"49f678c1fe4e4807814e04d9ca0e2acd"==a&&(a="gold-mine-strike");"00140aa90c8a49c3a711ac20c644ff6a"==a&&(a="gold-mine-strike-christmas");"27673bc45d2e4b27b7cd24e422f7c257"==a&&(a="bubble-game-3");"eadc4d96bf7543619ed7942dc05ecf35"==a&&(a="bubble-game-3-christmas-edition");"127c290309bb4b7096dab06c711ad58e"==a&&(a="fun-game-play-bubblesshooter");
"0e69f524bfd44219a53decec2a947938"==a&&(a="sugar-mahjong");"621e0ccd95d84033ae633e628b552cac"==a&&(a="block-movers");"49258a0e497c42b5b5d87887f24d27a6"==a&&(a="jewel-burst");"405c00612981466cbc5d9dcef4214811"==a&&(a="bubble-burst");"af2ff2835f2145d3b2a7e5eb1ed0d011"==a&&(a="farm-connect");"50f2195e9bf5435eaf85d692f5e84e07"==a&&(a="monster-temple");"2bc1ccb7ed7547dd8c43da459bf99dd2"==a&&(a="jewel-curse");"55140c6e61264a218f7bf228f136454b"==a&&(a="8-gears");if("23a719c3577c4bd5902b17577bd97d24"==a||
"8c3299ab011a47279ab35e9b741d25d5"==a)a="gunblood";"d3cd7323dc38417c90e37f0ec4c3f548"==a&&(a="super-stack");"762c932b4db74c6da0c1d101b2da8be6"==a&&(a="vex-3");"80e6a5ae477f4d4fbcd1ea293d10087d"==a&&(a="vex-4");"f120262ab72743039fbce88c1f370df8"==a&&(a="vex-5");"5720633fecd545a188471d3ce7a7bbeb"==a&&(a="olli-ball");"6984522dd6714dd8b92b5285c6bc0ceb"==a&&(a="twisted-city");"7a93800bd9e143c8b7c1490a16608df2"==a&&(a="miner");"5641e1f8019d48c1ac7a45b4fe588034"==a&&(a="undead-drive");"553949bb2a284dda91b17d118b4ccb17"==
a&&(a="heroes-of-myths");"e2d52ec69741485a8f08a36545f1b8fd"==a&&(a="brave-tomato-2");"4b4ac998ef6c43958f82bb3a9819d2f3"==a&&(a="fun-game-play-mahjong");"6a1005ef145c4366a26fd2058c375e7b"==a&&(a="cave-golf");"c418646ba9c748ed95765343496310ab"==a&&(a="wire");"25a66b4cf54245c88237c7e5a154f315"==a&&(a="larex");"6248cc415c3f4de2bdaefe544617a092"==a&&(a="lightning");"cf7c8d8d0bb342eeb1e6d56f2d9ed1c8"==a&&(a="theheist");"3de0c1fd03414f92b4324ebfe54fc562"==a&&(a="super-stacker-2");"a29572408f554053a31af5dca3b7e014"==
a&&(a="super-scary-stacker");"6223b98714cc4b429cb1cce3e2928b66"==a&&(a="tiny-town");"88190e4c70604ab08bb25ed2a52e29c8"==a&&(a="flou");"024bd7264a574b4682d5640e9b0de8e0"==a&&(a="mexico-rex");"c035e676ef654227b1537dabbf194e00"==a&&(a="money-movers");"de857b96d0a540e18b2a4037a8b7d6d8"==a&&(a="money-movers-2");"db770064d7cd45a798b096d4397a0870"==a&&(a="money-movers-3");"289efd14875a4eddbb4b2afc6da4b529"==a&&(a="fgp-plumber-game");"0095b1d5dcb645d88971010491627362"==a&&(a="wheely-6");"271a94e090b8453a9a262d1ee3cb1cd6"==
a&&(a="wheely-7");"b23deb025996424da64cf8f8cf986fd8"==a&&(a="euro-football-kick-2016");"09fefe9954da4aa5bb4923e662abd0d8"==a&&(a="robbie");"210802df55454737b3ef7f901c0de8d3"==a&&(a="pac-xon-deluxe");"488e0805d312421aa0a49768bbb88a4d"==a&&(a="fly-or-die");"3f00785d4f604d6db42830b7393b515a"==a&&(a="kitty-diver");"f0be10e7252d43ac8baf13b638c8133d"==a&&(a="road-of-fury-desert-strike");"4d5559bdd7fe492f95dafdd233a582ea"==a&&(a="duo");"d0d8b4f53a6645469a8ad92431bb00dc"==a&&(a="guess-the-kitty");"919e83dbc31749e1a54787e656ce513b"==
a&&(a="parking-fury-1");"1b05720348e145ccbe69a28a062d0220"==a&&(a="parking-fury-2");"67f5943d779b41b2bc6a67ce132b7c68"==a&&(a="parking-fury-3");"7e2e56736eef49f78220605798903354"==a&&(a="snail-bob-5");"043d401426d845ae990cb2583fe1ebff"==a&&(a="snail-bob-6");"9aefc9ef4a7f4d5d8062cfb563cc658c"==a&&(a="snail-bob-7");"03b3b4a7cc4243b6bbaac22285f14741"==a&&(a="snail-bob-8");"b517c22cc727478aac466e0950fa26e7"==a&&(a="moving-up");"5b8970459ca14df185224d20257edb3a"==a&&(a="go-robots");"46a977cd9a68455dad29381c625c71c9"==
a&&(a="go-robots-2");"da393545ed8a41dd8b7cf4c78bafb0c7"==a&&(a="3-pandas-japan");"96b2420dc4344a6e946bf6da4a4f8c90"==a&&(a="madmen-racing");"213012cbef744a529cf3e1cc70fa8913"==a&&(a="wheely-8");"355c222f3f58408e943c8ecf1faab0e7"==a&&(a="agent-of-descend");"a4d6c5960e164546b2dca794347136a4"==a&&(a="space-blaze-2");"f347269e389f432fa5abc257624c8165"==a&&(a="world-football-kick-2018");"f56b7e25efcb426fbe8b9c9eaed56400"==a&&(a="instagirls-dress-up");"3604f0b634ea4e7c81c5bbba41869cb7"==a&&(a="instagirls-halloween-dress-up");
"a6d49565f3a845aba206d1983cb01a72"==a&&(a="transmorpher");"755d0010904641b2b733e79b570fdcc2"==a&&(a="transmorpher-3");"070d0680bbe24d5aafa44d8b9b629c2d"==a&&(a="extreme-bikers");"ba9eba4f79f947c9a57921eb06d75cac"==a&&(a="grindcraft-remastered");"18d28481ea514f3c838f9a5a355fb0f7"==a&&(a="bob-the-robber");"34d6aae0257d4e4c8068cbdfc11a8758"==a&&(a="bob-the-robber-2");"2b89b70d201b443991360f2ba5622c17"==a&&(a="bob-the-robber-5");"55229286b7b040c482511c63bf61b35c"==a&&(a="gravity-linez");"b6816d08305445e48f14a006c2c19eb4"==
a&&(a="paintball-racers");"a12a9eee46e1413f8f7a1a5ee140ab36"==a&&(a="habbo-clicker");"9433b7ab07ae44389cdd9f62eb70b5e7"==a&&(a="hard-life");"402cadb03e654c87a65123c170844572"==a&&(a="desktop-racing-2");"b577d46286264be0a14d2195af10a1a6"==a&&(a="robo-racing");"3a39faaae0d349e3b0cb8f221c031e4e"==a&&(a="flying-halloween-witch");"85065a8ddf6140eea0116148605ad8d4"==a&&(a="mahjong-connect-halloween");"25063875f49d49d69113fe42df7bfeb4"==a&&(a="trollface-quest-horror");"0117c29014ee40228a9ad6dc0312a604"==
a&&(a="trollface-quest-horror-2");"45d45ffccdbb4040bda4a829a11b0534"==a&&(a="trollface-quest-horror-3");"0febd05a76a3461b8a2a857b82b6ce64"==a&&(a="trollface-quest-usa");"c1dc6e8a725a4074b3046c57b16fa292"==a&&(a="trollface-quest-usa-2");"911d7c59270d4437b7312019ed84539b"==a&&(a="trollface-quest-video-memes-and-tv-shows");"83c7e6ebc45b4aab9ed86f86fded21cf"==a&&(a="trollface-quest-video-memes-and-tv-shows-2");"8505ec523ffd4542936a51b6788993bf"==a&&(a="journey-to-the-north");"5ad7018b60994251a15217416e9ed0fe"==
a&&(a="my-dolphin-show");"e8395e59f83c4676be3d1831c8bcfb81"==a&&(a="my-dolphin-show-2");"8205ad5781004a70bd8617500299ce40"==a&&(a="krismas-tiles");"80489c0e24a24d00b84852d27543b09f"==a&&(a="car-eats-car-2");"d3285e53f8e14f6ab47c4a35d9fd2530"==a&&(a="dead-paradise-3");"41f828f63aba49dda0d8c70151e6926a"==a&&(a="roller-splat");"9bf0bdbd3fab441eb736b3ee6592c7b0"==a&&(a="fun-race-3d");"a5d62e9e76fd406e88a296b32ea6471e"==a&&(a="cristiano-ronaldo-kick-n-run");"bfd6c484cdd9475f895bee03e3b633ff"==a&&(a="heroes-of-match-3");
"3be5ca4bd9e342cfaa121c656f7fca97"==a&&(a="frisbee-forever-2");"9ce4634b6e1d4d62b27cdd7a5860fcdf"==a&&(a="dead-zed");"31a9f66578024276b75b78a2894d03f2"==a&&(a="the-builder-halloween-castle");"381f45a92e144de7a2dd7f374b01a795"==a&&(a="super-hitmasters-online");"8156e4c8e28e4425befb8d969759dd48"==a&&(a="the-last-survivors");"944186abe50e452dac7f0e8d3e0a8814"==a&&(a="kitty-scramble");"14be1af7c626473893e1f79a40ad85c6"==a&&(a="adam-and-eve");"bcf3d73331764b90af2b00f147745fe0"==a&&(a="adam-and-eve-2");
"4cf7fe53fde7406fadf9ad84a0b6ac59"==a&&(a="adam-and-eve-3");"4eda37038a3f4310b6330a1c7441f48a"==a&&(a="adam-and-eve-4");"8aa27879c83140a2bbfc9e180ba1d738"==a&&(a="adam-and-eve-8");"fa64f6aa5ce44195b27e67f0665d3c0e"==a&&(a="adam-and-eve-aliens");"06d2122bdd1945dcbf20cf7b2a48f89d"==a&&(a="adam-and-eve-snow");"b8a342904608470a9f3382337aca3558"==a&&(a="moto-x3m-spooky-land");"5b0abd4c0faa4f5eb190a9a16d5a1b4c"==a&&(a="moto-x3m");"4d1e06cde6b34296bd63af8adce62ce4"==a&&(a="zombie-killers");"e5e8a0cd6b204005a936e9fc63e915da"==
a&&(a="adam-and-eve-night");"a765f5c9a4ac4cb8afe3d889a9d00409"==a&&(a="geometry-dash-neon-world");"a2cdeab8ce924a6aa559892715a67205"==a&&(a="homescapes");"f2af2ecc05a445edb6862c589e996a7e"==a&&(a="tomb-runner");"d6076e6642c743628578d40d408f6270"==a&&(a="zombie-assassin");"9528a48ea23c4a8a9ac4050f110948c8"==a&&(a="maze-monster");"6ffa4ad7cfa7483896a8c1ffe2133721"==a&&(a="pumpkin-rider");"7cf46887e4af40cbb005d4385be063a4"==a&&(a="stupid-zombies");"5c0ad273bb7f4945a53f69d7d9adfc70"==a&&(a="stupid-zombies-2");
"82a6e7a7e5334f91abe0a01d8ba764f2"==a&&(a="perfect-snipe-online");"dd1fc7237d4a44d497b793ee78db423d"==a&&(a="paper-flick");"847533dd0f434e448734f4265e8a9954"==a&&(a="love-pin-3d");"a0abfb88584744f9bc455442eee01973"==a&&(a="soccer-shoot-3d");"a0c7a1305ddf41eca129d65b887ac631"==a&&(a="pen-run-online");"92de8e9129254edb9244acf4f11fb6f0"==a&&(a="2048-balls-3d");"b91f8df739f94fc0bddb77fd0f76fa7d"==a&&(a="beat-line");"c187bcf2763047e3a43369b65ea6d635"==a&&(a="best-link");"514f3cd3eceb4c4ea9b02903b75795b6"==
a&&(a="fruit-slice");"2d668be21a5d4bda8a91ab0a88e7e457"==a&&(a="fall-race-3d");"16e592d0e1c54a038b0a0cf880e1ac0e"==a&&(a="galaxy-attack-virus-shooter");"994ae6bf58e0404b8aff0af588260852"==a&&(a="merge-cakes");"2d5dc7885f7049c8addd41ac91e33f55"==a&&(a="santa-run-challenge");"bb63a891738a46b4a07ba38c3b1c0a69"==a&&(a="super-oscar");"4f3d7d38d24b740c95da2b03dc3a2333"==a&&(a="Pou"==document.title?"d1362abc246f43bdb5c26643aec2b61b":"super-oscar");"120653a94b0a48cf9050fff4a258f5cf"==a&&"Tropical Merge"==
document.title&&(a="4eafc18cbceb45ed884f6c5d70df3963");if(-1<"ninja-ranmaru three-pandas super-sticky-stacker jelly-madness-2 cave-golf wire theheist pac-xon-deluxe guess-the-kitty 3-pandas-japan gravity-linez hard-life krismas-tiles roller-splat homescapes adam-and-eve-night adam-and-eve-aliens adam-and-eve-8 the-builder-halloween-castle super-hitmasters-online tomb-runner perfect-snipe-online adam-and-eve-snow paper-flick santa-run-challenge".split(" ").indexOf(a)){x=1;console.log("*** "+a);var r=
5E3;localStorage.getItem("mp-"+a+"-first_run")||localStorage.setItem("mp-"+a+"-first_run","1");if("ninja-ranmaru"==a)var l=["ninja-ranmaru:bestscore|score|2"];"three-pandas"==a&&(l=["pandas:maximumAchievedLevel|levels|4"]);"super-sticky-stacker"==a&&(l=["velcroem-bestlevel|levels|10"]);"jelly-madness-2"==a&&(l=["jm2:jm2_maxDoneLevel|levels|10","jm2:jm2_amountOfStars|stars|15"]);"cave-golf"==a&&(l="COMPLETE_TEN_LEVELSlevel|ten|1 COLLECT_THIRTYlevel|thirty|1 GAME_COMPLETElevel|complete|1 COMPLETE_FIFTEEN_LEVELSlevel|fifteen|1 COLLECT_ALLlevel|all|1 BREAK_EGGlevel|egg|25 USE_GREEN_DINOlevel|dino|16 USE_TELEPORTlevel|teleport|20".split(" "));
"wire"==a&&(l=["bestScore|score|1","currentSkin|skins|1","gamesPlayed|plays|1"]);"theheist"==a&&(l="respect|respect|100 armourLevel|armour|6 weaponLevel|weapon|2 engineLevel|engine|6 missionSelected|mission|5 currentGangLevel|gang|50 money|money|1500000".split(" "));"pac-xon-deluxe"==a&&(l=["PacXpnOpen_LEvel|levels|11"]);"guess-the-kitty"==a&&(l=["GuessTheKittiesLevel:GuessTheKittiesLevel|fatality|1"]);"3-pandas-japan"==a&&(l=["maximumAchievedLevel|level|1"]);"gravity-linez"==a&&(l=["hiscore|score|1"]);
"hard-life"==a&&(l="level|level|5 stars0|stars0|7 stars1|stars1|7 stars2|stars2|7 stars3|stars3|7 stars4|stars4|7 stars5|stars5|7 stars6|stars6|7 stars7|stars7|7 stars8|stars8|7 stars9|stars9|7 stars10|stars10|7 stars11|stars11|7 stars12|stars12|7 stars13|stars13|7 stars14|stars14|7".split(" "));"krismas-tiles"==a&&(l=["tiles:bestLevel|levels|3","tiles:bestScore|score|10000"]);"roller-splat"==a&&(l=["roller-splatcurrentLevel|levels|2"]);"homescapes"==a&&(l=["zsjnmgamestage|level|1"]);"adam-and-eve-night"==
a&&(l=["aaeTransylvania_level|level|6"]);"adam-and-eve-aliens"==a&&(l=["aaeAliens_level|level|12"]);"the-builder-halloween-castle"==a&&(l=["builderscore|score|500"]);"super-hitmasters-online"==a&&(l=["globalstarhits|stars|19"]);"perfect-snipe-online"==a&&(l=["snp1a|level|5","snpskina|weapon|4","snpskin2a|visor|4","snpstarsa|stars|25"]);"paper-flick"==a&&(l=["paper-flick-easy-highscore|easy|1","paper-flick-normal-highscore|normal|1","paper-flick-hard-highscore|hard|1"]);"adam-and-eve-snow"==a&&(l=
["aae8_currentLevel|level|4"]);"adam-and-eve-8"==a&&(l=["aae9p1_currentLevel|level|6"]);"santa-run-challenge"==a&&(l=["Santa Run ChallengeTop_Score|score|5"]);"tomb-runner"==a&&(l="com.gemioli.tombrunner.skin1|skin1|1 com.gemioli.tombrunner.skin2|skin2|1 com.gemioli.tombrunner.skin3|skin3|1 com.gemioli.tombrunner.skin4|skin4|1 com.gemioli.tombrunner.skin5|skin5|1 com.gemioli.tombrunner.score|score|5000".split(" "));setInterval(function(){for(var b=0;b<l.length;b++){var c=l[b].split("|"),d=c[0],e=
Number(localStorage.getItem(d)),g="mp-"+a+"-"+c[1],k=Number(sessionStorage.getItem(g)),t=c[1];c=Number(c[2]);localStorage.getItem(d)&&e>=c&&e>k&&(f.sendStat(t,e),sessionStorage.setItem(g,e))}},r)}if(-1<"gold-mine-strike gold-mine-strike-christmas bubble-game-3 bubble-game-3-christmas-edition fun-game-play-bubblesshooter sugar-mahjong block-movers jewel-burst bubble-burst farm-connect monster-temple jewel-curse gunblood super-stack super-stacker-2 twisted-city undead-drive heroes-of-myths brave-tomato-2 fun-game-play-mahjong tiny-town super-scary-stacker money-movers money-movers-2 money-movers-3 fgp-plumber-game wheely-6 wheely-7 wheely-8 euro-football-kick-2016 world-football-kick-2018 kitty-diver road-of-fury-desert-strike parking-fury-1 parking-fury-2 parking-fury-3 snail-bob-5 snail-bob-6 snail-bob-7 snail-bob-8 moving-up go-robots go-robots-2 agent-of-descend instagirls-dress-up instagirls-halloween-dress-up transmorpher transmorpher-3 extreme-bikers grindcraft-remastered bob-the-robber bob-the-robber-5 paintball-racers habbo-clicker flying-halloween-witch mahjong-connect-halloween trollface-quest-horror trollface-quest-horror-2 trollface-quest-horror-3 trollface-quest-usa trollface-quest-usa-2 trollface-quest-video-memes-and-tv-shows trollface-quest-video-memes-and-tv-shows-2 my-dolphin-show my-dolphin-show-2 dead-paradise-3".split(" ").indexOf(a)){console.log("integrationTypeB");
x=1;console.log("### "+a);localStorage.getItem("mp-"+a+"-first_run")||localStorage.setItem("mp-"+a+"-first_run","1");if("gold-mine-strike"==a||"gold-mine-strike-christmas"==a){var h="gold-mine-strike:highscoreState";setInterval(function(){if(localStorage.getItem(h)){var b=JSON.parse(localStorage.getItem(h)),c="mp-"+a+"-highestscore";b=b.highestscore;Number(b)>Number(sessionStorage.getItem(c))&&(f.sendStat("score",b),sessionStorage.setItem(c,b))}},5E3)}"farm-connect"==a&&(h="woodventure_save",setInterval(function(){if(localStorage.getItem(h)){var b=
JSON.parse(localStorage.getItem(h)),c="mp-"+a+"-levelCurrent";b=b.levelCurrent;Number(b)>Number(sessionStorage.getItem(c))&&(f.sendStat("levels",b),sessionStorage.setItem(c,b))}},5E3));if("fun-game-play-bubblesshooter"==a||"gunblood"==a||"bubble-game-3"==a||"bubble-game-3-christmas-edition"==a)r=5E3,"fun-game-play-bubblesshooter"==a&&(h="fgp-bubblesshooter:scores"),"gunblood"==a&&(h="gunblood:scores"),"bubble-game-3"==a&&(h="bubble-game-3:scores",0<localStorage.getItem("mp-bubble-game-3-christmas-edition-first_run")&&
(localStorage.removeItem("mp-bubble-game-3-christmas-edition-first_run"),localStorage.removeItem(h))),"bubble-game-3-christmas-edition"==a&&(h="bubble-game-3:scores",0<localStorage.getItem("mp-bubble-game-3-first_run")&&(localStorage.removeItem("mp-bubble-game-3-first_run"),localStorage.removeItem(h))),setInterval(function(){if(localStorage.getItem(h)&&"null"!=localStorage.getItem(h)){for(var b=JSON.parse(localStorage.getItem(h)),c=0,d=0;d<b.length;d++)b[d].score>c&&(c=b[d].score);b="mp-"+a+"-score";
Number(c)>Number(sessionStorage.getItem(b))&&(f.sendStat("score",c),sessionStorage.setItem(b,c))}},r);if("sugar-mahjong"==a||"jewel-burst"==a||"bubble-burst"==a||"block-movers"==a||"parking-fury-1"==a||"parking-fury-2"==a||"parking-fury-3"==a){if("sugar-mahjong"==a)var n="sugar-mahjong:StarsPerLevel";"jewel-burst"==a&&(n="levelsStars");"bubble-burst"==a&&(n="bb_levelsStars");"block-movers"==a&&(n="blockMovers:blockmovers_progress");"parking-fury-1"==a&&(n="pf1:lvlStar");"parking-fury-2"==a&&(n="pf2:lvlStar");
"parking-fury-3"==a&&(n="ParkingFury3_01");setInterval(function(){if(localStorage.getItem(n)){var b="stars",c="mp-"+a+"-stars";if("parking-fury-1"==a)var d=JSON.parse(JSON.parse(localStorage.getItem(n)));"parking-fury-2"==a&&(d=levelsStars,localStorage.setItem(n,JSON.stringify(levelsStars)));"parking-fury-3"==a&&(d=JSON.parse(localStorage.getItem(n)));for(var e=0,g=0,k=0;k<d.length;k++)0<Number(d[k])&&(e+=Number(d[k]),g++);Number(e)>Number(sessionStorage.getItem(c))&&(f.sendStat(b,e),sessionStorage.setItem(c,
e));e=g;b="levels";c="mp-"+a+"-levels";Number(e)>Number(sessionStorage.getItem(c))&&(f.sendStat(b,e),sessionStorage.setItem(c,e))}},5E3)}if("monster-temple"==a||"jewel-curse"==a)n="levelState",setInterval(function(){var b=0,c=0;if(localStorage.getItem(n)){for(var d="mp-"+a+"-levels",e="mp-"+a+"-stars",g=localStorage.getItem(n).split(","),k=0;k<g.length;k++)0<Number(g[k])&&(c+=Number(g[k]),b+=1);Number(b)>Number(sessionStorage.getItem(d))&&(f.sendStat("levels",b),sessionStorage.setItem(d,b));Number(c)>
Number(sessionStorage.getItem(e))&&(f.sendStat("stars",c),sessionStorage.setItem(e,c))}},5E3);if("super-stack"==a||"super-stacker-2"==a||"super-scary-stacker"==a){if("super-stack"==a)var v="super-stack:sd";"super-stacker-2"==a&&(v="SuperStracker2SaveData");"super-scary-stacker"==a&&(v="super-scary-stacker:sd");setInterval(function(){var b=0;if(localStorage.getItem(v)){var c="mp-"+a+"-levels",d=JSON.parse(localStorage.getItem(v));"super-stacker-2"==a&&(d=JSON.parse(d));for(var e=0;e<d.levelState.length;e++)1<
Number(d.levelState[e])&&(b+=1);Number(b)>Number(sessionStorage.getItem(c))&&(f.sendStat("levels",b),sessionStorage.setItem(c,b))}},5E3)}if("wheely-6"==a||"wheely-7"==a||"wheely-8"==a)"wheely-6"==a&&(h="w6_svData"),"wheely-7"==a&&(h="w7_svData"),"wheely-8"==a&&(h="w8_svData"),setInterval(function(){if(null!=localStorage.getItem(h)){var b=localStorage.getItem(h),c=(b.match(/questFlag/g)||[]).length,d="levels",e="mp-"+a+"-"+d;Number(c)>Number(sessionStorage.getItem(e))&&(f.sendStat(d,c),sessionStorage.setItem(e,
c));c=(b.match(/questCar/g)||[]).length;d="cars";e="mp-"+a+"-"+d;Number(c)>Number(sessionStorage.getItem(e))&&(f.sendStat(d,c),sessionStorage.setItem(e,c));c=(b.match(/questWheel/g)||[]).length;d="wheels";e="mp-"+a+"-"+d;Number(c)>Number(sessionStorage.getItem(e))&&(f.sendStat(d,c),sessionStorage.setItem(e,c))}},5E3);if("money-movers"==a||"money-movers-2"==a||"money-movers-3"==a)"money-movers"==a&&(h="burgersDODGERS1"),"money-movers-2"==a&&(h="burgersDODGERS2"),"money-movers-3"==a&&(h="burgersDODGERS3_ozdy"),
setInterval(function(){var b=0,c=0;if(localStorage.getItem(h)){for(var d="mp-"+a+"-levels",e="mp-"+a+"-stars",g=JSON.parse(localStorage.getItem(h)),k=1;k<g.length;k++)0<Number(g[k])&&3>=Number(g[k])&&(b+=1),c+=g[k];Number(b)>Number(sessionStorage.getItem(d))&&(f.sendStat("levels",b),sessionStorage.setItem(d,b));Number(c)>Number(sessionStorage.getItem(e))&&(f.sendStat("stars",c),sessionStorage.setItem(e,c))}},5E3);"tiny-town"==a&&(h="save_2",setInterval(function(){if(localStorage.getItem(h)){var b=
"mp-"+a+"-levels";var c=JSON.parse(localStorage.getItem(h)).rank;Number(c)>Number(sessionStorage.getItem(b))&&(f.sendStat("levels",c),sessionStorage.setItem(b,c))}},5E3));"euro-football-kick-2016"!=a&&"world-football-kick-2018"!=a||setInterval(function(){var b=0,c=0,d=0,e=0,g=0;if("euro-football-kick-2016"==a)var k=7,t=5,u="EK-Game:";"world-football-kick-2018"==a&&(k=8,t=5,u="World Football Kick 2018:");for(var w=0,E=localStorage.length;w<E;++w){var p=localStorage.key(w);if(-1!==p.indexOf(u)&&-1!==
p.indexOf(":CITIES")){p=localStorage.key(w);b++;p=JSON.parse(localStorage.getItem(p));for(var C=0,D=0,y=0;y<p.length;)C+=p[y].playerScore,15<=p[y].playerScore&&(D++,e++),y++;d+=C;p.length>=k&&(c++,D>=t&&g++)}Number(b)>Number(sessionStorage.getItem("campeonatosComenzados"))&&(f.sendStat("campeonatos_comenzados",b),sessionStorage.setItem("campeonatosComenzados",b));Number(c)>Number(sessionStorage.getItem("campeonatosTerminados"))&&(f.sendStat("campeonatos_terminados",c),sessionStorage.setItem("campeonatosTerminados",
c));Number(d)>Number(sessionStorage.getItem("totalGoles"))&&(f.sendStat("total_goles",d),sessionStorage.setItem("totalGoles",d));Number(e)>Number(sessionStorage.getItem("totalPartidosPerfectos"))&&(f.sendStat("total_partidos_perfectos",e),sessionStorage.setItem("totalPartidosPerfectos",e));Number(g)>Number(sessionStorage.getItem("totalCampeonatosPerfectos"))&&(f.sendStat("total_campeonatos_perfectos",g),sessionStorage.setItem("totalCampeonatosPerfectos",g))}},5E3);"twisted-city"==a&&setInterval(function(){for(var b=
JSON.parse(localStorage.getItem("ROM:sg")),c=0,d=0,e=0,g=1;30>=g;){1==b.lv[g].u&&c++;for(var k=0;k<b.lv[g].g.length;)d+=b.lv[g].g[k].s,k++;g++}for(g=1;6>=g;)1==b.bl[g].u&&e++,g++;Number(c)>Number(sessionStorage.getItem("mp-"+a+"-totalLevels"))&&(f.sendStat("levels",c),sessionStorage.setItem("mp-"+a+"-totalLevels",c));Number(d)>Number(sessionStorage.getItem("mp-"+a+"-currentStars"))&&(f.sendStat("stars",d),sessionStorage.setItem("mp-"+a+"-currentStars",d));Number(e)>Number(sessionStorage.getItem("mp-"+
a+"-totalBonus"))&&(f.sendStat("bonus",e),sessionStorage.setItem("mp-"+a+"-totalBonus",e))},5E3);"undead-drive"==a&&setInterval(function(){for(var b=JSON.parse(localStorage.getItem("GobletGamesZombie")),c=0,d=0;25>c;)b.achievements.achievement[c].completed&&d++,c++;Number(d)>Number(sessionStorage.getItem("mp-"+a+"-total_achievements"))&&(f.sendStat("achievements",d),sessionStorage.setItem("mp-"+a+"-total_achievements",d))},5E3);"fun-game-play-mahjong"==a&&setInterval(function(){for(var b=JSON.parse(localStorage.getItem("FGPMahjongData")),
c=0,d=0;62>c;)1==b.levels[c].isCompleate&&d++,c++;Number(d)>Number(sessionStorage.getItem("mp-"+a+"-total_levels"))&&(f.sendStat("levels",d),sessionStorage.setItem("mp-"+a+"-total_levels",d))},5E3);"heroes-of-myths"==a&&setInterval(function(){if(null!=localStorage.getItem("heroes_of_Myths_game.0.0.3")){var b=JSON.parse(localStorage.getItem("heroes_of_Myths_game.0.0.3"));try{var c=Number(b.openLevels);c>Number(sessionStorage.getItem("mjLevels"))&&(f.sendStat("levels",c),sessionStorage.setItem("mjLevels",
c));var d=Number(b.upgradeHero_skillOpen[0].armor)+Number(b.upgradeHero_skillOpen[0].attack)+Number(b.upgradeHero_skillOpen[0].health)+Number(Number(b.upgradeHero_skillOpen[0].speed));d>Number(sessionStorage.getItem("mjPerseus"))&&(f.sendStat("perseus",d),sessionStorage.setItem("mjPerseus",d));var e=Number(b.upgradeHero_skillOpen[1].armor)+Number(b.upgradeHero_skillOpen[1].attack)+Number(b.upgradeHero_skillOpen[1].health)+Number(Number(b.upgradeHero_skillOpen[1].speed));e>Number(sessionStorage.getItem("mjHercules"))&&
(f.sendStat("hercules",e),sessionStorage.setItem("mjHercules",e));var g=Number(b.upgradeHero_skillOpen[2].armor)+Number(b.upgradeHero_skillOpen[2].attack)+Number(b.upgradeHero_skillOpen[2].health)+Number(Number(b.upgradeHero_skillOpen[2].speed));g>Number(sessionStorage.getItem("mjAchilles"))&&(f.sendStat("achilles",g),sessionStorage.setItem("mjAchilles",g));var k=Number(b.upgradeGod_skillOpen[0].power)+Number(b.upgradeGod_skillOpen[0].reload);k>Number(sessionStorage.getItem("mjPoseidon"))&&(f.sendStat("poseidon",
k),sessionStorage.setItem("mjPoseidon",k));var t=Number(b.upgradeGod_skillOpen[1].power)+Number(b.upgradeGod_skillOpen[1].reload);t>Number(sessionStorage.getItem("mjZeus"))&&(f.sendStat("zeus",t),sessionStorage.setItem("mjZeus",t));var u=Number(b.upgradeGod_skillOpen[2].power)+Number(b.upgradeGod_skillOpen[2].reload);u>Number(sessionStorage.getItem("mjHades"))&&(f.sendStat("hades",u),sessionStorage.setItem("mjHades",u))}catch(w){}}},5E3);"fgp-plumber-game"==a&&setInterval(function(){if(null!=localStorage.getItem("fgp-plumber:sg")){var b=
JSON.parse(localStorage.getItem("fgp-plumber:sg"));null!=b.ol&&(b=b.ol,Number(b)>Number(sessionStorage.getItem("tempLevels"))&&(f.sendStat("levels",b),sessionStorage.setItem("tempLevels",b)))}},5E3);"brave-tomato-2"==a&&(v="LEVEL",setInterval(function(){var b=0,c=0;if(null!=localStorage.getItem("LEVEL1")){for(var d=1;40>=d;d++)0<Number(localStorage.getItem("LEVEL"+d))&&(b+=1,c+=Number(localStorage.getItem("LEVEL"+d)));Number(b)>Number(sessionStorage.getItem("tempLevels"))&&(f.sendStat("levels",b),
sessionStorage.setItem("tempLevels",b));Number(c)>Number(sessionStorage.getItem("tempStars"))&&(f.sendStat("stars",c),sessionStorage.setItem("tempStars",c))}},5E3));"kitty-diver"==a&&setInterval(function(){if(null!=localStorage.getItem("kd_sv")){for(var b=JSON.parse(localStorage.getItem("kd_sv")),c=0,d=0,e=0,g;32>c;)g=Number(b.lv[c]),0<g&&(d+=1,e+=g),c++;Number(d)>Number(sessionStorage.getItem(a+"_levels"))&&(f.sendStat("level",d),sessionStorage.setItem(a+"_levels",d));Number(e)>Number(sessionStorage.getItem(a+
"_stars"))&&(f.sendStat("star",e),sessionStorage.setItem(a+"_stars",e))}},5E3);"road-of-fury-desert-strike"==a&&setInterval(function(){if(null!=localStorage.getItem("rof3:sg")){var b=JSON.parse(localStorage.getItem("rof3:sg")),c=JSON.parse(b.pl);b=Math.round(c.money);var d=Math.round(c.zonebest0),e=Math.round(c.zonebest1),g=Math.round(c.zonebest2),k=Math.round(c.zone0)+Math.round(c.zone1)+Math.round(c.zone2);c=Math.round(c.zonekillbest0)+Math.round(c.zonekillbest1)+Math.round(c.zonekillbest2);Number(b)>
Number(sessionStorage.getItem(a+"_money"))&&(f.sendStat("money",b),sessionStorage.setItem(a+"_money",b));Number(d)>Number(sessionStorage.getItem(a+"_zonebest0"))&&(f.sendStat("zonebest0",d),sessionStorage.setItem(a+"_zonebest0",d));Number(e)>Number(sessionStorage.getItem(a+"_zonebest1"))&&(f.sendStat("zonebest1",e),sessionStorage.setItem(a+"_zonebest1",e));Number(g)>Number(sessionStorage.getItem(a+"_zonebest2"))&&(f.sendStat("zonebest2",g),sessionStorage.setItem(a+"_zonebest2",g));Number(k)>Number(sessionStorage.getItem(a+
"_distance"))&&(f.sendStat("distance",k),sessionStorage.setItem(a+"_distance",k));Number(c)>Number(sessionStorage.getItem(a+"_kills"))&&(f.sendStat("kills",c),sessionStorage.setItem(a+"_kills",c))}},5E3);if("snail-bob-5"==a||"snail-bob-6"==a||"snail-bob-7"==a||"snail-bob-8"==a)"snail-bob-5"==a&&(q="sb5_svData"),"snail-bob-6"==a&&(q="sb6_svData"),"snail-bob-7"==a&&(q="sb7_svData"),"snail-bob-8"==a&&(q="sb8_svData"),setInterval(function(){if(null!=localStorage.getItem(q)){var b=JSON.parse(localStorage.getItem(q)),
c=0,d=0,e;for(e in b)if(b.hasOwnProperty(e)){if("lvl"==e&&0<b[e]){var g="level";Number(b[e])>Number(sessionStorage.getItem(a+"_"+g))&&(f.sendStat(g,b[e]),sessionStorage.setItem(a+"_"+g,b[e]))}"btnMG1"==e&&0<b[e]&&(g="minigame1",Number(b[e])>Number(sessionStorage.getItem(a+"_"+g))&&(f.sendStat(g,b[e]),sessionStorage.setItem(a+"_"+g,b[e])),c+=b[e]);"btnMG2"==e&&0<b[e]&&(g="minigame2",Number(b[e])>Number(sessionStorage.getItem(a+"_"+g))&&(f.sendStat(g,b[e]),sessionStorage.setItem(a+"_"+g,b[e])),c+=b[e]);
"btnMG3"==e&&0<b[e]&&(g="minigame3",Number(b[e])>Number(sessionStorage.getItem(a+"_"+g))&&(f.sendStat(g,b[e]),sessionStorage.setItem(a+"_"+g,b[e])),c+=b[e]);"btnMG4"==e&&0<b[e]&&(g="minigame4",Number(b[e])>Number(sessionStorage.getItem(a+"_"+g))&&(f.sendStat(g,b[e]),sessionStorage.setItem(a+"_"+g,b[e])),c+=b[e]);-1!==e.indexOf("stars")&&0<b[e]&&(d+=b[e])}g="minigames";Number(c)>Number(sessionStorage.getItem(a+"_"+g))&&(f.sendStat(g,c),sessionStorage.setItem(a+"_"+g,c));g="stars";Number(d)>Number(sessionStorage.getItem(a+
"_"+g))&&(f.sendStat(g,d),sessionStorage.setItem(a+"_"+g,d))}},5E3);"moving-up"==a&&setInterval(function(){if(null!=localStorage.getItem("moving_up")){var b=JSON.parse(localStorage.getItem("moving_up")),c=b.hs,d="score";Number(c)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,c),sessionStorage.setItem(a+"_"+d,c));d="level";b=b.lvl;Number(b)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,b),sessionStorage.setItem(a+"_"+d,b))}},5E3);if("go-robots"==a||"go-robots-2"==a)"go-robots"==a&&
(h="bp_sg_robots_1"),"go-robots-2"==a&&(h="bp_sg_robots_2"),setInterval(function(){if(null!=localStorage.getItem(h)){var b=JSON.parse(localStorage.getItem(h)),c=b.totalScore,d="score";Number(c)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,c),sessionStorage.setItem(a+"_"+d,c));d="level";b=b.levels.length;Number(b)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,b),sessionStorage.setItem(a+"_"+d,b))}},5E3);if("agent-of-descend"==a){h="gameData";r=5E3;var m="levels";sessionStorage.setItem(a+
"_"+m,60);setInterval(function(){if(null!=localStorage.getItem(h)){var b=JSON.parse(localStorage.getItem(h)).currLevelUnlocked;Number(b)<Number(sessionStorage.getItem(a+"_"+m))&&(f.sendStat(m,b),sessionStorage.setItem(a+"_"+m,b));0==sessionStorage.getItem(a+"_"+m)&&(f.sendStat("finished",1),sessionStorage.setItem(a+"_"+m,-1))}},r)}if("instagirls-dress-up"==a||"instagirls-halloween-dress-up"==a){if("instagirls-dress-up"==a)var q="namespace:PlayerModel_";"instagirls-halloween-dress-up"==a&&(q="InstagirlHalloween:PlayerModel_");
m="goals";setInterval(function(){if(null!=localStorage.getItem(q+"0")){for(var b=0,c=0;6>=b;)l=JSON.parse(localStorage.getItem(q+b)),Number(l.activeTaskIndex)>c&&(c=Number(l.activeTaskIndex)),b++;Number(c)>Number(sessionStorage.getItem(a+"_"+m))&&(f.sendStat(m,c),sessionStorage.setItem(a+"_"+m,c))}},5E3)}if("transmorpher"==a){m="levels";var z=0;setInterval(function(){null!=localStorage.getItem("tr_1")&&(z=JSON.parse(localStorage.getItem("tr_1")).last,Number(z)>Number(sessionStorage.getItem(a+"_"+
m))&&(f.sendStat(m,z),sessionStorage.setItem(a+"_"+m,z)))},5E3)}"transmorpher-3"==a&&(h="tr_3.0",setInterval(function(){if(null!=localStorage.getItem(h)){var b=JSON.parse(localStorage.getItem(h)),c=b.last,d="levels";Number(c)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,c),sessionStorage.setItem(a+"_"+d,c));c=0;var e=b.stars.length,g=0;for(d="stars";c<e;)g+=b.stars[c],c++;Number(g)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,g),sessionStorage.setItem(a+"_"+d,g))}},5E3));"extreme-bikers"==
a&&(h="xbt_02",r=5E3,sessionStorage.setItem(a+"_levels",1),sessionStorage.setItem(a+"_seconds",600),setInterval(function(){if(null!=localStorage.getItem(h)){for(var b=JSON.parse(localStorage.getItem(h)),c=0,d=0,e=0;12>d;)0<b.starsList[d].seconds&&(e+=b.starsList[d].seconds,c++),d++;Number(c)>Number(sessionStorage.getItem(a+"_levels"))&&(f.sendStat("levels",c),sessionStorage.setItem(a+"_levels",c));12<=c&&Number(e)<Number(sessionStorage.getItem(a+"_seconds"))&&(f.sendStat("seconds",e),sessionStorage.setItem(a+
"_seconds",e))}},r));if("grindcraft-remastered"==a){var A=0,B=0;setInterval(function(){if(null!=localStorage.getItem("GrindcraftData")){var b=JSON.parse(JSON.parse(localStorage.getItem("GrindcraftData")));A=b.achievement.length;Number(A)>Number(sessionStorage.getItem(a+"_achievements"))&&(f.sendStat("achievements",A),sessionStorage.setItem(a+"_achievements",A));"Chasm Mine"===b.level.trim()&&(B=1);Number(B)>Number(sessionStorage.getItem(a+"_map"))&&(f.sendStat("map",B),sessionStorage.setItem(a+"_map",
B))}},5E3)}"bob-the-robber-5"==a&&setInterval(function(){if(null!=localStorage.getItem("bob_robber_v5:stages")){for(var b=JSON.parse(localStorage.getItem("bob_robber_v5:stages")),c=0,d=0,e=0;c<b.length;)0==b[c].locked&&d++,e+=b[c].stars,c++;Number(d)>Number(sessionStorage.getItem(a+"_levels"))&&(f.sendStat("levels",d),sessionStorage.setItem(a+"_levels",d));Number(e)>Number(sessionStorage.getItem(a+"_stars"))&&(f.sendStat("stars",e),sessionStorage.setItem(a+"_stars",e))}},5E3);"bob-the-robber"==a&&
setInterval(function(){if(null!=localStorage.getItem("levelsScoreBOBR11")){for(var b=JSON.parse(localStorage.getItem("levelsScoreBOBR11")),c=0,d=0;5>c;)0<b[c]&&d++,c++;b=0;c=JSON.parse(localStorage.getItem("mas_memberBOBR11"));if(5<=d)for(var e=2;7>e;)1<c[e]&&(b+=c[e]),e++;b-=5;Number(d)>Number(sessionStorage.getItem(a+"_levels"))&&(f.sendStat("levels",d),sessionStorage.setItem(a+"_levels",d));Number(b)>Number(sessionStorage.getItem(a+"_stars"))&&(f.sendStat("stars",b),sessionStorage.setItem(a+"_stars",
b))}},5E3);"paintball-racers"==a&&setInterval(function(){for(var b=0,c=0,d=0;4>b;){if(null!=localStorage.getItem("paintball-racers_player_"+b)){var e=JSON.parse(localStorage.getItem("paintball-racers_player_"+b));Number(e.progress)>c&&(c=e.progress);Number(e.stars)>d&&(d=e.stars);c>Number(sessionStorage.getItem(a+"_levels"))&&(f.sendStat("levels",c),sessionStorage.setItem(a+"_levels",c));d>Number(sessionStorage.getItem(a+"_stars"))&&(f.sendStat("stars",d),sessionStorage.setItem(a+"_stars",d))}b++}},
5E3);"habbo-clicker"==a&&setInterval(function(){try{var b=0,c=0,d=0,e=0;if(null!=localStorage.getItem("habbo_clicker_1.4:gameData")){var g=JSON.parse(localStorage.getItem("habbo_clicker_1.4:gameData"));8<=Number(g.tutorialStep)&&(b=8);1E5<=Number(g.money)&&(d=1E5);1E6<=Number(g.money)&&(d=1E6);75<=Number(g.progress)&&(e=75);c=Number(g.resets);b>Number(sessionStorage.getItem(a+"_tutorial"))&&(f.sendStat("tutorial",b),sessionStorage.setItem(a+"_tutorial",b));d>Number(sessionStorage.getItem(a+"_money"))&&
(f.sendStat("money",d),sessionStorage.setItem(a+"_money",d));e>Number(sessionStorage.getItem(a+"_progress"))&&(f.sendStat("progress",e),sessionStorage.setItem(a+"_progress",e));c>Number(sessionStorage.getItem(a+"_floor"))&&(f.sendStat("floor",c),sessionStorage.setItem(a+"_floor",c))}}catch(k){console.log(k)}},5E3);"flying-halloween-witch"==a&&(h="fhwitch",setInterval(function(){if(null!=localStorage.getItem(h)){var b=JSON.parse(localStorage.getItem(h)).bs;Number(b)>Number(sessionStorage.getItem(a+
"_score"))&&(f.sendStat("score",b),sessionStorage.setItem(a+"_score",b))}},5E3));if("trollface-quest-horror"==a||"trollface-quest-horror-2"==a||"trollface-quest-video-memes-and-tv-shows"==a||"trollface-quest-video-memes-and-tv-shows-2"==a)"trollface-quest-horror"==a&&(h="playtomax_trollface_horror_1_data"),"trollface-quest-horror-2"==a&&(h="playtomax_trollface_horror_2_data"),"trollface-quest-video-memes-and-tv-shows"==a&&(h="playtomax_trollface_collection_part1_data"),"trollface-quest-video-memes-and-tv-shows-2"==
a&&(h="playtomax_trollface_collection_part2_data"),setInterval(function(){if(null!=localStorage.getItem(h)){var b=JSON.parse(localStorage.getItem(h)),c=b.totalScore,d="score";Number(c)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,c),sessionStorage.setItem(a+"_"+d,c));var e=c=0;for(d="levels";e<=b.levelScore.length;)Number(b.levelScore[e])&&c++,e++;Number(c)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,c),sessionStorage.setItem(a+"_"+d,c))}},5E3);if("trollface-quest-usa"==a||"trollface-quest-usa-2"==
a||"trollface-quest-horror-3"==a)"trollface-quest-usa"==a&&(h="tfqusa1:sg"),"trollface-quest-usa-2"==a&&(h="tfqusa2:sg"),"trollface-quest-horror-3"==a&&(h="tfqhorror3:sg"),setInterval(function(){if(null!=localStorage.getItem(h)){for(var b=JSON.parse(localStorage.getItem(h)),c=-1,d=0;17>=d;)null!=b.invsav["l_"+d+"_t"]&&c++,d++;Number(c)>Number(sessionStorage.getItem(a+"_level"))&&(f.sendStat("level",c),sessionStorage.setItem(a+"_level",c))}},5E3);if("my-dolphin-show"==a||"my-dolphin-show-2"==a)"my-dolphin-show"==
a&&(h="mds_1"),"my-dolphin-show-2"==a&&(h="mds_2"),setInterval(function(){if(null!=localStorage.getItem(h)){var b=JSON.parse(localStorage.getItem(h)),c=b.score,d="score";Number(c)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,c),sessionStorage.setItem(a+"_"+d,c));var e=c=0;for(d="dolphins";e<b.openDolphin.length;)0<Number(b.openDolphin[e])&&c++,e++;Number(c)>Number(sessionStorage.getItem(a+"_"+d))&&(f.sendStat(d,c),sessionStorage.setItem(a+"_"+d,c))}},5E3)}-1<["heroes-of-match-3","adam-and-eve",
"adam-and-eve-2","adam-and-eve-3","adam-and-eve-4","geometry-dash-neon-world","frisbee-forever-2","dead-zed","mexico-rex","larex","miner","the-last-survivors","8-gears","kitty-scramble","robbie","vex-3","vex-4","vex-5","moto-x3m-spooky-land","moto-x3m","zombie-killers","duo","fly-or-die","zombie-assassin","maze-monster","pumpkin-rider","stupid-zombies","stupid-zombies-2","robo-racing","desktop-racing-2","car-eats-car-2","madmen-racing","super-oscar","love-pin-3d","soccer-shoot-3d","pen-run-online",
"2048-balls-3d","fun-race-3d","bob-the-robber-2","beat-line","best-link","cristiano-ronaldo-kick-n-run","olli-ball","journey-to-the-north","fruit-slice",,"fall-race-3d","galaxy-attack-virus-shooter","merge-cakes","space-blaze-2","dead-paradise-3"].indexOf(a)&&(x=1,console.log(">>> "+a),f.loadPartner("game-distribution/"+a));1>x&&(console.log("!!! "+a),f.loadPartner("game-distribution/"+a+".min"))})();