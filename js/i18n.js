/* ================= TRANSLATIONS ================= */

const translations = {

en: {
  dashboard:"Dashboard",
  rooms:"Rooms",
  orders:"Orders",
  billing:"Billing",
  restaurant:"Restaurant",
  drinks:"Drinks",
  staffManagement:"Staff Management",
  finance:"Finance",
  logout:"Logout",
  welcome:"Welcome to Lelo International Hotel System",
  todayOrders:"Today Orders",
  todayRevenue:"Today Revenue",
  totalRooms:"Total Rooms",
  occupiedRooms:"Occupied Rooms",
  addRoom:"Add Room",
  addFood:"Add Food Item",
  addDrink:"Add Drink",
  price:"Price",
  type:"Type",
  status:"Status",
  pay:"Pay",
  selectPayment:"Select Payment Method",
  login:"Login",
  loading:"Loading system...",
  slogan1:"Your Comfort, Our Priority",
  slogan2:"Experience Excellence",
  slogan3:"Luxury Meets Affordability",
  slogan4:"Stay, Dine, Enjoy"
},

am: {
  dashboard:"ዳሽቦርድ",
  rooms:"ክፍሎች",
  orders:"ትዕዛዞች",
  billing:"ቢል",
  restaurant:"ምግብ ቤት",
  drinks:"መጠጦች",
  staffManagement:"የሰራተኞች አስተዳደር",
  finance:"ፋይናንስ",
  logout:"ውጣ",
  welcome:"ወደ ለሎ ኢንተርናሽናል ሆቴል እንኳን በደህና መጡ",
  todayOrders:"የዛሬ ትዕዛዞች",
  todayRevenue:"የዛሬ ገቢ",
  totalRooms:"አጠቃላይ ክፍሎች",
  occupiedRooms:"የተያዙ ክፍሎች",
  addRoom:"አዲስ ክፍል ጨምር",
  addFood:"አዲስ ምግብ ጨምር",
  addDrink:"አዲስ መጠጥ ጨምር",
  price:"ዋጋ",
  type:"አይነት",
  status:"ሁኔታ",
  pay:"ክፍያ",
  selectPayment:"የክፍያ ዘዴ ይምረጡ",
  login:"መግቢያ",
  loading:"ስርዓቱ በመጫን ላይ...",
  slogan1:"ምቹነትዎ ፣ ቅድሚያችን ነው",
  slogan2:"ውድቅ ተሞክሮ ያሳዩ",
  slogan3:"ለእጅግ ተመጣጣኝ ውብነት",
  slogan4:"ቆይ፣ በምግብ ደስ ይበልዎት"
},

om: {
  dashboard:"Daashboordii",
  rooms:"Kutaa",
  orders:"Ajaja",
  billing:"Herreega",
  restaurant:"Mana Nyaataa",
  drinks:"Dhugaatii",
  staffManagement:"Bulchiinsa Hojjettootaa",
  finance:"Maallaqa",
  logout:"Bahi",
  welcome:"Baga Nagaan Gara Hoteela Intarnaashinaala Leelloo Dhuftan",
  todayOrders:"Ajajoota Har’aa",
  todayRevenue:"Galii Har’aa",
  totalRooms:"Kutaa Walii Galaa",
  occupiedRooms:"Kutaa Qabame",
  addRoom:"Kutaa Dabaluu",
  addFood:"Nyaata Dabaluu",
  addDrink:"Dhugaatii Dabaluu",
  price:"Gatii",
  type:"Gosa",
  status:"Haala",
  pay:"Kaffali",
  selectPayment:"Mala Kaffaltii Filadhu",
  login:"Seensa",
  loading:"Sistemiin ni fe’amaa jira...",
  slogan1:"Gammachuu Keessan, Filannoo Keenya",
  slogan2:"Muuxannoo Gammachuu",
  slogan3:"Boqonnaa fi Fayyadamummaa Walitti Makamu",
  slogan4:"Dhiibaa, nyaata, gammachuu"
}
};

/* ================= APPLY LANGUAGE ================= */
function applyLanguage(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang] && translations[lang][key]){
      el.innerText = translations[lang][key];
    }
  });
}

/* ================= SAVE LANGUAGE ================= */
function setLanguage(lang){
  localStorage.setItem("hotelLang", lang);
  applyLanguage(lang);
}

/* ================= PAGE LOAD ================= */
document.addEventListener("DOMContentLoaded",()=>{
  const savedLang = localStorage.getItem("hotelLang") || "en";
  applyLanguage(savedLang);

  const selector = document.getElementById("langSelect") || document.getElementById("languageSelect");
  if(selector){
    selector.value = savedLang;
    selector.addEventListener("change",(e)=>{
      setLanguage(e.target.value);
    });
  }
});
