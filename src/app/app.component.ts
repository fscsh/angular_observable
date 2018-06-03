import { Component ,OnInit} from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user1Acitiated = false;
    user2Acitiated = false;

    constructor(private userService: UsersService){}

    ngOnInit(){
        this.userService.userAcitiated.subscribe(
            (id:number)=>{
                if(id === 1){
                    this.user1Acitiated = true;
                }else if(id === 2){
                    this.user2Acitiated = true;
                }
            }
        )
    }
}
