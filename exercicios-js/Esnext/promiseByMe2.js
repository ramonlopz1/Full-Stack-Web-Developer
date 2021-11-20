const doAfterTime = (time = 2000) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Promessa Cumprida'))
            console.log('Cumprindo Promessa...')
        }, time);
    })
}

async function doTheJob() {
    const result = await doAfterTime(2000)
    return result
}

doTheJob()
    .then(() => doTheJob(2000))
    .then(() => doTheJob(2000))