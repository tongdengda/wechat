var jsonOrderList=[{"gdh":"RO201506210001","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210002","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210003","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210004","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210005","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210006","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210007","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210008","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210009","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                       {"gdh":"RO201506210010","sj":"2015-12-31 12:23:41","pp":"��ɽ","xh":"DH220","kh":"�ܲ�ͨ","js":"����"},
		                      ];
function showOrderList(){
	$.each(jsonOrderList,function(i,row){
	       var html="<li>"+
					 //"<a href=\"orderReview.html?pkcsswork="+row.gdh+"\" rel=\"external\">"+
					 "<a href=\"#partscheck?pkcsswork="+row.gdh+"\" rel=\"external\">"+
						"<p>"+
							"<strong>�����ţ�</strong><span>"+row.gdh+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>����ʱ�䣺</strong><span>"+row.sj+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>Ʒ���ͺţ�</strong><span>"+row.pp+"</span><span style=\"margin-left:5px\">"+row.xh+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>�ͻ�������</strong><span>"+row.kh+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>��ʦ������</strong><span>"+row.js+"</span>"+
						"</p>"+
					  "</a>"+
				    "</li>";
	       $("#orderListView").append(html);
	   });
	   $("#orderListView").listview("refresh");
}