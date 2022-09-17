import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundbars',
  templateUrl: './soundbars.component.html',
  styleUrls: ['./soundbars.component.css']
})
export class SoundbarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ProductDetails = [
     {
      "pid":"001",
      "image":"https://images.samsung.com/is/image/samsung/p6pim/in/hw-q990b-xl/gallery/in-q-series-soundbar-hw-q990b-hw-q990b-xl-thumb-531984136?$160_160_PNG$",
      "pname":"Soundbar 656W ",
      "pdescription":"From ₹6486.86/mo for 18 mos at 14.99% Interest or ₹ 109990.00",
      "Status":"In Stock"
      },
      {
        "pid":"002",
        "image":"https://images.samsung.com/is/image/samsung/in-giga-party-audio-t70-mx-t70-xl-frontblack-thumb-211768545?$160_160_PNG$",
        "pname":"Sound Tower T70",
        "pdescription":"From ₹2073.53/mo for 18 mos at 14.99% Interest or ₹ 34990.00",
        "Status":"In Stock"
      }, 
      {
        "pid":"003",
        "image":"https://images.samsung.com/is/image/samsung/p6pim/in/hw-s61b-xl/gallery/in-s-series-soundbar-hw-s61b-hw-s61b-xl-thumb-531985990?$160_160_PNG$",
        "pname":"Soundbar 200W ",
        "pdescription":"From ₹1540.18/mo for 18 mos at 14.99% Interest or ₹ 25990.00",
        "Status":"In Stock"
      },  
      {
        "pid":"004",
        "image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTq9hasmN6nwNVPOXBVlaE9dzAyggD6kMNP59ZwsT5L1zeGPhhIZGQXJGQJDVmOnsm-ihd53R2fIrdXk3vQzUtOpUokwxZSuVFPex4HDi3s05VtW-PnHjCzZA&usqp=CAY",
        "pname":"Channel Tower Speaker ",
        "pdescription":"From ₹7486.86/mo for 18 mos at 14.99% Interest or ₹ 209990.00",
        "Status":"Out of Stock"
      },    
      {
        "pid":"005",
        "image":"https://www.goodgearguide.com.au/products/image/12149/angle/8/1500x1500/215939/",
        "pname":"Bluetooth Speakers ",
        "pdescription":"From ₹6486.86/mo for 18 mos at 14.99% Interest or ₹ 179990.00",
        "Status":"In Stock"
      },      
      {
        "pid":"006",
        "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcskdoC1Nh4t4egilK3qWnQa5sTn4w_GkP4GrupogaBhWdLhfQHjSitLerKeJdh4-485oZaFvkKOjJ-lVP00IKyur05LiJrQ&usqp=CAY",
        "pname":"SPA8000B Multimedia ",
        "pdescription":"From ₹6486.86/mo for 18 mos at 14.99% Interest or ₹ 189990.00",
        "Status":"Out of Stock"
      },         
      {
        "pid":"007",
        "image":"https://cdn.vox-cdn.com/thumbor/pweE5lsw_6olG6AszibRT4MPPgI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19128766/sec_html_feature_beta_kv_pc.jpg",
        "pname":"Galaxy Home Mini ",
        "pdescription":"From ₹6486.86/mo for 18 mos at 14.99% Interest or ₹ 309990.00",
        "Status":"In Stock"
      },           
      {
        "pid":"008",
        "image":"https://5.imimg.com/data5/SELLER/Default/2020/11/BF/SU/WZ/4090908/samsung-hw-k20-2-1-channel-multimedia-speaker-system-black--1000x1000.jpg",
       "pname":"Black ABS Samsung HW ",
        "pdescription":"From ₹6486.86/mo for 18 mos at 14.99% Interest or ₹ 9990.00",
        "Status":"In Stock"
      },
      {
      "pid":"009",
      "image":"https://ms2.tudocdn.net/223260?w=470&h=595",
      "pname":"Samsung R6 & R7 ",
      "pdescription":"From ₹6486.86/mo for 18 mos at 14.99% Interest or ₹ 19990.00",
      "Status":"Out of Stock"
      }
  ]

}
