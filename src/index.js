function Convert(){
    let inp = document.getElementById('inInput');
    let val = document.getElementById('money');

    if(val.value === 'usd'){
        document.getElementById("value-euro").innerHTML = (parseFloat(inp.value) * 0.93).toFixed(2);
        document.getElementById("value-tenge").innerHTML = (parseFloat(inp.value) * 456.41).toFixed(2) ;
        document.getElementById("value-dollar").innerHTML = "-";
    }else if(val.value === 'kzt'){
        document.getElementById("value-euro").innerHTML = (parseFloat(parseInt(inp.value) * 0.0020)).toFixed(2);
        document.getElementById("value-tenge").innerHTML = "-";
        document.getElementById("value-dollar").innerHTML = (parseFloat(parseInt(inp.value) * 0.0022)).toFixed(2);
    }else if(val.value === 'eur'){
        document.getElementById("value-euro").innerHTML = "-";
        document.getElementById("value-tenge").innerHTML = (parseFloat(inp.value) * 488.24).toFixed(2);
        document.getElementById("value-dollar").innerHTML = (parseFloat(inp.value) * 1.07).toFixed(2);
    }
}