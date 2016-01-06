var jsonPartsList=[{"pm":"柴油滤芯1","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯2","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯3","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯4","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯5","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯6","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯7","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯8","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯9","jx":"DH220","jh":"123456","pp":"斗山","sl":5},
							   {"pm":"柴油滤芯10","jx":"DH220","jh":"123456","pp":"斗山","sl":5}
							   ];
var choosedJsonPartsList=[];
function chooseItem(i){
	   var checked=$("#checkbox"+i).is(":checked");
	   if(checked){
	      choosedJsonPartsList.push(jsonPartsList[i]);
	   }
	}
function showPartsList(){
	for(var i=0;i<jsonPartsList.length;i++){
	       var list="<li data-icon=\"false\">"+
						"<input onclick=\"chooseItem("+i+")\" type=\"checkbox\" id=\"checkbox"+i+"\">"+
						"<label for=\"checkbox"+i+"\">"+
							"<p>"+
								"<strong>"+jsonPartsList[i].pm+"</strong><span>"+jsonPartsList[i].jx+"</span><span>-</span><span>"+jsonPartsList[i].jh+"</span>"+
							"</p>"+
							"<p>"+
								"<span>"+jsonPartsList[i].pp+"</span><span>申请数量</span><span>：</span><span>"+jsonPartsList[i].sl+"</span>"+
							"</p>"+
						"</label>"+
					"</li>";
		     $("#partsList").append(list);
	   }
	//$('#partsList').listview('refresh').trigger("create");
	//$('#partsList').listview('refresh');
}
function submit(){
	var aaa=JSON.stringify(choosedJsonPartsList);
	alert(aaa);
}