function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
getfile("main.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
  profile(data.profile);
 Career(data.Career);
 edudetails(data.Education);
 languages(data.Languages);
 skills(data.Skills);
}
  )
  var left=document.querySelector(".left");
  function profile(pro){
  var img=document.createElement("img");
  img.src=pro.img;
  left.appendChild(img);
  var h2=document.createElement("h2");
  h2.textContent=pro.Name;
  left.appendChild(h2);
  var h3=document.createElement("h3");
  h3.textContent=pro.Roll;
  left.appendChild(h3);
  var h4=document.createElement("h4");
  h4.textContent=pro.College;
  left.appendChild(h4);
  var h5=document.createElement("h5");
  h5.textContent=pro.Place;
  left.appendChild(h5);
}
 var right=document.querySelector(".right");
 function Career(c)
 {
   var h2=document.createElement("h2");
   h2.textContent="Career Objective";
   right.appendChild(h2);
   var hr=document.createElement("hr");
   right.appendChild(hr);
     var p=document.createElement("p");
   p.textContent=c.info;
   right.appendChild(p);
 }
  function edudetails(e){
   var h2=document.createElement("h2");
   h2.textContent="Education Details";
   right.appendChild(h2);
   var hr=document.createElement("hr");
   right.appendChild(hr);
   var tb=document.createElement("table");
   tb.border="2";
   var tr1="<tr><td>Degree</td><td>Institution</td><td>YearOfPassing</td></tr>";
   var tr2=" ";
   for(i=0;i<e.length;i++){
     tr2=tr2+"<tr><td>"+e[i].Degree+"</td><td>"+e[i].Institution+"</td><td>"+e[i].YearOfPassing+"</td></tr>";
   }
   tb.innerHTML=tr1+tr2;
   right.appendChild(tb);
 }
 function languages(l){
   var h2=document.createElement("h2");
   h2.textContent="Languages";
   right.appendChild(h2);
   var ul=document.createElement("ul");
   right.appendChild(ul);
   for(i=0;i<l.length;i++){
     var li=document.createElement("li");
     li.textContent=l[i].lang;
     ul.appendChild(li);
   }
 }
 function skills(s){
 	var h2=document.createElement("h2");
 	h2.textContent="Skills";
 	right.appendChild(h2);
 	var hr=document.createElement("hr");
 	right.appendChild(hr);
 	var ul=document.createElement("ul");
 	right.appendChild(ul);
 	for(i=0;i<s.length;i++){
 		var li=document.createElement("li");
 		li.textContent=s[i].title+":"+s[i].content;
		ul.appendChild(li);
 	}
}
