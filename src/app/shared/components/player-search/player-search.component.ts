import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { OpenDotaService } from 'src/app/configs/opendota.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})

export class PlayerSearchComponent {
  myControl = new FormControl();
  filteredPlayers: Observable<any[]>;

  constructor(private openDotaService: OpenDotaService) {
    this.filteredPlayers = this.myControl.valueChanges
      .pipe(
        startWith(null),
        debounceTime(200),
        filter(val => val && val.length >= 3),
        distinctUntilChanged(),
        switchMap(val => {
          return this.filter(val || '')
        })
      );
  }

  private filter(val: string): Observable<any[]> {
    return this.openDotaService.getUsers(val);
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent, player: any) {
    console.log(player);
  }
}
