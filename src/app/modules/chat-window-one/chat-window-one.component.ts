import { Component, OnInit } from '@angular/core';
import * as pubsub from '../pubsub';

@Component({
  selector: 'app-chat-window-one',
  templateUrl: './chat-window-one.component.html',
  styleUrls: ['./../common.css']
})
export class ChatWindowOneComponent implements OnInit {
  me:string = "Murali";
  with:string = "Jagan";
  inputText:string="";
  messages:Array<any>=[];
  portEvent:string="lts-JjJagan1000"
  isTyping:boolean = false;
  constructor() { }

  ngOnInit() {
    pubsub.subscribe(this.portEvent, data => {
      this.messages.push(data.message);
    });

    pubsub.subscribe(this.portEvent+'Typing', e => {
      if(e.name !== this.me)
        this.isTyping = e.isTyping;
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

  onInput(){
    pubsub.publish(this.portEvent+'Typing',{name: this.me, isTyping:true});
  }

  onBlur(){
    pubsub.publish(this.portEvent+'Typing',{name: this.me, isTyping:false});
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
