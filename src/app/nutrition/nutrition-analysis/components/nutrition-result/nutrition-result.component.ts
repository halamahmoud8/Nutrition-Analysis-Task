import { Component, OnInit } from '@angular/core';
import { DataServices } from '../../services/data.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition-result',
  templateUrl: './nutrition-result.component.html',
  styleUrls: ['./nutrition-result.component.scss']
})
export class NutritionResultComponent implements OnInit {
  replace: any;
  res: any;
  food: any;
  result: any;
  fatLabel: any;
  fatQuantity: any;
  totalCalory: any;
  fatUnit: any;
  fatpercentage: any;
  fatpercentageUnit: any;
  standardLabel: any
  fatStandardQuantity: any
  fatStandardUnit: any;
  fatStandardpercentage: any
  fatStandardpercentageUnit: any
  CholesterolQuantity: any;
  CholesterolUnit: any;
  Cholesterolpercentage: any;
  CholesterolpercentageUnit: any;
  sodiumQuantity: any;
  sodiumUnit: any;
  sodiumpercentage: any;
  sodiumpercentageUnit: any;
  ingredients: any;
  headerIngr: any;
  calcUnit: any;
  totalNutritionTable: boolean=false;
  CarbohydrateQuantity:any;
  CarbohydrateUnit:any;
  Carbohydratepercentage:any;
  CarbohydratepercentageUnit:any;
  FiberQuantity:any;
  FiberUnit:any;
  Fiberpercentage:any
  FiberpercentageUnit:any;
  SugarsQuantity:any;
  SugarsUnit:any;
  Sugarspercentage:any;
  SugarspercentageUnit:any;
  ProteinQuantity:any;
  ProteinUnit:any;
  Proteinpercentage:any;
  ProteinpercentageUnit:any;
  VitaminQuantity:any;
  VitaminUnit:any;
  Vitaminpercentage:any;
  VitaminpercentageUnit:any;
  CalciumQuantity:any;
  CalciumUnit:any;
  Calciumpercentage:any;
  CalciumpercentageUnit:any;
  IronQuantity:any;
  IronUnit:any;
  Ironpercentage:any;
  IronpercentageUnit:any;
  PotassiumQuantity:any;
  PotassiumUnit:any;
  Potassiumpercentage:any;
  PotassiumpercentageUnit:any
  constructor(private dataServices:DataServices,private router: Router) { }
  total() {
    this.totalNutritionTable = true;

  }
  return(){
    this.router.navigate(["/home"])

  }
  ngOnInit(): void {
    this.dataServices.foodData$.subscribe(res=>{
      this.res = res;
      this.headerIngr = [];
      for (let i = 0; i < this.res.ingredients.length; i++) {
        this.ingredients = this.res.ingredients[i].parsed;
        for (let data of this.ingredients) {
          this.headerIngr.push({
            quantityData: data.quantity,
            measureData: data.measure,
            foodData: data.foodMatch,
            weightData: data.weight,
            calc: data.nutrients.ENERC_KCAL.quantity,
            calcUnit: data.nutrients.ENERC_KCAL.unit


          });
        }
      }


      this.totalCalory = res.calories
      this.fatLabel = res.totalNutrients.FAT?.label;
      this.fatQuantity = res.totalNutrients.FAT?.quantity
      this.fatUnit = res.totalNutrients.FAT?.unit
      this.fatpercentage = res.totalDaily.FAT?.quantity
      this.fatpercentageUnit = res.totalDaily.FAT?.unit

      this.fatUnit = res.totalNutrients.FAT?.unit
      this.standardLabel = res.totalNutrients.FASAT?.label;

      this.fatStandardQuantity = res.totalNutrients.FASAT?.quantity
      this.fatStandardUnit = res.totalNutrients.FASAT?.unit
      this.fatStandardpercentage = res.totalDaily.FASAT?.quantity
      this.fatStandardpercentageUnit = res.totalDaily.FASAT?.unit

      this.CholesterolQuantity = res.totalNutrients.CHOLE?.quantity
      this.CholesterolUnit = res.totalNutrients.CHOLE?.unit
      this.Cholesterolpercentage = res.totalDaily.CHOLE?.quantity
      this.CholesterolpercentageUnit = res.totalDaily.CHOLE?.unit

      this.sodiumQuantity = res.totalNutrients.NA?.quantity
      this.sodiumUnit = res.totalNutrients.NA?.unit
      this.sodiumpercentage = res.totalDaily.NA?.quantity
      this.sodiumpercentageUnit = res.totalDaily.NA?.unit

      this.CarbohydrateQuantity = res.totalNutrients.CHOCDF?.quantity
      this.CarbohydrateUnit = res.totalNutrients.CHOCDF?.unit
      this.Carbohydratepercentage = res.totalDaily.CHOCDF?.quantity
      this.CarbohydratepercentageUnit = res.totalDaily.CHOCDF?.unit

      this.FiberQuantity = res.totalNutrients.FIBTG?.quantity
      this.FiberUnit = res.totalNutrients.FIBTG?.unit
      this.Fiberpercentage = res.totalDaily.FIBTG?.quantity
      this.FiberpercentageUnit = res.totalDaily.FIBTG?.unit

      this.SugarsQuantity = res.totalNutrients.SUGAR?.quantity
      this.SugarsUnit = res.totalNutrients.SUGAR?.unit
      this.Sugarspercentage = res.totalDaily.SUGAR?.quantity
      this.SugarspercentageUnit = res.totalDaily.SUGAR?.unit

      this.ProteinQuantity = res.totalNutrients.PROCNT?.quantity
      this.ProteinUnit = res.totalNutrients.PROCNT?.unit
      this.Proteinpercentage = res.totalDaily.PROCNT?.quantity
      this.ProteinpercentageUnit = res.totalDaily.PROCNT?.unit

      this.VitaminQuantity = res.totalNutrients.VITD?.quantity
      this.VitaminUnit = res.totalNutrients.VITD?.unit
      this.Vitaminpercentage = res.totalDaily.VITD?.quantity
      this.VitaminpercentageUnit = res.totalDaily.VITD?.unit


      this.CalciumQuantity = res.totalNutrients.CA?.quantity
      this.CalciumUnit = res.totalNutrients.CA?.unit
      this.Calciumpercentage = res.totalDaily.CA?.quantity
      this.CalciumpercentageUnit = res.totalDaily.CA?.unit

      this.IronQuantity = res.totalNutrients.FE?.quantity
      this.IronUnit = res.totalNutrients.FE?.unit
      this.Ironpercentage = res.totalDaily.FE?.quantity
      this.IronpercentageUnit = res.totalDaily.FE?.unit



      this.PotassiumQuantity = res.totalNutrients.K?.quantity
      this.PotassiumUnit = res.totalNutrients.K?.unit
      this.Potassiumpercentage = res.totalDaily.K?.quantity
      this.PotassiumpercentageUnit = res.totalDaily.K?.unit
    }

    )

  }

}
