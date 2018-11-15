import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { OpenDotaService } from 'src/app/core/shared/opendota.service';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/configs/app.config';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})

export class PlayerSearchComponent {
  myControl = new FormControl();
  filteredPlayers: Observable<any[]>;

  constructor(
    private opendotaService: OpenDotaService,
    private router: Router
  ) {
    this.filteredPlayers = this.myControl.valueChanges
      .pipe(
        startWith(null),
        debounceTime(200),
        filter(val => val && val.length >= 3),
        distinctUntilChanged(),
        switchMap(val => {
          return this.getUsers(val || '')
        })
      );
  }

  private getUsers(val: string): Observable<any[]> {
    return this.opendotaService.getUsers(val);
  }

  onSelectionChanged(player: any) {
    console.log(player);
    return this.router.navigate([`${AppConfig.routes.account}/${player.account_id}`]);
  }
}
