import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlayerserviceService } from '../../services/playerservice.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrl: './playerlist.component.css'
})
export class PlayerlistComponent {

  public players: Observable<Player[]>=of([]);

  constructor(private service:PlayerserviceService,private router: Router)
  {
    
  }

    ngOnInit(){
      this.getAll();
    }

    getAll(){
      this.players = this.service.getAllPlayer();
    }

    deletePlayer(id:number)
    {
      return this.service.deletePlayer(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })
    }

    playerDetails(id:number){
      this.router.navigate(['details',id]);
    }
    updateDetails(id:number)
    {
      this.router.navigate(['update',id])
    }
    
}
