import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-view-api',
  templateUrl: './view-api.component.html',
  styleUrls: ['./view-api.component.scss']
})
export class ViewApiComponent implements OnInit {

  //inject your service
  constructor(private apiService: ApiServiceService) { }

  info:any =""
  characters!:any[]

  ngOnInit(): void {
   this.apiService.get().subscribe((response:any)=>{    
    this.characters = response.results
    this.info = response.info      
   });     
  }

  redirectTo(url:string){
    this.apiService.getByUrl(url).subscribe((response:any)=>{
      this.characters = response.results
      this.info = response.info
     });  
  }
}
