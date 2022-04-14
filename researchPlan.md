# UX Research Plan for “The Faster One”


**Author:**<br>
Kevin

**Last Updated:**<br>
29.03.22

**Stakeholders:**<br>
Angie, Maria & Guillaume – PM <br>
Gina & Niklas – Dev Team <br>
Giuliana – Design<br>
Users

### Background:
"The Faster One" is inspired by the classic wooden maze puzzle game, as seen in the picture below.
The goal of the game is to navigate the ball in to the right hole to score a point.
To control the ball, just tilt your connected smartphone which is using the device's gyroscope.
It's a browser based single and multiplayer game – 1-4 Players.
The setup to play would be: Use any device (e.g. Smart TV, Laptop, … it just needs an internet browser) as a screen and one or more smartphones as controllers.
<br><br>
![](../../../../Mobile Documents/com~apple~CloudDocs/HSLU/UX Research/kuglespil.png)

## Research Questions
| Topic | Question | Priority | 
|-------|----------|----------|
| Accessibility | Is it usable for people with restricted mobility (hand/arm) | low |
| Accessibility | Is it usable for people with impaired vision (e.g. color, contrast) | low |
| Onboarding of the player(s) | Can the player(s) join a game via the QR code | high |
| Onboarding of the player(s) | Is an additional number/word code needed | high |
| Control mechanisms of the game | Can they use the phones gyro sensor to yaw, pitch & roll to move the ball working – on AndroidOS and iOS | high |
| Control mechanisms of the game | Need for buttons as an alternative | medium |
| Control mechanisms of the game | Is the standard sensitivity working for everyone or is there a need to adjust it | medium |
| Control mechanisms of the game | How will they hold the mobile device instinctively | medium |
| Functionalities of the game | Can they start a game | high |
| Functionalities of the game | Do they figure out how to win/how to score a point | high |
| Functionalities of the game | Can they read the points scored and time left in a game (In single and multiplayer) | high |
| Functionalities of the game | Can they switch between single and multiplayer mode | high |
| Functionalities of the game | Is there a need to change the game duration and or the winning score | low |
| Functionalities of the game | Can they restart the game | high |
| Functionalities of the game | Can they exit to the main menu | high |
| Functionalities of the game | Is it fun for them to play in single player | low |
| Functionalities of the game | Is it fun for them to play in multiplayer | low |
| Functionalities of the game | How do they like it – atmosphere, sounds etc. | low |
| Functionalities of the game | Does the player know who won (multiplayer) | high |
| Functionalities of the game | Do they understand the leaderboard (multiplayer) |

### In short:
1. Did the experience work as intended?
2. Was the experience easy to understand?
3. Did people enjoy the experience or not?

### Out of Scope:
Testing with participants with impaired vision and or restricted mobility.


### Technical Setup
Camera(s) to film the users behaviors
1-2 Smartphones with working gyro sensors – best case one iPhone and one Android – maybe using the device of the participant if the coded prototype is working till then
TV/Beamer (with browser capabilities or hooked to a PC) or Laptop

### Methodology
- 5 seconds testing (optional)
- Usability Testing – observing the participants
- User interviews – semi structured

Ca. 20min per participant – will be more precise after further testing

## Scenarios 
###Scenarios for Figma Prototype
(for an easier use in german)

Verbinde dein Smartphone mit Figma<br>
Beginne ein Spiel als Player 1<br>
Gewinne ein Spiel (P1)<br>
Starte ein Spiel neu (P1)<br>
Beende ein Spiel und kehre zum Startbildschirm zurück (P1)<br>
Tritt einem Spiel als Player 2 bei<br>
Spiele ein Spiel als P2<br>
Wer hat gewonnen? P1 oder P2<br>
Starte ein Spiel neu (P2)<br>
Beende ein Spiel (P2)<br>

### Script for Figma Prototyp
(for an easier use in german)

**Briefing:**
Ein Single oder Multiplayer Spiel, bei Multiplayer ein Partyspiel, bei dem der Schnellere gewinnt.Der Prototyp ist hier erstmal noch nicht 100% funktionell. Falls du also mit einer noch fehlenden Funktion findest, werde ich dich an den jeweiligen Orten dann nochmals instruieren/informieren.

**Fragen vor Spieltest:**<br>
Hast du schon mal mitgemacht?<br>
Was hast du in letzter Zeit so gespielt? Was sind deine Favoriten?<br>
Spielst du Geschicklichkeits/Mini Partyspiele? Wenn ja, welche?<br>
Spielst du regelmässig?<br>
Wo/wie spielst du?<br>
Bereits mit einer Wii gespielt?<br>
Bereits Geschicklichkeits- Geschwindigkeitsspiele gespielt?<br>
Was hast da du für ein Handy? OS Version? Falls Code ready und Handy i.O. Test mit TPs eigenem Handy (11. überspringen)<br>
TP das Testhandy mit gleichem OS zeigen und fragen ob vertraut<br>
Zum Test übergehen.

**Fragen/Anweisungen während Spieltest (Figma):**<br>
Hier ist die Spieleseite bereits für dich geöffnet.<br>
Verbinde mal dein Handy und beginne ein Spiel alleine. Sprich deine Gedanken aus während dem Test - QR etc logisch?<br>
Falls Steuerung oder so nicht klar, fragen: Was erwartest du dabei? Nur unterstützen wenn notwendig für weiteren Test<br>
Spiele eine erste Runde – wie hält TP sein Mobile, checkt TP die Steuerung & Spiellogik (braucht es Anleitung?)<br>
Was machst du? / Was passiert gerade? Aber möglichst wenig unterbrechen.<br>
Wieviel Zeit hast du noch in dem Spiel? Was ist dein Score? SP<br>
Starte ein neues Spiel<br>
Beende das Spiel und kehre zum Start zurück<br>
TP exit game<br>
TP verbinde dich als P2<br>
TP spielt gegen Tester:in<br>
Wieviel Zeit hast du noch in dem Spiel? Was ist dein Score? MP<br>
Wer hat gewonnen?<br>
Wie gefällt TP das Spiel, fun? look and feel<br>
Als P2 Spiel neu starten<br>
Beende ein Spiel als P2

**Fragen nach Spieltest:**<br>
Wie war dein Gefühl?<br>
Was hast du erwartet? Wie kennst du es von anderen ähnlichen Spielen?<br>
Was hat Spass gemacht, was war langweilig?<br>
Danken und verabschieden<br>

### Scenarios for Code Prototype (current state)
(for an easier use in german)
Hier bist du jetzt auch wieder von anfang an auf der Website. Es ist alles noch in der Prototyp Phase, deswegen sind noch nicht alle Funktionen unterstützt. Falls du auf so eine fehlende Funktion triffst, werde ich dir das sagen, Audio fehlt noch. Denke bitte beim ganzen Durchgang laut

Verbinde dein Smartphone mit dem Spiel<br>
Beginne ein Spiel als Player 1<br>
Spiele ein wenig<br>

### Scenarios for Code Prototype (finished)
(for an easier use in german)

Verbinde dein Smartphone mit dem Spiel<br>
Beginne ein Spiel als Player 1<br>
Gewinne ein Spiel (P1)<br>
Starte ein Spiel neu (P1)<br>
Beende ein Spiel und kehre zum Startbildschirm zurück (P1)<br>
Tritt einem Spiel als Player 2 bei<br>
Spiele ein Spiel als P2<br>
Wer hat gewonnen? P1 oder P2<br>
Starte ein Spiel neu (P2)<br>
Beende ein Spiel (P2)<br>

**Briefing:**
Um was gehts?

**Fragen vor Spieltest:**<br>
Hast du schon mal mitgemacht?<br>
Was hast du in letzter Zeit so gespielt? Was sind deine Favoriten?<br>
Spielst du Geschicklichkeits/Mini Partyspiele? Wenn ja, welche?<br>
Spielst du regelmässig?<br>
Wo/wie spielst du?<br>
Bereits Geschicklichkeits- Geschwindigkeitsspiele gespielt?<br>
Was hast da du für ein Handy? OS Version? Falls Code ready und Handy i.O. Test mit TPs eigenem Handy (9. überspringen)<br>
TP das Testhandy mit gleichem OS zeigen und fragen ob vertraut<br>
Zum Test übergehen

**Fragen/Anweisungen während Spieltest:**<br>
Verbinde mal dein Handy und beginne ein Spiel alleine. Sprich deine Gedanken aus während dem Test - QR etc logisch?<br>
Falls Steuerung oder so nicht klar, fragen: Was erwartest du dabei? Nur unterstützen wenn notwendig für weiteren Test<br>
Spiele eine erste Runde – wie hält TP sein Mobile, checkt TP die Steuerung & Spiellogik (braucht es Anleitung?)<br>
Was machst du? / Was passiert gerade? Aber möglichst wenig unterbrechen.<br>
Spiele eine erste Runde zu Ende<br>
Wieviel Zeit hast du noch in dem Spiel? Was ist dein Score? SP<br>
Wie gefällt TP das Spiel, fun? look and feel<br>
Starte ein neues Spiel<br>
Beende das Spiel und kehre zum Start zurück<br>
TP exit game<br>
TP verbinde dich als P2<br>
TP spielt gegen Tester:in<br>
Wieviel Zeit hast du noch in dem Spiel? Was ist dein Score? MP<br>
Wer hat gewonnen?<br>
Wie gefällt TP das Spiel, fun? look and feel<br>
Als P2 Spiel neu starten<br>
Beende ein Spiel als P2<br>

**Fragen nach Spieltest:**<br>
Wie war dein Gefühl?
Was hast du erwartet? Wie kennst du es von anderen ähnlichen Spielen?
Was hat Spass gemacht, was war langweilig?
Danken und verabschieden


## Participants
Test participants should have some technical knowledge with a smartphone (iOS or Android). Should have played games before – mobile games is fine. German or English speaking. Age or gender irrelevant but at best balanced.

## Schedule
~~16.03		Pre-Pre-Testing~~<br>
~~17.03		Afternoon Pre-Test~~<br>
~~18-21.03 	Testing with friends and colleagues (record it!)~~<br>
~~22.03 	    Testing with invited participants~~<br>
~~29.03 	    Analysis, formulate everything~~<br>
~~05.04	    Presentation~~ 
