import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),
     provideAnimations(),
    importProvidersFrom(
      ToastrModule.forRoot({
          timeOut: 3000,
        closeButton:true,
        toastClass: 'ngx-toastr px-4 py-2 shadow rounded-3 custom-toast shadow border-transparent',
        preventDuplicates: true,
      })
    )
  ]
};
