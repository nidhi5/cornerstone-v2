import { NgModule } from '@angular/core'; 
import { SurveyComponent } from './survey.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { CurrentSurveyComponent } from './current/survey';
import { ClosedSurveyComponent } from './closed/survey';
import { AddSurveyComponent } from './add/add';

@NgModule({
	imports : [ SharedModule, RouterModule.forChild([
			{
				path : '',
				component : SurveyComponent,
				children : [
					{
						path : 'current-poll',
						component : CurrentSurveyComponent
					},
					{
						path : 'closed-poll',
						component : ClosedSurveyComponent
					}
				]
			},
			{
				path : 'add-poll',
				component : AddSurveyComponent
			}
			
		])],
	declarations : [ AddSurveyComponent, SurveyComponent, CurrentSurveyComponent, ClosedSurveyComponent ]
}) 
export class SurveyModule {
	
}