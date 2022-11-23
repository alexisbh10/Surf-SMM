import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import HLS from 'hls.js';
import OBSWebSocket, {OBSEventTypes, OBSRequestTypes, OBSResponseTypes} from 'obs-websocket-js';
const obs = new OBSWebSocket();



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  private url: string = "";
  private hls = new HLS();
  
  public user: string | null = 'HOME' //TODO: User que se pasa por la url como parametro !
  private playing: boolean = false;
  @ViewChild('video', { static: true }) private readonly video: ElementRef<HTMLVideoElement> | any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _http: HttpClient) {
  }

  async ngOnInit() {
    this.url = this.router.url;
    console.log (this.url)
   
      await obs.connect('ws://192.168.1.131:4445', 'KksXWF5rcAInQJ83');
      //console.log (obs.connect('ws://192.168.1.131:4445', 'KksXWF5rcAInQJ83'))
      await obs.call ('StartStream')
      //this.load("http://localhost:8000/live/STREAM_NAME/index.m3u8")
    if (this.url == "/camara/2") {
      this.load("https://wow.camaramar.com/camaramar/48_menduina.stream/playlist.m3u8")
    } else if (this.url == "/camara/3") {
      this.load("https://wow.camaramar.com/camaramar/65_patos.stream/playlist.m3u8");
    }
  }

  public load(currentVideo: string): void {
    if (HLS.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      console.log('Ups! no es soportado por tu navegador');
    }
  }

  private loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
  }

  

}

