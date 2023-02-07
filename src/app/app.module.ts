import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import{ReactiveFormsModule}from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { CoustomvalidformComponent } from './coustomvalidform/coustomvalidform.component';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { TempconPipe } from './tempcon.pipe';
import { PowerExPipe } from './power-ex.pipe';
import { PipePowerComponent } from './pipe-power/pipe-power.component';
import { ServicesComponent } from './services/services.component';

const routes:Routes=
[{path:"R" , component:ReactiveformComponent},
{path:"C" , component:CoustomvalidformComponent},
{path:"T" , component:TemplateformComponent},
{path:"P1" , component:PipeExComponent},
{path:"P2" , component:PipePowerComponent},
{path:"H" , component:AppComponent},
{path:"S",component:ServicesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    TemplateformComponent,
    CoustomvalidformComponent,
    PipeExComponent,
    TempconPipe,
    PowerExPipe,
    PipePowerComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
