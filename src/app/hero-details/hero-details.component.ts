import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service'; 
import { Observable } from 'rxjs';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  // 外部输入属性
  @Input() hero?: Hero;
  selectedHero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    public dialogService: DialogService,
  ) { }

  editName = ''
  

  ngOnInit(): void {
    this.getHero()
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe( hero => {
      this.hero = hero
      this.editName = hero.name
    })
  }

  goBack(){
    this.location.back()
  }

  save(){
    if (this.hero) {
      this.heroService.updateHero(this.hero)
      .subscribe(() => {
        if(this.hero){
          this.editName = this.hero?.name
        }
        this.goBack()
      })
    }
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(!this.hero || this.hero.name === this.editName ){
      return true
    }

    return this.dialogService.confirm('Discard changes?');
  }


}
