import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GamesComponent } from "./games/games.component";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { RouterModule, Routes } from "@angular/router";
import { GameNotFoundGuardGuard } from "./game-not-found-guard.guard";

const GAME_ROUTER: Routes = [
  {
    path: "olympics",
    component: GamesComponent,
    children: [
      {
        // <ul><li><a href="/game/1">Rowing</a></li>...</ul>  to match this url
        path: "game/:id",
        component: GameDetailsComponent,
        canActivate: [GameNotFoundGuardGuard]
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(GAME_ROUTER)],
  declarations: [GamesComponent, GameDetailsComponent]
})
export class OlympicsModule {}
