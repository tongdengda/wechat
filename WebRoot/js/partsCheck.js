var jsonPartsList=[{"pm":"������о1","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о2","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о3","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о4","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о5","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о6","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о7","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о8","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о9","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5},
							   {"pm":"������о10","jx":"DH220","jh":"123456","pp":"��ɽ","sl":5}
							   ];
function showPartsList(){
	for(var i=0;i<jsonData.length;i++){
	       var list="<li data-icon=\"false\">"+
						"<input onclick=\"chooseItem("+i+")\" type=\"checkbox\" id=\"checkbox"+i+"\">"+
						"<label for=\"checkbox"+i+"\">"+
							"<p>"+
								"<strong>"+jsonPartsList[i].pm+"</strong><span>"+jsonPartsList[i].jx+"</span><span>-</span><span>"+jsonPartsList[i].jh+"</span>"+
							"</p>"+
							"<p>"+
								"<span>"+jsonPartsList[i].pp+"</span><span>��������</span><span>��</span><span>"+jsonPartsList[i].sl+"</span>"+
							"</p>"+
						"</label>"+
					"</li>";
		     $("#partsList").append(list);
	   }
	 $('#partsList').listview('refresh').trigger("create");
}