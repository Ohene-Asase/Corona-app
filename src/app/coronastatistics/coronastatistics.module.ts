import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoronastatisticsRoutingModule } from './coronastatistics-routing.module';
import { CoronaStatsComponent } from './corona-stats/corona-stats.component';
import { MatCardModule } from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [CoronaStatsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CoronastatisticsRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule
  ]
})
export class CoronastatisticsModule { }
