{
    const req = require.context('./pages', true, /index\.js$/);
    let modules = req.keys();
    for (let src of modules) {
        //console.log(src)
        req(src);
    }
}