import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const materialDesignModules = [MatSlideToggleModule];

@NgModule({
  imports: materialDesignModules,
  exports: materialDesignModules,
})
export class MaterialModule {}
