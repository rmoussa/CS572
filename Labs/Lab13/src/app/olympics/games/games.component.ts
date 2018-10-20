import { Component, OnInit } from "@angular/core";
import { DbService } from "../../db.service";

@Component({
  selector: "app-games",
  template: `
  <ul>
    <li *ngFor="let game of games">
      <a [routerLink]="['game', game._id]">{{ game.game.name }}</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `,
  styleUrls: ["./games.component.css"]
})
export class GamesComponent implements OnInit {
  private games;
  constructor(private dbService: DbService) {
    this.games = this.dbService.getGames();
  }

  ngOnInit() {}
}
