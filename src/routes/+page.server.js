export async function load() {
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
