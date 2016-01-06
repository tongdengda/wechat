var jsonPartsList=[{"pm":"≤Ò”Õ¬À–æ1","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ2","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ3","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ4","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ5","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ6","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ7","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ8","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ9","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5},
							   {"pm":"≤Ò”Õ¬À–æ10","jx":"DH220","jh":"123456","pp":"∂∑…Ω","sl":5}
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
								"<span>"+jsonPartsList[i].pp+"</span><span>…Í«Î ˝¡ø</span><span>£∫</span><span>"+jsonPartsList[i].sl+"</span>"+
							"</p>"+
						"</label>"+
					"</li>";
		     $("#partsList").append(list);
	   }
	 $('#partsList').listview('refresh').trigger("create");
}