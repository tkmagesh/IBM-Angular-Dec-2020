import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';

import { BugStatsComponent } from './bugTracker/components/bugStats.component';
import { BugEditComponent} from './bugTracker/components/bugEdit.component';


@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [ BugOperationsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
