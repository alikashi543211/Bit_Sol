import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { Sb2TopbarComponent } from './sb2_admin/layouts/sb2-topbar/sb2-topbar.component';
import { Sb2FooterComponent } from './sb2_admin/layouts/sb2-footer/sb2-footer.component';
import { Sb2DashboardComponent } from './sb2_admin/sb2-dashboard/sb2-dashboard.component';
import { Sb2SidebarComponent } from './sb2_admin/layouts/sb2-sidebar/sb2-sidebar.component';
import { GeneralInterviewComponent } from './sb2_admin/pages/general-interview/general-interview.component';
import { OopsComponent } from './sb2_admin/pages/oops/oops.component';
import { DataStructureComponent } from './sb2_admin/pages/data-structure/data-structure.component';
import { ExperienceInterviewComponent } from './sb2_admin/pages/experience-interview/experience-interview.component';
import { LiveLinksComponent } from './sb2_admin/pages/live-links/live-links.component';
import { CvComponent } from './sb2_admin/pages/cv/cv.component';
import { PortfolioComponent } from './sb2_admin/pages/portfolio/portfolio.component';
import { LaravelComponent } from './sb2_admin/pages/technologies/laravel/laravel.component';
import { PhpComponent } from './sb2_admin/pages/technologies/php/php.component';
import { AngularTechComponent } from './sb2_admin/pages/technologies/angular-tech/angular-tech.component';
import { RxJsTechComponent } from './sb2_admin/pages/technologies/rx-js-tech/rx-js-tech.component';
import { TypescriptTechComponent } from './sb2_admin/pages/technologies/typescript-tech/typescript-tech.component';
import { JavascriptTechComponent } from './sb2_admin/pages/technologies/javascript-tech/javascript-tech.component';
import { JqueryTechComponent } from './sb2_admin/pages/technologies/jquery-tech/jquery-tech.component';
import { AjaxTechComponent } from './sb2_admin/pages/technologies/ajax-tech/ajax-tech.component';
import { VueJsTechComponent } from './sb2_admin/pages/technologies/vue-js-tech/vue-js-tech.component';
import { ReactTechComponent } from './sb2_admin/pages/technologies/react-tech/react-tech.component';
import { BootstrapTechComponent } from './sb2_admin/pages/technologies/bootstrap-tech/bootstrap-tech.component';
import { GitTechComponent } from './sb2_admin/pages/technologies/git-tech/git-tech.component';
import { FirebaseTechComponent } from './sb2_admin/pages/technologies/firebase-tech/firebase-tech.component';
import { ArrayProblemsComponent } from './sb2_admin/pages/problemSolving/array-problems/array-problems.component';
import { StringProblemsComponent } from './sb2_admin/pages/problemSolving/string-problems/string-problems.component';
import { BinaryTreeProblemsComponent } from './sb2_admin/pages/problemSolving/binary-tree-problems/binary-tree-problems.component';
import { GraphProblemsComponent } from './sb2_admin/pages/problemSolving/graph-problems/graph-problems.component';
import { LaravelCodeComponent } from './sb2_admin/pages/codingStandard/laravel-code/laravel-code.component';
import { AngularCodeComponent } from './sb2_admin/pages/codingStandard/angular-code/angular-code.component';
import { MysqlDbComponent } from './sb2_admin/pages/databases/mysql-db/mysql-db.component';
import { SqlPhpDbComponent } from './sb2_admin/pages/databases/sql-php-db/sql-php-db.component';
import { LaravelQueriesDbComponent } from './sb2_admin/pages/databases/laravel-queries-db/laravel-queries-db.component';
import { FinalInterviewComponent } from './sb2_admin/pages/final-interview/final-interview.component';
import { AwsTechComponent } from './sb2_admin/pages/technologies/aws-tech/aws-tech.component';
import { LinkedListProblemComponent } from './sb2_admin/pages/problemSolving/linked-list-problem/linked-list-problem.component';
import { MatrixProblemsComponent } from './sb2_admin/pages/problemSolving/matrix-problems/matrix-problems.component';
import { NotFoundComponent } from './sb2_admin/pages/not-found/not-found.component';
import { ApiTechComponent } from './sb2_admin/pages/technologies/api-tech/api-tech.component';
import { LifeStyleComponent } from './sb2_admin/pages/life-style/life-style.component';
import { CodignitorTechComponent } from './sb2_admin/pages/technologies/codignitor-tech/codignitor-tech.component';
import { BitSolComponent } from './sb2_admin/pages/companies/bit-sol/bit-sol.component';
import { JobHelpComponent } from './sb2_admin/pages/job-help/job-help.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        SpecialEventsComponent,
        ProfileComponent,
        Sb2TopbarComponent,
        Sb2FooterComponent,
        Sb2DashboardComponent,
        Sb2SidebarComponent,
        GeneralInterviewComponent,
        OopsComponent,
        DataStructureComponent,
        ExperienceInterviewComponent,
        LiveLinksComponent,
        CvComponent,
        PortfolioComponent,
        LaravelComponent,
        PhpComponent,
        AngularTechComponent,
        RxJsTechComponent,
        TypescriptTechComponent,
        JavascriptTechComponent,
        JqueryTechComponent,
        AjaxTechComponent,
        VueJsTechComponent,
        ReactTechComponent,
        BootstrapTechComponent,
        GitTechComponent,
        FirebaseTechComponent,
        ArrayProblemsComponent,
        StringProblemsComponent,
        BinaryTreeProblemsComponent,
        GraphProblemsComponent,
        LaravelCodeComponent,
        AngularCodeComponent,
        MysqlDbComponent,
        SqlPhpDbComponent,
        LaravelQueriesDbComponent,
        FinalInterviewComponent,
        AwsTechComponent,
        LinkedListProblemComponent,
        MatrixProblemsComponent,
        NotFoundComponent,
        ApiTechComponent,
        LifeStyleComponent,
        CodignitorTechComponent,
        BitSolComponent,
        JobHelpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
