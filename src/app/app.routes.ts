import { Routes } from '@angular/router';
import { ShareDataInSiblingComponent } from './share-data-in-sibling/share-data-in-sibling.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ArrayLogicComponent } from './array-logic/array-logic.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { OnDestroyComponent } from './on-destroy/on-destroy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeferComponent } from './defer/defer.component';
import { PatchValueComponent } from './patch-value/patch-value.component';
import { TestComponent } from './test/test.component';
import { InterviewTestComponent } from './interview-test/interview-test.component';

export const routes: Routes = [

    {path: 'shared_data_in_sibling',component: ShareDataInSiblingComponent},
    {path: 'parent_to_child',component: ParentToChildComponent},
    {path:'child_to_parent',component:ChildToParentComponent},
    {path: 'form_array',component:FormArrayComponent},
    {path: 'simple_reactive_form',component: SimpleReactiveFormComponent},
    {path: 'highlight_directive',component: HighlightComponent},
    {path:'array_logic',component: ArrayLogicComponent},
    {path: 'template_form',component:TemplateDrivenFormComponent},
    {path:'on_destroy',component: OnDestroyComponent},
    {path:'dashboard',component: DashboardComponent},
    {path:'defer',component:DeferComponent},
    {path: 'patch_value',component: PatchValueComponent},
    {path:'test',component: TestComponent},
    {path:'interview',component: InterviewTestComponent}
];
