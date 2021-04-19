import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mobiquity Assignment Test';

  constructor(private httpClient:HttpClient){

  }
  ngOnInit(){
    // let apiUrl = `http://localhost:3000/testdata`;
    //   this.httpClient.request('GET', apiUrl, {responseType:'json'}).subscribe((response) =>{
    //     console.log(response)
    //   },(error => {
    //     console.log("Error for test data api.")
    //   }));
  }
}
