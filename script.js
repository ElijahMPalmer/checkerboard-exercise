// Your JS goes here
document.body.style.margin = 0;

for (var i = 0; i < 81; i++) {
    let elem = document.createElement('div');
    if (i % 2 === 0) {
        let styleString = "background-color:black;width:11.1%;float:left;padding-bottom:11.1%;margin-top:0;";
        elem.setAttribute("style", styleString);
        document.body.append(elem);
    } else {
        let styleString = "background-color:red;width:11.1%;float:left;padding-bottom:11.1%;margin-top:0;";
        elem.setAttribute("style", styleString);
        document.body.append(elem);
    }
}