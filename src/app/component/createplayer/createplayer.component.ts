import { Component } from '@angular/core';
// import { Player } from '../../models/Player';
import { PlayerserviceService } from '../../services/playerservice.service';
import { Router } from '@angular/router';
import { Player } from '../../models/player';

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrl: './createplayer.component.css'
})
export class CreateplayerComponent {

  constructor(private service: PlayerserviceService, private router: Router)
  {
     
  }

  submitted=false;

  player=new Player();

  onSubmit(){

    this.save();
    this.submitted=true;
  }

  save()
  {
    this.service.createPlayer(this.player).subscribe();
  }

}
