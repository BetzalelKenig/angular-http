import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'requests';
  persons = this.dataService.persons;
  @ViewChild('text') text: ElementRef;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log(this.dataService.personsHtml.toString());
    
    //this.text.nativeElement.innerHTML = this.dataService.personsHtml.toString();
  }
}
