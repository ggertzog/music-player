import hero from '../music/Hero.mp3';
import love from '../music/Love.mp3';
import carica from '../music/Metalica.mp3';
import rise from '../music/RISE.mp3';


const songs = [
    {
        path: hero,
        songTitle: 'Hero',
        cover: 'https://tunnel.ru/tmp/2JknMeQjSw0KymYPOGzL/01.jpg',
        artist: 'Skillet',
        id: 1
    },
    {
        path: love,
        songTitle: 'We Gotta Get Love',
        cover: 'https://globalmsk.ru/usr/upload/15374556020.jpg',
        artist: 'Egor Krid',
        id: 2
    },
    {
        path: carica,
        songTitle: 'Царица',
        cover: 'https://lyrictum.com/wp-content/uploads/Metallica-1.jpg',
        artist: 'Metallica',
        id: 3
    },
    {
        path: rise,
        songTitle: 'Rise',
        cover: 'https://www.game-ost.ru/static/covers_soundtracks/2/4/244132_442764.jpg',
        artist: 'Mako, Glitch Mob, The World Alive',
        id: 4
    }
];

export default songs;