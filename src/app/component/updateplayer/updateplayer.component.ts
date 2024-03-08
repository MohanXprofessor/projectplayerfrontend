import { Component } from '@angular/core';
import { Player } from '../../models/player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerserviceService } from '../../services/playerservice.service';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrl: './updateplayer.component.css'
})
export class UpdateplayerComponent {


  constructor(private route:ActivatedRoute,private router:Router,private service:PlayerserviceService){}

  playerId:number=0;
  Player:Player=new Player();

  ngOnInit()
  {
    this.Player=new Player();
    this.playerId=this.route.snapshot.params['playerId']

    this.service.getOnePlayer(this.playerId).subscribe(data=>{
      console.log(data);
      this.Player=data;
      
    })
  }

  onSubmit()
  {
    this.updatePlayer();
  }
  updatePlayer()
  {
    this.service.updatePlayer(this.Player).subscribe((data)=>{
      console.log(data);
      // this.Player=new Player();
      this.goto();
    })
  }
  goto()
  {
    this.router.navigate(['list']);
  }
 
}
