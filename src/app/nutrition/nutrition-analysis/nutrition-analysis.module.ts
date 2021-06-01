import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { NutritionAnalysisRoutingModule } from './nutrition-analysis-routing.module';
import { NutritionDataComponent } from './components/nutrition-data/nutrition-data.component';
import { NutritionResultComponent } from './components/nutrition-result/nutrition-result.component';
import { NutritionAnalysisComponent } from './containers/nutrition-analysis/nutrition-analysis.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  

import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [NutritionDataComponent, NutritionResultComponent, NutritionAnalysisComponent],
  imports: [
    CommonModule,
    NutritionAnalysisRoutingModule,MatInputModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,MatButtonModule,HttpClientModule
  ]
})
export class NutritionAnalysisModule { }
