var readlinesync = require("readline-sync")
Stuk1()

function Stuk1() {
    console.clear();
    const vraag1 = readlinesync.question(`What? ... Where am i?
 Where are you?\n
 *explores area, then sees the last cascade in de distance*\n
 I know that place.\n
Did we found water? Mom, dad?\n
I remember being so thirsty... we took a chance, and followed a dry river bed to someplace beautiful.\n Someplace dangerous and in that place someone said if you meet a certain dragon in a cave and u tame, slay, or approach it will help you find youre parents.\n
I know my parents where there.\n I know they're waiting for me.\n I need to find my parents!\n\n A: Explore the next area behind  the last cascade \n B: explore in the water`)
    if (vraag1 === "A") {
        Stuk2()
    }
    else if (vraag1 === "B") {
        Stuk3()
    }
    else {
        Stuk1
    }
}

function Stuk2() {
    console.clear();
    const vraag2 = readlinesync.question(`*Explores the area behind the last candace.\n There is an abandoned house should I explore it?\n\n A: Yes\n B: No, go back to the last candace\n`)
    if (vraag2 === "A") {
        Stuk4();
    }
    else if (vraag2 === "B") {
        Stuk5();
    }
    else {
        Stuk2();
    }
}

function Stuk3() {
    console.clear();
    const vraag3 = readlinesync.question(`*Explores in the water.\n *Picks up 2 fishes for dinner.\n Needs to find wood to cook up the fish but sees a bear in the distance.\n What should I do?\n\n A: Fight the bear\n B: Wait for the bear to go away from the woods\n`)
    if (vraag3 === "A") {
        Stuk6();
    }
    else if (vraag3 === "B") {
        Stuk7();
    }
    else {
        Stuk3();
    }
}

function Stuk4() {
    console.clear();
    const vraag4 = readlinesync.question(`*Explores the cave silently.\n Finds ancient golden helmet and chainmail chest plate.\n The cave goes deeper in Should I go?\n\n A: Yes\n B:No\n`)
    if (vraag4 === "A") {
        Stuk8();
    }
    else if (vraag4 === "B") {
        Stuk9();
    }
    else {
        Stuk4();
    }
}

function Stuk5() {
    console.clear();
    const vraag5 = readlinesync.question(`*Gets back to the last candace.\n But something feels strange?!?\n *sees a village nearby.\n When Appie arrived they were staring at him from their houses and everyone was shouting  GO AWAY!!!.\n What should I do?\n\n A: Leave the village\n B: keep walking in the village\n`)
    if (vraag5 === "A") {
        Stuk10();
    }
    else if (vraag5 === "B") {
        Stuk11();
    }
    else {
        Stuk5();
    }
}

function Stuk6() {
    console.clear();
 { console.log("*Fights the bear. SOMEBODY HELP!!!\n Meanwhile bear just chilling and eating his flesh.\n * 3 hours later Appie is dead.\n") } 
   
}

function Stuk7() {
    console.clear();
    const vraag6 = readlinesync.question(`*Waits for the bear to go away.\n (4 hours later) Finally, the bear is gone.\n You venture into the woods to gather some wood to cook up the fish.\n As you search for firewood, you suddenly notice a strange, luminous creature in the distance, its soft glow casting an eerie light in the forest.\n What should I do?\n\n A: Approach the strange creature cautiously to investigate\n B: Stay hidden and observe the creature from a safe distance.\n `)
    if (vraag6 === "A") {
        Stuk12();
    }
    else if (vraag6 === "B") {
        Stuk13();
    }
    else {
        Stuk7();
    }
}

function Stuk8() {
    console.clear();
    const vraag7 = readlinesync.question(`*Goes deeper into the cave, guided by the faint light of your torch.\n You discover a hidden chamber filled with ancient treasures.\n Among them, you find a mystical amulet. What should I do?\n\n A: Take the amulet and leave the cave\n B: Leave the amulet and exit the cave\n`)
    if (vraag7 === "A") {
        Stuk14();
    }
    else if (vraag7 === "B") {
        Stuk15();
    }
    else {
        Stuk8();
    }
}

function Stuk9() {
    console.clear();
    const vraag8 = readlinesync.question(`You decide not to venture deeper into the cave, but as you turn to leave, you spot a colossal dragon in the distance, hurtling towards you at an incredible speed.\n Panic sets in, and you must make a swift choice:\n\n A: With adrenaline pumping, you frantically search for a hiding spot, hoping to remain concealed and avoid the dragon's swift approach.\n B: You gather your courage and decide to try and tame the oncoming dragon, hoping to forge an unlikely connection.\n C:Fueled by fear, you opt to run as fast as you can, hoping to escape the dragon's path before it reaches you.\n D: In a bold but desperate move, you grab your weapon, preparing to stand your ground and face the approaching dragon head-on, ready to do battle.\n `)
    if (vraag8 === "A") {
        Stuk16();
    }
    else if (vraag8 === "B") {
        Stuk17();
    }
    else if (vraag8 === "C") {
        Stuk18();
    }
    else if (vraag8 === "D") {
        Stuk19();
    }
    else {
        Stuk9();
    }
}

function Stuk10() {
    console.clear();
    const vraag9 = readlinesync.question(`*Leaves the unfriendly village and continues your journey.\n You come across a crossroads.\n Which path should you take?\n\n A: The path leading into the dense forest.\n B: The path leading to a barren desert.\n`)
    if (vraag9 === "A") {
        Stuk20();
    }
    else if (vraag9 === "B") {
        Stuk21();
    }
    else {
        Stuk10();
    }
}

function Stuk11() {
    console.clear();
 { console.log("As Appie continues to walk into the village, the villagers suddenly surround him, their expressions filled with hostility and suspicion.\n\n They demand to know his business and intentions.\n Appie tries to explain his situation, but the tension in the air only grows.\n Despite his efforts to communicate peacefully, the villagers remain wary, and their unease escalates.\n In a tragic turn of events, they make a terrible mistake.\n In their fear, they accidentally harm Appie, and he falls to the ground, his life slipping away.\n Appie's death is a sorrowful one, marred by a misunderstanding and fear.\n It serves as a stark reminder of the consequences of prejudice and distrust.\n")} 
   
}

function Stuk12() {
    console.clear();
    const vraag10 = readlinesync.question(`Appie, with a mix of curiosity and caution, approaches the strange creature and asks, "What is your name?" The creature, in a voice as ethereal as its form, replies, "My name is Thomas."\n\n As Thomas begins to draw closer, his luminescent presence casting an enchanting glow, Appie is faced with a decision:\n\n A: Attack the creature\n B:	Run away from the creature\n`)
    if (vraag10 === "A") {
        Stuk22();
    }
    else if (vraag10 === "B") {
        Stuk23();
    }
    else {
        Stuk12();
    }
}

function Stuk13() {
    console.clear();
 { console.log("You stay hidden from the creature and observe him but he just disappeared….\n\n\nyou suddenly see him behind you with an axe and slices you’re throat and you die!!!\n") } 
   
}

function Stuk14() {
    console.clear();
 { console.log("You grab the amulet and hastily exit the cave, but your escape is cut short as pursuers appear on the horizon.\n\n Desperation fuels your sprint, but a deadly arrow finds its mark, and darkness swiftly claims you.\n") } 
   
}

function Stuk15() {
    console.clear();
 { console.log("Abandoning the amulet, you emerge from the cave, only to confront menacing bandits.\n\n Their cruel words cut deep, and a fiery rage propels your futile defense.\n But, overwhelmed, you succumb to a dozen fatal stabs, your life extinguished.\n") } 
   
}

function Stuk16() {
    console.clear();
 { console.log("You attempt to hide, but he uncovers you, and with a searing breath, you're consumed by the dragon's fiery wrath.\n Your existence ends in an instant.\n") } 
   
}

function Stuk17() {
    console.clear();
    const vraag11 = readlinesync.question(`You cautiously offer the dragon raw beef, and miraculously, it accepts your offering.\n\n\ You inquire about your parents, and it responds, "Hop on, I'll take you to them."\n Your decision awaits...\n\n A: Hop on\n B: Nothing\n`)
    if (vraag11 === "A") {
        Stuk24();
    }
    else if (vraag11 === "B") {
        Stuk25();
    }
    else {
        Stuk17();
    }
}

function Stuk18() {
    console.clear();
 { console.log("You run away but he took of you’re right leg and you scream in pain...\n\n\n *AAAAAAAAAAAAAA please someone help me and because of to much bleeding you die\n ") } 
   
}

function Stuk19() {
    console.clear();
 { console.log("You attempt to defend yourself with your wooden daggers, but the dragon’s sheer strength surprises you.\n\n\n It effortlessly knocks your weapons aside, delivering a powerful headbutt that sends you crashing into a nearby wall.\n\n\n The impact leaves you severely injured, unable to move. The dragon looms over you, and you can only watch in horror as it approaches.\n\n\n Your agonizing screams fill the air as you meet a tragic fate in the end.\n") } 
   
}

function Stuk20() {
    console.clear();
 { console.log("You took the path  As you venture down the path leading into the dense forest,\n you find yourself immersed in a vibrant world of lush greenery and the hum of wildlife.\n\n However, you soon notice that the forest is teeming with a peculiar species of bugs, one of which is known to carry a deadly poison.\n\n\ You're aware that their venom can be used to create a life-saving antidote, but a single touch from these creatures means instant death.\n\n You tread carefully, avoiding any contact with the deadly insects. Suddenly, a rustling noise startles you.\n\n In your panic, you accidentally brush against one of the poisonous bugs, and within moments, your world darkens, and you meet a tragic end.\n") } 
   
}

function Stuk21() {
    console.clear();
 { console.log("You choose the path that leads you into a barren desert.\n\n The relentless sun beats down on you, and the arid winds make your throat feel parched.\n\n Dehydrated and with a growing sense of weakness, you struggle to continue.\n\n Your vision blurs, and you feel the weight of exhaustion pressing down on you.\n\n Hours pass, and with each step, your strength wanes.\n\n In the end, the unforgiving desert claims you, and you meet a tragic fate.\n") } 
   
}

function Stuk22() {
    console.clear();
 { console.log("You attempt to defend yourself and lunge at the creature, but as you swing your weapon,\n Thomas swiftly evades your attacks with his mysterious and otherworldly powers.\n\n His movements are so graceful and swift that your strikes miss their mark.\n\n With a flick of his hand, Thomas summons a glowing blade that hovers in the air for a moment before it zips through the air.\n\n Before you can react, it slices through the air and strikes you, ending your life with a single, precise cut.\n")} 
   
}

function Stuk23() {
    console.clear();
 { console.log("As you step back, Thomas vanishes, reappearing before you, blocking your escape.\n\n A mysterious force thrusts you into a dark abyss, and dread overwhelms you.\n\n In the blackness, something cold brushes your leg, and unseen presences surround you.\n\n A clammy hand grips your ankle, and fear grips you.\n\n You're torn apart by these forces, your screams swallowed by the abyss.\n\n Your existence dissolves into nothingness, consumed by the darkness.\n")}
   
}

function Stuk24() {
    console.clear();
 { console.log("You board the dragon, soaring through the sky to a mysterious island.\n\n Your parents await in the distance, and tears well up as you embrace them.\n\n I missed you, you whisper, recounting your tireless search. They explain the dragon's protection, and you share tears of happiness.\n\n Together, you return home, cherishing the love that reunited your family.\n") } 
   
}

function Stuk25() {
    console.clear();
 { console.log("THIS IS AN EASTEREGG") } 
   
}