const {Actions} = require ('../utils/actions.js');


//task-7

function test1(url, username, password, title) {
    Actions.visitUrl(url)
    .then(() => Actions.login(username, password))
    .then(() => Actions.validateTitle(title))
    .catch(err => console.log(err));
}

// task-8
async function test2(url, username, password, title) {
    try {
        await Actions.visitUrl(url);
        // console.log(res1);
        await Actions.login(username, password);
        await Actions.validateTitle(title);
    } catch (err) {
        console.log(err);
    }
}

test1('www', 'TechGlobal', 'Test1234', 'Test');
test2('www', 'TechGlobal', 'Test1234', 'Test');


