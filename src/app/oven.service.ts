import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Oven } from './oven';

@Injectable({
  providedIn: 'root'
})
export class OvenService {

  constructor() { }

  micro: Oven[] = [
    {
      pid: 1,
      pname: '28L SlimFry™',
      pdescription: '28L SlimFry™, Convection Microwave Oven, CE1041DSB3',
      price: 12390,
      img: 'https://images.samsung.com/is/image/samsung/p6pim/in/ce1041dsb3-tl/gallery/in-ce1041dsb3-convection-microwave--28-l-ce1041dsb3-tl-thumb-532582808?$160_160_PNG$'
    },
    {
      pid: 2,
      pname: '28L Fruit Dry & SunDry™',
      pdescription: '28L Fruit Dry, Masala & SunDry™, Convection Microwave Oven, MC28M6036CC',
      price: 19300,
      img: 'https://images.samsung.com/is/image/samsung/in-28-litre-convection-microwave-oven-mc28m6036cc-mc28m6036cc-tl-frontblack-thumb-184429868?$160_160_PNG$'
    },
    {
      pid: 3,
      pname: '32L Fruit Dry',
      pdescription: '32L Fruit Dry, Masala & SunDry™, Convection Microwave Oven, MC32K7056CC',
      price: 24500,
      img: 'https://images.samsung.com/is/image/samsung/in-32-litre-convection-microwave-oven-mc32k7056cc-mc32k7056cc-tl-frontblack-thumb-184429901?$160_160_PNG$'
    },
    {
      pid: 4,
      pname: '28L Curd Any Time',
      pdescription: '28L Curd Any Time, Convection Microwave Oven, MC28A5013AK',
      price: 11590,
      img: 'https://images.samsung.com/is/image/samsung/p6pim/in/mc28a5013ak-tl/gallery/in-mc28a5013-convection-microwave--28-l-mc28a5013ak-tl-thumb-532582909?$160_160_PNG$'
    },
    {
      pid: 5,
      pname: '28L Moisture Sensor',
      pdescription: '32L SlimFry™, Convection Microwave Oven, MC32A7035CT',
      price: 16990,
      img: 'https://images.samsung.com/is/image/samsung/p6pim/in/mc32a7035ct-tl/gallery/in-mc32a7035ct-mw7000j-convection-nwo-with-slim-fry-mc32a7035ct-tl-thumb-531529012?$160_160_PNG$'
    },
    {
      pid: 6,
      pname: '23L Quick Defrost',
      pdescription: '23L Quick Defrost, Solo Microwave Oven, MS23A3513AK',
      price: 6500,
      img: 'https://images.samsung.com/is/image/samsung/p6pim/in/ms23a3513ak-tl/gallery/in-ms23a3513-solo-mwo-with-quick-defrost-23l-ms23a3513ak-tl-thumb-531751386?$160_160_PNG$'
    },
    {
      pid: 7,
      pname: '23L Auto Cook',
      pdescription: '23L Auto Cook, Solo Microwave Oven, MS23A301TAK',
      price: 6190,
      img: 'https://images.samsung.com/is/image/samsung/p6pim/in/ms23a301tak-tl/gallery/in-ms23a301t-solo-microwave--23-l-ms23a301tak-tl-thumb-532582868?$160_160_PNG$'
    },
    {
      pid: 8,
      pname: '32L Tandoor Technology',
      pdescription: '32L Tandoor Technology, Convection Microwave Oven, CE117PC-B3',
      price: 6500,
      img: 'https://images.samsung.com/is/image/samsung/p6pim/in/ce117pc-b3-xtl/gallery/in-ce117pc-b3-convection-mwo-with-tandoor-technology-32-l-ce117pc-b3-xtl-thumb-532266609?$160_160_PNG$'
    }
  ];

  public getOvenDetails(): any {
    const microObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.micro);
      }, 1000);
    });
    return microObservable;
  }


}
