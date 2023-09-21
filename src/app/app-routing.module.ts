import { CodignitorTechComponent } from './sb2_admin/pages/technologies/codignitor-tech/codignitor-tech.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sb2DashboardComponent } from './sb2_admin/sb2-dashboard/sb2-dashboard.component';
import { GeneralInterviewComponent } from './sb2_admin/pages/general-interview/general-interview.component';
import { OopsComponent } from './sb2_admin/pages/oops/oops.component';
import { DataStructureComponent } from './sb2_admin/pages/data-structure/data-structure.component';
import { LaravelComponent } from './sb2_admin/pages/technologies/laravel/laravel.component';
import { PhpComponent } from './sb2_admin/pages/technologies/php/php.component';
import { AngularTechComponent } from './sb2_admin/pages/technologies/angular-tech/angular-tech.component';
import { RxJsTechComponent } from './sb2_admin/pages/technologies/rx-js-tech/rx-js-tech.component';
import { TypescriptTechComponent } from './sb2_admin/pages/technologies/typescript-tech/typescript-tech.component';
import { JavascriptTechComponent } from './sb2_admin/pages/technologies/javascript-tech/javascript-tech.component';
import { JqueryTechComponent } from './sb2_admin/pages/technologies/jquery-tech/jquery-tech.component';
import { AwsTechComponent } from './sb2_admin/pages/technologies/aws-tech/aws-tech.component';
import { FirebaseTechComponent } from './sb2_admin/pages/technologies/firebase-tech/firebase-tech.component';
import { GitTechComponent } from './sb2_admin/pages/technologies/git-tech/git-tech.component';
import { AjaxTechComponent } from './sb2_admin/pages/technologies/ajax-tech/ajax-tech.component';
import { BootstrapTechComponent } from './sb2_admin/pages/technologies/bootstrap-tech/bootstrap-tech.component';
import { VueJsTechComponent } from './sb2_admin/pages/technologies/vue-js-tech/vue-js-tech.component';
import { ReactTechComponent } from './sb2_admin/pages/technologies/react-tech/react-tech.component';
import { LinkedListProblemComponent } from './sb2_admin/pages/problemSolving/linked-list-problem/linked-list-problem.component';
import { GraphProblemsComponent } from './sb2_admin/pages/problemSolving/graph-problems/graph-problems.component';
import { MatrixProblemsComponent } from './sb2_admin/pages/problemSolving/matrix-problems/matrix-problems.component';
import { BinaryTreeProblemsComponent } from './sb2_admin/pages/problemSolving/binary-tree-problems/binary-tree-problems.component';
import { ArrayProblemsComponent } from './sb2_admin/pages/problemSolving/array-problems/array-problems.component';
import { StringProblemsComponent } from './sb2_admin/pages/problemSolving/string-problems/string-problems.component';
import { LaravelCodeComponent } from './sb2_admin/pages/codingStandard/laravel-code/laravel-code.component';
import { AngularCodeComponent } from './sb2_admin/pages/codingStandard/angular-code/angular-code.component';
import { MysqlDbComponent } from './sb2_admin/pages/databases/mysql-db/mysql-db.component';
import { SqlPhpDbComponent } from './sb2_admin/pages/databases/sql-php-db/sql-php-db.component';
import { LaravelQueriesDbComponent } from './sb2_admin/pages/databases/laravel-queries-db/laravel-queries-db.component';
import { ExperienceInterviewComponent } from './sb2_admin/pages/experience-interview/experience-interview.component';
import { CvComponent } from './sb2_admin/pages/cv/cv.component';
import { LiveLinksComponent } from './sb2_admin/pages/live-links/live-links.component';
import { PortfolioComponent } from './sb2_admin/pages/portfolio/portfolio.component';
import { NotFoundComponent } from './sb2_admin/pages/not-found/not-found.component';
import { FinalInterviewComponent } from './sb2_admin/pages/final-interview/final-interview.component';
import { ApiTechComponent } from './sb2_admin/pages/technologies/api-tech/api-tech.component';
import { LifeStyleComponent } from './sb2_admin/pages/life-style/life-style.component';
import { BitSolComponent } from './sb2_admin/pages/companies/bit-sol/bit-sol.component';
import { JobHelpComponent } from './sb2_admin/pages/job-help/job-help.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/sb2_dashboard',
        pathMatch: 'full'
    },
    {
        path: 'sb2_dashboard',
        children: [
            {
                path: '',
                component: Sb2DashboardComponent
            },
            {
                path: 'general_interview',
                component: GeneralInterviewComponent
            },
            {
                path: 'oop_concepts',
                component: OopsComponent
            },
            {
                path: 'data_structure',
                component: DataStructureComponent
            },
            {
                path: 'job_help',
                component: JobHelpComponent
            },
            {
                path: 'technologies',
                children: [
                    {
                        path: 'laravel',
                        component: LaravelComponent
                    },
                    {
                        path: 'codignitor',
                        component: CodignitorTechComponent
                    },
                    {
                        path: 'api_concepts',
                        component: ApiTechComponent
                    },
                    {
                        path: 'php',
                        component: PhpComponent
                    },
                    {
                        path: 'angular',
                        component: AngularTechComponent
                    },
                    {
                        path: 'rxjs',
                        component: RxJsTechComponent
                    },
                    {
                        path: 'typescript',
                        component: TypescriptTechComponent
                    },
                    {
                        path: 'javascript',
                        component: JavascriptTechComponent
                    },
                    {
                        path: 'jquery',
                        component: JqueryTechComponent
                    },
                    {
                        path: 'react',
                        component: ReactTechComponent
                    },
                    {
                        path: 'vue_js',
                        component: VueJsTechComponent
                    },
                    {
                        path: 'bootstrap',
                        component: BootstrapTechComponent
                    },
                    {
                        path: 'ajax',
                        component: AjaxTechComponent
                    },
                    {
                        path: 'git',
                        component: GitTechComponent
                    },
                    {
                        path: 'firebase',
                        component: FirebaseTechComponent
                    },
                    {
                        path: 'aws',
                        component: AwsTechComponent
                    },

                ]
            },
            {
                path: 'companies',
                children: [
                    {
                        path: 'bit_sol',
                        component: BitSolComponent
                    },

                ]
            },

            {
                path: 'problem_solving',
                children: [
                    {
                        path: 'string',
                        component: StringProblemsComponent
                    },
                    {
                        path: 'array',
                        component: ArrayProblemsComponent
                    },
                    {
                        path: 'binary_tree',
                        component: BinaryTreeProblemsComponent
                    },
                    {
                        path: 'linked_list',
                        component: LinkedListProblemComponent
                    },
                    {
                        path: 'graph',
                        component: GraphProblemsComponent
                    },
                    {
                        path: 'matrix',
                        component: MatrixProblemsComponent
                    },

                ]
            },
            {
                path: 'coding_standard',
                children: [
                    {
                        path: 'laravel',
                        component: LaravelCodeComponent
                    },
                    {
                        path: 'angular',
                        component: AngularCodeComponent
                    },

                ]
            },
            {
                path: 'databases',
                children: [
                    {
                        path: 'mysql',
                        component: MysqlDbComponent
                    },
                    {
                        path: 'sql',
                        component: SqlPhpDbComponent
                    },
                    {
                        path: 'laravel_queries',
                        component: LaravelQueriesDbComponent
                    },

                ]
            },
            {
                path: 'experience_interview',
                component: ExperienceInterviewComponent
            },
            {
                path: 'live_links',
                component: LiveLinksComponent
            },
            {
                path: 'final_interview',
                component: FinalInterviewComponent
            },
            {
                path: 'cv',
                component: CvComponent
            },
            {
                path: 'portfolio',
                component: PortfolioComponent
            },
            {
                path: 'life_style',
                component: LifeStyleComponent
            },

        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
