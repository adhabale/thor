import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sharedDocs=[{DocumentId:'1',DocumentName:'CSG Test Word Document'},
  {DocumentId:'2',DocumentName:'Test 1'},
  {DocumentId:'3',DocumentName:'Test 2'},
  {DocumentId:'4',DocumentName:'Test 3'},
  {DocumentId:'5',DocumentName:'Test 4'}
  ]

  downloadSharedDocument(DocumentId:string) {
    console.log(DocumentId);
  }

}
