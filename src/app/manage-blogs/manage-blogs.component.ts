import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  @Input() Array:any;
  constructor() { }

  ngOnInit(): void {
  }
  view(val:any,des:any){
    alert('itle: '+ val + '                                                '+'Content: ' + des)
  }

}
