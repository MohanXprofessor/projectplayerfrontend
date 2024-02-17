import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../models/player';
import { PlayerserviceService } from '../../services/playerservice.service';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrl: './playerdetails.component.css'
})
export class PlayerdetailsComponent {


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

  list()
  {
    this.router.navigate(['list']);
  }
}
