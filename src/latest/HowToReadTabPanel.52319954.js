import { R as e, p as t, h as a, a as i } from "./preact.3d326435.js";
import {
	bQ as n,
	w as s,
	k as o,
	b9 as l,
	ct as r,
	L as c,
} from "./index.c64a48b4.js";
import { a as m, T as h } from "./TocPointer.14f74b88.js";
import { P as d } from "./Panel.7e25754f.js";
var howToReadGuitarTab = "/static/media/01-understanding-tab.fc95e054.svg",
	chord = "/static/media/02-guitar-tab-chords.dbdcfaa7.svg",
	hammerOn = "/static/media/03-hammer-on.ec80c8ab.svg",
	pullOff = "/static/media/04-pull-off.e8fe7106.svg",
	bend = "/static/media/05-bends.f60173e8.svg",
	releaseBend = "/static/media/06-release-band.e967a55f.svg",
	slide = "/static/media/07-slide.248c3a32.svg",
	legatoSlide = "/static/media/08-legato-slide.55e83cfd.svg",
	vibrato = "/static/media/09-vibrato.108d30df.svg",
	wideVibrato = "/static/media/010-wide-vibrato.678b3dc1.svg",
	letRing = "/static/media/011-let-ring.11fb1019.svg",
	palmMute = "/static/media/012-palm-mute.89f3aa90.svg",
	ghostNote = "/static/media/013-gost-note.3dac95a9.svg",
	deadNote = "/static/media/014-dead-note.ee422216.svg",
	upDownStroke = "/static/media/015-up-down-strokes.806befd7.svg",
	naturalHarmonic = "/static/media/016-natural-harmonics.daa1f2dd.svg",
	polyphony = "/static/media/028-polyphony.ec15df7d.svg",
	pinchHarmonic = "/static/media/030-pinch-harmonic.1c02a98e.svg",
	rhythmNotation = "/static/media/017-rhythm-notation.42ab6edb.svg",
	beat = "/static/media/027-the-beat.63a59798.svg",
	bar = "/static/media/018-bars.04242420.svg",
	timeSignature = "/static/media/019-time-signature.e11097fe.svg",
	notesAndRests = "/static/media/020-notes-and-rests.70c0a284.svg",
	dot = "/static/media/021-dots.91d029c9.svg",
	tie = "/static/media/022-ties.7680a17e.svg",
	beam = "/static/media/023-beams.0570bcac.svg",
	triplet = "/static/media/024-triplets.6dda2e0f.svg",
	swingRhythm = "/static/media/029-swing-rhythm.17e28a93.svg",
	repeat = "/static/media/025-repeats.1f87e6ec.svg",
	alternateEnding = "/static/media/026-alternate-endings.8d369cd5.svg",
	accented = "/static/media/031-accented.da1193b3.svg",
	heavilyAccented = "/static/media/032-heavily-accented.066235ea.svg",
	staccato = "/static/media/033-staccato.51dc5fbc.svg",
	tapping = "/static/media/034-tapping.a74ff037.svg",
	tremolo = "/static/media/035-tremolo.c7ee7c0f.svg",
	htrgt_img_1 = "/static/media/htrgt-1.fc1b5282.svg",
	htrgt_img_2 = "/static/media/htrgt-2.112faf39.svg",
	chord_img_1 = "/static/media/guitar-chords-1.e0996bb5.svg",
	chord_img_2 = "/static/media/guitar-chords-2.324cc17d.svg",
	hammerOn_img = "/static/media/hammer-on.9dcbb8ef.svg",
	pullOff_img = "/static/media/pull-off.c1f4cf93.svg",
	bend_img = "/static/media/bend.59c7ab54.svg",
	releaseBend_img = "/static/media/release-bend.f2805ce5.svg",
	slide_img_1 = "/static/media/slide_a.b37f78d5.svg",
	slide_img_2 = "/static/media/slide_b.422cc585.svg",
	legatoSlide_img = "/static/media/legato-slide.47a48cdf.svg",
	vibrato_img = "/static/media/vibrato.66938041.svg",
	wideVibrato_img = "/static/media/wide-vibrato.bcc70d8a.svg",
	letRing_img = "/static/media/let-ring.020d7e96.svg",
	palmMute_img = "/static/media/palm-mute.2d4b6104.svg",
	ghostNote_img = "/static/media/ghost-note.944022f6.svg",
	deadNote_img = "/static/media/dead-note.e1408a77.svg",
	upDownStroke_img = "/static/media/up-down-stroke.7794f731.svg",
	naturalHarmonics_img = "/static/media/natural-harmonics.1b50135e.svg",
	polyphony_img = "/static/media/polyphony.9ebb84ea.svg",
	pinchHarmonic_img = "/static/media/pinchHarmonic.a82dbdcd.svg",
	bars_img = "/static/media/bars.16cb2819.svg",
	timeSignature_img = "/static/media/time-signature.2dda5a50.svg",
	notesAndRests_img_1 = "/static/media/notesRest-1.31bb0682.svg",
	notesAndRests_img_2 = "/static/media/notesRest-2.51140c68.svg",
	notesAndRests_img_3 = "/static/media/notesRest-3.b5bed63f.svg",
	notesAndRests_img_4 = "/static/media/notesRest-4.166dd62a.svg",
	dots_img = "/static/media/dots.628c6d0f.svg",
	ties_img = "/static/media/ties.d03189de.svg",
	beams_img = "/static/media/beams.e32d9379.svg",
	triplets_img = "/static/media/triplets.615cd224.svg",
	repeats_img = "/static/media/repeats.2792eb90.svg",
	swingRhythm_img = "/static/media/swingRhythm.e48178a6.svg",
	alternateEnding_img = "/static/media/alternate-endings.47273a72.svg",
	mock_img = "/static/media/mock.1494936b.svg",
	plus_big_mock_img = "/static/media/plusBigMock.552c8052.svg",
	plus_small_mock_img = "/static/media/plusSmallMock.dbc5f818.svg",
	accented_img = "/static/media/accented.cf8cb980.svg",
	heavily_accented_img = "/static/media/heavilyAccented.cc870d84.svg",
	staccato_img = "/static/media/staccato.5b1bdfa5.svg",
	tapping_img = "/static/media/tapping.934f8c42.svg",
	tremolo_img = "/static/media/tremolo.c8d3897a.svg";
let mock$1 = {
		img: mock_img,
		plusBig: plus_big_mock_img,
		plusSmall: plus_small_mock_img,
	},
	data = {
		understandingTab: {
			icon: howToReadGuitarTab,
			name: "Understanding Tab",
			content: [
				[
					{
						text: "Guitar tab or tablature is a very popular method of notating guitar music. What makes tab so popular is that, once you get the hang of it, it is very easy to read.\n\nIn order to understand tab, you need to visualize a guitar neck as if you are playing the guitar and looking down on the neck. Tab consists of 6 horizontal lines that represent the strings of the guitar. The thickest string being the bottom most line and the thinnest string being the topmost.",
					},
					{ img: htrgt_img_1, style: { margin: "auto" } },
					{
						text: "Numbers are then placed on these lines to represent finger positions on the guitar fret board. If you read the diagram below you would play this on a guitar by putting your finger just behind the 2nd fret on the 5th string, then you would play the note at the 4th fret, then again on the 2nd fret. The ΓÇÿzeroΓÇÖ represents playing an open string. As musical notes this would read as follows B C# B A.",
					},
					{ img: htrgt_img_2, style: { margin: "auto 0 auto auto" } },
				],
			],
		},
		chord: {
			icon: chord,
			name: "Guitar Tab Chords",
			content: [
				[
					{
						text: "To tab a chord the notes would be placed in a vertical line upon the horizontal ones. This diagram represents a C Chord. You would strum the bottom 5 strings of the guitar in one motion if you were to read this tab properly:",
					},
					{ img: chord_img_1, style: { padding: 0 } },
					{
						text: "And in this case you would strum the ΓÇÿC ChordΓÇÖ three times:",
					},
					{ img: chord_img_2, style: { padding: 0 } },
				],
			],
		},
		hammerOn: {
			icon: hammerOn,
			name: "Hammer-On",
			isSmall: !0,
			content: [
				[
					{
						text: "Hammer-on is executed by picking a note and then hammering done with the fretting hand on the second note. The second note isnΓÇÖt actually picked but kind of echos the first one. Song example with this technique: ",
					},
					{
						text: "Black Sabbath ΓÇô Paranoid",
						url: "/a/wsa/black-sabbath-paranoid-tab-s296t1",
					},
					{ text: ". Hammer-ons are written in a tab like this:" },
				],
				[{ img: hammerOn_img }],
			],
		},
		pullOff: {
			icon: pullOff,
			name: "Pull-Off",
			isSmall: !0,
			content: [
				[
					{
						text: "Pull-off is the opposite of a hammer-on, so the first note is played again then the fretting hand pulls the finger off and lets the one fretted behind it play. Song example with this technique: ",
					},
					{
						text: "Metallica ΓÇô Nothing Else Matters",
						url: "/a/wsa/metallica-nothing-else-matters-tab-s439171t1",
					},
					{ text: " (bar 5)." },
				],
				[{ img: pullOff_img }],
			],
		},
		bend: {
			icon: bend,
			name: "Bends",
			isSmall: !0,
			content: [
				[
					{
						text: "This is where the fretting hand actually bends the string to give a wobbly effect. It's often used in solos. Song example with this technique: ",
					},
					{
						text: "AC/DC - You Shook Me All Night Long",
						url: "/a/wsa/ac-dc-you-shook-me-all-night-long-tab-s63275t0",
					},
					{ text: " (bar 17)." },
				],
				[{ img: bend_img }],
			],
		},
		releaseBend: {
			icon: releaseBend,
			name: "Release Bend",
			isSmall: !0,
			content: [
				[
					{
						text: "Release bend is just like a bend, but it tells you when to release the bend and go to the next note. Song example with this technique: ",
					},
					{
						text: "Guns NΓÇÖ Roses ΓÇô DonΓÇÖt Cry (Slash guitar solo)",
						url: "/a/wsa/guns-n-roses-don-t-cry-tab-s125t3",
					},
					{ text: " (bar 41)." },
				],
				[{ img: releaseBend_img }],
			],
		},
		slide: {
			icon: slide,
			name: "Slide",
			isSmall: !0,
			content: [
				[
					{
						text: "For a slide you start off plucking the first note and slide on the string up or down to the second. Song example with this technique: ",
					},
					{
						text: "Dire Straits ΓÇô Sultans of Swing",
						url: "/a/wsa/dire-straits-sultans-of-swing-tab-s30084t1",
					},
					{
						text: " (bar 5). In the tab below you would play the first note on the 10th fret then slide the finger that is holding that note up to the 8th fret (a slide-down):",
					},
				],
				[
					{ img: slide_img_1 },
					{
						text: "Or here you slide your finger from the 3rd fret to the 5th without lifting your finger (a slide-up):",
					},
					{ img: slide_img_2 },
				],
			],
		},
		legatoSlide: {
			icon: legatoSlide,
			name: "Legato Slide",
			isSmall: !0,
			content: [
				[
					{
						text: "The same as usual slide except the second note is not struck. Song example with this technique: ",
					},
					{
						text: "Black Sabbath ΓÇô Iron Man",
						url: "/a/wsa/black-sabbath-iron-man-tab-s8t1",
					},
					{ text: " (bar 10)." },
				],
				[{ img: legatoSlide_img }],
			],
		},
		vibrato: {
			icon: vibrato,
			name: "Vibrato",
			isSmall: !0,
			content: [
				[
					{
						text: "Vibrato is like a constant rhythmic bending of the string. You do a bend up and bend down quickly to create a moving sound. Song example with this technique: ",
					},
					{
						text: "Jimi Hendrix ΓÇô Purple Haze",
						url: "/a/wsa/jimi-hendrix-purple-haze-tab-s310t0",
					},
					{ text: " (bar 3)." },
				],
				[{ img: vibrato_img }],
			],
		},
		wideVibrato: {
			icon: wideVibrato,
			name: "Wide Vibrato",
			isSmall: !0,
			content: [
				[
					{
						text: "The pitch is varied to a greater degree by vibrating with the fretting hand. Song example with this technique: ",
					},
					{
						text: "Black Label Society - In This River",
						url: "/a/wsa/black-label-society-in-this-river-tab-s21536t3",
					},
					{ text: "." },
				],
				[{ img: wideVibrato_img }],
			],
		},
		letRing: {
			icon: letRing,
			name: "Let ring",
			isSmall: !0,
			content: [
				[
					{
						text: '"Let ring" marker tells you to let that note ring until the end of the dashed line. Song example with this technique: ',
					},
					{
						text: "Metallica ΓÇô Enter Sandman",
						url: "/a/wsa/metallica-enter-sandman-tab-s19t1",
					},
					{ text: "." },
				],
				[{ img: letRing_img }],
			],
		},
		palmMute: {
			icon: palmMute,
			name: "Palm Mute",
			isSmall: !0,
			content: [
				[
					{
						text: "A palm mute effect is achieved when you take the side of your right hand (4th finger side) and lightly touch the string at the edge of the bridge. This will give the notes that you are playing a muffled sound. Song example with this technique: ",
					},
					{
						text: "Green Day ΓÇô Basket Case",
						url: "/a/wsa/green-day-basket-case-tab-s1401t2",
					},
					{ text: "." },
				],
				[{ img: palmMute_img }],
			],
		},
		ghostNote: {
			icon: ghostNote,
			name: "Ghost Note",
			isSmall: !0,
			content: [
				[
					{
						text: "The best description of a ghost note, is a note that is felt but not heard. You will play the note softer, and without emphasis. A ghost note can be played by fretting a note, but not picking it. Ghost notes are barely audible, but they do a lot to the feel of the music. The notation for the ghost note is round brackets. Song example with this technique: ",
					},
					{
						text: "Rush ΓÇô La Villa Strangiato",
						url: "/a/wsa/rush-la-villa-strangiato-tab-s16588t3",
					},
					{ text: " (bar 194)." },
				],
				[{ img: ghostNote_img }],
			],
		},
		deadNote: {
			icon: deadNote,
			name: "Dead Note",
			isSmall: !0,
			content: [
				[
					{
						text: "Dead note refers to muting the strings with your left hand. A dead note effect is achieved by lightly resting your left hand across the strings without actually pressing the strings against the fret. Song example with this technique: ",
					},
					{
						text: "Nirvana - Smells Like Teen Spirit",
						url: "/a/wsa/nirvana-smells-like-teen-spirit-tab-s269t1",
					},
					{ text: "." },
				],
				[{ img: deadNote_img }],
			],
		},
		upDownStroke: {
			icon: upDownStroke,
			name: "Up/Down Strokes",
			isSmall: !0,
			content: [
				[
					{
						text: "The first chord is to be played with a down stroke, the second chord is to be played with an up stroke and the third is to be played with a down stroke again. Song example with this technique: ",
					},
					{
						text: "Nirvana ΓÇô Where Did You Sleep Last Night",
						url: "/a/wsa/nirvana-where-did-you-sleep-last-night-tab-s234t0",
					},
					{ text: "." },
				],
				[{ img: upDownStroke_img }],
			],
		},
		naturalHarmonic: {
			icon: naturalHarmonic,
			name: "Natural Harmonics",
			isSmall: !0,
			content: [
				[
					{
						text: "Natural harmonics are notes that produce a bell like sound when you touch a string over a particular fret bar. The notation that is most commonly used is the fret that you will touch with romb sign before. Song example with this technique: ",
					},
					{
						text: "Metallica - Welcome Home (Sanitarium)",
						url: "/a/wsa/metallica-welcome-home-sanitarium-tab-s585t0",
					},
					{ text: "." },
				],
				[{ img: naturalHarmonics_img }],
			],
		},
		polyphony: {
			icon: polyphony,
			name: "Polyphony",
			isSmall: !0,
			content: [
				[
					{
						text: "Polyphony is a type of musical texture consisting of two or more simultaneous lines of independent melody. In the tabs, one of these lines is shown in gray with the number of the fret, the other in black. Song example: ",
					},
					{
						text: "Stairway to Heaven",
						url: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
					},
					{ text: "." },
				],
				[{ img: polyphony_img }],
			],
		},
		pinchHarmonic: {
			icon: pinchHarmonic,
			name: "Pinch Harmonic",
			isSmall: !0,
			content: [
				[
					{
						text: "A pinch harmonic is a guitar technique to achieve artificial harmonics in which the playerΓÇÖs thumb or index finger on the picking hand slightly catches the string which the player picked, silencing the fundamental frequency of the string, and letting one of the harmonics dominate. Song example with this technique: ",
					},
					{
						text: "Slipknot - Duality",
						url: "/a/wsa/slipknot-duality-tab-s18211t0",
					},
					{ text: " (bar 23)." },
				],
				[{ img: pinchHarmonic_img }],
			],
		},
		rhythmNotation: {
			icon: rhythmNotation,
			name: "Rhythm Notation",
			content: [
				[
					{
						text: "Tabs do not have information on the rhythm or lengths of the notes ΓÇô only on their pitch. This means you can play the same tab in different ways. Although with Songsterr you can see and hear the tab as it is being played, rhythm notation will tell you exactly when to play note and how long to hold it. We use rhythm notation which is very similar to sheet music notation (scores). The basics of rhythm notation are explained below.",
					},
				],
			],
		},
		beat: {
			icon: beat,
			name: "The Beat",
			content: [
				[
					{
						text: "Music is based in time. Most music has a steady, recurring pulse called the beat. ItΓÇÖs the steady rhythm to which you want to tap your foot or dance. Think of any music youΓÇÖve heard in a dance club and you can quickly imagine the beat of the music. The element of time in a piece of music revolves around the beat.",
					},
				],
			],
		},
		bar: {
			icon: bar,
			name: "Bars",
			content: [
				[
					{
						text: "To help keep our place in music, beats are grouped into bars, or measures as they are also called. Bars are delineated by bar lines. In many songs four beats make up one bar. The steady pulse would be counted 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, ΓÇª and so on. Beat one always marks the beginning of the bar.",
					},
					{ img: bars_img, style: { padding: 0 } },
				],
			],
		},
		timeSignature: {
			icon: timeSignature,
			name: "Time Signature",
			content: [
				[
					{
						text: "When reading tab, we can look at the time signature. This is that fraction that happens at the beginning of each tab. The top number in the fraction stands for the number of beats in a bar (in most cases it is 4). The bottom number stands for the note value that is equal to the beat of the music. In most cases the bottom number is also 4, which indicates that the 1/4 note is the pulse of the music. In other words, 4/4 time means each bar is equal to 4 1/4 notes.",
					},
					{ img: timeSignature_img, style: { padding: 0, margin: "auto" } },
				],
			],
		},
		notesAndRests: {
			icon: notesAndRests,
			name: "Notes and Rests",
			content: [
				[
					{
						text: "Rhythm notation is created by altering the appearance of notes to indicate the relative duration that these notes occupy within a tab. Conversely, rests describe the relative length of silence. The names of the different notes and rests are derived from their fractional value of what is considered a beat:",
					},
					{ img: notesAndRests_img_1 },
				],
				[
					{
						text: "All the basic rhythmic values are just simple fractions of the 4-beat whole note. Let's look at the rhythm notation of the tab below:",
					},
					{ img: notesAndRests_img_2, style: { "padding-top": 0 } },
					{
						text: "We can see that each note has the value of quarter. Quarter notes last one beat each. You can play this tab fast or slow, but the relative duration stays the same (one note for one beat). Another example:",
					},
					{ img: notesAndRests_img_3 },
					{
						text: "Here you can see the pause with duration of half (two beats) and then chord D5 is played four times with duration of eighth (half of a beat)",
					},
				],
				[
					{
						text: "All rhythm values can be constructed from two rhythm values of half the duration:",
					},
					{ img: notesAndRests_img_4 },
				],
			],
		},
		dot: {
			icon: dot,
			name: "Dots",
			isSmall: !0,
			content: [
				[
					{
						text: "Notes and rests can be attended by a small dot, appearing just to the right of the rhythmic element. This increases the duration of the note or rest by one half:",
					},
				],
				[{ img: dots_img }],
			],
		},
		tie: {
			icon: tie,
			name: "Ties",
			isSmall: !0,
			content: [
				[
					{
						text: "The duration of notes can also be increased by the use of ties. When tied together, the following notes are held for the duration of the second note as well. Rests are never tied together.",
					},
				],
				[{ img: ties_img }],
			],
		},
		beam: {
			icon: beam,
			name: "Beams",
			isSmall: !0,
			content: [
				[
					{
						text: "It is common for smaller valued notes to be grouped together via beams. Grouped notes usually have the length of one beat. Rests are never beamed:",
					},
				],
				[{ img: beams_img }],
			],
		},
		triplet: {
			icon: triplet,
			name: "Triplets",
			content: [
				[
					{
						text: "Generally triplet consists of three notes that will have duration of two notes of the same length when playing. In the example below notes are grouped in three's because the duration of 3 of this triplet's 1/8 notes equal the duration of only one 1/4 note (not 3/8). So basically instead of dividing the 1/4 note by 2 to get 1/8th notes, we have divided by three. In standard music notation these usually have a 3 written underneath the group.",
					},
					{ img: triplets_img, style: { padding: "8px 0" } },
				],
			],
		},
		swingRhythm: {
			icon: swingRhythm,
			name: "Swing Rhythm",
			content: [
				[
					{
						text: "In swing rhythm the pulse is divided unequally, such that certain subdivisions (typically either eighth note or sixteenth note subdivisions) alternate between long and short durations. Check out ",
					},
					{
						text: "this example",
						url: "/a/wsa/swing-and-straight-demonstration-tab-s475779t0",
					},
					{
						text: " to discover the difference between swing eighths and straight ones.",
					},
				],
				[{ img: swingRhythm_img, style: { padding: "8px 0" } }],
			],
		},
		repeat: {
			icon: repeat,
			name: "Repeats",
			content: [
				[
					{
						text: "Repeat is one of the most confusing parts of a tab notation. When a pair of dots accompanies a double bar, it signifies that you must repeat music either from the very front of the piece or front the previous repeat symbol as follows:",
					},
					{ img: repeats_img, style: { margin: "0 auto" } },
					{
						text: 'You should ignore repeat symbols with the dots on the right side the first time you encounter them; when you come to a repeat symbol with dots on the left side, jump back to the previous repeat symbol facing the opposite direction (if there is no previous symbol, go to the beginning of the piece). The next time you come to the repeat symbol, ignore it and keep going unless it includes instructions such as "3x" (repeat three times). See ',
					},
					{
						text: "Nirvana - Smells Like Teen Spirit",
						url: "/a/wsa/nirvana-smells-like-teen-spirit-tab-s269t2",
					},
					{ text: " song for example (bar 5)." },
				],
			],
		},
		alternateEnding: {
			icon: alternateEnding,
			name: "Alternate Endings",
			content: [
				[
					{
						text: "A section will often have a different ending after each repeat. The example below includes a first and a second ending. Play until you hit the repeat symbol, jump back to the previous repeat symbol (not shown on the picture) and play until you reach the bracketed first ending, skip the measures under the bracket and jump immediately to the second ending, and then continue. See ",
					},
					{
						text: "Eric Clapton - Tears In Heaven",
						url: "/a/wsa/eric-clapton-tears-in-heaven-tab-s4t2",
					},
					{ text: " for example (bar 45)." },
					{ img: alternateEnding_img, style: { margin: "0 auto" } },
				],
			],
		},
		accented: {
			icon: accented,
			name: "Accented",
			isSmall: !0,
			content: [
				[
					{
						text: "An accented note is an emphasis, a stronger attack placed on a particular note. Play this note louder than the others. See ",
					},
					{
						text: "Metallica - Nothing Else Matters",
						url: "/a/wsa/metallica-nothing-else-matters-tab-s439171t1",
					},
					{ text: " for example (bars 16 ΓÇô 18)." },
				],
				[{ img: accented_img }],
			],
		},
		heavyAccented: {
			icon: heavilyAccented,
			name: "Heavily accented",
			isSmall: !0,
			content: [
				[
					{
						text: "A heavily accented note is a maximum emphasis, an even stronger attack placed on a particular note. Play this note much louder than the others. See ",
					},
					{
						text: "The Rolling Stones - Paint It Black",
						url: "/a/wsa/the-rolling-stones-paint-it-black-tab-s5t1",
					},
					{ text: " for example (bar 20)." },
				],
				[{ img: heavily_accented_img }],
			],
		},
		staccato: {
			icon: staccato,
			name: "Staccato",
			isSmall: !0,
			content: [
				[
					{
						text: "Staccato indicates a very short note, independently of the noteΓÇÖs duration on the score. See ",
					},
					{
						text: "AC/DC - Back In Black",
						url: "/a/wsa/ac-dc-back-in-black-tab-s1024t2",
					},
					{ text: " for example (bar 3, 4)." },
				],
				[{ img: staccato_img }],
			],
		},
		tapping: {
			icon: tapping,
			name: "Tapping",
			isMedium: !0,
			content: [
				[
					{
						text: "Tapping is hitting a fret with your fingers with no previous attack on the note. See ",
					},
					{
						text: "Van Halen - Eruption",
						url: "/a/wsa/van-halen-eruption-tab-s92811t0",
					},
					{ text: " for example (bar 33)." },
				],
				[{ img: tapping_img }],
			],
		},
		tremolo: {
			icon: tremolo,
			name: "Tremolo",
			isMedium: !0,
			content: [
				[
					{
						text: "Tremolo occurs with quick short picks up and down. In this case, the pick pulls the string with the same force both when moving down and when moving up, the hand is as relaxed as possible to achieve high speed. See ",
					},
					{
						text: "Slipknot - Sulfur",
						url: "/a/wsa/slipknot-sulfur-tab-s23577t2",
					},
					{ text: " for example (bar 11)." },
				],
				[{ img: tremolo_img }],
			],
		},
	};
function generateMicrodataHowto(e) {
	let t = "";
	return (
		Object.keys(e).forEach((a) => {
			let i = "",
				s = "";
			e[a].content
				.flat()
				.some((e) => (e.text && (i += e.text), e.img && (s = n(e.img)), e.img)),
				(t += `{
      "@type": "HowToStep",
      "url": "${n(`/a/wa/howtoreadtab#${a}`)}",
      "name": "${e[a].name}",
      "image": {
        "@type": "ImageObject",
        "url": "${s || n(mock$1.img)}"
      },
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "${i.replace(/"/g, '\\"')}"
      }]
    },`);
		}),
		`{
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Read a Tab",
    "description": "A complete list of musical techniques for reading tablature",
    "totalTime": "PT15M",
        "tool": [
      {
        "@type": "HowToTool",
        "name": "music instrument"
      }, {
        "@type": "HowToTool",
        "name": "tabulature"
      }
    ],
    "step": [${t.slice(0, -1)}]
  }`
	);
}
Object.keys(data)
	.map((e) => data[e].name)
	.join(" ");
let howToJSONMicrodata = () => generateMicrodataHowto(data),
	wrap = "kl1ru",
	dynamic = "kl1ki",
	articleGroup = "kl1x1",
	hidden = "kl10m",
	feature = "kl226",
	dynamicHeader = "kl26z",
	dynamicH2 = "kl13s",
	dynamicHeaderName = "kl15g",
	featureImg = "kl8a",
	featureContainer = "kln9",
	featureHeader = "kl247",
	featureTitle = "kl26c",
	featureBody = "kl2ib",
	featureLink = "kl1cs",
	grid = "kl17f",
	toc = "kl1kb",
	tocHeader = "kl16j",
	tocIcon = "kl2rq",
	tocName = "kl30g",
	tocItem = "kl1b",
	content = "kl1gf",
	mock = "kl1oh",
	mockBig = "kl26a",
	mockBigPlus = "kl28q",
	__default = {
		wrap: "kl1ru",
		dynamic: "kl1ki",
		articleGroup: "kl1x1",
		hidden: "kl10m",
		feature: "kl226",
		dynamicHeader: "kl26z",
		dynamicH2: "kl13s",
		dynamicHeaderName: "kl15g",
		featureImg: "kl8a",
		featureContainer: "kln9",
		featureHeader: "kl247",
		featureTitle: "kl26c",
		featureBody: "kl2ib",
		featureLink: "kl1cs",
		grid: "kl17f",
		toc: "kl1kb",
		tocHeader: "kl16j",
		tocIcon: "kl2rq",
		tocName: "kl30g",
		tocItem: "kl1b",
		content: "kl1gf",
		mock: "kl1oh",
		mockBig: "kl26a",
		mockBigPlus: "kl28q",
	};
var de = null,
	es = null,
	fr = null,
	it = null,
	ja = null,
	ko = null,
	pt = null,
	ru = null,
	zh = null,
	locales = [de, es, fr, it, ja, ko, pt, ru, zh];
function prepareFeatures(e, t) {
	if (!e) return;
	let a = [],
		i = [],
		n = [];
	for (let s of Object.keys(t))
		e[s] && (t[s].isSmall ? n.push(s) : t[s].isMedium ? i.push(s) : a.push(s));
	return [...a, ...i, ...n].reduce((e, a) => ((e[a] = t[a]), e), {});
}
function prepareArticle(e, t, a) {
	return [
		i(
			"header",
			{ className: __default.featureHeader, "data-id": t },
			i("h3", { className: __default.featureTitle }, e.name),
			a && i("a", { id: `anchor-${t}`, className: __default.hidden }, e.name)
		),
		showFeatureDescription(e),
	];
}
function showFeatureDescription(e) {
	let t = [];
	return (
		e.content.forEach((a) => {
			let n = [];
			a.forEach((t) => {
				t.img
					? n.push(
							i("img", {
								src: t.img,
								className: __default.featureImg,
								style: t.style,
								alt: e.name,
							})
					  )
					: t.url
					? n.push(
							i(c, { className: __default.featureLink, to: t.url }, t.text)
					  )
					: n.push(i("p", { className: __default.featureBody }, t.text));
			}),
				t.push(i("div", { className: __default.featureContainer }, n));
		}),
		t
	);
}
function showTOC(e, t) {
	let a = [];
	for (let n in e)
		a.push(
			i(
				"a",
				{ className: __default.tocItem, href: `#${n}`, onClick: () => t(n) },
				i("img", { src: e[n].icon, className: __default.tocIcon }),
				i("span", { className: __default.tocName }, e[n].name)
			)
		);
	return a;
}
function showFeatures(e, t) {
	let { hasIndex: a, /* hasPlus: n */ } = t,
		n = true,
		s = [],
		o = 0,
		l = [],
		r = 1,
		m = function () {
			let e =
				arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
			o &&
				(o < e &&
					(n
						? l.push(
								i("img", {
									src: mock$1.img,
									className: 2 === o ? __default.mock : __default.mockBig,
								})
						  )
						: l.push(
								i(
									c,
									{
										to: "/a/wa/plus",
										className: 2 === o ? __default.mock : __default.mockBigPlus,
									},
									i("img", { src: 2 === o ? mock$1.plusSmall : mock$1.plusBig })
								)
						  )),
				s.push(
					i(
						"div",
						{ className: __default.articleGroup, "data-section": `group-${r}` },
						l
					)
				),
				(l = []),
				(o = 0),
				r++);
		},
		h = null;
	for (let t in e) {
		let n = e[t],
			r = n.isSmall ? 3 : n.isMedium ? 2 : 1;
		if (r > 1) {
			(o >= r || r != h) && m(r), (h = r), o++, l.push(prepareArticle(n, t, a));
			continue;
		}
		m(h),
			s.push(
				i(
					"article",
					{ className: __default.feature, "data-section": t },
					prepareArticle(n, t, a)
				)
			);
	}
	return m(h), s;
}
function HowToReadTabPanel(e) {
	let { gettext: n } = o(locales),
		[s, c] = t(null),
		{ isSmallScreen: g, meta: u, part: p, id: b } = e,
		// { hasPlus: f } = e.user,
		f = true,
		y = l(u),
		w =
			!g &&
			p.current &&
			prepareFeatures(r(e.tabFeatures, p.current, e.dispatch), data);
	return (
		a(() => {
			let e = window.location.hash && window.location.hash.replace("#", "");
			if (e) {
				let t = document.getElementById(`anchor-${e}`);
				if (t) {
					t.scrollIntoView({ behavior: "smooth" });
					let e = t.parentElement,
						a = e.parentElement;
					a.getAttribute("data-section").includes("group-")
						? (e.classList.add("blink"),
						  e.nextElementSibling.classList.add("blink"),
						  e.nextElementSibling.nextElementSibling.classList.add("blink"))
						: a.classList.add("blink");
					let i = setTimeout(() => {
						if (t?.parentElement?.parentElement) {
							let e = t.parentElement,
								a = e.parentElement;
							a.getAttribute("data-section").includes("group-")
								? (e.classList.remove("blink"),
								  e.nextElementSibling.classList.remove("blink"),
								  e.nextElementSibling.nextElementSibling.classList.remove(
										"blink"
								  ))
								: a.classList.remove("blink");
						}
					}, 2e3);
					return () => clearTimeout(i);
				}
			}
		}, [s]),
		i(
			d,
			{ title: n("How to Read a Tab"), id: b },
			i(
				"div",
				{ className: __default.wrap },
				!g &&
					w &&
					y &&
					i(
						"section",
						{ className: __default.dynamic },
						i(
							"header",
							{ className: __default.dynamicHeader },
							i(
								"h2",
								{ className: __default.dynamicH2 },
								n("Symbols and icons in the current track:")
							),
							i(
								"span",
								{ className: __default.dynamicHeaderName },
								`${y.name} - ${y.instrument}`
							)
						),
						showFeatures(w, { hasIndex: !1, hasPlus: f })
					),
				m("toc"),
				i(
					"section",
					{ className: __default.toc, "data-section": "toc" },
					i("h2", { className: __default.tocHeader }, n("Table of Contents")),
					i("div", { className: __default.grid }, showTOC(data, c))
				),
				h("HowToReadTabPanel", "#toc"),
				i(
					"section",
					{ className: __default.content },
					showFeatures(data, { hasIndex: !0, hasPlus: f })
				),
				i("script", { type: "application/ld+json" }, howToJSONMicrodata())
			)
		)
	);
}
var HowToReadTabPanel$1 = s(e(HowToReadTabPanel), "part", "meta", "user");
export { HowToReadTabPanel$1 as default };
