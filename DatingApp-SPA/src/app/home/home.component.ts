import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registerToggle(): void {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean): void {
    this.registerMode = registerMode;
  }
}
