import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { NutritionServices } from '../../services/nutrition.services';
import { Router } from '@angular/router';
import { NutritionResultComponent } from '../nutrition-result/nutrition-result.component';
import { DataServices } from '../../services/data.services';

@Component({
  selector: 'app-nutrition-data',
  templateUrl: './nutrition-data.component.html',
  styleUrls: ['./nutrition-data.component.scss']
})
export class NutritionDataComponent implements OnInit {
  replace: any;
  res: any;
  food: any;
  result: any;


  ingredients: any;
  headerIngr: any;
  totalNutritionTable: boolean=false;


  


  constructor(private fb: FormBuilder, private nutritionServices: NutritionServices, 
    private router: Router ,private dataServices:DataServices) { }

  nutritionForm: FormGroup = this.fb.group({
    title: new FormControl(null),
    ingr: new FormControl(null),
  });

  ngOnInit(): void {
    this.nutritionForm = new FormGroup({

      title: new FormControl(null),
      ingr: new FormControl(null),

    });
    
  }
  onclickAnalysis() {
    let body: any = { ingr: [] };
    this.replace = this.nutritionForm.value["ingr"].split(",")
    for (let i = 0; i < this.replace.length; i++) {
      body.ingr.push(
        this.replace[i].replace("/n", '')
      )
    }

    this.nutritionServices.postNutritionAnalysis(body).subscribe(res => {
      this.res = res;
      this.dataServices.sendFoodData(res);

     
    })
   this.router.navigate(["/home/result"])

  }

}
