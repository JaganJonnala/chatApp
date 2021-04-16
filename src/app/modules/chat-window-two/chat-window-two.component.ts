import { Component, OnInit } from '@angular/core';
import * as pubsub from '../pubsub';

@Component({
  selector: 'app-chat-window-two',
  templateUrl: './chat-window-two.component.html',
  styleUrls: ['./../common.css']
})
export class ChatWindowTwoComponent implements OnInit {
  me:string = "Jagan";
  with:string = "Murali";
  inputText:string="";
  portEvent:string="lts-JjJagan1000"
  messages:Array<any>=[];
  constructor() { }

  ngOnInit() {
    pubsub.subscribe(this.portEvent, data => {
      this.messages.push(data.message);
    });
  }

  sendMsg(){
    let msg = {
      'name':this.me,
      'with':this.with,
      'message':this.inputText,
      'time':this.formatAMPM(new Date())
    };

    pubsub.publish(this.portEvent, {message:msg});
    this.inputText = "";
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}
