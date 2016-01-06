
var jsonOrderList=[{"gdh":"RO201506210001","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210002","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210003","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210004","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210005","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210006","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210007","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210008","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210009","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                       {"gdh":"RO201506210010","sj":"2015-12-31 12:23:41","pp":"斗山","xh":"DH220","kh":"周伯通","js":"刘军"},
		                      ];
function showOrderList(){
	$.each(jsonOrderList,function(i,row){
	       var html="<li>"+
					 //"<a href=\"orderReview.html?pkcsswork="+row.gdh+"\" rel=\"external\">"+
					 "<a href=\"#partscheck?pkcsswork="+row.gdh+"\" rel=\"external\">"+
						"<p>"+
							"<strong>工单号：</strong><span>"+row.gdh+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>报修时间：</strong><span>"+row.sj+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>品牌型号：</strong><span>"+row.pp+"</span><span style=\"margin-left:5px\">"+row.xh+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>客户姓名：</strong><span>"+row.kh+"</span>"+
						"</p>"+
						"<p>"+
							"<strong>技师姓名：</strong><span>"+row.js+"</span>"+
						"</p>"+
					  "</a>"+
				    "</li>";
	       $("#orderListView").append(html);
	   });
	   $("#orderListView").listview("refresh");
}