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
import { ViewChildComponent } from './view-child/view-child.component';
import { NgxsComponent } from './ngxs/ngxs.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { NestedReactiveFormComponent } from './nested-reactive-form/nested-reactive-form.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { TapComponent } from './tap/tap.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';

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
    {path:'interview',component: InterviewTestComponent},
    {path:'view_child',component:ViewChildComponent},
    {path:'ngxs',component:NgxsComponent},
    {path:'change_detect',component:ChangeDetectionComponent},
    {path: 'async_pipe',component: AsyncPipeComponent},
    {path: 'nested_reactive_form',component: NestedReactiveFormComponent},
    {path: 'view_encapsulation',component: ViewEncapsulationComponent},
    {path:'merge_map',component: MergeMapComponent},
    {path:'tap',component: TapComponent},
    {path: 'exhaust_map',component: ExhaustMapComponent}
];
