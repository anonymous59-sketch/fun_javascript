//// 함수1
const jsonData1 = `[{"id":1,"first_name":"Jonas","last_name":"Belbin","email":"jbelbin0@skyrock.com","gender":"Male","salary":18041},
{"id":2,"first_name":"Brinna","last_name":"Attewill","email":"battewill1@msu.edu","gender":"Female","salary":1662},
{"id":3,"first_name":"Molly","last_name":"Hoodlass","email":"mhoodlass2@globo.com","gender":"Female","salary":7832},
{"id":4,"first_name":"Lynett","last_name":"Polglase","email":"lpolglase3@washingtonpost.com","gender":"Female","salary":10221},
{"id":5,"first_name":"Paige","last_name":"Ludlom","email":"pludlom4@mozilla.com","gender":"Female","salary":13449},
{"id":6,"first_name":"Dannye","last_name":"Ollivierre","email":"dollivierre5@angelfire.com","gender":"Female","salary":10308},
{"id":7,"first_name":"Chelsy","last_name":"Fevers","email":"cfevers6@intel.com","gender":"Female","salary":18561},
{"id":8,"first_name":"Niki","last_name":"Kilminster","email":"nkilminster7@huffingtonpost.com","gender":"Male","salary":14697},
{"id":9,"first_name":"Feodor","last_name":"Lund","email":"flund8@google.es","gender":"Male","salary":8686},
{"id":10,"first_name":"Jessie","last_name":"Fludder","email":"jfludder9@qq.com","gender":"Non-binary","salary":16900},
{"id":11,"first_name":"Graig","last_name":"Truett","email":"gtruetta@pcworld.com","gender":"Male","salary":10624},
{"id":12,"first_name":"Felic","last_name":"Fayers","email":"ffayersb@jiathis.com","gender":"Male","salary":7881},
{"id":13,"first_name":"Llywellyn","last_name":"O'Bradain","email":"lobradainc@friendfeed.com","gender":"Male","salary":3090},
{"id":14,"first_name":"Aubert","last_name":"Apps","email":"aappsd@earthlink.net","gender":"Male","salary":14744},
{"id":15,"first_name":"Shirleen","last_name":"Churchlow","email":"schurchlowe@nhs.uk","gender":"Female","salary":6021},
{"id":16,"first_name":"Saul","last_name":"Fairholme","email":"sfairholmef@go.com","gender":"Male","salary":13200},
{"id":17,"first_name":"Ailene","last_name":"Yancey","email":"ayanceyg@cdbaby.com","gender":"Female","salary":8375},
{"id":18,"first_name":"Milo","last_name":"Mary","email":"mmaryh@wikipedia.org","gender":"Male","salary":11932},
{"id":19,"first_name":"Lindsey","last_name":"Andrysek","email":"landryseki@earthlink.net","gender":"Male","salary":19963},
{"id":20,"first_name":"Sherwood","last_name":"Babcock","email":"sbabcockj@adobe.com","gender":"Male","salary":5297},
{"id":21,"first_name":"Barb","last_name":"Thripp","email":"bthrippk@surveymonkey.com","gender":"Female","salary":19616},
{"id":22,"first_name":"Alexia","last_name":"Brickner","email":"abricknerl@quantcast.com","gender":"Female","salary":14790},
{"id":23,"first_name":"Arney","last_name":"Sodeau","email":"asodeaum@macromedia.com","gender":"Male","salary":16043},
{"id":24,"first_name":"Merrile","last_name":"Kingdon","email":"mkingdonn@pcworld.com","gender":"Female","salary":15852},
{"id":25,"first_name":"Sapphire","last_name":"Rickeard","email":"srickeardo@opensource.org","gender":"Bigender","salary":13282},
{"id":26,"first_name":"Laney","last_name":"Layzell","email":"llayzellp@miitbeian.gov.cn","gender":"Male","salary":7877},
{"id":27,"first_name":"Jacquelin","last_name":"Readings","email":"jreadingsq@netvibes.com","gender":"Female","salary":10326},
{"id":28,"first_name":"Dreddy","last_name":"Beauchop","email":"dbeauchopr@vistaprint.com","gender":"Female","salary":6330},
{"id":29,"first_name":"Tamar","last_name":"Schaumaker","email":"tschaumakers@tiny.cc","gender":"Female","salary":15926},
{"id":30,"first_name":"Kellby","last_name":"Rowen","email":"krowent@mapy.cz","gender":"Male","salary":4585},
{"id":31,"first_name":"Robb","last_name":"Torrans","email":"rtorransu@google.es","gender":"Male","salary":1257},
{"id":32,"first_name":"Katina","last_name":"Reboulet","email":"krebouletv@tripod.com","gender":"Female","salary":17984},
{"id":33,"first_name":"Cammi","last_name":"Tubby","email":"ctubbyw@addtoany.com","gender":"Female","salary":10885},
{"id":34,"first_name":"Raynard","last_name":"Klagges","email":"rklaggesx@wiley.com","gender":"Male","salary":3877},
{"id":35,"first_name":"Titus","last_name":"Colton","email":"tcoltony@dmoz.org","gender":"Male","salary":2301},
{"id":36,"first_name":"Pincus","last_name":"Bevington","email":"pbevingtonz@sciencedirect.com","gender":"Male","salary":10198},
{"id":37,"first_name":"Georgianne","last_name":"Kubek","email":"gkubek10@yelp.com","gender":"Female","salary":6452},
{"id":38,"first_name":"Roxanna","last_name":"Baglan","email":"rbaglan11@taobao.com","gender":"Agender","salary":5416},
{"id":39,"first_name":"Abran","last_name":"Maffione","email":"amaffione12@cpanel.net","gender":"Male","salary":19133},
{"id":40,"first_name":"Alessandra","last_name":"Rash","email":"arash13@slate.com","gender":"Female","salary":9117},
{"id":41,"first_name":"Gustie","last_name":"Stracey","email":"gstracey14@msu.edu","gender":"Female","salary":11659},
{"id":42,"first_name":"Costa","last_name":"Rosenboim","email":"crosenboim15@chron.com","gender":"Male","salary":3802},
{"id":43,"first_name":"Jolene","last_name":"Setford","email":"jsetford16@wunderground.com","gender":"Female","salary":9496},
{"id":44,"first_name":"Emera","last_name":"Tebboth","email":"etebboth17@flavors.me","gender":"Polygender","salary":7372},
{"id":45,"first_name":"Thatcher","last_name":"Krolman","email":"tkrolman18@mac.com","gender":"Male","salary":19375},
{"id":46,"first_name":"Beale","last_name":"Gordge","email":"bgordge19@washington.edu","gender":"Male","salary":17384},
{"id":47,"first_name":"Thor","last_name":"Spini","email":"tspini1a@xinhuanet.com","gender":"Male","salary":19972},
{"id":48,"first_name":"Chester","last_name":"Labon","email":"clabon1b@hud.gov","gender":"Male","salary":12171},
{"id":49,"first_name":"Ravid","last_name":"Smorthit","email":"rsmorthit1c@ed.gov","gender":"Male","salary":16194},
{"id":50,"first_name":"Moishe","last_name":"Balffye","email":"mbalffye1d@gnu.org","gender":"Male","salary":15923},
{"id":51,"first_name":"Brandea","last_name":"Woodrough","email":"bwoodrough1e@comsenz.com","gender":"Female","salary":6364},
{"id":52,"first_name":"Isidro","last_name":"Grigorushkin","email":"igrigorushkin1f@wunderground.com","gender":"Male","salary":10028},
{"id":53,"first_name":"Locke","last_name":"Feron","email":"lferon1g@canalblog.com","gender":"Male","salary":18425},
{"id":54,"first_name":"Allianora","last_name":"Davers","email":"adavers1h@ebay.com","gender":"Female","salary":10123},
{"id":55,"first_name":"Anthiathia","last_name":"Seymark","email":"aseymark1i@dagondesign.com","gender":"Female","salary":10866},
{"id":56,"first_name":"Sawyere","last_name":"Geering","email":"sgeering1j@vkontakte.ru","gender":"Male","salary":5278},
{"id":57,"first_name":"Angy","last_name":"McCaffery","email":"amccaffery1k@oaic.gov.au","gender":"Female","salary":15862},
{"id":58,"first_name":"Morna","last_name":"Fullegar","email":"mfullegar1l@baidu.com","gender":"Female","salary":5900},
{"id":59,"first_name":"Daniela","last_name":"Werny","email":"dwerny1m@ow.ly","gender":"Female","salary":13731},
{"id":60,"first_name":"Andie","last_name":"Scrymgeour","email":"ascrymgeour1n@indiatimes.com","gender":"Male","salary":6206},
{"id":61,"first_name":"Emera","last_name":"Doumic","email":"edoumic1o@networksolutions.com","gender":"Female","salary":10555},
{"id":62,"first_name":"Sayers","last_name":"Garvey","email":"sgarvey1p@delicious.com","gender":"Male","salary":9289},
{"id":63,"first_name":"Ava","last_name":"Thicking","email":"athicking1q@hibu.com","gender":"Female","salary":2219},
{"id":64,"first_name":"Jessee","last_name":"Bails","email":"jbails1r@netlog.com","gender":"Male","salary":6065},
{"id":65,"first_name":"Gill","last_name":"Cherryman","email":"gcherryman1s@w3.org","gender":"Female","salary":10753},
{"id":66,"first_name":"Earl","last_name":"Everard","email":"eeverard1t@fc2.com","gender":"Male","salary":11317},
{"id":67,"first_name":"Kenon","last_name":"Ramelot","email":"kramelot1u@google.pl","gender":"Male","salary":13663},
{"id":68,"first_name":"Martino","last_name":"Hovy","email":"mhovy1v@newyorker.com","gender":"Male","salary":2952},
{"id":69,"first_name":"Pegeen","last_name":"Keenor","email":"pkeenor1w@cargocollective.com","gender":"Female","salary":11013},
{"id":70,"first_name":"Berny","last_name":"Mibourne","email":"bmibourne1x@smugmug.com","gender":"Male","salary":9316},
{"id":71,"first_name":"Sally","last_name":"Syred","email":"ssyred1y@tinypic.com","gender":"Female","salary":17220},
{"id":72,"first_name":"Geno","last_name":"Tompkiss","email":"gtompkiss1z@bbb.org","gender":"Male","salary":10493},
{"id":73,"first_name":"Vinni","last_name":"Curnnokk","email":"vcurnnokk20@geocities.jp","gender":"Female","salary":9938},
{"id":74,"first_name":"Kelcy","last_name":"Cramphorn","email":"kcramphorn21@t-online.de","gender":"Female","salary":10311},
{"id":75,"first_name":"Audi","last_name":"Feltoe","email":"afeltoe22@fc2.com","gender":"Female","salary":3400},
{"id":76,"first_name":"Franklin","last_name":"Cornfield","email":"fcornfield23@free.fr","gender":"Male","salary":4883},
{"id":77,"first_name":"Gavin","last_name":"Littleton","email":"glittleton24@prnewswire.com","gender":"Male","salary":14987},
{"id":78,"first_name":"Maryann","last_name":"Bentsen","email":"mbentsen25@lulu.com","gender":"Female","salary":12472},
{"id":79,"first_name":"Aymer","last_name":"Eastup","email":"aeastup26@chronoengine.com","gender":"Male","salary":5978},
{"id":80,"first_name":"Alfred","last_name":"Greguol","email":"agreguol27@china.com.cn","gender":"Male","salary":16662},
{"id":81,"first_name":"Veda","last_name":"Sandever","email":"vsandever28@google.com.br","gender":"Agender","salary":1346},
{"id":82,"first_name":"Charles","last_name":"Kerby","email":"ckerby29@time.com","gender":"Male","salary":17592},
{"id":83,"first_name":"Alfonso","last_name":"Calderwood","email":"acalderwood2a@washingtonpost.com","gender":"Male","salary":18281},
{"id":84,"first_name":"Lion","last_name":"Clows","email":"lclows2b@netvibes.com","gender":"Male","salary":10266},
{"id":85,"first_name":"Wynne","last_name":"Cochet","email":"wcochet2c@fotki.com","gender":"Genderfluid","salary":13938},
{"id":86,"first_name":"Giacomo","last_name":"Lambdon","email":"glambdon2d@usda.gov","gender":"Male","salary":2466},
{"id":87,"first_name":"Randall","last_name":"Huson","email":"rhuson2e@ft.com","gender":"Male","salary":13693},
{"id":88,"first_name":"Linn","last_name":"Wakeling","email":"lwakeling2f@scribd.com","gender":"Male","salary":10396},
{"id":89,"first_name":"Esme","last_name":"Laste","email":"elaste2g@cargocollective.com","gender":"Male","salary":12856},
{"id":90,"first_name":"Elsey","last_name":"Crampton","email":"ecrampton2h@yellowpages.com","gender":"Female","salary":6760},
{"id":91,"first_name":"Jerrome","last_name":"Densey","email":"jdensey2i@nhs.uk","gender":"Male","salary":9304},
{"id":92,"first_name":"Aubrie","last_name":"Rylett","email":"arylett2j@deviantart.com","gender":"Female","salary":11938},
{"id":93,"first_name":"Willard","last_name":"Somerbell","email":"wsomerbell2k@ow.ly","gender":"Male","salary":12330},
{"id":94,"first_name":"Leroi","last_name":"Springall","email":"lspringall2l@cargocollective.com","gender":"Male","salary":19329},
{"id":95,"first_name":"Maribeth","last_name":"Pounsett","email":"mpounsett2m@china.com.cn","gender":"Female","salary":1593},
{"id":96,"first_name":"Sargent","last_name":"Leall","email":"sleall2n@google.cn","gender":"Male","salary":1844},
{"id":97,"first_name":"Tiffi","last_name":"Davidzon","email":"tdavidzon2o@photobucket.com","gender":"Female","salary":9573},
{"id":98,"first_name":"Sallyanne","last_name":"Chitson","email":"schitson2p@google.com.hk","gender":"Female","salary":15487},
{"id":99,"first_name":"Dorey","last_name":"Hubball","email":"dhubball2q@creativecommons.org","gender":"Non-binary","salary":11383},
{"id":100,"first_name":"Natal","last_name":"Shipley","email":"nshipley2r@csmonitor.com","gender":"Male","salary":14130}]`

function getMemberInfo(jsondata) {
  const memberAry = JSON.parse(jsondata);

  let sum = 0; // memberAry 급여 합
  memberAry.forEach(elem => {
    sum += elem.salary;
  });

  let sumOfMale = 0; // Gender가 'Male'인 합계
  memberAry.forEach(elem => {
    if (elem.gender == 'Male') {
      sumOfMale += elem.salary
    }
  });

  let avg = 0; // 전체 평균
  let avgOfMale = 0; // 남자 평균
  let cntOfMale = 0;
  
  memberAry.forEach(elem => {
    if (elem.gender == 'Male') {
      cntOfMale++; // 남자 수 카운트
    }
  });
  
  avg = sum / memberAry.length; // 전체 평균
  avgOfMale = sumOfMale / cntOfMale; // 남자 평균

  // 객체를 활용해서 return을 한다.
  return {sum, avg, sumOfMale, avgOfMale, cntOfMale};
} // end of getMemberInfo()

let result = getMemberInfo(jsonData1);
// console.log(`합계 : ${result.sum}\n전체평균 : ${result.avg}\n남자 합계 : ${result.sumOfMale}\n남자 평균급여 : ${result.avgOfMale}\n남자 수 : ${result.cntOfMale}`);

let jsonStr = '{"name": "Hong"}';
let obj = JSON.parse(jsonStr); // 문자열을 객체로,
// console.log(jsonStr, obj); // 객체를 문자열로
let jsonStr2 = JSON.stringify(obj);
// console.log(jsonStr2);