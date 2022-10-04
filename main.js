document.querySelector('.search').addEventListener('click', apiReq);

async function apiReq() {
    const songName = document.querySelector('input').value;
    try {
        const res = await fetch(
            `https://thomyorke.herokuapp.com/api/${songName}`
        );
        const data = await res.json();

        console.log(data);
        document.getElementById('timeSig').innerText = data.timeSig;
        document.getElementById('songName').innerText = data.songName;
        document.getElementById('albumName').innerText = data.albumName;
        document.getElementById('albumYear').innerText = data.albumYear;
        document.getElementsByTagName('img')[0].src = data.albumArt;
    } catch (error) {
        console.log(error);
    }
}