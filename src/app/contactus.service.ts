import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contactus } from './contactus';

@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})

export class ContactusService {

  constructor() { }

  con: Contactus[] = [
    {
      pid: 1,
      pname: 'WhatsApp Us',
      pdesc: 'WhatsApp for Technical support or query, Service centre location, Repair status, Demo and installation request, New offers and more.',
      icon: 'fa fa-whatsapp',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 2,
      pname: 'Remote Support',
      pdesc: 'Enable a Samsung expert to remotely connect to your device via a tech support app to troubleshoot, offer guidance, solve issues and optimise performance.',
      icon: 'fa fa-phone',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 3,
      pname: 'Repair Services',
      pdesc: 'Arrange an appointment to experience a shorter waiting time.',
      icon: 'fa fa-bug',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 4,
      pname: 'Service Center Visit Appointment',
      pdesc: 'Book a service appointment at your nearest service center.',
      icon: 'fa fa-calendar',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 5,
      pname: 'Samsung Members Community',
      pdesc: 'Share tips, reviews, and your own brilliant solutions with other Galaxy users in the Community.',
      icon: 'fa fa-users',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },

    {
      pid: 6,
      pname: 'Warranty',
      pdesc: 'Register your product and find out whats covered.',
      icon: 'fa fa-user-secret',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 7,
      pname: 'Galaxy Battery',
      pdesc: 'Check out how you can take better care of your battery through proper use and charge.',
      icon: 'fa fa-gamepad',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 8,
      pname: 'Smart Switch and Kies',
      pdesc: 'Gives you the freedom to move your contacts, music, photos, calendar, text messages, device settings and more to your new Galaxy device.',
      icon: 'fa fa-sliders',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 9,
      pname: 'News & Alerts',
      pdesc: 'For important products and service announcements.',
      icon: 'fa fa-paper-plane',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 10,
      pname: 'Galaxy Z Premier Service',
      pdesc: 'Special customer care services are available when you purchase a Galaxy Foldable device.',
      icon: 'fa-regular fa-blender-phone',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 11,
      pname: 'Samsung Service: Terms & Conditions│Data Backup and Deletion',
      pdesc: 'Check out the latest Samsung Service T&Cs and Data Backup & Deletion Policy.',
      icon: 'fa fa-note',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 12,
      pname: 'Samsung Recycling Program',
      pdesc: 'Know how you can safely recycle your product and keep the environment more GREENER',
      icon: 'fa fa-recycle',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
 
    {
      pid: 14,
      pname: 'Keep your Samsung Account secure',
      pdesc: 'Set up two-step verification. Protect your account by requiring your password and another verification method to sign in.',
      icon: 'fa fa-badge-check',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 15,
      pname: 'Explore',
      pdesc: 'Stories that inspire you to do more with your Samsung devices.',
      icon: 'fa fa-file-magnifying-glass',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
    {
      pid: 15,
      pname: 'Windows Update Information',
      pdesc: '',
      icon: 'fa fa-windows',
      cname:'',
      cd:'',
      i:'',
      btn:''
    },
   

  ];

  cd: Contactus[] = [
    {
      pid: 16,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'WhatsApp(English / हिंदी)',
      cd:'WhatsApp for Technical support or query, Service centre location, Repair status, Demo & Installation request Available 24 Hours / 7 days',
      i:'fa fa-whatsapp',
      btn:'WhatsApp'
    },
    {
      pid: 17,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'Sign Language',
      cd:'Video call with Sign Language interpreter assisted by Samsung product expert. Operation Hour: Monday - Friday 11:00-16:00',
      i:'fa fa-sliders',
      btn:'Video chat with us'
    },
    {
      pid: 18,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'24 Hours Phone Support (India)',
      cd:'1-800-5-726-7864 (1-800-5-SAMSUNG)',
      i:'fa fa-phone',
      btn:'Tollfree'
    },
    {
      pid: 19,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'Email Support',
      cd:'We will respond within 24 hours of your request.',
      i:'fa fa-file',
      btn:'Email Us'
    },
    {
      pid: 20,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'Face-to-Face Support',
      cd:'Whether your product is in warranty or out of warranty, we are here to help.',
      i:'fa fa-users',
      btn:'Book An Appointment'
    },
    {
      pid: 21,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'Remote Service',
      cd:'Remote diagnostics by our specially trained technicians for your Galaxy device and Samsung TV',
      i:'fa fa-phone',
      btn:'Remote service'
    },
    {
      pid: 22,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'CEO Office',
      cd:'CEO Office',
      i:'fa fa-comment',
      btn:'Indian Customers only'
    },
    {
      pid: 23,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'Phone Support (Bangladesh, Sri Lanka, Nepal)',
      cd:'',
      i:'fa fa-phone',
      btn:'Bangladesh, Srilanka and Nepal Support'
    },
    {
      pid: 24,
      pname: '',
      pdesc: '',
      icon: '',
      cname:'Apps & Services Customer Support)',
      cd:'Samsung Pay : 1800-123-7729, Samsung Free : 1800 40 SAMSUNG (7267864)',
      i:'',
      btn:'Learn More'
    }

  ]


  public getContactDetails(): any {
    const conObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.con);
      }, 1000);
    });
    return conObservable;
  }


  public getCdDetails(): any {
    const cdObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.cd);
      }, 1000);
    });
    return cdObservable;
  }
}
