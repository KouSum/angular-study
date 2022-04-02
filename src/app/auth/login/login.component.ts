import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule,  } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private location: Location, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login().subscribe(res=>{
      console.log(res)
      if(res){
        console.log(this.auth.isLoggedIn)
        // this.route.parseUrl('/admin')
        // this.location.go('/admin')
        this.router.navigate(['/admin'])
      }
    });
    // this.route.navigate(['/admin'])
  }

}
