import { Component, OnInit } from '@angular/core';
import { Profile } from '../Profile';

@Component({
  selector: 'app-current-profile',
  templateUrl: './current-profile.component.html',
  styleUrls: ['./current-profile.component.css']
})
export class CurrentProfileComponent implements OnInit {

  constructor() { }

  

  UserProfiles: Profile[] = [
    new Profile (1, "user1", 3133737373, "email@email.com", "This is where the bio goes1", "app/images/macho01.jpg"),
    new Profile (2, "user2", 3133737374, "email2@email.com", "This is where the bio goes2", "2some URL eventually"),
    new Profile (3, "user3", 3133737375, "email3@email.com", "This is where the bio goes3", "3some URL eventually"),
    new Profile (4, "user4", 3133737376, "email4@email.com", "This is where the bio goes4", "4some URL eventually"),
    new Profile (5, "user5", 3133737377, "email5@email.com", "This is where the bio goes5", "5some URL eventually"),
  ];
  ngOnInit(): void {
  }

}
