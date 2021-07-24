import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from '../template.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  ID2=localStorage.getItem("UserId");

  constructor(public router:Router,public check:UserService,public temp:TemplateService) { }

  ngOnInit(): void {
    this.check.check(this.ID2);
        this.check.LoggedIn();
  }
  temp1(){
    this.router.navigate([`user/template1/${this.ID2}`]);
  }
  temp2(){
    this.router.navigate(["user/template2"]);
  }
  temp3(){
    this.router.navigate(["user/template3"]);
  }
  generatelink(){
    alert('Successfully send link in email.....')
    this.temp.getlink(this.ID2).subscribe((data)=>{
     
    })
    
  }

}
