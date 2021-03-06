import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { AuthGuard } from './AuthGuard';
// import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

@NgModule({
		declarations : [AppComponent],

	imports : [  BrowserModule, RouterModule.forRoot([
		{
			path : '',
			redirectTo : '',
			pathMatch : 'full'
		},
		{
			path : 'login',
			loadChildren : 'app/component/login/login.module#LoginModule'
		},
		{
			path : '',
			loadChildren : 'app/component/main/main.module#MainModule' , canActivate : [AuthGuard]
		}
	], { useHash: true }) ],
	exports: [],
	bootstrap : [AppComponent],
	providers : [AuthGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule{

}
