/*
 * MIT License
 *
 * Copyright (c) 2017-2018 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { environment } from '../environments/environment';

// import codemirror's modes
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';

// ********************** angular-modal-gallery *****************************
import { ModalGalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { COMPONENTS } from './pages/components';
import { AppComponent } from './app.component';

import { CodemirrorModule } from 'ng2-codemirror';
import { NgxPageScrollModule, PageScrollConfig } from 'ngx-page-scroll';

@NgModule({
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: environment.production
    // }),

    NgbModule.forRoot(), // forRoot ensures the providers are only created once

    CodemirrorModule,
    NgxPageScrollModule,
    ModalGalleryModule.forRoot(),
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

  constructor() {
    PageScrollConfig.defaultScrollOffset = 30;
    PageScrollConfig.defaultDuration = 200;
    PageScrollConfig.defaultInterruptible = false;
  }
}
