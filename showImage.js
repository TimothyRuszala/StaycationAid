function generateWikipediaLink(cityName) {
    const q = wikifyCityName(cityName);
    return `https://en.wikipedia.org/wiki/${q}`;
}

function wikifyCityName(cityName) {
    return cityName.replace(/ /g, "_");
}

// THIS WORKS!!!!!!
function showImage(data) {
    const text = data.parse.text;
    let startIndex = text.indexOf('srcset');
    let searchSubstring = text.substring(startIndex, startIndex + 400);
    console.log(searchSubstring);
    let jpgIndex = searchSubstring.indexOf('.jpg');
    let imgURLwithThumb = searchSubstring.substring(10, jpgIndex + 4);
    let imgURL = 'https://' + imgURLwithThumb.replace('/thumb', '');
    console.log(imgURL);
    document.getElementById("image").setAttribute('src', imgURL);
}

function getWorkingImgURL(cityName) {
    citiesAndImages = [
        ["Tokyo", "https://en.wikipedia.org/wiki/File:Skyscrapers_of_Shinjuku_2009_January.jpg"],
["Delhi", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Delhi_Montage.jpg/500px-Delhi_Montage.jpg"],
["Mumbai", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/South-mumbai-2020.jpg/600px-South-mumbai-2020.jpg"],
["Manila", "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Malaca%C3%B1ang_Palace_%28local_img%29.jpg/500px-Malaca%C3%B1ang_Palace_%28local_img%29.jpg"],
["Shanghai", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/556px-Pudong_Shanghai_November_2017_panorama.jpg"],
["Seoul", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Seoul_at_night_%28cropped%29.jpg/556px-Seoul_at_night_%28cropped%29.jpg"],
["Mexico City", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Montaje.Ciudad_de_M%C3%A9xico.jpg/500px-Montaje.Ciudad_de_M%C3%A9xico.jpg"],
["Guangzhou", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Guangzhou_Twin_Towers.jpg/556px-Guangzhou_Twin_Towers.jpg"],
["Beijing", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Skyline_of_Beijing_CBD_from_the_southeast_%2820210907074131%29.jpg/536px-Skyline_of_Beijing_CBD_from_the_southeast_%2820210907074131%29.jpg"],
["Cairo", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cairo-Nile-2020%281%29.jpg/520px-Cairo-Nile-2020%281%29.jpg"],
["Moscow", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C1.jpg/540px-%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C1.jpg"],
["Bangkok", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bangkok_Montage_2021.jpg/500px-Bangkok_Montage_2021.jpg"],
["Buenos Aires", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Montaje_de_la_Ciudad_de_Buenos_Aires.png/500px-Montaje_de_la_Ciudad_de_Buenos_Aires.png"],
["Shenzhen", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Commercial_area_of_futian_to_east2020.jpg/536px-Commercial_area_of_futian_to_east2020.jpg"],
["Dhaka", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dhaka_14th_March_%2832624769393%29.jpg/520px-Dhaka_14th_March_%2832624769393%29.jpg"],
["Lagos", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2014_Tinubu_Square_Lagos_Nigeria_14640600637.jpg/536px-2014_Tinubu_Square_Lagos_Nigeria_14640600637.jpg"],
["Istanbul", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bosphorus_Bridge_%28235499411%29.jpeg/576px-Bosphorus_Bridge_%28235499411%29.jpeg"],
["Osaka", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Osaka_Castle_03bs3200.jpg/556px-Osaka_Castle_03bs3200.jpg"],
["Karachi", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/560px-Jinnah_Mausoleum_%28cropped%29.JPG"],
["Bangalore", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ubcity2.jpg/560px-Ubcity2.jpg"],
["Tehran", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Tehran_sky.jpg/560px-Tehran_sky.jpg"],
["Kinshasa", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/City_view_of_Kinshasa.jpg/536px-City_view_of_Kinshasa.jpg"],
["Ho Chi Minh City", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/536px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg"],
["Rio de Janeiro", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rio_Collage.png/560px-Rio_Collage.png"],
["Nanyang", "https://upload.wikimedia.org/wikipedia/commons/2/29/Nanyang1.png"],
["Chennai", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Chennai%2C_Arulmigu_Kapaleeswarar%2C_templi_interni_01.jpg/500px-Chennai%2C_Arulmigu_Kapaleeswarar%2C_templi_interni_01.jpg"],
["Chengdu", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%E9%94%A6%E6%B1%9F%E5%A4%9C%E6%99%AF.jpg/536px-%E9%94%A6%E6%B1%9F%E5%A4%9C%E6%99%AF.jpg"],
["Lahore", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Lahore_collage.jpg/540px-Lahore_collage.jpg"],
["Paris", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/550px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"],
["London", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/550px-London_Montage_L.jpg"],
["Lima", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bas%C3%ADlica_Catedral_Metropolitana_de_Lima.jpg/576px-Bas%C3%ADlica_Catedral_Metropolitana_de_Lima.jpg"],
["Hyderabad", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hyderabad_Montage_2020.jpg"],
["Bogota", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Centro_internacional.JPG/560px-Centro_internacional.JPG"],
["Weifang", "https://upload.wikimedia.org/wikipedia/commons/4/42/Weifang_montage.png"],
["Nagoya", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Meieki_from_Heiwa_Park_Aqua_Tower.jpg/580px-Meieki_from_Heiwa_Park_Aqua_Tower.jpg"],
["Wuhan", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Wuhan_Yangtze_River_Bridge_in_2020.jpg/556px-Wuhan_Yangtze_River_Bridge_in_2020.jpg"],
["Luanda", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Luanda_Skyline_-_Angola_2015_%28cropped%29.jpg/278px-Luanda_Skyline_-_Angola_2015_%28cropped%29.jpg"],
["Kuala Lumpur", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Moonrise_over_kuala_lumpur.jpg/556px-Moonrise_over_kuala_lumpur.jpg"],
["Hanoi", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hanoi_skyline_at_night.jpg/536px-Hanoi_skyline_at_night.jpg"],
["Pune", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Paravati_5.JPG/298px-Paravati_5.JPG"],
["Onitsha", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Onitsha_City_View.jpg/500px-Onitsha_City_View.jpg"],
["Nanjing", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Nanjing_montage.png/560px-Nanjing_montage.png"],
["Hong Kong", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Montane_Mansion_Quarry_Bay.B.JPG/440px-Montane_Mansion_Quarry_Bay.B.JPG"],
["Khartoum", "https://upload.wikimedia.org/wikipedia/commons/5/5b/Khartoum.jpg"],
["Santiago", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Montaje_de_Santiago_de_Chile_%28202103220%29.jpg/566px-Montaje_de_Santiago_de_Chile_%28202103220%29.jpg"],
["Riyadh", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Al-Riyad.jpg/570px-Al-Riyad.jpg"],
["Dar es Salaam", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dar_es_Salaam_-_Posta.jpg/560px-Dar_es_Salaam_-_Posta.jpg"],
["Surat", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Vesu_%2CSurat.jpg/500px-Vesu_%2CSurat.jpg"],
["Baghdad", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/%D9%82%D8%A8%D8%A9_%D8%AC%D8%A7%D9%85%D8%B9_%D8%A7%D9%84%D8%AD%D9%8A%D8%AF%D8%B1_%D8%AE%D8%A7%D9%86%D8%A9.jpg/340px-%D9%82%D8%A8%D8%A9_%D8%AC%D8%A7%D9%85%D8%B9_%D8%A7%D9%84%D8%AD%D9%8A%D8%AF%D8%B1_%D8%AE%D8%A7%D9%86%D8%A9.jpg"],
["Singapore", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Singapore_Botanic_Gardens_Palm_Valley.jpg/440px-Singapore_Botanic_Gardens_Palm_Valley.jpg"],
["Nairobi", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Nairobi_Montage_A.jpg/500px-Nairobi_Montage_A.jpg"],
["Ankara", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/An%C4%B1tkabir_ziyareti.jpeg/364px-An%C4%B1tkabir_ziyareti.jpeg"],
["Rangoon", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/ShwedagonPagoda.jpg/516px-ShwedagonPagoda.jpg"],
["Toronto", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg/302px-Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg"],
["Saint Petersburg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Winter_Palace_Panorama_3.jpg/532px-Winter_Palace_Panorama_3.jpg"],
["Sydney", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/540px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"],
["Guadalajara", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Montaje_de_la_ciudad_metropolitana_de_Guadalajara.jpg/560px-Montaje_de_la_ciudad_metropolitana_de_Guadalajara.jpg"],
["Belo Horizonte", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Belo_Horizonte_%282%29.jpg/378px-Belo_Horizonte_%282%29.jpg"],
["Melbourne", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Melbourne_montage_2019.jpg/540px-Melbourne_montage_2019.jpg"],
["Surabaya", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Jalesveva_Jaya_Mahe_-_panoramio.jpg/536px-Jalesveva_Jaya_Mahe_-_panoramio.jpg"],
["Abidjan", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Abidjan_Collage.jpg/500px-Abidjan_Collage.jpg"],
["Alexandria", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Suez_canalst-Alexandria%2C_Egypt.jpg/560px-Suez_canalst-Alexandria%2C_Egypt.jpg"],
["Barcelona", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Barcelona_collage.JPG/560px-Barcelona_collage.JPG"],
["Johannesburg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Montage_Johannesburg.jpg/500px-Montage_Johannesburg.jpg"],
["Casablanca", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/La_grande_mosqu%C3%A9e_hassan_II.jpg/550px-La_grande_mosqu%C3%A9e_hassan_II.jpg"],
["Izmir", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Skyscrapers_in_Izmir_-_Turkey.jpg/536px-Skyscrapers_in_Izmir_-_Turkey.jpg"],
["Monterrey", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Collage_Monterrey.jpg/550px-Collage_Monterrey.jpg"],
["Amman", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/AMMAN_2.jpg/550px-AMMAN_2.jpg"],
["Jeddah", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jeddah_Corniche_36.jpg/500px-Jeddah_Corniche_36.jpg"],
["Yokohama", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Yokohama_Chinatown_signage_2015.jpg/288px-Yokohama_Chinatown_signage_2015.jpg"],
["Kabul", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kabul%2C_Afghanistan_view.jpg/560px-Kabul%2C_Afghanistan_view.jpg"],
["Berlin", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg/540px-Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg"],
["Montreal", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Montreal_Montage_2020.jpg/516px-Montreal_Montage_2020.jpg"],
["Busan", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Haedong_Yonggungsa%2C_Busan.jpg/576px-Haedong_Yonggungsa%2C_Busan.jpg"],
["Algiers", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Algeri08.jpg/550px-Algeri08.jpg"],
["Lucknow", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Collage_of_places_in_Lucknow.jpg/500px-Collage_of_places_in_Lucknow.jpg"],
["Madrid", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plaza_Mayor_de_Madrid_06.jpg/298px-Plaza_Mayor_de_Madrid_06.jpg"],
["Faisalabad", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Clock_Tower_Faisalabad_by_Usman_Nadeem.jpg/560px-Clock_Tower_Faisalabad_by_Usman_Nadeem.jpg"],
["Santa Cruz", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Santa_Cruz_Photomontage.jpg/500px-Santa_Cruz_Photomontage.jpg"],
["Jaipur", "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jaipur_Montage.png"],
["Addis Ababa", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Addis_abeba_meskele_square_%28cropped%29.jpg/516px-Addis_abeba_meskele_square_%28cropped%29.jpg"],
["Giza", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Giza-Nile.JPG/560px-Giza-Nile.JPG"],
["Brasilia", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Bras%C3%ADlia_Collage.png/580px-Bras%C3%ADlia_Collage.png"],
["Mashhad", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Aerial_View_of_Koohsangi_street%2C_Mashhad%2C_Iran.png/540px-Aerial_View_of_Koohsangi_street%2C_Mashhad%2C_Iran.png"],
["Kyiv", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Parliament_of_Ukraine._Listed_ID_80-382-0099.SW._-_Mykhaila_Hrushevskoho_Street%2C_Pechersk_Raion%2C_Kiev._-_Pechersk_28_09_13_452.jpg/532px-Parliament_of_Ukraine._Listed_ID_80-382-0099.SW._-_Mykhaila_Hrushevskoho_Street%2C_Pechersk_Raion%2C_Kiev._-_Pechersk_28_09_13_452.jpg"],
["Sanaa", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sanaa%2C_Yemen_%287%29.jpg/550px-Sanaa%2C_Yemen_%287%29.jpg"],
["Quezon City", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Eastwood_City_Philippines.jpg/248px-Eastwood_City_Philippines.jpg"],
["Salvador", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Entardecer_elevedor_lacerda.jpg/394px-Entardecer_elevedor_lacerda.jpg"],
["Incheon", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Songdo%27s_central_park_and_the_NEATT%2C_Incheon%2C_South_Korea.jpg/580px-Songdo%27s_central_park_and_the_NEATT%2C_Incheon%2C_South_Korea.jpg"],
["Bursa", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hudavendigar_Park_in_Bursa_Turkey.jpg/576px-Hudavendigar_Park_in_Bursa_Turkey.jpg"],
["Birmingham", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Birmingham-Skyline-from-Edgbaston-crop.jpg/560px-Birmingham-Skyline-from-Edgbaston-crop.jpg"],
["Rome", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Montage_2017.png/540px-Rome_Montage_2017.png"],
["La Paz", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/LaPazChuqiyapu.jpg/520px-LaPazChuqiyapu.jpg"],
["Pyongyang", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Panoramic_view_from_Juche_Tower.jpg/536px-Panoramic_view_from_Juche_Tower.jpg"],
["Kano", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kanogate.jpg/550px-Kanogate.jpg"]
    ];
    for (let i = 0; i < citiesAndImages.length; i++){
        if (citiesAndImages[i][0] == cityName) {
            const imgURL = citiesAndImages[i][1];
            console.log(`Image src set to ${imgURL}`);
            return imgURL;
        }
    }
}

function getPictureOfCity(cityName) {
    const cityQuery = wikifyCityName(cityName);
    const img = document.getElementById('image');
    window.addEventListener('error', function (e) {
        img.setAttribute('src', getWorkingImgURL(cityName));
}, true);
    let scriptTag = document.createElement('script');
    scriptTag.src = `https://en.wikipedia.org/w/api.php?action=parse&page=${cityQuery}&prop=text&formatversion=2&format=json&callback=showImage`;
    document.body.appendChild(scriptTag); 
}