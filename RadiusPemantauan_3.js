var suhu_dht22_titik1 = "";
var suhu_dht22_titik2 = "";
var suhu_dht22_titik3 = "";
var suhu_dht22_titik4 = "";
var suhu_dht22_titik5 = "";
var suhu_dht22_titik6 = "";
var suhu_dht22_titik7 = "";
var suhu_dht22_titik8 = "";
var suhu_dht22_titik9 = "";

var kelembaban_dht22_titik1 = "";
var kelembaban_dht22_titik2 = "";
var kelembaban_dht22_titik3 = "";
var kelembaban_dht22_titik4 = "";
var kelembaban_dht22_titik5 = "";
var kelembaban_dht22_titik6 = "";
var kelembaban_dht22_titik7 = "";
var kelembaban_dht22_titik8 = "";
var kelembaban_dht22_titik9 = "";

function fetchData() {
  var apiUrl =
    "https://api.thingspeak.com/channels/2796682/feeds/last.json?timezone=Asia%2FJakarta&api_key=K8FSLU271NV6B31C";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik1 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik1 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl2 =
    "https://api.thingspeak.com/channels/2796685/feeds/last.json?timezone=Asia%2FJakarta&api_key=2ZWSARYU16BMI5SG";

  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik2 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik2 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl3 =
    "https://api.thingspeak.com/channels/2796686/feeds/last.json?timezone=Asia%2FJakarta&api_key=F3D91183ZRGSTVIJ";

  fetch(apiUrl3)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik3 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik3 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl4 =
    "https://api.thingspeak.com/channels/2784707/feeds/last.json?timezone=Asia%2FJakarta&api_key=ZCDJCJMU2H2S60PI";

  fetch(apiUrl4)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik4 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik4 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl5 =
    "https://api.thingspeak.com/channels/2796689/feeds/last.json?timezone=Asia%2FJakarta&api_key=RWKR6XO4VQPD01PU";

  fetch(apiUrl5)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik5 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik5 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl6 =
    "https://api.thingspeak.com/channels/2796691/feeds/last.json?timezone=Asia%2FJakarta&api_key=CTZUFD46VRFHH7UG";

  fetch(apiUrl6)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik6 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik6 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl7 =
    "https://api.thingspeak.com/channels/2796692/feeds/last.json?timezone=Asia%2FJakarta&api_key=5445YLSO4B28BWAA";

  fetch(apiUrl7)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik7 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik7 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl8 =
    "https://api.thingspeak.com/channels/2796693/feeds/last.json?timezone=Asia%2FJakarta&api_key=W2Z3WH4YSW3IUVLX";

  fetch(apiUrl8)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik8 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik8 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl9 =
    "https://api.thingspeak.com/channels/2796705/feeds/last.json?timezone=Asia%2FJakarta&api_key=L25N9NVPQ02EBJ7Q";

  fetch(apiUrl9)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik9 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik9 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

setInterval(fetchData, 5000);
var json_RadiusPemantauan_3 = {
  type: "FeatureCollection",
  name: "RadiusPemantauan_3",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 1",
        HubDist: 138.39179,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 1.shp",
        Suhu: suhu_dht22_titik1,
        Kelembapan: kelembaban_dht22_titik1,
        xcoord: 107.61974,
        ycoord: -6.87299,
        Foto: "foto1.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.624257557354383, -6.872962111146985],
              [107.624043951422351, -6.874359534671315],
              [107.623408714788752, -6.875622595124085],
              [107.622414025456621, -6.876627654716794],
              [107.621157249083211, -6.877276329384661],
              [107.619761408711526, -6.877505120003858],
              [107.618363142029906, -6.877291629018198],
              [107.617099325134916, -6.876656753608192],
              [107.616093672611825, -6.875662640436208],
              [107.615444626196961, -6.874406602055164],
              [107.615215718057726, -6.873011590578287],
              [107.615429352211564, -6.871614161381697],
              [107.616064612651797, -6.870351105375237],
              [107.617059312282009, -6.86934605864906],
              [107.61831608151148, -6.868697400353378],
              [107.619711900025905, -6.868468623358395],
              [107.621110138485705, -6.868682120016317],
              [107.62237393157406, -6.869316990980014],
              [107.623379573799056, -6.870311091285464],
              [107.624028627357887, -6.871567113294324],
              [107.624257557354383, -6.872962111146985],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 2",
        HubDist: 54.1992,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 2.shp",
        Suhu: suhu_dht22_titik2,
        Kelembapan: kelembaban_dht22_titik2,
        xcoord: 107.56692,
        ycoord: -6.94307,
        Foto: "foto2.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.571442414591559, -6.943048713670777],
              [107.571228689938565, -6.944446179540634],
              [107.570593262354052, -6.945709253483886],
              [107.569598328532464, -6.946714296358965],
              [107.568341278091921, -6.947362925718235],
              [107.566945160949516, -6.947591646874296],
              [107.565546641932457, -6.94737806909191],
              [107.564282621866525, -6.946743098081194],
              [107.563276835224997, -6.945748889895103],
              [107.562627736844078, -6.94449276640649],
              [107.562398863931477, -6.943097688058193],
              [107.562612617009876, -6.941700216750763],
              [107.563248068402473, -6.940437147482802],
              [107.564243012320915, -6.939432117610076],
              [107.565500055290457, -6.938783504613766],
              [107.566896150247629, -6.938554796931174],
              [107.568294640839284, -6.938768380151134],
              [107.569558637097131, -6.939403346486555],
              [107.570564413641804, -6.940397541670295],
              [107.571213519493739, -6.941653648795951],
              [107.571442414591559, -6.943048713670777],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 3",
        HubDist: 2.29866,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 3.shp",
        Suhu: suhu_dht22_titik3,
        Kelembapan: kelembaban_dht22_titik3,
        xcoord: 107.73723,
        ycoord: -6.90731,
        Foto: "foto3.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.74174763899741, -6.907280330739652],
              [107.741534421760591, -6.908677677795251],
              [107.740899546791027, -6.909940790439961],
              [107.739905156625909, -6.910946025807715],
              [107.738648587572087, -6.911594982619492],
              [107.737252842335806, -6.911824134088732],
              [107.735854549289371, -6.911611047272844],
              [107.734590587147267, -6.910976579730527],
              [107.733584684776204, -6.909982838167875],
              [107.732935308435245, -6.90872709877025],
              [107.732706022630097, -6.907332284428819],
              [107.732919268350329, -6.905934931286611],
              [107.733554167574653, -6.904671822867581],
              [107.734548568501367, -6.903666600423731],
              [107.735805130713075, -6.903017660297592],
              [107.737200854116963, -6.902788522902374],
              [107.738599118679971, -6.903001615804873],
              [107.739863056567316, -6.90363607912151],
              [107.740868948176768, -6.904629807760257],
              [107.74151833135987, -6.905885530472246],
              [107.74174763899741, -6.907280330739652],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 4",
        HubDist: 2.66002,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 4.shp",
        Suhu: suhu_dht22_titik4,
        Kelembapan: kelembaban_dht22_titik4,
        xcoord: 107.6357,
        ycoord: -6.93724,
        Foto: "foto4.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.640219706109391, -6.937211928379491],
              [107.640006192518811, -6.9386093488782],
              [107.639370985160355, -6.939872444045628],
              [107.63837625914266, -6.940877572686574],
              [107.637119383704331, -6.941526343960214],
              [107.635723391598674, -6.941755249267182],
              [107.634324935397686, -6.941541879811065],
              [107.633060909786266, -6.940907120873012],
              [107.632055049809054, -6.939913107722893],
              [107.631405817519095, -6.938657143139903],
              [107.631176763265415, -6.937262172032501],
              [107.631390305337305, -6.935864745838948],
              [107.632025536704816, -6.934601655178331],
              [107.633020273088633, -6.933596539524403],
              [107.634277141290696, -6.932947784757389],
              [107.635673111321665, -6.932718893171686],
              [107.637071539041344, -6.932932268322647],
              [107.638335540643709, -6.933567022753889],
              [107.639341390254785, -6.934561022916994],
              [107.639990629781025, -6.935816970993355],
              [107.640219706109391, -6.937211928379491],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 5",
        HubDist: 2.80914,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 5.shp",
        Suhu: suhu_dht22_titik5,
        Kelembapan: kelembaban_dht22_titik5,
        xcoord: 107.64564,
        ycoord: -6.94008,
        Foto: "foto5.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.650165033780596, -6.940056211170361],
              [107.649951553178056, -6.941453625373789],
              [107.649316376497637, -6.942716725147966],
              [107.64832167583964, -6.943721868849411],
              [107.6470648179547, -6.944370664162404],
              [107.645668833874211, -6.944599600130678],
              [107.644270375384309, -6.944386264951078],
              [107.643006337397054, -6.943751540544537],
              [107.642000456173889, -6.942757558798072],
              [107.641351195853119, -6.941501619417553],
              [107.641122109531295, -6.940106664848195],
              [107.641335618637086, -6.938709244914808],
              [107.641970819364374, -6.937446149628674],
              [107.642965530427759, -6.936441018918996],
              [107.644222381102111, -6.93579224013908],
              [107.645618343110215, -6.935563317930119],
              [107.64701677309688, -6.935776658839679],
              [107.64828078703728, -6.936411378758177],
              [107.649286657855058, -6.937405347512875],
              [107.649935925386416, -6.938661270360318],
              [107.650165033780596, -6.940056211170361],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 6",
        HubDist: 2.95941,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 6.shp",
        Suhu: suhu_dht22_titik6,
        Kelembapan: kelembaban_dht22_titik6,
        xcoord: 107.58053,
        ycoord: -6.89012,
        Foto: "foto6.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.585048070521765, -6.890096597009626],
              [107.58483435429504, -6.891494048138399],
              [107.584198988402363, -6.892757103177382],
              [107.583204163511212, -6.893762124851404],
              [107.581947258569855, -6.894410732802472],
              [107.580551309229861, -6.89463943444608],
              [107.57915296386237, -6.894425840954472],
              [107.577889106269069, -6.893790859564104],
              [107.576883455007476, -6.892796647328046],
              [107.576234451668768, -6.891540526501251],
              [107.576005624180382, -6.890145457258698],
              [107.576219368648921, -6.888748000612129],
              [107.57685475826645, -6.887484950136438],
              [107.577849593303426, -6.886479941363779],
              [107.579106490936169, -6.885831349724257],
              [107.580502418304803, -6.885602661571927],
              [107.58190073543048, -6.88581626058133],
              [107.58316456929893, -6.886451237408406],
              [107.584170210414726, -6.887445436743103],
              [107.58481922106202, -6.888701541258351],
              [107.585048070521765, -6.890096597009626],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 7",
        HubDist: 3.9151,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 7.shp",
        Suhu: suhu_dht22_titik7,
        Kelembapan: kelembaban_dht22_titik7,
        xcoord: 107.63446,
        ycoord: -6.92889,
        Foto: "foto7.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.638984677869175, -6.928863880218537],
              [107.638771154863491, -6.930261300553192],
              [107.638135946362482, -6.93152439147386],
              [107.637141227589993, -6.93252951220243],
              [107.635884367076187, -6.933178272674828],
              [107.634488396111365, -6.933407165351204],
              [107.633089965193975, -6.933193782672877],
              [107.631825966529277, -6.93255901121525],
              [107.630820132520853, -6.931564987472302],
              [107.630170922678943, -6.930309015257903],
              [107.62994188515728, -6.928914040225306],
              [107.630155436611489, -6.92751661419564],
              [107.630790669097863, -6.926253527771975],
              [107.631785398230932, -6.925248420014717],
              [107.633042251523165, -6.924599676033337],
              [107.634438200442645, -6.924370797068678],
              [107.635836602911496, -6.924584185442015],
              [107.637100577590829, -6.92521895240264],
              [107.638106401238659, -6.926212963174277],
              [107.63875561830217, -6.927468918897658],
              [107.638984677869175, -6.928863880218537],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 8",
        HubDist: 3.47944,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 8.shp",
        Suhu: suhu_dht22_titik8,
        Kelembapan: kelembaban_dht22_titik8,
        xcoord: 107.62466,
        ycoord: -6.87793,
        Foto: "foto8.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.629180523611808, -6.877903050009748],
              [107.628966936209764, -6.879300470850687],
              [107.628331713476371, -6.880563535170725],
              [107.627337032050178, -6.881568604803367],
              [107.626080256811704, -6.882217294699763],
              [107.62468441069224, -6.882446104242781],
              [107.623286131944425, -6.88223263402086],
              [107.622022297849369, -6.881597779179831],
              [107.621016624679868, -6.880603684368063],
              [107.620367556196044, -6.879347660342535],
              [107.620138626726231, -6.87795265781389],
              [107.620352242374238, -6.876555231285312],
              [107.620987488941353, -6.87529217140766],
              [107.62198218068535, -6.874287114650588],
              [107.62323894878466, -6.873638441144915],
              [107.624634773034941, -6.873409645247075],
              [107.626033023536792, -6.873623121156636],
              [107.627296833798127, -6.87425797155528],
              [107.628302496649823, -6.875252053491478],
              [107.628951572272797, -6.876508061126283],
              [107.629180523611808, -6.877903050009748],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 9",
        HubDist: 3.57132,
        path: "D:\\SEMESTER 5\\GIS\\TUGAS AKHIR SIG\\Praktik WebGIS\\Results\\Titik 9.shp",
        Suhu: suhu_dht22_titik9,
        Kelembapan: kelembaban_dht22_titik9,
        xcoord: 107.679,
        ycoord: -6.93593,
        Foto: "foto9.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [107.683519413647602, -6.935907256818482],
              [107.68330603453775, -6.937304647972359],
              [107.682670965385554, -6.938567756591188],
              [107.681676367752331, -6.939572940177609],
              [107.680419598285383, -6.940221802513097],
              [107.679023679344581, -6.940450826071158],
              [107.677625256331396, -6.940237590457784],
              [107.676361220688307, -6.939602967829848],
              [107.675355308460681, -6.938609080099678],
              [107.674705986840308, -6.93735321776875],
              [107.674476814940746, -6.935958315749737],
              [107.674690222575933, -6.934560918740397],
              [107.675325315869244, -6.93329781452588],
              [107.67631992403831, -6.932292643921252],
              [107.677576686411456, -6.931643798186429],
              [107.678972583338435, -6.931414788507018],
              [107.6803709778263, -6.931628029975855],
              [107.681634989328273, -6.932262648199474],
              [107.682640891020071, -6.933256522947854],
              [107.683290219734218, -6.934512368678116],
              [107.683519413647602, -6.935907256818482],
            ],
          ],
        ],
      },
    },
  ],
};


function updateGeoJSON() {
  json_RadiusPemantauan_3.features[0].properties.Suhu = suhu_dht22_titik1;
  json_RadiusPemantauan_3.features[1].properties.Suhu = suhu_dht22_titik2;
  json_RadiusPemantauan_3.features[2].properties.Suhu = suhu_dht22_titik3;
  json_RadiusPemantauan_3.features[3].properties.Suhu = suhu_dht22_titik4;
  json_RadiusPemantauan_3.features[4].properties.Suhu = suhu_dht22_titik5;
  json_RadiusPemantauan_3.features[5].properties.Suhu = suhu_dht22_titik6;
  json_RadiusPemantauan_3.features[6].properties.Suhu = suhu_dht22_titik7;
  json_RadiusPemantauan_3.features[7].properties.Suhu = suhu_dht22_titik8;
  json_RadiusPemantauan_3.features[8].properties.Suhu = suhu_dht22_titik9;

  json_RadiusPemantauan_3.features[0].properties.Kelembapan = kelembaban_dht22_titik1;
  json_RadiusPemantauan_3.features[1].properties.Kelembapan = kelembaban_dht22_titik2;
  json_RadiusPemantauan_3.features[2].properties.Kelembapan = kelembaban_dht22_titik3;
  json_RadiusPemantauan_3.features[3].properties.Kelembapan = kelembaban_dht22_titik4;
  json_RadiusPemantauan_3.features[4].properties.Kelembapan = kelembaban_dht22_titik5;
  json_RadiusPemantauan_3.features[5].properties.Kelembapan = kelembaban_dht22_titik6;
  json_RadiusPemantauan_3.features[6].properties.Kelembapan = kelembaban_dht22_titik7;
  json_RadiusPemantauan_3.features[7].properties.Kelembapan = kelembaban_dht22_titik8;
  json_RadiusPemantauan_3.features[8].properties.Kelembapan = kelembaban_dht22_titik9;

}

function logJson() {
  updateGeoJSON();
  console.log("===============d=================");
  console.log(json_RadiusPemantauan_3.features[0].properties.Suhu);
  console.log("===========================a=====");
}

setInterval(logJson, 5000);