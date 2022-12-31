import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialDesignModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: materialDesignModules,
  exports: materialDesignModules,
})
export class MaterialModule {}
