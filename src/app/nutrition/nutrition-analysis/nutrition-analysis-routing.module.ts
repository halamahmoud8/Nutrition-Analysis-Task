import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NutritionAnalysisComponent } from './containers/nutrition-analysis/nutrition-analysis.component';
import { NutritionResultComponent } from './components/nutrition-result/nutrition-result.component';

const routes: Routes = [
  { path: '', component: NutritionAnalysisComponent },
 { path: 'result', component: NutritionResultComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionAnalysisRoutingModule { }
