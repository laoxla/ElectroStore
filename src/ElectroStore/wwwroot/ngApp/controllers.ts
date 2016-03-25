namespace ElectroStore.Controllers {

    export class HomeController {
        public productList = [product1, product2, product3, product4, product5, product6, product7, product8, product9];
    }
    

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    class Products {
        //public productList = [];
        constructor(public name: string, public photo: string, public price: string, public description: string, public productId: string) { }
    }
    let product1 = new Products("SonicWALL TZ 215 Appliance Only", "../images/SonicWALL-TZ-215-Appliance-Only-L14122074.jpg", "668", "SonicWALL TZ 215 Appliance Only - 7 Port Gigabit Ethernet - USB - Manageable - Desktop", "UKG235CG");
    console.log(product1);
    let product2 = new Products("Dell PowerConnect 2808 Ethernet Switch", "../images/L16948363.jpg", "174", "Dell PowerConnect 2808 Ethernet Switch - 8 Ports - Manageable - 10/100/1000Base-T - 8 x Network - 2 Layer Supported - 1U High - Rack-mountableLifetime Limited Warranty", "UKG2353CC");

    let product3 = new Products("TRENDnet TEW-824DRU IEEE 802.11ac Ethernet Wireless Router", "../images/1031088895.jpg", "97", "TRENDnet TEW-824DRU IEEE 802.11ac Ethernet Wireless Router - 2.47 GHz ISM Band - 5.83 GHz UNII Band - 6 x Antenna(6 x Internal - 1750 Mbit/s Wireless Speed - 4 x Network Port - 1 x Broadband Port - US...", "UG345DG");

    let product4 = new Products("Amped Wireless TAP-EX2 IEEE 802.11ac 750 Mbit/s Wireless Range Extend", "../images/1030260278.jpg", "138.99", "Amped Wireless TAP-EX2 IEEE 802.11ac 750 Mbit/s Wireless Range Extender", "UKG211CG");

    let product5 = new Products("Asus RT-N53 IEEE 802.11n Wireless Router", "../images/L13919457.jpg", "62.99","Asus RT-N53 IEEE 802.11n Wireless Router - 2.48 GHz ISM Band - 5.80 GHz UNII Band - 2 x Antenna - 300 Mbit/s Wireless Speed - 4 x Network Port - 1 x Broadband Port - Fast Ethernet Wall Mountable", "UKG221GG");

    let product6 = new Products("Zhone 6718-W1 IEEE 802.11n Modem/Wireless Router", "../images/Zhone-6718-W1-Modem-Wireless-Router-IEEE-802.11n-cbbfd43a-24ad-4f46-86c6-74df23c3bb0b_600.jpg", "86.99", "Zhone 6718-W1 IEEE 802.11n Modem/Wireless Router - 2.40 GHz ISM Band - 2 x Antenna - 54 Mbit/s Wireless Speed - 4 x Network Port - 1 x Broadband Port - USB - Fast Ethernet Desktop", "UKG981CC");

    let product7 = new Products("Linksys EA6500 IEEE 802.11ac Wireless Router", "../images/Linksys-EA6500-IEEE-802.11ac-Wireless-Router-3b1e7553-5242-400f-b47e-3ee0bb88e300_600.jpg", "111.30", "Linksys EA6500 IEEE 802.11ac Wireless Router - 2.40 GHz ISM Band - 5 GHz UNII Band - 6 x Antenna - 1750 Mbit/s Wireless Speed - 4 x Network Port - 1 x Broadband Port - USB - Gigabit Ethernet Desktop", "UKK899CG");

    let product8 = new Products("Netgear N750 Wireless Dual Band Gigabit Router - Premium Edition", "../images/Netgear-N750-Wireless-Dual-Band-Gigabit-Router-Premium-Edition-1351e285-3fb2-463d-813d-9219abffe5d0_600.jpg", "99.99", " Netgear N750 Wireless Dual Band Gigabit Router - Premium Edition - 2.40 GHz ISM Band - 5 GHz UNII Band - 750 Mbps Wireless Speed - 4 x Network Port - 1 x Broadband Port - USB - Gigabit Ethernet Desktop.", "UKG222CG");

    let product9 = new Products("Netgear - WNR2000 Wireless-N Router", "../images/Netgear-WNR2000-Wireless-N-Router-ec07100b-b412-4e1d-9454-fd03110d54b8_600.jpg", "61.99", "SonicWALL TZ 215 Appliance Only - 7 Port Gigabit Ethernet - USB - Manageable - Desktop", "UKK213GG");







}
