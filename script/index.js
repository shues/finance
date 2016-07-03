function show_item(id) {
	var spis = document.getElementsByClassName('vis');
	for (var i=0; i<spis.length; i++) {
		spis[i].style.display = "none";
	}
	document.getElementById(id).style.display = "block";
}

function add_prih() {
	var sum = document.getElementById('sum_prih').value;
	var dat = document.getElementById('data').value;
	var url = "/serv/prih/add_prih.php?sum="+sum+"&dat="+dat;
	ajax_f(url,'text',res_f);
}

function res_f(par){
	alert(par);
}

function ajax_f(url,rej,obr) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET',url,true);
    
	xhr.onload = function () {		
            if (rej == "xml") {
                var res = xhr.responseXML;
            }else{
                var res = xhr.responseText;
            }
			
			obr(res);
		
	}
    xhr.send();
}