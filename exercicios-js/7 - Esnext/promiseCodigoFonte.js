function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if(band === 'Queen') {
            resolve({
                sucess: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            });
        } else {
            reject({
                sucess: false,
                msg: 'im not so sure!'
            });
        }
    });
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if(response.sucess) {
            resolve('Bohemian Rhapsody by '+ response.bandName);
        } else {
            reject('Do you know Queen?')
        }
    });
}


async function doTheJob() {
    try {
        const bestRockBandResponse = await bestRockBand('Queen');
        console.log(bestRockBandResponse)
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse)
        console.log(bestRockSongResponse)
    } catch(err) {
        console.log(err.msg)
    }
}

doTheJob()
