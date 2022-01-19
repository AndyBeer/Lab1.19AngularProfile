import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentProfileComponent } from './current-profile/current-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path: "profile", component: CurrentProfileComponent},
  {path: "profileEdit", component: EditProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
