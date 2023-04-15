// import * as database from '$lib/server/database.js';

export async function load() {
    // const generatedAt = new Date().toLocaleString('en-GB', {
    // 	day: '2-digit',
    // 	month: '2-digit',
    // 	year: 'numeric',
    // 	hour: '2-digit',
    // 	minute: '2-digit',
    // 	second: '2-digit',
    // 	fractionalSecondDigits: 3 // for milliseconds
    // });

    // const res = await Promise.resolve('yes')

    // return {
    // 	generatedAt,
    // 	res
    // };


    // let userid = cookies.get('userid');

    // if (!userid) {
    // 	userid = crypto.randomUUID();
    // 	cookies.set('userid', userid, { path: '/' });
    // }

    const linkData = [
        {
            id: 1,
            name: "新的链接1",
            type: "",
            ipAddress: '127.0.0.1',
            port: 3331,
            time: Date.now(),
        },

        {
            id: 2,
            name: "新的链接2",
            type: "",
            ipAddress: '127.0.0.2',
            port: 3332,
            time: Date.now(),
        },

        {
            id: 1,
            name: "新的链接1",
            type: "",
            ipAddress: '127.0.0.3',
            port: 3333,
            time: Date.now(),
        },

    ]
    return {
        linkData
    };


}
