var dats = document.getElementsByClassName('dat');
for(var i=7; i<dats.length; i++) {
	var url="http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=", text="", user="";
	var tdLeft = dats[i].getElementsByClassName('text-left');
	var tdDetail = dats[i].getElementsByClassName('detail_link');
	if( tdDetail.length >= 1 ) {
		var judge = '' + tdDetail[0].innerHTML;
		judge = judge.replace(/<.+?>/g, '');
		text += '[' + judge.substring(2) + '] ';
	} else {
		text += '[Compile Error] ';
	}

	user += '' + tdLeft[1].innerHTML;
	user = user.replace(/<.+?>/g, '');
	text += user + ' / ';

	var prob = '' + tdLeft[2].innerHTML;
	prob = prob.replace(/<.+?>/g, '');
	text += prob;
	url += prob.match(/(.+):/)[1];

	dats[i].innerHTML += '<td><a href="https://twitter.com/intent/tweet?text='+text+'&tw_p=TweetAOJ&url='+url+'">Tweet</a></td>';
}

var lab = document.getElementsByClassName('label');
lab[19].innerHTML += '<td>share</td>';

//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
