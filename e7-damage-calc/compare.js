nb = 1;
window.onload = function() {
	var submits = document.getElementById("save");

	submits.onclick = function() {
		//get hero info
		var hero = $('[data-id="hero"]').attr("title");
		var artifact = $('[data-id="artifact"]').attr("title");		
		var atk = document.getElementById('atk').value;		
		var crit = document.getElementById('crit').value;
if (typeof document.getElementById('caster-speed') === 'undefined' || document.getElementById('caster-speed') === null) {
var speed = ''    
}
else{
     var speed = document.getElementById('caster-speed').value;
}
    
if (typeof document.getElementById('caster-defense') === 'undefined' || document.getElementById('caster-defense') === null) {
    var def = ''
}
else{
     var def = document.getElementById('caster-defense').value;
}
if (typeof document.getElementById('caster-max-hp') === 'undefined' || document.getElementById('caster-max-hp') === null) {
    var hp = ''
}
else{
     var hp = document.getElementById('caster-max-hp').value;
}

tableCreate();
lastid= nb-1;
tbHeroinfo = document.getElementById("tbHeroinfo"+lastid);
var row = tbHeroinfo.insertRow(0);
var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
cell1.innerHTML = hero;
  cell2.innerHTML = artifact;
cell3.innerHTML = atk; 
cell4.innerHTML = crit; 
cell5.innerHTML = speed; 
cell6.innerHTML = def; 
cell7.innerHTML = hp;

				
dmg = document.getElementById('damage-block');
dmg_clone = dmg.cloneNode(true);
dmg_clone.id = "compare-block"+lastid;
compare = document.getElementById("compare-block"+lastid);
// compare.appendChild(document.createTextNode('top div'));

compare.appendChild(dmg_clone);
}
}
function tableCreate() {
    const lang = document.getElementById('root').getAttribute('lang');
    const build = document.getElementById("builds").firstElementChild.innerHTML;
    const hero=document.getElementById("stats").firstElementChild.innerHTML;
    const artifact=document.getElementById("artifact-block").firstElementChild.innerHTML;
    const atk=document.getElementById("atk-label").innerText;
    const cd=document.getElementById("crit-label").innerText;
    if (lang === 'en') {
        var cspeed=elements["caster_speed"].label;
        var cdefense=elements["caster_defense"].label;
        var cmaxhp=elements["caster_max_hp"].label;
    }else{
    var cspeed=i18n[lang].form["caster_speed"];
    var cdefense=i18n[lang].form["caster_defense"];
    var cmaxhp=i18n[lang].form["caster_max_hp"];
    }
    var compareblock1 = "<div class=\"compare-block\" id=\"compare-block"+nb+"\"> <h4>"+build+nb+"</h4><div>        <table class=\"table table-bordered table-sm col-sm-12\">     <thead class=\"table-secondary\">        <tr>           <th>"+hero+"</th>           <th>"+artifact+"</th>           <th>"+atk+"</th>         <th>"+cd+"</th>            <th>"+cspeed+"</th>         <th>"+cdefense+"</th>         <th>"+cmaxhp+"</th>        </tr>    </thead>    <tbody id=\"tbHeroinfo";
    var compareblock2 = nb;
    var compareblock3 = "\"></tbody> </table></div></div>";
    var arr=new Array();
arr.push(compareblock1);
arr.push(compareblock2);
arr.push(compareblock3);
var compareblock=arr.join("");
document.querySelector('footer').insertAdjacentHTML('beforebegin', compareblock);
nb++;
}