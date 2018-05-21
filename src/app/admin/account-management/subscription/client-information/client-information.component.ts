import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css']
})
export class ClientInformationComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  navigateToELInfo() {
    this._router.navigateByUrl('/subscription/energyLossesInfo')
  }

}
