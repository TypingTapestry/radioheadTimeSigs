const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());
app.use(express.static('public'));

const song = {
    'you': {
        songName: 'You',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '6/8, 5/8'
    },
    'creep': {
        songName: 'Creep',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'how do you': {
        songName: 'How Do You?',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'stop whispering': {
        songName: 'Stop Whispering',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'thinking about you': {
        songName: 'Thinking About You',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'anyone can play guitar': {
        songName: 'Anyone Can Play Guitar',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'ripcord': {
        songName: 'Ripcord',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4, 2/4'
    },
    'vegetable': {
        songName: 'Vegetable',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4, 2/4'
    },
    'prove yourself': {
        songName: 'Prove Yourself',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'i can\'t': {
        songName: 'I Can\'t',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'lurgee': {
        songName: 'Lurgee',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'blow out': {
        songName: 'Blow Out',
        albumName: 'Pablo Honey',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'stupid car': {
        songName: 'Stupid Car',
        albumName: 'Pablo Honey (B)',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'inside my head': {
        songName: 'Inside My Head',
        albumName: 'Pablo Honey (B)',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'million dollar question': {
        songName: 'Million Dollar Question',
        albumName: 'Pablo Honey (B)',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'yes i am': {
        songName: 'Yes I Am',
        albumName: 'Pablo Honey (B)',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'faithless the wonder boy': {
        songName: 'Faithless the Wonder Boy',
        albumName: 'Pablo Honey (B)',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4, 2/4'
    },
    'coke babies': {
        songName: 'Coke Babies',
        albumName: 'Pablo Honey (B)',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/e88Dgyo.png',
        timeSig: '4/4'
    },
    'pop is dead': {
        songName: 'Pop Is Dead',
        albumName: 'Pop Is Dead',
        albumYear: 1993,
        albumArt: 'https://i.imgur.com/QoOTlZp.jpeg',
        timeSig: '4/4'
    },
    'planet telex': {
        songName: 'Planet Telex',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'the bends': {
        songName: 'The Bends',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'high and dry': {
        songName: 'High and Dry',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'fake plastic trees': {
        songName: 'Fake Plastic Trees',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'bones': {
        songName: 'Bones',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '6/4, 4/4 + 4/4'
    },
    'nice dream': {
        songName: '(Nice Dream)',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '6/8'
    },
    'just': {
        songName: 'Just',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'my iron lung': {
        songName: 'My Iron Lung',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'bulletproof': {
        songName: 'Bullet Proof ... I Wish I Was',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'black star': {
        songName: 'Black Star',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '6/4, 4/4'
    },
    'sulk': {
        songName: 'Sulk',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '6/8'
    },
    'street spirit': {
        songName: 'Street Spirit (Fade Out)',
        albumName: 'The Bends',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'the trickster': {
        songName: 'The Trickster',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4, 3/4'
    },
    'lewis': {
        songName: 'Lewis (Mistreated)',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'punchdrunk lovesick singalong': {
        songName: 'Punchdrunk Lovesick Singalong',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'permanent daylight': {
        songName: 'Permanent Daylight',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4, 6/4'
    },
    'lozenge of love': {
        songName: 'Lozenge of Love',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'you never wash up after yourself': {
        songName: 'You Never Wash up After Yourself',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '6/8'
    },
    'maquiladora': {
        songName: 'Maquiladora',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'killer cars': {
        songName: 'Killer Cars',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'india rubber': {
        songName: 'India Rubber',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4, 6/4'
    },
    'how can you be sure': {
        songName: 'How Can You Be Sure?',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'talk show host': {
        songName: 'Talk Show Host',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'bishop\'s robes': {
        songName: 'Bishop\'s Robes',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'banana co': {
        songName: 'Banana Co',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '4/4'
    },
    'molasses': {
        songName: 'Molasses',
        albumName: 'The Bends (B)',
        albumYear: 1995,
        albumArt: 'https://i.imgur.com/R3lBM3p.png',
        timeSig: '6/8'
    },
    'airbag': {
        songName: 'Airbag',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'paranoid android': {
        songName: 'Paranoid Android',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4, 7/8'
    },
    'subterranean homesick alien': {
        songName: 'Subterranean Homesick Alien',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '6/8'
    },
    'exit music': {
        songName: 'Exit Music (For a Film)',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'let down': {
        songName: 'Let Down',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'karma police': {
        songName: 'Karma Police',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'fitter happier': {
        songName: 'Fitter Happier',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '3/2'
    },
    'electioneering': {
        songName: 'Electioneering',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'climbing up the walls': {
        songName: 'Climbing up the Walls',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'no surprises': {
        songName: 'No Surprises',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'lucky': {
        songName: 'Lucky',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'the tourist': {
        songName: 'The Tourist',
        albumName: 'OK Computer',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '9/8'
    },
    'polyethylene': {
        songName: 'Polyethylene (Pt. 1 & 2)',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4, 9/8, 10/4, 3/4'
    },
    'pearly': {
        songName: 'Pearly',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'a reminder': {
        songName: 'A Reminder',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '6/8'
    },
    'melatonin': {
        songName: 'Melatonin',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'meeting in the aisle': {
        songName: 'Meeting in the Aisle',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'lull': {
        songName: 'Lull',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'palo alto': {
        songName: 'Palo Alto',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'how i made my millions': {
        songName: 'How I Made My Millions',
        albumName: 'OK Computer (B)',
        albumYear: 1997,
        albumArt: 'https://i.imgur.com/p70Sbiv.png',
        timeSig: '4/4'
    },
    'everything in its right place': {
        songName: 'Everything In Its Right Place',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '10/4'
    },
    'kid a': {
        songName: 'Kid A',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '4/4'
    },
    'the national anthem': {
        songName: 'The National Anthem',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '4/4'
    },
    'how to disappear completely': {
        songName: 'How to Disappear Completely',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '6/8'
    },
    'treefingers': {
        songName: 'Treefingers',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: 'Free Time'
    },
    'optimistic': {
        songName: 'Optimistic',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '4/4'
    },
    'in limbo': {
        songName: 'In Limbo',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '4/4'
    },
    'idioteque': {
        songName: 'Idioteque',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '4/4'
    },
    'morning bell': {
        songName: 'Morning Bell',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '5/4'
    },
    'motion picture soundtrack': {
        songName: 'Motion Picture Soundtrack',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: '4/4'
    },
    'untitled': {
        songName: 'Untitled',
        albumName: 'Kid A',
        albumYear: 2000,
        albumArt: 'https://i.imgur.com/THEDugW.png',
        timeSig: 'Free Time'
    },
    'packt like sardines in a crushed tin box': {
        songName: 'Packt Like Sardines in a Crushed Tin Box',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'pyramid song': {
        songName: 'Pyramid Song',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'pulk': {
        songName: 'Pulk / Pull Revolving Doors',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'you and whose army': {
        songName: 'You and Whose Army?',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'i might be wrong': {
        songName: 'I Might Be Wrong',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'knives out': {
        songName: 'Knives Out',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'morning bell': {
        songName: 'Morning Bell / Amnesiac',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'dollars and cents': {
        songName: 'Dollars & Cents',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'hunting bears': {
        songName: 'Hunting Bears',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: 'Free Time'
    },
    'like spinning plates': {
        songName: 'Like Spinning Plates',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'life in a glasshouse': {
        songName: 'Life in a Glasshouse',
        albumName: 'Amnesiac',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'the amazing sounds of orgy': {
        songName: 'The Amazing Sounds of Orgy',
        albumName: 'Amnesiac (B)',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'trans-atlantic drawl': {
        songName: 'Trans-Atlantic Drawl',
        albumName: 'Amnesiac (B)',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'fast-track': {
        songName: 'Fast-Track',
        albumName: 'Amnesiac (B)',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'kinetic': {
        songName: 'Kinetic',
        albumName: 'Amnesiac (B)',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'cuttooth': {
        songName: 'Cuttooth',
        albumName: 'Amnesiac (B)',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'worrywort': {
        songName: 'Worrywort',
        albumName: 'Amnesiac (B)',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    'fog': {
        songName: 'Fog',
        albumName: 'Amnesiac (B)',
        albumYear: 2001,
        albumArt: 'https://i.imgur.com/7oqN86T.png',
        timeSig: '4/4'
    },
    '2+2=5': {
        songName: '2 + 2 = 5',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '7/4, 4/4'
    },
    'sit down stand up': {
        songName: 'Sit Down. Stand Up',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'sail to the moon': {
        songName: 'Sail to the Moon',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '5/4, 4/4, 3/4, 2/4'
    },
    'backdrifts': {
        songName: 'Backdrifts',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'go to sleep': {
        songName: 'Go to Sleep',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4, 6/4'
    },
    'where i end and you begin': {
        songName: 'Where I End and You Begin',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'we suck young blood': {
        songName: 'We Suck Young Blood',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'the gloaming': {
        songName: 'The Gloaming',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'there there': {
        songName: 'There, There',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'i will': {
        songName: 'I Will',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'a punch up at a wedding': {
        songName: 'A Punch Up at a Wedding',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'myxomatosis': {
        songName: 'Myxomatosis',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'scatterbrain': {
        songName: 'Scatterbrain',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'a wolf at the door': {
        songName: 'A Wolf at the Door',
        albumName: 'Hail to the Thief',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '6/8'
    },
    'paperbag writer': {
        songName: 'Paperbag Writer',
        albumName: 'Hail to the Thief (B)',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'i am a wicked child': {
        songName: 'I Am a Wicked Child',
        albumName: 'Hail to the Thief (B)',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'i am citizen insane': {
        songName: 'I Am Citizen Insane',
        albumName: 'Hail to the Thief (B)',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '10/4'
    },
    'gagging order': {
        songName: 'Gagging Order',
        albumName: 'Hail to the Thief (B)',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'where bluebirds fly': {
        songName: 'Where Bluebirds Fly',
        albumName: 'Hail to the Thief (B)',
        albumYear: 2003,
        albumArt: 'https://i.imgur.com/7i0DYd2.png',
        timeSig: '4/4'
    },
    'i want none of this': {
        songName: 'I Want None of This',
        albumName: 'Help: A Day in the Life',
        albumYear: 2005,
        albumArt: 'https://i.imgur.com/jFOm1vf.png',
        timeSig: '9/8'
    },
    'the eraser': {
        songName: 'The Eraser',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'analyse': {
        songName: 'Analyse',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'the clock': {
        songName: 'The Clock',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'black swan': {
        songName: 'Black Swan',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'skip divided': {
        songName: 'Skip Divided',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'atoms for peace': {
        songName: 'Atoms for Peace',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'and it rained all night': {
        songName: 'And It Rained All Night',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'harrowdown hill': {
        songName: 'Harrowdown Hill',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    'cymbal rush': {
        songName: 'Cymbal Rush',
        albumName: 'The Eraser',
        albumYear: 2006,
        albumArt: 'https://i.imgur.com/qUZrzuu.png',
        timeSig: '4/4'
    },
    '15 step': {
        songName: '15 Step',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '5/4'
    },
    'bodysnatchers': {
        songName: 'Bodysnatchers',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'nude': {
        songName: 'Nude',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '6/8'
    },
    'weird fishes': {
        songName: 'Weird Fishes / Arpeggi',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'all i need': {
        songName: 'All I Need',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'faust arp': {
        songName: 'Faust Arp',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '3/4, 4/4'
    },
    'reckoner': {
        songName: 'Reckoner',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'house of cards': {
        songName: 'House of Cards',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'jigsaw falling into place': {
        songName: 'Jigsaw Falling Into Place',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'videotape': {
        songName: 'Videotape',
        albumName: 'In Rainbows',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'mk 1': {
        songName: 'MK 1',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: 'Free Time'
    },
    'down is the new up': {
        songName: 'Down Is the New Up',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'go slowly': {
        songName: 'Go Slowly',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'mk 2': {
        songName: 'MK 2',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: 'Free Time'
    },
    'last flowers': {
        songName: 'Last Flowers',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'up on the ladder': {
        songName: 'Up on the Ladder',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    'bangers + mash': {
        songName: 'Bangers + Mash',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '4/4'
    },
    '4 minute warning': {
        songName: '4 Minute Warning',
        albumName: 'In Rainbows (B)',
        albumYear: 2007,
        albumArt: 'https://i.imgur.com/xC7jZP2.png',
        timeSig: '6/4, 4/4, 5/4'
    },
    'harry patch': {
        songName: 'Harry Patch (In Memory Of)',
        albumName: 'Harry Patch (In Memory Of)',
        albumYear: 2009,
        albumArt: 'https://i.imgur.com/fX5pXHJ.png',
        timeSig: '4/4'
    },
    'these are my twisted words': {
        songName: 'These Are My Twisted Words',
        albumName: 'These Are My Twisted Words',
        albumYear: 2009,
        albumArt: 'https://i.imgur.com/FCCxUaU.png',
        timeSig: '5/4'
    },
    'bloom': {
        songName: 'Bloom',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'morning mr magpie': {
        songName: 'Morning Mr. Magpie',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'little by little': {
        songName: 'Little by Little',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'feral': {
        songName: 'Feral',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'lotus flower': {
        songName: 'Lotus Flower',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'codex': {
        songName: 'Codex',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4, 5/4 + 4/4'
    },
    'give up the ghost': {
        songName: 'Give Up the Ghost',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'separator': {
        songName: 'Separator',
        albumName: 'The King of Limbs',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'supercollider': {
        songName: 'Supercollider',
        albumName: 'The King of Limbs (B)',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'the butcher': {
        songName: 'The Butcher',
        albumName: 'The King of Limbs (B)',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'the daily mail': {
        songName: 'The Daily Mail',
        albumName: 'The King of Limbs (B)',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4, 2/4'
    },
    'staircase': {
        songName: 'Staircase',
        albumName: 'The King of Limbs (B)',
        albumYear: 2011,
        albumArt: 'https://i.imgur.com/7SAe2yB.png',
        timeSig: '4/4'
    },
    'before your very eyes': {
        songName: 'Before Your Very Eyes',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '4/4'
    },
    'default': {
        songName: 'Default',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '4/4'
    },
    'ingenue': {
        songName: 'Ingenue',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '4/4'
    },
    'dropped': {
        songName: 'Dropped',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '6/4'
    },
    'unless': {
        songName: 'Unless',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '4/4'
    },
    'stuck together pieces': {
        songName: 'Stuck Together Pieces',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '4/4'
    },
    'judge jury and executioner': {
        songName: 'Judge Jury and Executioner',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '7/4'
    },
    'reverse running': {
        songName: 'Reverse Running',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '4/4'
    },
    'amok': {
        songName: 'Amok',
        albumName: 'Amok',
        albumYear: 2013,
        albumArt: 'https://i.imgur.com/7mpkzid.png',
        timeSig: '4/4'
    },
    'a brain in a bottle': {
        songName: 'A Brain in a Bottle',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: '4/4'
    },
    'guess again': {
        songName: 'Guess Again!',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: '4/4'
    },
    'interference': {
        songName: 'Interference',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: '4/4'
    },
    'the mother lode': {
        songName: 'The Mother Lode',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: '4/4'
    },
    'truth ray': {
        songName: 'Truth Ray',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: '4/4'
    },
    'there is no ice': {
        songName: 'There Is No Ice',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: '4/4'
    },
    'pink section': {
        songName: 'Pink Section',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: 'Free Time'
    },
    'nose grows some': {
        songName: 'Nose Grows Some',
        albumName: 'Tomorrow\'s Modern Boxes',
        albumYear: 2014,
        albumArt: 'https://i.imgur.com/MpcrD3J.png',
        timeSig: '4/4'
    },
    'burn the witch': {
        songName: 'Burn the Witch',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'daydreaming': {
        songName: 'Daydreaming',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '3/4',
    },
    'decks dark': {
        songName: 'Decks Dark',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4, 4/4 + 2/4 + 4/4'
    },
    'desert island disk': {
        songName: 'Desert Island Disk',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '7/4'
    },
    'ful stop': {
        songName: 'Ful Stop',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '6/4'
    },
    'glass eyes': {
        songName: 'Glass Eyes',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'identikit': {
        songName: 'Identikit',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'the numbers': {
        songName: 'The Numbers',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'present tense': {
        songName: 'Present Tense',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'tinker tailor soldier sailor rich man poor man beggar man thief': {
        songName: 'TTSSRMPMBMT',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'true love waits': {
        songName: 'True Love Waits',
        albumName: 'A Moon Shaped Pool',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'spectre': {
        songName: 'Spectre',
        albumName: 'A Moon Shaped Pool (B)',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '6/8'
    },
    'ill wind': {
        songName: 'Ill Wind',
        albumName: 'A Moon Shaped Pool (B)',
        albumYear: 2016,
        albumArt: 'https://i.imgur.com/2rIDywU.png',
        timeSig: '4/4'
    },
    'suspirium': {
        songName: 'Suspirium',
        albumName: 'Suspiria',
        albumYear: 2018,
        albumArt: 'https://i.imgur.com/F4l7Vto.jpeg',
        timeSig: '3/4'
    },
    'unmade': {
        songName: 'Unmade',
        albumName: 'Suspiria',
        albumYear: 2018,
        albumArt: 'https://i.imgur.com/F4l7Vto.jpeg',
        timeSig: '3/4'
    },
    'traffic': {
        songName: 'Traffic',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'last i heard': {
        songName: 'Last I Heard',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'twist': {
        songName: 'Twist',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'dawn chorus': {
        songName: 'Dawn Chorus',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: 'Free Time'
    },
    'i am a very rude person': {
        songName: 'I Am a Very Rude Person',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'not the news': {
        songName: 'Not the News',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'the axe': {
        songName: 'The Axe',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'impossible knots': {
        songName: 'Impossible Knots',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'runwayaway': {
        songName: 'Runwayaway',
        albumName: 'Anima',
        albumYear: 2019,
        albumArt: 'https://i.imgur.com/mk5bIrd.png',
        timeSig: '4/4'
    },
    'the same': {
        songName: 'The Same',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'the opposite': {
        songName: 'The Opposite',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'you will never work in television again': {
        songName: 'You Will Never Work In Television Again',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '5/4'
    },
    'pana-vision': {
        songName: 'Pana-Vision',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '7/8'
    },
    'the smoke': {
        songName: 'The Smoke',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'speech bubbles': {
        songName: 'Speech Bubbles',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'thin thing': {
        songName: 'Thin Thing',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'open the floodgates': {
        songName: 'Open the Floodgates',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'free in the knowledge': {
        songName: 'Free In the Knowledge',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'a hairdryer': {
        songName: 'A Hairdryer',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'waving a white flag': {
        songName: 'Waving a White Flag',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '11/8'
    },
    "we don't know what tomorrow brings": {
        songName: "We Don't Know What Tomorrow Brings",
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4'
    },
    'skrting on the surface': {
        songName: 'Skrting On the Surface',
        albumName: 'A Light for Attracting Attention',
        albumYear: 2022,
        albumArt: 'https://i.imgur.com/PNgqgrn.png',
        timeSig: '4/4 + 3/8'
    },
    unknown: {
        songName: 'unknown',
        albumName: 'unknown',
        albumYear: '0451',
        albumArt: 'https://i.imgur.com/qd7IJnb.jpeg',
        timeSig: 'unknown'
    }
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + '/main.js');
});

app.get('/api/:name', (req, res) => {
    const songName = req.params.name.toLowerCase();
    if (song[songName]) {
        res.json(song[songName]);
    } else {
        res.json(song['unknown']);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! :)`);
});