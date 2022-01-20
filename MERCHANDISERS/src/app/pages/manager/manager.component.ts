import { Component, OnInit } from '@angular/core';
import { Merchandisers } from 'src/app/models/merchandisers';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  merchandisers:Merchandisers[] = [
    {id:1,firstname:'Caleb',lastname:'Bii',email:'cal@gmail.com',profile_image:'',contact:+25475674546},
    {id:2,firstname:'Simon',lastname:'Murithi',email:'sim@gmail.com',profile_image:'',contact:+25478675474},
    {id:3,firstname:'Ian',lastname:'Wanarua',email:'ian@gmail.com',profile_image:'',contact:+25475674546},
    {id:4,firstname:'Willard',lastname:'Sigei',email:'will@gmail.com',profile_image:'',contact:+25475674546},
    {id:5,firstname:'Muhamed',lastname:'Abdi',email:'muham@gmail.com',profile_image:'',contact:+25475674546},
    {id:6,firstname:'Mercy',lastname:'Meni',email:'mercy@gmail.com',profile_image:'',contact:+25475674546},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
