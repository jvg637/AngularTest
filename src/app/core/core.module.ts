import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EventService } from './event.service';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [EventService, UserService]
})
export class CoreModule { }
