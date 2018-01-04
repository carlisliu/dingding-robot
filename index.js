const schedule = require('node-schedule');
const rp = require('request-promise-native');

schedule.scheduleJob('49 11 * * *', remind);

async function remind() {
    try {
        await rp({
            method: 'POST',
            uri: 'https://oapi.dingtalk.com/robot/send?access_token=xxx',
            body: {
                "msgtype": "text",
                "text": {
                    "content": "吃饭"
                },
                "at": {
                    "isAtAll": true
                }
            },
            json: true
        });
    } catch (e) {
        console.error(e);
    }
}